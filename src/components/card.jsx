import React from 'react';
import {
  CardActionArea, CardMedia, makeStyles, Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  card: {
    height: '450px',
    width: '100%',
  },
  '@media (max-width: 960px)': {
    card: {
      height: '550px',
      width: '100%',
      margin: '30px',
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
}));

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
          Saguan
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

export default function CardCasa({
  // eslint-disable-next-line max-len
  MainImg, baños, cuartos, metraje, descripcion, piscina, terraza, saguan, ubicacion, costo, img, map,
}) {
  // eslint-disable-next-line no-console
  const pis = piscinaIcon(piscina);
  const terr = terrazaIcon(terraza);
  const sag = saguanIcon(saguan);

  const classes = useStyles();
  return (
    <Link
      to={{
        pathname: '/casa',
        state: {
          MainImg,
          baños,
          cuartos,
          metraje,
          descripcion,
          piscina,
          terraza,
          saguan,
          ubicacion,
          costo,
          img,
          map,
        },
      }}
      className={classes.link}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={MainImg} className={classes.image} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={classes.typo}>
                <Typography color="textSecondary" variant="subtitle1" align="justify">
                  Descripción:
                </Typography>
                <Typography align="justify">
                  {descripcion}
                </Typography>
              </Grid>
              <Grid item container direction="column" justify="space-evenly" alignItems="center" xs={6} md={4} spacing={1}>
                <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                  <Grid item>
                    <BathtubIcon />
                  </Grid>
                  <Grid item>
                    <Typography>
                      {baños}
                      {' Baños'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                  <Grid item>
                    <HotelIcon />
                  </Grid>
                  <Grid item>
                    <Typography>
                      {cuartos}
                      {' Cuartos'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                  <Grid item>
                    <AspectRatioIcon />
                  </Grid>
                  <Grid item>
                    <Typography>
                      {metraje}
                      {' m2'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="column" justify="space-evenly" alignItems="center" xs={6} md={2}>
                {pis}
                {terr}
                {sag}
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="center" alingItems="space-around" direciton="row">
            <Grid item container>
              <Grid item>
                <LocationOnIcon />
              </Grid>
              <Grid item>
                <Typography>
                  {ubicacion}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <AttachMoneyIcon />
              </Grid>
              <Grid item>
                <Typography>
                  {costo}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Link>
  );
}

CardCasa.propTypes = {
  MainImg: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  img: PropTypes.array.isRequired,
  descripcion: PropTypes.string.isRequired,
  ubicacion: PropTypes.string.isRequired,
  costo: PropTypes.string.isRequired,
  baños: PropTypes.number.isRequired,
  cuartos: PropTypes.number.isRequired,
  metraje: PropTypes.number.isRequired,
  piscina: PropTypes.bool,
  terraza: PropTypes.bool,
  saguan: PropTypes.bool,
  map: PropTypes.string.isRequired,
};

CardCasa.defaultProps = {
  piscina: false,
  terraza: false,
  saguan: false,
};
