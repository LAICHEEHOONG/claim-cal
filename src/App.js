import React, { useState } from 'react';
import { Typography, TextField, Box, Stack } from '@mui/material';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [allPrice, setAllPrice] = useState({ p1: 0 });
  const [allClaim, setAllClaim] = useState({ c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 });
  const percentDrop = 0.7;

  const laptopPriceOnChange = (e) => {
    let price = Number(e.target.value);
    setAllPrice({ p1: price })
  }

  const claim1 = (e) => {
    let claimPrice = Number(e.target.value);
    setAllClaim({ ...allClaim, c1: claimPrice });
  }
  const claim2 = (e) => {
    let claimPrice = Number(e.target.value);
    setAllClaim({ ...allClaim, c2: claimPrice });
  }
  const claim3 = (e) => {
    let claimPrice = Number(e.target.value);
    setAllClaim({ ...allClaim, c3: claimPrice });
  }
  const claim4 = (e) => {
    let claimPrice = Number(e.target.value);
    setAllClaim({ ...allClaim, c4: claimPrice });
  }
  const claim5 = (e) => {
    let claimPrice = Number(e.target.value);
    setAllClaim({ ...allClaim, c5: claimPrice });
  }

  const cal1 = () => {
    return (allPrice.p1 - allClaim.c1).toFixed(1);
  }

  const cal2 = () => {
    let result = cal1() * percentDrop;
    return (result - allClaim.c2).toFixed(1);
  }
  const cal3 = () => {
    let result = cal2() * percentDrop;
    return (result - allClaim.c3).toFixed(1);
  }
  const cal4 = () => {
    let result = cal3() * percentDrop;
    return (result - allClaim.c4).toFixed(1);
  }
  const cal5 = () => {
    let result = cal4() * percentDrop;
    return (result - allClaim.c5).toFixed(1);
  }


  return (

    <div className="text-center app container">

      <main className="form-signin w-100 m-auto col-sm">

        <h1 className="h3 mb-3 fw-normal">Claim Calculator</h1>



        <Stack direction="row" justifyContent="space-between" sx={{ px: 2, py: 1, bgcolor: 'background.default' }}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 0, width: '30ch' },
            }}
            noValidate
            autoComplete="off"

          >
            <TextField
              id="outlined-basic" label="Laptop Price" variant="outlined" type="number"
              onChange={laptopPriceOnChange}
            />
            <div className='claim-list'>
              <Typography variant="h6" gutterBottom style={{ color: `${cal1() < 0 ? 'red' : 'black'}` }} >
                1st year claim price: {cal1()}
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: `${cal2() < 0 ? 'red' : 'black'}` }} >
                2st year claim price: {cal2()}
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: `${cal3() < 0 ? 'red' : 'black'}` }} >
                3st year claim price: {cal3()}
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: `${cal4() < 0 ? 'red' : 'black'}` }} >
                4st year claim price: {cal4()}
              </Typography>
              <Typography variant="h6" gutterBottom style={{ color: `${cal5() < 0 ? 'red' : 'black'}` }} >
                5st year claim price: {cal5()}
              </Typography>
            </div>
            <TextField
              onChange={claim1}
              id="outlined-basic" label="1st  Claim" variant="standard" type="number" />
            <TextField
              onChange={claim2}
              id="outlined-basic" label="2st  Claim" variant="standard" type="number" />
            <TextField
              onChange={claim3}
              id="outlined-basic" label="3st  Claim" variant="standard" type="number" />
            <TextField
              onChange={claim4}
              id="outlined-basic" label="4st  Claim" variant="standard" type="number" />
            <TextField
              onChange={claim5}
              id="outlined-basic" label="5st  Claim" variant="standard" type="number" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"

          >



          </Box>
        </Stack>
      </main>

    </div>

  )
}

export default App;
