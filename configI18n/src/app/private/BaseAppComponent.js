import {  Route, Switch } from "react-router-dom";
import * as Screens from "../pages";
import * as Path from "../helper/path";

function BaseAppComponent(props) {
    return (
       <>
       <Switch>
          <Route exact path={Path.HOME} component={Screens.Home} />
       </Switch>
       </>
    );
}

export default BaseAppComponent;
