import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./i18n/context";
import { SiteLayout } from "./layouts/SiteLayout";
import { AboutPage, PrivacyPage, ResponsibleUsePage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { IndustryPage } from "./pages/IndustryPage";
import { PlatformPage } from "./pages/PlatformPage";
import { RequestPage } from "./pages/RequestPage";
import { SolutionsPage } from "./pages/SolutionsPage";

export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="platform" element={<PlatformPage />} />
            <Route path="industries/:slug" element={<IndustryPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/responsible-use" element={<ResponsibleUsePage />} />
            <Route path="request" element={<RequestPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
