import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* <Route path=''  /> */}

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<Course />} />
          </Route>
        </Route>
        <Route path="/course-details" element={<CourseDetails />} />
      </Routes>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "red",
                fontWeight: isActive && "Bold",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "red",
                fontWeight: isActive && "Bold",
          };
        }}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </nav>
  );
}
function Home() {
  return (
    <div>
      <h2>Home route</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aspernatur
        omnis, sed quaerat repellat quibusdam perferendis molestias praesentium
        veritatis incidunt qui quasi eius minima corrupti distinctio numquam
        dolor facilis cum?
      </p>
      <Outlet />
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Dashboard</h2>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive && "darkblue",
                fontWeight: isActive && "Bold",
              };
            }}
            to={`/dashboard/courses`}
          >
            Courses
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive && "darkblue",
                fontWeight: isActive && "Bold",
              };
            }}
            to={`/dashboard/profile`}
          >
            Profile
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive && "darkblue",
                fontWeight: isActive && "Bold",
              };
            }}
            to={`/dashboard/settings`}
          >
            Settings
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile route</h2>
    </div>
  );
}

function Courses() {
  const courseList = [
    "React",
    "Angular",
    "Vue",
    "NodeJs",
    "Javascript",
    "Python",
  ];
  const randomCourse =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h2>Courses route</h2>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive && "green",
                fontWeight: isActive && "Bold",
          };
        }}
        to={`/dashboard/courses/${randomCourse}`}
      >
        {randomCourse}
      </NavLink>
      <Outlet />
    </div>
  );
}
const Settings = () => {
  return (
    <div>
      <h2>Settings route</h2>
    </div>
  );
};

function Course() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is "{courseId}" course</h2>
      <button
        onClick={() => {
          navigate(`/course-details`, { state: courseId });
        }}
      >
        Details
      </button>
    </div>
  );
}
const CourseDetails = () => {
  const { state } = useLocation();
  return (
    <div>
      <h2>Details of {state}</h2>
      <p>
        <strong>{state}</strong> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Expedita aperiam porro earum explicabo, officiis
        delectus officia, dolor sint vero, reiciendis neque. Culpa provident ea,
        ducimus repellat voluptatum consectetur non. Itaque!
      </p>
    </div>
  );
};

export default App;
