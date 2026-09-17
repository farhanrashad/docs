const {generateVersionSidebar} = require('./generateVersionSidebar');

module.exports = {
  odoo19Sidebar: [
    ...generateVersionSidebar(19),
    {
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: 'doc',
          id: 'module-not-available',
          label: 'No Odoo 19 modules published yet',
        },
      ],
    },
  ],
};
