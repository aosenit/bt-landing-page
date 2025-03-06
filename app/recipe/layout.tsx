import type React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="dark" />
      <main className="pt-[128px] min-h-screen bg-gray-300/10">{children}</main>
      <Footer />
    </div>
  );
}
