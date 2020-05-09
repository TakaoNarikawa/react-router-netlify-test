import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import pages from "src/Pages";

function Routes() {
  const location = useLocation();
  const pathname = location?.pathname;
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return (
    <>
      <div>pathname:{pathname}</div>
      {pages.map(({ path, View }, i) => (
        <div>{path}</div>
      ))}

      <Switch>
        {pages.map(({ path, View }, i) => (
          <Route key={i} exact path={path}>
            <View />
          </Route>
        ))}
      </Switch>
    </>
  );
}

function App() {
  return (
    <>
      react-router-github-pages-test
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
