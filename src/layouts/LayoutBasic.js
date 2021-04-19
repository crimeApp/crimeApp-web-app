import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';
//import Grid from '@material-ui/core/Grid';

import MenuTop from '../components/Menu/MenuTop';

export default function LayoutBasic(props){
    const { routes } = props;

    return (
        <>
            <h2>User Menu</h2>
            <MenuTop/>
            
            <Container className="layout-basic-content">
                <LoadRoutes routes={routes}/>
            </Container>
        </>
    );
}

function LoadRoutes({ routes }){
    return <Switch>
                {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/> 
                ))}
            </Switch>;
}