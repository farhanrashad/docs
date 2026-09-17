const fs = require('fs');
const path = require('path');

function unquote(value) {
  return value.replace(/^['"]|['"]$/g, '').trim();
}

function readDocMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const metadata = {};
  const frontMatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (frontMatter) {
    for (const line of frontMatter[1].split(/\r?\n/)) {
      const match = line.match(/^([\w-]+):\s*(.+)$/);
      if (match) {
        metadata[match[1]] = unquote(match[2]);
      }
    }
  }

  if (!metadata.title) {
    const heading = content.match(/^#\s+(.+)$/m);
    metadata.title = heading ? heading[1].trim() : path.basename(path.dirname(filePath));
  }

  return metadata;
}

function labelForDirectory(directoryName) {
  return directoryName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function docId(versionRoot, filePath) {
  return path
    .relative(versionRoot, filePath)
    .replace(/\\/g, '/')
    .replace(/\.md$/, '');
}

function sidebarLabel(filePath, fallback) {
  const metadata = readDocMetadata(filePath);
  return metadata.sidebar_label || metadata.sidebarLabel || metadata.title || fallback;
}

function sidebarPosition(filePath) {
  const metadata = readDocMetadata(filePath);
  const position = Number(metadata.sidebar_position || metadata.sidebarPosition);
  return Number.isFinite(position) ? position : Number.MAX_SAFE_INTEGER;
}

function sortItems(items) {
  return items
    .sort((left, right) => {
      const positionDifference = left.sidebarPosition - right.sidebarPosition;
      if (positionDifference !== 0) {
        return positionDifference;
      }
      return left.sortLabel.localeCompare(right.sortLabel);
    })
    .map(({value}) => value);
}

function buildDirectoryItem(directoryPath, versionRoot) {
  const directoryName = path.basename(directoryPath);
  const indexPath = path.join(directoryPath, 'index.md');
  const children = [];

  for (const entry of fs.readdirSync(directoryPath, {withFileTypes: true})) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      const childIndexPath = path.join(entryPath, 'index.md');
      children.push({
        value: buildDirectoryItem(entryPath, versionRoot),
        sortLabel: entry.name,
        sidebarPosition: fs.existsSync(childIndexPath)
          ? sidebarPosition(childIndexPath)
          : Number.MAX_SAFE_INTEGER,
      });
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      children.push({
        value: {
          type: 'doc',
          id: docId(versionRoot, entryPath),
          label: sidebarLabel(entryPath, entry.name.replace(/\.md$/, '')),
        },
        sortLabel: entry.name,
        sidebarPosition: sidebarPosition(entryPath),
      });
    }
  }

  const sortedChildren = sortItems(children);
  const label = fs.existsSync(indexPath)
    ? sidebarLabel(indexPath, directoryName)
    : labelForDirectory(directoryName);

  if (!fs.existsSync(indexPath)) {
    return {
      type: 'category',
      label,
      collapsed: directoryName !== 'integrations',
      items: sortedChildren,
    };
  }

  const indexItem = {
    type: 'doc',
    id: docId(versionRoot, indexPath),
    label,
  };

  if (!sortedChildren.length) {
    return indexItem;
  }

  return {
    type: 'category',
    label,
    collapsed: directoryName !== 'integrations',
    link: {type: 'doc', id: indexItem.id},
    items: sortedChildren,
  };
}

function generateVersionSidebar(version) {
  const versionRoot = path.join(__dirname, '..', 'docs', 'odoo', String(version));
  const rootIndex = path.join(versionRoot, 'index.md');
  const items = [
    {
      value: {
        type: 'doc',
        id: docId(versionRoot, rootIndex),
        label: sidebarLabel(rootIndex, `Odoo ${version} Home`),
      },
      sortLabel: 'index',
      sidebarPosition: -1,
    },
  ];

  for (const entry of fs.readdirSync(versionRoot, {withFileTypes: true})) {
    if (!entry.isDirectory()) {
      continue;
    }

    const directoryPath = path.join(versionRoot, entry.name);
    const indexPath = path.join(directoryPath, 'index.md');
    items.push({
      value: buildDirectoryItem(directoryPath, versionRoot),
      sortLabel: entry.name,
      sidebarPosition: fs.existsSync(indexPath) ? sidebarPosition(indexPath) : Number.MAX_SAFE_INTEGER,
    });
  }

  return sortItems(items);
}

module.exports = {generateVersionSidebar};
