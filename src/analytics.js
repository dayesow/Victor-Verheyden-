import ReactGA from "react-ga4";

const TRACKING_ID = "G-6BWDW756XJ"; // Your GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track events
export const trackEvent = ({ category, action, label, value }) => {
  ReactGA.event({ category, action, label, value });
};
