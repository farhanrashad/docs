module.exports = {
  odoo18Sidebar: [
    'index',
    {
      type: 'category',
      label: 'HR & Workforce',
      link: {
        type: 'doc',
        id: 'hr-workforce/index',
      },
      items: [
        {
          type: 'category',
          label: 'Workforce Operations',
          link: {
            type: 'doc',
            id: 'hr-workforce/dx_workforce_operations/index',
          },
          items: [
            'hr-workforce/dx_workforce_operations/workforce-operations',
          ],
        },
        'hr-workforce/dx_workforce_shift_planning/index',
        'hr-workforce/dx_workforce_shift_attendance_link/index',
        'hr-workforce/dx_workforce_overtime/index',
        'hr-workforce/dx_workforce_wage/index',
        'hr-workforce/dx_workforce_deductions/index',
        'hr-workforce/dx_workforce_contractor/index',
        'hr-workforce/dx_workforce_final_settlement/index',
        'hr-workforce/dx_workforce_leave_encashment/index',
        'hr-workforce/dx_workforce_overtime_leave_balance/index',
        'hr-workforce/dx_workforce_employee_self_service/index',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'ZKTeco Biometric Attendance',
          link: {
            type: 'doc',
            id: 'integrations/de_zkteco_attend/index',
          },
          items: [
            'integrations/de_zkteco_attend/installation',
            'integrations/de_zkteco_attend/configuration',
            'integrations/de_zkteco_attend/workflow',
            'integrations/de_zkteco_attend/architecture',
          ],
        },
      ],
    },
  ],
};
