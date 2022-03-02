import { Route, Switch } from "react-router-dom";
import Dashboard from "components/admin/dashboard/dashboard";
import AdminNav from "./adminNav/admin-nav";

import Resume from "./resume/resume";
import ContactComponent from "./contact";
import Skills from "./skills";

function Admin() {
  return (
    <>
      <AdminNav />

      <Switch>
        <Route path={`/admin`} exact component={Dashboard} />
        <Route
          path={`/admin/contact`}
          exact
          component={() => <ContactComponent />}
        />
        <Route path={`/admin/resume`} exact component={() => <Resume />} />
        <Route path={`/admin/skills`} exact component={() => <Skills />} />
        <Route
          path={`/admin/services`}
          exact
          component={() => <h1>services</h1>}
        />
      </Switch>
    </>
  );
}

export default Admin;
