import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { siteActions } from 'store/actions';
import { userIsAuthenticated, userIsNotAuthenticated } from './utils';

// containers
import AgeVerification from 'containers/AgeVerification';
import Homepage from 'containers/Homepage';
import Services from 'containers/Services';
import How from 'containers/How';
import About from 'containers/About';
import Samples from 'containers/Samples';
import Contact from 'containers/Contact';
import Shop from 'containers/Shop';

import Footer from 'layout/Footer';

import { TransitionGroup, CSSTransition }
from 'react-transition-group';
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

@withRouter
@connect(({ site }) => ({
  site
}))
export default class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentHeight: 0,
      direction: null
    }

    this.updateRoutesContainer = this.updateRoutesContainer.bind(this);
  }

  updateRoutesContainer = () => {
    const routesContainerHeight = document.getElementById('routesContainer').clientHeight;
    if (routesContainerHeight) {
      this.setState({
        contentHeight: routesContainerHeight
      });
    }
  }

  onRouteChanged() {
    // log page view to Google Analytics
    // logPageView(location);

    // scroll to top when changing page
    window.scrollTo(0, 0);

    // close nav
    this.props.dispatch(siteActions.closeNav());
        
    // update routes container
    setTimeout(() => {
      this.updateRoutesContainer();
    }, 20);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  componentDidMount() {
    this.updateRoutesContainer();
  }

  render() {
    const timeout = {
      enter: 1,
      exit: 1
    };

    const globalProps = {
      onLoaded: this.updateRoutesContainer
    }

    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }
    
    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} onLoaded={this.updateRoutesContainer} render={routeProps => {
          return renderMergedProps(component, routeProps, globalProps, rest);
        }}/>
      );
    }

    return (
      <div className={styles.wrapper}>
        <TransitionGroup component="main" className={styles.animatedRoutes} style={{height: this.state.contentHeight}}>
          <CSSTransition timeout={timeout}>
            <div id='routesContainer' className={styles.routesContainer}>
              <Switch location={location}>
                <PropsRoute path='/age-verification' component={userIsNotAuthenticated(AgeVerification)} />
                <PropsRoute path='/' exact component={userIsAuthenticated(Homepage)} />
                <PropsRoute path='/services' component={userIsAuthenticated(Services)} />
                <PropsRoute path='/how' component={userIsAuthenticated(How)} />
                <PropsRoute path='/about' component={userIsAuthenticated(About)} />
                <PropsRoute path='/sample-kits' component={userIsAuthenticated(Samples)} />
                <PropsRoute path='/contact' component={userIsAuthenticated(Contact)} />                
                <PropsRoute path='/shop' exact component={userIsAuthenticated(Shop)} />
                <PropsRoute path='/shop/:filter' exact component={userIsAuthenticated(Shop)} />
                <PropsRoute path='/shop/:category/:productHandle' exact component={userIsAuthenticated(Shop)} showSingle={true} />                
              </Switch>
              <Footer />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
};
