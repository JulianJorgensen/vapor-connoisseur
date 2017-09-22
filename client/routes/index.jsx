import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  matchPath,
  HashRouter,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import cn from 'classnames';

import DocumentMeta from 'react-document-meta';

// layout
import Header from 'layout/Header';
import Footer from 'layout/Footer';

// containers
import Homepage from 'containers/Homepage';

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

// site meta data
const meta = {
  title: 'Vapor Connoisseur',
  description: 'Slogan',
  meta: {
    charset: 'utf-8'
  },
  auto: {
    ograph: true
  }
};

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
    this.updateRoutesContainer();
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
      enter: 400,
      exit: 400
    };

    return (
      <div className={styles.container}>
        <DocumentMeta {...meta} />
        <Header />

        <TransitionGroup component="main" className={styles.animatedRoutes} style={{height: this.state.contentHeight}}>
          <CSSTransition timeout={timeout}>
            <div id='routesContainer'>
              <Switch location={location}>
                <Route path='/' exact render={(props)=><Homepage {...props} onLoaded={this.updateRoutesContainer} />} />                  
                <Route path='/shop' render={(props)=><Shop {...props} onLoaded={this.updateRoutesContainer} />} />                  
              </Switch>
              <Footer />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
};
