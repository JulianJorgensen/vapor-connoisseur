import React from 'react';
import { withRouter } from 'react-router';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
const locationHelper = locationHelperBuilder();

export const userIsAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/age-verification',
  // Determine if the user is authenticated or not
  authenticatedSelector: ({site}) => site.ageVerified,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsAuthenticated'
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // Determine if the user is authenticated or not
  authenticatedSelector: ({ site }) => !site.ageVerified,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
})
