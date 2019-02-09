import moment from 'moment';
import React, { FC } from 'react';
import Rating from 'react-rating';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import FullStarIcon from '@material-ui/icons/Star';
import EmptyStarIcon from '@material-ui/icons/StarBorder';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import { makeStyles } from '@material-ui/styles';

import Col from '../Col';
import Container from '../Container';
import theme from '../theme';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 'bold',
    fontFamily: theme.typography.fontFamily
  },
  listItem: {
    cursor: 'pointer'
  },
  infoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  infoField: {
    display: 'flex',
    alignItems: 'center',
    color: '#657786'
  },
  infoField_Icon: {
    marginRight: theme.spacing.unit * 0.5
  }
}));

interface JobCardProps {
  title: string;
  description: string;
  price: number;
  owner: {
    rating: number;
    amountOfRating: number;
    name: string;
  };
  date: Date;
  views: number;
  distance: number;
  location: string;
}

const JobCard: FC<JobCardProps> = ({
  title,
  owner,
  date,
  description,
  views,
  location,
  distance
}) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <Container spacing={8}>
        <Col xs={12}>
          <span className={classes.title}>{title}</span>
        </Col>
        <Col xs={12}>
          <Typography>
            {owner.name}{' '}
            {
              <Rating
                readonly
                initialRating={owner.rating}
                emptySymbol={<EmptyStarIcon />}
                fullSymbol={<FullStarIcon />}
              />
            }{' '}
            {owner.amountOfRating} reviews · {moment(date).fromNow()}
          </Typography>
        </Col>
        <Col xs={12}>{description}</Col>
        <Col
          xs={9}
          sm={7}
          md={5}
          lg={3}
          xl={1}
          className={classes.infoContainer}
        >
          <span className={classes.infoField}>
            <RemoveRedEyeIcon className={classes.infoField_Icon} />
            <Typography inline>{views}</Typography>
          </span>
          <span className={classes.infoField}>
            <LocationCityIcon className={classes.infoField_Icon} />
            <Typography inline>{location}</Typography>
          </span>
          <span className={classes.infoField}>
            <SwapCallsIcon className={classes.infoField_Icon} />
            <Typography inline>{distance} km</Typography>
          </span>
        </Col>
      </Container>
    </ListItem>
  );
};

export default JobCard;
