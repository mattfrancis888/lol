import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

const Routes: React.FC<{}> = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
