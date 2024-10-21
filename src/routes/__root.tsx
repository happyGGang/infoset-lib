import * as React from 'react';
import Navigation from '../components/navigation';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from '../components/layout';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Layout>
      <Navigation />
      <Outlet />
    </Layout>
  );
}
