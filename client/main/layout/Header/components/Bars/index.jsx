import React, { Component } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userIsAuthenticated } from 'routes/utils';
import { siteActions } from 'store/actions';
import styles from './index.css';

@withRouter
@userIsAuthenticated
@connect(({ site }) => ({
  navOpen: site.navOpen,
}))
export default class NavBars extends Component {
  handleToggleNav = () => {
    this.props.dispatch(siteActions.toggleNav());
  }

  render() {
    const { navOpen } = this.props;
    const barsStyles = cn(styles.bars, {
      [styles.open]: navOpen,
    });

    return (
      <div className={barsStyles} onClick={this.handleToggleNav}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
}
