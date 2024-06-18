import Layout from "./Layouts/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomeComponent />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
