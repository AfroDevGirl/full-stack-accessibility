import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";

const UserContext = React.createContext("user");

const App = () => {
  const userSession = window.sessionStorage.getItem("accessibility_session");

  return (
    <Router>
      <UserContext.Provider value={userSession}>
        <main className="App">
          <Route path="/" exact>
            <Tasks />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </main>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
