import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./login/login";
import Dashboard from "components/admin/dashboard/dashboard";
import AdminNav from "./adminNav/admin-nav";

function Admin(props: { hasloggedIn: boolean }) {
  return (
    <>
      {!props.hasloggedIn ? <Redirect to="/admin/login" /> : <AdminNav />}

      <Switch>
        <Route path={`/admin`} exact component={Dashboard} />
        <Route path={`/admin/resume`} exact component={() => <h1>RESUME</h1>} />
        <Route
          path={`/admin/services`}
          exact
          component={() => <h1>services</h1>}
        />
        <Route path={`/admin/login`} exact component={Login} />
      </Switch>
    </>
  );
}

export default Admin;
