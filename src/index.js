import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />

      <Route path="/learn" element={<Learn />} >
        <Route path="courses" element={<Courses/>}/>
        <Route path="bundles" element={<Bundles/>}/>
      </Route>

    </Routes>
  </Router>
);

// NOTE: CONSIDER THESE BELOW FUNCTIONS AS COMPONENTS
// (For understanding stand-point it's written in same file) 

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">courses</Link>
      <br /><br />
      <Link className="btn btn-primary" to="/learn/bundles">bundle</Link>

      <Outlet/>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1>Courses List:</h1>
      <h4>Courses Card</h4>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundle List:</h1>
      <h4>Bundle Card</h4>
    </div>
  );
}


reportWebVitals();
