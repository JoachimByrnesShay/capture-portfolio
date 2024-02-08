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
} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
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
          element={<Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
