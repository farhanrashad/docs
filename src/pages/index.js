import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Dynexcel Documentation" description="Dynexcel product and Odoo documentation">
      <main className="landing-page">
        <div className="landing-page__content">
          <p className="landing-page__eyebrow">Dynexcel Documentation</p>
          <h1>Documentation for Dynexcel solutions</h1>
          <p className="landing-page__intro">
            Explore practical guides, configuration instructions, workflows, and technical references
            for Dynexcel products.
          </p>
          <Link className="button button--primary button--lg" to="/odoo/20/">
            Odoo Documentation
          </Link>
          <p className="landing-page__supporting-link">
            <Link to="/odoo/">View all Odoo versions</Link>
          </p>
        </div>
      </main>
    </Layout>
  );
}
