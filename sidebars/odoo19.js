const {generateVersionSidebar} = require('./generateVersionSidebar');

module.exports = {
  odoo19Sidebar: [...generateVersionSidebar(19)],
};
