import React from 'react';
import {
  FormControl, makeStyles, Button, Grid, TextField, InputAdornment,
} from '@material-ui/core/';
import PropTypes from 'prop-types';
// dialogo
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  filterElements: {
    margin: '20px',
    minWidth: '80%',
  },
  textField: {
    maxWidth: '80%',
  },
  margin: {
    margin: '20px',
  },
}));

export default function Filtro({ open, handleClose }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose} keepMounted fullWidth>
      <DialogTitle>Elegir Filtros </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Favor de elegir los filtros de su búsqueda.
        </DialogContentText>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Grid item xs={12} md={4}>
            <FormControl className={classes.filterElements}>
              <InputLabel>Habitaciones</InputLabel>
              <Select>
                <MenuItem value={1}>1 Cuarto</MenuItem>
                <MenuItem value={2}>2 Cuarto</MenuItem>
                <MenuItem value={3}>3 Cuarto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.filterElements}>
              <InputLabel>Baños</InputLabel>
              <Select>
                <MenuItem value={1}>1 Baño</MenuItem>
                <MenuItem value={2}>2 Baño</MenuItem>
                <MenuItem value={3}>3 Baño</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.filterElements}>
              <InputLabel>Metraje</InputLabel>
              <Select>
                <MenuItem value={1}>200 m2</MenuItem>
                <MenuItem value={2}>300 m2</MenuItem>
                <MenuItem value={3}>400 m2</MenuItem>
                <MenuItem value={4}>500 m2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl>
              <FormControlLabel control={<Checkbox />} label="Piscina" className={classes.filterElements} />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl>
              <FormControlLabel control={<Checkbox />} label="Terraza" className={classes.filterElements} />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl>
              <FormControlLabel control={<Checkbox />} label="Sagúan" className={classes.filterElements} />
            </FormControl>
          </Grid>
          <Grid container item xs={6} md={3} justify="center">
            <Typography className={classes.margin}> Precio de: </Typography>
          </Grid>
          <Grid container item xs={6} md={3} justify="center">
            <TextField
              id="MinPrecio"
              label="Valor Min"
              size="small"
              variant="outlined"
              className={classes.textField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={6} md={1} justify="center">
            <Typography className={classes.margin}> a: </Typography>
          </Grid>
          <Grid container item xs={6} md={3} justify="center">
            <TextField
              id="MaxPrecio"
              label="Valor Max"
              size="small"
              variant="outlined"
              className={classes.textField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={6} md={6} justify="center">
            <FormControlLabel
              control={<Switch />}
              label="Venta"
            />
          </Grid>
          <Grid container item xs={6} md={6} justify="center">
            <FormControlLabel
              control={<Switch />}
              label="Renta"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Filtro.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
