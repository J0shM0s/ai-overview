import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import OfficePage from "./pages/OfficePage";
import AgentPage from "./pages/AgentPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/agent" element={<AgentPage />} />
      </Routes>
    </Layout>
  );
}
