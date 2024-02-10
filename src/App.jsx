import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={<AboutUs />}
          ></Route>
          <Route
            path="/work"
            element={<OurWork />}
          />
          <Route
            path="/contact"
            element={<ContactUs />}
          />
          <Route
            path="/work/:id"
            element={<MovieDetail />}
          />
          <Route
            path="*"
            element={
              <Navigate to="/" />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
