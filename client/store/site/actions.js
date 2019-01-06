import axios from 'axios';
import { filter } from 'lodash';

// action: set content
export const setContent = (data) => {
  const content = {};
  const contentModels = ['homepage', 'about', 'customerPathway', 'services', 'contact', 'sampleKits', 'legalPage'];
  contentModels.map((contentModel) => {
    const foundContent = filter(data, { sys: { contentType: { sys: { id: contentModel } } } });
    if (foundContent.length > 1) {
      content[contentModel] = foundContent || [];
    } else {
      content[contentModel] = foundContent ? foundContent[0].fields : {};
    }
    return true;
  });

  return {
    type: 'SET_CONTENT',
    content,
  };
};

// action: fetch content from contentful
export const fetchContent = () => (dispatch, getState) => {
  axios.get(`${ENV_CONFIG.SITE_URL}/getAllContent`).then((response) => {
    // set content
    dispatch(setContent(response.data));
  });
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
