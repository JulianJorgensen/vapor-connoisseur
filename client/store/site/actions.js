import axios from 'axios';
import { find } from 'lodash';

// action: fetch content from contentful
export let fetchContent = () => {
  console.log('fetching content');
  return (dispatch, getState) => {
    axios.get(`${ENV_CONFIG.SITE_URL}/getAllContent`).then((response) => {
      // set content
      dispatch(setContent(response.data));
    }).catch((error) => {
      console.error('Error getting content from contentful...', error);
    });
  };
};

// action: set content
export let setContent = (data) => {
  let content = {};
  let contentModels = ['homepage', 'about', 'customerPathway', 'services', 'contact'];
  contentModels.map((contentModel) => {
    let foundContent = find(data, { 'sys': { 'contentType': { 'sys': { 'id': contentModel } } } });
    content[contentModel] = foundContent ? foundContent.fields : {};
  });

  return {
    type: 'SET_CONTENT',
    content
  }
};

// action: verify age
export let verifyAge = () => {
  return {
    type: 'VERIFY_AGE'
  }
};

// action: open nav
export let openNav = () => {
  return {
    type: 'OPEN_NAV'
  }
};

// action: close nav
export let closeNav = () => {
  return {
    type: 'CLOSE_NAV'
  }
};

// action: toggle nav
export let toggleNav = () => {
  return {
    type: 'TOGGLE_NAV'
  }
};
