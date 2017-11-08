import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { siteActions } from 'store/actions';
import { Desktop } from 'utils/responsive';
import cn from 'classnames';
import ReactGA from 'react-ga';

import navBgImage from 'assets/images/navbg.jpg';
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

    const PropsRoute = ({ component, ...rest }) => (
      <Route
        {...rest}
        render={routeProps => renderMergedProps(component, routeProps, rest)}
      />
    );

    const wrapperStyles = cn(styles.wrapper, {
      [styles.navOpen]: this.props.site.navOpen,
    });

    const { location } = this.props;
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 1600, exit: 800 };

    return (
      <div className={wrapperStyles} onClick={this.closeNav}>
        <TransitionGroup component="main" className="page-main">
          <CSSTransition key={currentKey} timeout={timeout} classNames="fade">
            <section className="page-main-inner">
              <Switch location={location}>
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
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
        <Desktop>
          <div onClick={this.closeNav} className={styles.navBgImage} style={{ backgroundImage: `url(${navBgImage})` }} />
        </Desktop>
        <Cart />
      </div>
    );
  }
}
