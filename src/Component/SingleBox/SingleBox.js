import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SingleBox = ({ width, verticalAlign, horizontalAlign, children }) => {
  const fullHeightScreen = { height: '100vh' };

  return (
    <Grid textAlign={horizontalAlign} style={fullHeightScreen} verticalAlign={verticalAlign}>
      <Grid.Column style={{ maxWidth: width }}>
        { children }
      </Grid.Column>
    </Grid>
  );
};

SingleBox.propTypes = {
  width: PropTypes.number,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
};

SingleBox.defaultProps = {
  width: 450,
  verticalAlign: 'middle',
  horizontalAlign: 'center',
};

export default SingleBox;
