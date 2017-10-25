import axios from 'axios';
import { find } from 'lodash';

// action: set content
export const setContent = (data) => {
  const content = {};
  const contentModels = ['homepage', 'about', 'customerPathway', 'services', 'contact', 'sampleKits'];
  contentModels.map((contentModel) => {
    const foundContent = find(data, { sys: { contentType: { sys: { id: contentModel } } } });
    content[contentModel] = foundContent ? foundContent.fields : {};
    return true;
  });

  return {
    type: 'SET_CONTENT',
    content,
  };
};

// action: fetch content from contentful
export const fetchContent = () => {
  return (dispatch, getState) => {
    axios.get(`${ENV_CONFIG.SITE_URL}/getAllContent`).then((response) => {
      // set content
      dispatch(setContent(response.data));
    });
  };
};

// action: verify age
export const verifyAge = () => ({
  type: 'VERIFY_AGE',
});

// action: open nav
export const openNav = () => ({
  type: 'OPEN_NAV',
});

// action: close nav
export const closeNav = () => ({
  type: 'CLOSE_NAV',
});

// action: toggle nav
export const toggleNav = () => ({
  type: 'TOGGLE_NAV',
});
