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
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />

      <Route path="/learn" element={<Learn />} >

        <Route path="courses" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId/>}/>
        </Route>

        <Route path="bundles" element={<Bundles/>}/>
      </Route>

      <Route path="/dashboard" element={<Dashboard/>}/>
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
{/* Outlet Tag here is used to display the URL which we get from  function CourseId() */}
      <Outlet/> 
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "NodeJs"];
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses List:</h1>
      <h4>Courses Card</h4>

      <p>More Test</p>
      <NavLink style={({isActive}) => { return { backgroundColor: isActive ? "pink" : "yellow"}}} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>tests</NavLink>


      <Outlet/>
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

// Function reads the URL parameters 
function CourseId() {
  const navigate = useNavigate();

  const {courseid} = useParams();  /* It's reading the URL parameters. */
  return (
    <div>
      <h1>URL Params is : {courseid}</h1>
      <button className="btn btn-warning" onClick={() => { navigate("/dashboard", {state: courseid})}}>Price</button>

      <Link to="/dashboard" state={"DJANGO TEST"}>Test Link</Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that I got here is : {location.state}</h1>
      
    </div>
  );
}


reportWebVitals();
