import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

/* Pages */
import { Dashboard } from "@/pages/Dashboard";
import { Search } from "@/pages/Search";
import { Repository } from "@/pages/Repository";

export function Router() {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:username" element={<Dashboard />} />
          <Route path="/:username/:repository" element={<Repository />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
}
