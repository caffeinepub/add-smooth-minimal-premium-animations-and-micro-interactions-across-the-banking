import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import EmergencySecurityButton from './EmergencySecurityButton';
import { Toaster } from '@/components/ui/sonner';

const Layout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: '68px' }}>
        <Outlet />
      </main>
      <Footer />
      <EmergencySecurityButton />
      <Toaster />
    </div>
  );
};

export default Layout;
