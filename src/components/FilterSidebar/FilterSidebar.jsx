import React, { useState } from 'react';

import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Box,
  TextField,
  FormHelperText,
} from '@mui/material';

import {
  StyledFilterBlock,
  StyledFilterContainer,
  StyledBox,
  Button,
} from './FilterSidebar.styled';

import brands from './listOfBrands.json';
import prices from './listOfValues.json';

const FilterSidebar = ({
  setSelectedBrand,
  selectedBrand,
  setPrice,
  price,
  setFrom,
  from,
  setTo,
  to,
  handleFilter,
}) => {
  const [formatedTo, setFormatedTo] = useState('');
  const [formatedFrom, setFormatedFrom] = useState('');

  const onChangeTo = e => {
    const temtTo = e.target.value.replaceAll(',', '');
    setTo(temtTo);
    let tempFormatedTo = new Intl.NumberFormat('en-US').format(temtTo);
    if (tempFormatedTo === '0') {
      tempFormatedTo = '';
    }
    setFormatedTo(tempFormatedTo);
  };

  const onChangeFrom = e => {
    const temtFrom = e.target.value.replaceAll(',', '');
    setFrom(temtFrom);
    let tempFormatedFrom = new Intl.NumberFormat('en-US').format(temtFrom);
    if (tempFormatedFrom === '0') {
      tempFormatedFrom = '';
    }
    setFormatedFrom(tempFormatedFrom);
  };

  return (
    <StyledFilterBlock>
      <StyledFilterContainer>
        <FormControl sx={{ m: 1, minWidth: 224 }}>
          <InputLabel id="car-brand-label">Car brand</InputLabel>
          <Select
            labelId="car-brand-label"
            id="car-brand"
            value={selectedBrand}
            label="Car brand"
            onChange={e => setSelectedBrand(e.target.value)}
          >
            <MenuItem value="">Enter the text</MenuItem>
            {brands.map(brand => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Brand</FormHelperText>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 125 }}>
          <InputLabel id="price-label">Price/1hour</InputLabel>
          <Select
            labelId="price-label"
            id="price"
            value={price}
            label="Price/1hour"
            onChange={e => setPrice(e.target.value)}
          >
            <MenuItem value="">To $</MenuItem>
            {prices.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Price</FormHelperText>
        </FormControl>

        <StyledBox component="form" noValidate autoComplete="off">
          <TextField
            sx={{ m: 1, width: 150 }}
            id="outlined-basic"
            label="From"
            variant="outlined"
            helperText="Сar mileage / km"
            value={formatedFrom}
            onChange={onChangeFrom}
          />
          <TextField
            sx={{
              m: 1,
              width: 150,
            }}
            id="outlined-basic"
            label="To"
            variant="outlined"
            value={formatedTo}
            onChange={onChangeTo}
          />
        </StyledBox>
        <Button type="button" onClick={handleFilter}>
          Search
        </Button>
      </StyledFilterContainer>
    </StyledFilterBlock>
  );
};

export default FilterSidebar;
