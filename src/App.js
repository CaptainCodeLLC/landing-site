import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/** Pages */
import Home from "./components/Home";
import Work from "./components/Work";

/** Styling */
import { Layout, Menu, Breadcrumb } from "antd";
import "../src/styles/nav.css";
const { Header } = Layout;

function App() {
  return (
    <Router>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo">
              <p className= "logo-text">Captain Code</p>
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/work">Work</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>

        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
