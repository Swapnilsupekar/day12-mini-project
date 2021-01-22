import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to="/">Page1 </Link>
      <Link to="/page2">Page2 </Link>
      <Link to="/page3">Page3 </Link>

      <Route exact path="/" component={Page1} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Router>
  );
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

function Page3() {
  return <div>Page3</div>;
}

function Signup() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });

  const syncName = (e) => setUser({ ...user, name: e.target.value });
  const syncPassword = (e) =>
    setUser({ ...user, password: e.target.value });
  const syncEmail = (e) => setUser({ ...user, email: e.target.value });
  const syncMobile = (e) => setUser({ ...user, mobile: e.target.value });

  const regiserUser = () => {
    if (user.name === "" || user.password === "") {
      return;
    }

    console.log("user", user);
    localStorage.setItem("app-user", JSON.stringify(user));
  };

  return (
    <div>
      <h3>Sign Up Form</h3>

      <div>
        Name{" "}
        <input
          type="text"
          value={user.name}
          onChange={syncName}
          required
        />
      </div>

      <div>
        Pswd{" "}
        <input
          type="password"
          value={user.password}
          onChange={syncPassword}
          required
        />
      </div>

      <div>
        Email <input type="text" value={user.email} onChange={syncEmail} />
      </div>

      <div>
        Mobile{" "}
        <input type="text" value={user.mobile} onChange={syncMobile} />
      </div>

      <div>
        <button onClick={regiserUser}>Register</button>
      </div>
    </div>
  );
}

export default App;
