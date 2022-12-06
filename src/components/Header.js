import * as React from 'react';
import '../css/header.css'
import { Link, Typography ,Box} from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Typography variant='h5' align='center' className='header'>
        <Link color={'white'}href='https://google.com' underline='none'>
        Get 20% off* on delivery charges-limited period offer!
        </Link>
    </Typography>

    
  );
}