import React from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = (size: number) =>
  makeStyles(() => ({
    grid: {
      width: `${size}%`,
      margin: 'auto'
    }
  }))();

interface ContainerProps {
  size?: number;
  justify?: GridProps['justify'];
  spacing?: GridProps['spacing'];
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 100,
  ...rest
}) => {
  const classes = useStyles(size);

  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default Container;
