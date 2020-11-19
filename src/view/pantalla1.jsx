import {
  Grid, makeStyles, TextField, InputAdornment, FormControl, Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TuneIcon from '@material-ui/icons/Tune';
import React from 'react';
import Filtro from '../components/filtro';
import CardCasas from '../components/card';
import casas from '../data/casas.json';

const useStyles = makeStyles(() => ({
  gridCard: {
    alignItems: 'center',
  },
  filterButton: {
    height: '55px',
  },
  filterTextbox: {
    marginLeft: '15px',
  },
}));

export default function pantalla1() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Casas] = React.useState(casas);
  // eslint-disable-next-line no-console
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const tarjeta = Casas.map((element) => (
    <Grid item md={6} xs={12}>
      <center>
        <CardCasas
          key={element.id}
          MainImg={element.MainImg}
          baños={element.baños}
          cuartos={element.cuartos}
          metraje={element.metraje}
          descripcion={element.descripcion}
          ubicacion={element.ubicacion}
          costo={element.costo}
          piscina={element.piscina}
          terraza={element.terraza}
          saguan={element.saguan}
          img={element.img}
          map={element.map}
        />
      </center>
    </Grid>
  ));

  return (
    <Grid container direction="row" spacing={2} justify="center" alignItems="center">
      <Grid item xs={9} md={9}>
        <FormControl fullWidth>
          <TextField
            id="search"
            label="Buscar..."
            variant="outlined"
            className={classes.filterTextbox}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={3} md={3}>
        <Button variant="outlined" size="large" className={classes.filterButton} onClick={handleClickOpen} startIcon={<TuneIcon fontSize="large" />}> Filtros </Button>
      </Grid>
      {tarjeta}
      <Filtro open={open} handleClose={handleClose} />
    </Grid>
  );
}
