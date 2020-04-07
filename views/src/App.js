import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/pages/ErrorBoundary";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ErrorBoundary>
    );
  };
};