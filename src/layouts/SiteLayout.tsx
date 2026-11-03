import { Outlet } from "react-router-dom";
import { ScrollProgress } from "../components/ScrollProgress";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
