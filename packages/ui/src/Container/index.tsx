import React from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import theme from '../theme';

const useStyles = (size: number, top: number) =>
  makeStyles(() => ({
    grid: {
      width: `${size}%`,
      margin: 'auto',
      marginTop: theme.spacing.unit * top
    }
  }))();

interface ContainerProps {
  size?: number;
  top?: number;
  justify?: GridProps['justify'];
  spacing?: GridProps['spacing'];
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 80,
  top = 0,
  ...rest
}) => {
  const classes = useStyles(size, top);

  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default Container;
