import './index.css';
import { Grid, Paper, Typography } from '@material-ui/core';

/**
 * Product Info component
 * @returns JSX for displaying the Product's properties
 */
const ProductInfo = () => {
  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img
              src="https://dummyimage.com/500x500/000/0011ff"
              alt="Levi's 501 Original Fit Jeans Jeans para Hombre"
            />
          </Paper>
        </Grid>
        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              Levi's 501 Original Fit Jeans Jeans para Hombre
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>
              100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte
              ajustado, Pierna ajustada, Stretch especial que te brinda mayor
              movilidad
            </Typography>
          </Grid>
          <Grid container item lg={4} direction="row">
            <Typography className="productColor">Color</Typography>
            <Typography>Dark Stonewash</Typography>
          </Grid>
          <Grid container item lg={4} direction="row">
            <Typography className="productSize">Talla</Typography>
            <Typography>29W X 32L</Typography>
          </Grid>
          <Grid container item lg={4} direction="row">
            <Typography className="productQty">Cantidad disponible</Typography>
            <Typography>200</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">1027.24</Typography>
          </Grid>
          <Grid container item lg={2} direction="row">
            <Typography>Oferta!</Typography>
            <Typography className="dollars">706.93</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;
