import NavBar from "@/components/shared/NavBar/NavBar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full bg-[#003be2] bg-hero-grid min-h-screen overflow-x-hidden flex flex-col">
      {/* 1. Header / Navigation */}
      <NavBar className="relative z-50" />
      <div className="w-full flex-1">{children}</div>
    </div>
  );
};

export default layout;
