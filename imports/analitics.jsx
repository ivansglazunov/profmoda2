import React from "react";
import { withRouter } from "react-router";

import ReactPixel from "react-facebook-pixel";
import ya, { YMInitializer } from "react-yandex-metrika";
import ReactGA from "react-ga";

const FP = "739243429824582";
const GA = "UA-64254068-4";
const YM = 54094318;

var Chance = require("chance");
var chance = new Chance();

const advancedMatching = {};
if (typeof localStorage === "object") {
  if (!localStorage.userId)
    localStorage.setItem("userId", `${new Date().valueOf()}${chance.fbid()}`);
  advancedMatching.userId = localStorage.getItem("userId");
  if (GA) {
    ReactGA.initialize(GA, {
      gaOptions: {
        userId: localStorage.getItem("userId")
      }
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

export class Analitics extends React.Component {
  trackPage = page => {
    if (FP) ReactPixel.pageView();
    if (GA) {
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  };
  componentDidMount() {
    const page = this.props.location.pathname;
    this.trackPage(page);

    if (FP) {
      ReactPixel.init(FP, advancedMatching, {
        autoConfig: true, // set pixel's autoConfig
        debug: false // enable logs
      });
      ReactPixel.pageView();
    }
  }

  componentDidUpdate(prevProps) {
    const currentPage = prevProps.location.pathname;
    const nextPage = this.props.location.pathname;

    if (currentPage !== nextPage) {
      this.trackPage(nextPage);
    }
  }

  render() {
    return (
      GA &&
      YM &&
      typeof localStorage === "object" && (
        <YMInitializer
          accounts={[YM]}
          options={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            trackHash: true,
            userParams: {
              userId: localStorage.getItem("userId")
            }
          }}
          version="2"
        />
      )
    );
  }
}

export default withRouter(Analitics);

export const event = action => {
  try {
    if (GA) ReactGA.event({ category: "actions", action });
    if (YM) ya("reachGoal", action);
    if (FP) ReactPixel.trackCustom(action);
  } catch (error) {
    console.error(error);
  }
};
