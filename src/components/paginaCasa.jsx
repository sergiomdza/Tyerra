/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import {
  CardMedia, Card, CardContent, Grid, Typography, makeStyles, CardActions,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Slider from './slider';

function piscinaIcon(piscina) {
  if (piscina) {
    return (
      <Grid item container direction="row" justify="space-evenly" alignItems="center">
        <CheckBoxIcon />
        <Typography>
          Piscina
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid item container direction="row" justify="space-evenly" alignItems="center">
      <IndeterminateCheckBoxIcon />
      <Typography>
        Piscina
      </Typography>
    </Grid>
  );
}

function terrazaIcon(terraza) {
  if (terraza) {
    return (
      <Grid item container direction="row" justify="space-evenly" alignItems="center">
        <CheckBoxIcon />
        <Typography>
          Terraza
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid item container direction="row" justify="space-evenly" alignItems="center">
      <IndeterminateCheckBoxIcon />
      <Typography>
        Terraza
      </Typography>
    </Grid>
  );
}

function saguanIcon(saguan) {
  if (saguan) {
    return (
      <Grid item container direction="row" justify="space-evenly" alignItems="center">
        <CheckBoxIcon />
        <Typography>
          saguan
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid item container direction="row" justify="space-evenly" alignItems="center">
      <IndeterminateCheckBoxIcon />
      <Typography>
        Saguan
      </Typography>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  card: {
    margin: '10px',
    height: '550px',
    width: '100%',
  },
  '@media (min-width: 960px)': {
    card: {
      margin: '10px',
      height: '450px',
      width: '100%',
    },
  },
  image: {
    width: '100%',
    heigh: '100px',
  },
  link: {
    textDecoration: 'none',
  },
  typo: {
    overflow: 'hidden',
    height: '150px',
  },
  cardmedia: {
    height: '150px',
  },
}));

export default function paginaCasa(props) {
  // eslint-disable-next-line prefer-destructuring
  const state = props.location.state;
  const classes = useStyles();

  // eslint-disable-next-line no-console
  console.log(state);
  const pis = piscinaIcon(state.piscina);
  const terr = terrazaIcon(state.terraza);
  const sag = saguanIcon(state.saguan);

  return (
    <Card>
      <CardMedia>
        <Slider imgArray={state.img} />
      </CardMedia>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className={classes.typo}>
            <Typography color="textSecondary" variant="subtitle1" align="justify">
              Descripción:
            </Typography>
            <Typography align="justify">
              {state.descripcion}
            </Typography>
          </Grid>
          <Grid item container direction="column" justify="center" alignItems="center" xs={6} md={4} spacing={1}>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <BathtubIcon />
              </Grid>
              <Grid item>
                <Typography>
                  {state.baños}
                  {' Baños'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={1}>
              <Grid item>
                <HotelIcon />
              </Grid>
              <Grid item>
                <Typography>
                  {state.cuartos}
                  {' Cuartos'}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <AspectRatioIcon />
              </Grid>
              <Grid item>
                <Typography>
                  {state.metraje}
                  {' m2 '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" justify="space-evenly" alignItems="center" xs={6} md={2}>
            {pis}
            {terr}
            {sag}
          </Grid>
          <div style={{ width: '100%' }}>
            <center>
              <iframe title="mapa" src={state.map} width="600" height="450" frameBorder="0" style={{ border: 0, width: '90%' }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
            </center>
          </div>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container justify="center" alingItems="space-around" direciton="row">
          <Grid item container>
            <Grid item>
              <LocationOnIcon />
            </Grid>
            <Grid item>
              <Typography>
                {state.ubicacion}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              <AttachMoneyIcon />
            </Grid>
            <Grid item>
              <Typography>
                {state.costo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardActions>
    </Card>

  );
}
