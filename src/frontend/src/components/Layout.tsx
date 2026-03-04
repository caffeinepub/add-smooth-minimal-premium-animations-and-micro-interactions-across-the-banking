import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "@tanstack/react-router";
import type React from "react";
import EmergencySecurityButton from "./EmergencySecurityButton";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <main style={{ flex: 1, paddingTop: "68px" }}>
        <Outlet />
      </main>
      <Footer />
      <EmergencySecurityButton />
      <Toaster />
    </div>
  );
};

export default Layout;
