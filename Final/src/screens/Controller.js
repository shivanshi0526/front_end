import React from 'react';
import Header from "../common/header/Header";
import Home from "../screens/home/Home";
import Details from "../screens/details/Details";

function Controller() {
    return (
        <React.Fragment>
            <Header />
            {/* <Details /> */}
            <Home />
        </React.Fragment>
    );
}

export default Controller;