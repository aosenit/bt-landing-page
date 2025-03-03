import type React from "react";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="container mx-auto py-8 px-4">{children}</div>;
}
