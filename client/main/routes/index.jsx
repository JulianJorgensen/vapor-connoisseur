import React from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import {
  connect
} from 'react-redux';

// containers
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';

import Footer from 'layout/Footer';

import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
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
@connect()
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
    console.log('updating content height based on routescontainer height', routesContainerHeight);
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

    return (
      <TransitionGroup component="main" className={styles.animatedRoutes} style={{height: this.state.contentHeight}}>
        <CSSTransition timeout={timeout}>
          <div id='routesContainer'>
            <Switch location={location}>
              <Route path='/' exact render={(props)=><Homepage {...props} onLoaded={this.updateRoutesContainer} />} />
              <Route path='/shop' exact render={(props)=><Shop {...props} onLoaded={this.updateRoutesContainer} />} />
              <Route path='/shop/:filter' exact render={(props)=><Shop {...props} onLoaded={this.updateRoutesContainer} />} />
              <Route path='/shop/:category/:productHandle' render={(props)=><Shop showSingle={true} {...props} onLoaded={this.updateRoutesContainer} />} />
            </Switch>
            <Footer />
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
};
