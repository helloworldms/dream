import {
  HashRouter,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./app";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var contents = [
  { id: 1, title: "HTML", description: "HTML is..." },
  { id: 2, title: "JS", description: "JS is..." },
  { id: 3, title: "React", description: "React is..." },
];

function Topic() {
  var params = useParams();
  console.log("params", params);

  var selected_topic = {
    title: "sorry",
    description: "Not Found",
  };

  var topic_id = params.topic_id;
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      break;
    }
  }

  return (
    <div>
      <h3>Topic</h3>
      Topic...
    </div>
  );
}

function Topics() {
  const lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li>
        <NavLink
          to={`/topic ${contents[i].id}`}
        >{`${contents[i].title}`}</NavLink>
      </li>
    );
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">HTML is...</Route>
        <Route path="/topics/2">JS is...</Route>
        <Route path="/topics/3">React is...</Route>
      </Switch> */}
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route paht="/">Not fount</Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
