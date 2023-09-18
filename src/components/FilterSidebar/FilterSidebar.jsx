import React from 'react';

import { InputLabel, Select, FormControl, MenuItem } from '@mui/material';

import {
  StyledFilterBlock,
  StyledFilterContainer,
} from './FilterSidebar.styled';

const FilterSidebar = () => {
  return (
    <StyledFilterBlock>
      <StyledFilterContainer>
        <FormControl fullWidth>
          <InputLabel id="car-brand-label">Car brand</InputLabel>
          <Select
            labelId="car-brand-label"
            id="car-brand"
            // value={age}
            label="Car brand"
            // onChange={handleChange}
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
        </FormControl>
      </StyledFilterContainer>
    </StyledFilterBlock>
  );
};

export default FilterSidebar;
