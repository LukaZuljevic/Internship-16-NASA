import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ROUTES } from "./routes";
import { Home } from "../pages/Home";
import { Apod } from "../pages/APOD";
import { ApodDetails } from "../pages/ApodDetails";
import { MarsRover } from "../pages/MarsRover";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.APOD} element={<Apod />} />
          <Route path={ROUTES.APOD_ITEM} element={<ApodDetails />} />
          <Route path={ROUTES.MARS_ROVER_PHOTOS} element={<MarsRover />} />
        </Route>
      </Routes>
    </Router>
  );
};
