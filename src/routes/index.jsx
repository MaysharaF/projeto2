import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from '../services/auth'

import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async() => {
      const isAuth = await isAuthenticated()
      setAuthenticated(isAuth)
      setLoading(false);
    }
    fetchToken()
  }, []);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        loading ? (
          <></>
        ) : authenticated ? (
            <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

function routes() {
  return (
    <Switch>
      <PrivateRoute path="/home" exact component={Home}/>
      <Route path="/signup" exact component={Signup}/>
      <Route path="/" component={Login}/>
    </Switch>
  );
}

export default routes;