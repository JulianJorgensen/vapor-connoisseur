import React from 'react';
import MediaQuery from 'react-responsive';

export const Desktop = ({ component, children }) => <MediaQuery minWidth={992} children={component || children} />;
export const Tablet = ({ component, children }) => <MediaQuery minWidth={768} maxWidth={992} children={component || children} />;
export const Mobile = ({ component, children }) => <MediaQuery maxWidth={768} children={component || children} />;
export const MobileTablet = ({ component, children }) => <MediaQuery maxWidth={992} children={component || children} />;

export default Desktop;
