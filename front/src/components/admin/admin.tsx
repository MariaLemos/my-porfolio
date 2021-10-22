import { Route, Switch } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "components/admin/dashboard/dashboard";
import AdminNav from "./adminNav/admin-nav";
import { useEffect, useState } from "react";

import { AdminProvider } from "./adminProvider";
import Message from "./message";
import Resume from "./resume/resume";
import ConfigComponent from "./config/config";
function Admin() {
  const [hasloggedIn, setHasLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = Boolean(localStorage.getItem("access-token"));
    setHasLoggedIn(loggedIn);
  }, []);

  return (
    <AdminProvider>
      <Message />
      {hasloggedIn && <AdminNav />}
      <Route
        path={`/admin`}
        component={() =>
          !hasloggedIn ? (
            <Login setHasLoggedIn={setHasLoggedIn} />
          ) : (
            <Switch>
              <Route path={`/admin`} exact component={Dashboard} />
              <Route
                path={`/admin/config`}
                exact
                component={() => <ConfigComponent />}
              />
              <Route
                path={`/admin/resume`}
                exact
                component={() => <Resume />}
              />
              <Route
                path={`/admin/services`}
                exact
                component={() => <h1>services</h1>}
              />
            </Switch>
          )
        }
      />
    </AdminProvider>
  );
}

export default Admin;
