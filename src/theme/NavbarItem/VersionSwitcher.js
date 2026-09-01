import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

const versions = ['19', '18'];

function getVersion(pathname) {
  const match = pathname.match(/^\/odoo\/(18|19)(?:\/|$)/);
  return match ? match[1] : '19';
}

function getTargetPath(pathname, targetVersion) {
  const match = pathname.match(/^\/odoo\/(18|19)(\/.*)?$/);
  if (!match || !match[2] || match[2] === '/') {
    return `/odoo/${targetVersion}/`;
  }

  const currentRest = match[2];
  const knownPaths = {
    '18': [
      '/hr-workforce/',
      '/hr-workforce/dx_workforce_operations/',
      '/hr-workforce/dx_workforce_shift_planning/',
      '/hr-workforce/dx_workforce_shift_attendance_link/',
      '/hr-workforce/dx_workforce_overtime/',
      '/hr-workforce/dx_workforce_wage/',
      '/hr-workforce/dx_workforce_deductions/',
      '/hr-workforce/dx_workforce_contractor/',
      '/hr-workforce/dx_workforce_final_settlement/',
      '/hr-workforce/dx_workforce_leave_encashment/',
      '/hr-workforce/dx_workforce_overtime_leave_balance/',
      '/hr-workforce/dx_workforce_employee_self_service/',
      '/hr-workforce/dx_workforce_operations/workforce-operations/',
      '/hr-workforce/dx_workforce_operations/shift-planning/',
      '/hr-workforce/dx_workforce_operations/shift-attendance-link/',
      '/hr-workforce/dx_workforce_operations/overtime/',
      '/hr-workforce/dx_workforce_operations/wage/',
      '/hr-workforce/dx_workforce_operations/deductions/',
      '/hr-workforce/dx_workforce_operations/contractor/',
      '/hr-workforce/dx_workforce_operations/final-settlement/',
      '/hr-workforce/dx_workforce_operations/leave-encashment/',
      '/hr-workforce/dx_workforce_operations/overtime-leave-balance/',
      '/hr-workforce/dx_workforce_operations/employee-self-service/',
      '/integrations/de_zkteco_attend/',
      '/integrations/de_zkteco_attend/installation/',
      '/integrations/de_zkteco_attend/configuration/',
      '/integrations/de_zkteco_attend/workflow/',
      '/integrations/de_zkteco_attend/architecture/',
    ],
    '19': [],
  };
  const targetExists = knownPaths[targetVersion].includes(currentRest);
  if (targetExists) {
    return `/odoo/${targetVersion}${currentRest}`;
  }

  const moduleName = currentRest.split('/').filter(Boolean)[1] || 'module';
  return `/odoo/${targetVersion}/?unavailable=${encodeURIComponent(moduleName)}`;
}

export default function VersionSwitcher() {
  const location = useLocation();
  const baseUrl = useBaseUrl('/');
  const currentVersion = getVersion(location.pathname);

  return (
    <div className="navbar__item version-switcher">
      <span className="version-switcher__label">Version</span>
      <select
        aria-label="Select Odoo documentation version"
        value={currentVersion}
        onChange={(event) => {
          window.location.assign(`${baseUrl.replace(/\/$/, '')}${getTargetPath(location.pathname, event.target.value)}`);
        }}>
        {versions.map((version) => (
          <option key={version} value={version}>Odoo {version}</option>
        ))}
      </select>
      <Link className="version-switcher__fallback" to={getTargetPath(location.pathname, currentVersion)} aria-label={`Odoo ${currentVersion}`}>
        Odoo {currentVersion}
      </Link>
    </div>
  );
}
