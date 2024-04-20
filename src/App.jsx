import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Test from "./components/test/Test";
const Home = lazy(() => import("./components/Home/Home"));
const Profile = lazy(() => import('./components/Profile/Profile'))
const Navbar = lazy(() => import('./components/Navbar/Navbar'))

const SuspenseLayout = () => (
  <Suspense fallback={<div>...</div>}>
    <Outlet />
  </Suspense>
);

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route element={<SuspenseLayout />}>
            <Route path="/" element={<Home />}>
            
              
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
