import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { siteActions } from 'store/actions';
import cn from 'classnames';
import ReactGA from 'react-ga';

import AgeVerification from 'containers/AgeVerification';
import Homepage from 'containers/Homepage';
import Services from 'containers/Services';
import Process from 'containers/Process';
import About from 'containers/About';
import SampleKits from 'containers/SampleKits';
import Contact from 'containers/Contact';
import Shop from 'containers/Shop';
import Cart from 'containers/Cart';
import Legal from 'containers/Legal';

import { userIsAuthenticated, userIsNotAuthenticated } from './utils';
import styles from './index.css';

ReactGA.initialize('UA-6241825-10'); // initialize Google Analytics

function logPageView(location) {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
}

// browserHistory.listen((location) => {
//   logPageView(location);
//
//   // scroll to top when changing page
//   window.scrollTo(0, 0);
// });

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(mappedStyle) {
  return {
    opacity: mappedStyle.opacity,
    transform: `translateX(${mappedStyle.translateX}%)`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 160,
    damping: 29,
  });
}

// child matches will...
const transition = {
  atEnter: {
    opacity: 0,
    translateX: -100,
  },
  atLeave: {
    opacity: 0,
    translateX: 0,
  },
  atActive: {
    opacity: bounce(1),
    translateX: bounce(0),
  },
};


@withRouter
@connect(({ site }) => ({
  site,
}))
export default class Routes extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged(this.props.location);
    }
  }

  onRouteChanged(location) {
    // log page view to Google Analytics
    logPageView(location);

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
    };

    const globalProps = {
      onLoaded: () => console.log('trigger update'),
    };

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
          <PropsRoute path="/legal/:page" component={userIsAuthenticated(Legal)} />
        </AnimatedSwitch>
        <Cart />
      </div>
    );
  }
}
