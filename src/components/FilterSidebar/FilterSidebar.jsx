import React from 'react';

import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Box,
  TextField,
  Label,
  FormHelperText,
} from '@mui/material';

import {
  StyledFilterBlock,
  StyledFilterContainer,
  Button,
} from './FilterSidebar.styled';

const FilterSidebar = ({ setSelectedBrand }) => {
  return (
    <StyledFilterBlock>
      <StyledFilterContainer>
        <FormControl sx={{ m: 1, minWidth: 224 }}>
          <InputLabel id="car-brand-label">Car brand</InputLabel>
          <Select
            labelId="car-brand-label"
            id="car-brand"
            // value={age}
            label="Car brand"
            onChange={e =>
              console.log('e.currentTarget', e.currentTarget.value)
            }
          >
            <MenuItem value="">Enter the text</MenuItem>
            <MenuItem value={'Buick'}>Buick</MenuItem>
            <MenuItem value={'Volvo'}>Volvo</MenuItem>
            <MenuItem value={'HUMMER'}>HUMMER</MenuItem>
            <MenuItem value={'Subaru'}>Subaru</MenuItem>
            <MenuItem value={'Mitsubishi'}>Mitsubishi</MenuItem>
            <MenuItem value={'Nissan'}>Nissan</MenuItem>
            <MenuItem value={'Lincoln'}>Lincoln</MenuItem>
            <MenuItem value={'GMC'}>GMC</MenuItem>
            <MenuItem value={'Hyundai'}>Hyundai</MenuItem>
            <MenuItem value={'MINI'}>MINI</MenuItem>
            <MenuItem value={'Bentley'}>Bentley</MenuItem>
            <MenuItem value={'Mercedes-Benz'}>Mercedes-Benz</MenuItem>
            <MenuItem value={'Aston Martin'}>Aston Martin</MenuItem>
            <MenuItem value={'Pontiac'}>Pontiac</MenuItem>
            <MenuItem value={'Lamborghini'}>Lamborghini</MenuItem>
            <MenuItem value={'Audi'}>Audi</MenuItem>
            <MenuItem value={'BMW'}>BMW</MenuItem>
            <MenuItem value={'Chevrolet'}>Chevrolet</MenuItem>
            <MenuItem value={'Chrysler'}>Chrysler</MenuItem>
            <MenuItem value={'Kia'}>Kia</MenuItem>
            <MenuItem value={'Land'}>Land</MenuItem>
          </Select>
          <FormHelperText>Brand</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 125 }}>
          <InputLabel id="price-label">Price/1hour</InputLabel>
          <Select
            labelId="price-label"
            id="price"
            // value={price}
            label="Price/1hour"
            // onChange={e => setPrice(e.target.value)}
          >
            <MenuItem value="">To $</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={60}>60</MenuItem>
            <MenuItem value={70}>70</MenuItem>
            <MenuItem value={80}>80</MenuItem>
          </Select>
          <FormHelperText>Price</FormHelperText>
        </FormControl>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            sx={{
              width: 150,
            }}
            id="outlined-basic"
            label="From"
            variant="outlined"
            helperText="Сar mileage / km"
          />
          <TextField
            sx={{
              width: 150,
            }}
            id="outlined-basic"
            label="To"
            variant="outlined"
          />
        </Box>
        <Button type="submit">Search</Button>
      </StyledFilterContainer>
    </StyledFilterBlock>
  );
};

export default FilterSidebar;
