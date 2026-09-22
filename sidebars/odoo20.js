const {generateVersionSidebar} = require('./generateVersionSidebar');

module.exports = {
  odoo20Sidebar: [...generateVersionSidebar(20)],
};
