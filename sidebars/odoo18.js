const path = require('path');
const {buildDirectoryItem, generateVersionSidebar} = require('./generateVersionSidebar');

const versionRoot = path.join(__dirname, '..', 'docs', 'odoo', '18');
const zktecoDirectory = path.join(versionRoot, 'integrations', 'de_zkteco_attend');

module.exports = {
  odoo18Sidebar: [
    ...generateVersionSidebar(18, {
      excludedPaths: ['integrations/de_zkteco_attend'],
    }),
    {
      type: 'category',
      label: 'Attendance Integrations',
      items: [buildDirectoryItem(zktecoDirectory, versionRoot)],
    },
  ],
};
