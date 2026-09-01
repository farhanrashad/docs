import React, {useEffect, useState} from 'react';

export default function VersionUnavailableNotice() {
  const [moduleName, setModuleName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setModuleName(params.get('unavailable'));
  }, []);

  if (!moduleName) {
    return null;
  }

  return (
    <div className="unavailable-notice" role="status">
      <strong>{moduleName}</strong> is not published for this Odoo version yet. You are viewing the version home page.
    </div>
  );
}
