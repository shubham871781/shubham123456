import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// material

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
  <box ref={ref} {...other}>
    {/* <Helmet> */}
      <title>{title}</title>
    {/* </Helmet> */}
    {children}
  </box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
