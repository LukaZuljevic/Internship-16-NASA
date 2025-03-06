import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { ROUTES } from "./routes";
import { Home } from "../pages/Home";
import { Apod } from "../pages/APOD";
import { ApodDetails } from "../pages/ApodDetails";
import { MarsRover } from "../pages/MarsRover";
import { MarsRoverDetails } from "../pages/MarsRoverDetails";
import { AnimatePresence, motion } from "framer-motion";
import { NeoPage } from "../pages/NEO";
import { EarthImagery } from "../pages/EarthImagery";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route
            index
            element={
              <AnimatePresence>
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path={ROUTES.APOD}
            element={
              <AnimatePresence>
                <motion.div
                  key="apod"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Apod />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path={ROUTES.APOD_ITEM}
            element={
              <AnimatePresence>
                <motion.div
                  key="apodItem"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ApodDetails />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path={ROUTES.MARS_ROVER_PHOTOS}
            element={
              <AnimatePresence>
                <motion.div
                  key="marsRover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MarsRover />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path={ROUTES.MARS_ROVER_PHOTO_DETAILS}
            element={
              <AnimatePresence>
                <motion.div
                  key="marsRoverDetails"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MarsRoverDetails />
                </motion.div>
              </AnimatePresence>
            }
          />
          <Route
            path={ROUTES.NEO}
            element={
              <AnimatePresence>
                <motion.div
                  key="neoDetails"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <NeoPage />
                </motion.div>
              </AnimatePresence>
            }
          />

          <Route
            path={ROUTES.EARTH}
            element={
              <AnimatePresence>
                <motion.div
                  key="EarthImagery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <EarthImagery />
                </motion.div>
              </AnimatePresence>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
