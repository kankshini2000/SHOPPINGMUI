import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {data} from './data'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const images = [
    {
      id: 1,
      title: 'Decorative Candle',
      stock:'INSTOCK',
      category: 'Decorative candle starting at Rs199',
      linkImg:require("../images/decor.jpg")
    },
    {
      id: 2,
      title: 'Cushion',
      stock:'INSTOCK',
      category: 'Cushion starting at Rs199',
      linkImg:require("../images/cushion.avif")
    },
    {
      id: 3,
      title: 'Plants and Flowers',
      stock:'INSTOCK',
      category: 'Plants and flower starting at Rs199',
      linkImg:require("../images/plants&flowers.avif")
    },
    {
      id: 4,
      title: 'BedSheets',
      stock:'INSTOCK',
      category: 'BedSheets starting at Rs199',
      linkImg:require("../images/BedSheets.avif")
    },
    {
      id: 5,
      title: 'Serve Ware',
      stock:'INSTOCK',
      category: 'Serve ware starting at Rs199',
      linkImg:require("../images/serve-ware.avif")
    },
    {
      id: 6,
      title: 'Candle',
      stock:'INSTOCK',
      category: 'Candle starting at Rs199',
      linkImg:require("../images/candle.avif")
    },
  ];
  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <Grid container spacing={4}>
        <Grid item xs>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
  );
}