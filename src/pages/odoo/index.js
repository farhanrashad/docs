import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const versions = [
  {
    version: '20.0',
    path: '/odoo/20/',
    description: 'Version-specific documentation for Odoo 20 Community solutions.',
    latest: true,
  },
  {
    version: '19.0',
    path: '/odoo/19/',
    description: 'Module guides, integrations, workflows, and technical references for Odoo 19.',
  },
  {
    version: '18.0',
    path: '/odoo/18/',
    description: 'Module guides, integrations, workflows, screenshots, and configuration guidance for Odoo 18.',
  },
];

export default function OdooVersions() {
  return (
    <Layout title="Odoo Documentation" description="Choose an available Odoo documentation version">
      <main className="version-page">
        <div className="version-page__content">
          <p className="landing-page__eyebrow">Dynexcel Documentation</p>
          <h1>Odoo Documentation</h1>
          <p className="landing-page__intro">
            Select the Odoo version you are using to open its dedicated documentation.
          </p>

          <div className="version-card-grid">
            {versions.map(({version, path, description, latest}) => (
              <Link className="version-card" key={version} to={path}>
                {latest && <span className="version-card__badge">Latest</span>}
                <h2>Odoo {version}</h2>
                <p>{description}</p>
                <span className="version-card__action">Open documentation →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
