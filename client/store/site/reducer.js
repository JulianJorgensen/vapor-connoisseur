export default (state = { content: {} }, action) => {
  switch (action.type) {
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.content,
      };
    case 'OPEN_NAV':
      return {
        ...state,
        navOpen: true,
      };
    case 'CLOSE_NAV':
      return {
        ...state,
        navOpen: false,
      };
    case 'TOGGLE_NAV':
      return {
        ...state,
        navOpen: !state.navOpen,
      };
    case 'SITE_LOADED':
      return {
        ...state,
        hasLoaded: true,
      };
    case 'VERIFY_AGE':
      return {
        ...state,
        ageVerified: true,
      };
    default:
      return state;
  }
};
