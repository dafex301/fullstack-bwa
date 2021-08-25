import React, { Component } from "react";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import MostPicked from "components/MostPicked";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar {...this.props}></Navbar>
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    );
  }
}
