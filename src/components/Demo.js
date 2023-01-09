import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function SwipeableTextMobileStepper() {
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
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.linkImg}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Typography>{images[activeStep].stock}</Typography>
        <Typography>{images[activeStep].category}</Typography>
      <MobileStepper
      variant="dots"
        steps={2}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;