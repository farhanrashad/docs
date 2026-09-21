const path = require('path');
const {buildDirectoryItem, generateVersionSidebar} = require('./generateVersionSidebar');

const versionRoot = path.join(__dirname, '..', 'docs', 'odoo', '19');
const chatgptMcpDirectory = path.join(versionRoot, 'dx_chatgpt_mcp');

module.exports = {
  odoo19Sidebar: [
    ...generateVersionSidebar(19, {excludedPaths: ['dx_chatgpt_mcp']}),
    {
      type: 'category',
      label: 'Modules',
      items: [buildDirectoryItem(chatgptMcpDirectory, versionRoot)],
    },
  ],
};
