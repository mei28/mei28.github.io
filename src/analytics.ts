import ReactGA from 'react-ga4';

export const initGA = () => {
  const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.error('Google Analytics tracking ID is not set');
  }
};

export const logPageView = (title: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
    title: title
  });
};

