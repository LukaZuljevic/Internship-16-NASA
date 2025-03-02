import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ROUTES } from "./routes";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
