import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { siteActions } from 'store/actions';
import cn from 'classnames';

import AgeVerification from 'containers/AgeVerification';
import Homepage from 'containers/Homepage';
import Services from 'containers/Services';
import Process from 'containers/Process';
import About from 'containers/About';
import SampleKits from 'containers/SampleKits';
import Contact from 'containers/Contact';
import Shop from 'containers/Shop';
import Cart from 'containers/Cart';

import { userIsAuthenticated, userIsNotAuthenticated } from './utils';
import styles from './index.css';

import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6241825-9'); // initialize Google Analytics

function logPageView(location) {
  // ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
}

// browserHistory.listen((location) => {
//   logPageView(location);
//
//   // scroll to top when changing page
//   window.scrollTo(0, 0);
// });

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(value) {
  return {
    opacity: value.opacity,
    // transform: `scale(${styles.scale})`,
  };
}

// child matches will...
const transition = {
  atEnter: {
    opacity: 0,
    // scale: 0.9,
  },
  atLeave: {
    opacity: 0,
    // scale: 0.9,
  },
  atActive: {
    opacity: 1,
    // scale: 1,
  },
};


@withRouter
@connect(({ site }) => ({
  site,
}))
export default class Routes extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    // log page view to Google Analytics
    // logPageView(location);

    // scroll to top when changing page
    window.scrollTo(0, 0);

    this.closeNav();
  }

  closeNav = () => {
    if (this.props.site.navOpen) {
      this.props.dispatch(siteActions.closeNav());
    }
  }

  render() {
    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }

    const globalProps = {
      onLoaded: () => console.log('trigger update')
    }

    const PropsRoute = ({ component, ...rest }) => (
      <Route
        {...rest}
        onLoaded={this.updateRoutesContainer}
        render={routeProps => renderMergedProps(component, routeProps, globalProps, rest)}
      />
    );

    const wrapperStyles = cn(styles.wrapper, {
      [styles.navOpen]: this.props.site.navOpen,
    });

    return (
      <div className={wrapperStyles} onClick={this.closeNav}>
        <AnimatedSwitch
          atEnter={transition.atEnter}
          atLeave={transition.atLeave}
          atActive={transition.atActive}
          mapStyles={mapStyles}
          className={styles.switch}
        >
          <PropsRoute path="/age-verification" component={userIsNotAuthenticated(AgeVerification)} />
          <PropsRoute path="/" exact component={userIsAuthenticated(Homepage)} />
          <PropsRoute path="/services" component={userIsAuthenticated(Services)} />
          <PropsRoute path="/process" component={userIsAuthenticated(Process)} />
          <PropsRoute path="/about" component={userIsAuthenticated(About)} />
          <PropsRoute path="/sample-kits" component={userIsAuthenticated(SampleKits)} />
          <PropsRoute path="/contact" component={userIsAuthenticated(Contact)} />
          <PropsRoute path="/shop" exact component={userIsAuthenticated(Shop)} />
          <PropsRoute path="/shop/:filter" exact component={userIsAuthenticated(Shop)} />
          <PropsRoute path="/shop/:category/:productHandle" exact component={userIsAuthenticated(Shop)} showSingle />
        </AnimatedSwitch>
        <Cart />
      </div>
    );
  }
}
