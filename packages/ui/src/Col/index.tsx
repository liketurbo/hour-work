import React from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';

interface ColProps {
  xs?: GridProps['xs'];
  sm?: GridProps['sm'];
  md?: GridProps['md'];
  lg?: GridProps['lg'];
  xl?: GridProps['xl'];
  className?: GridProps['className'];
}

const Col: React.FC<ColProps> = ({ children, ...rest }) => (
  <Grid item {...rest}>
    {children}
  </Grid>
);

export default Col;
