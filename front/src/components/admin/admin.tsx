import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "components/admin/dashboard/dashboard";
import AdminNav from "./adminNav/admin-nav";
import { useEffect, useState } from "react";

function Admin() {
  const [hasloggedIn, setHasLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = Boolean(localStorage.getItem("access-token"));
    setHasLoggedIn(loggedIn);
  }, []);

  return (
    <>
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
                path={`/admin/resume`}
                exact
                component={() => <h1>RESUME</h1>}
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
    </>
  );
}

export default Admin;
