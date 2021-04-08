import React from 'react';

//components - styled-system
import Box from '../components/StyledSystem/box';

//components - icons
import * as Icons from '../components/Icons';

export default {
  title: 'Icons',
};

export const Primary = () => (
  <Box>
    <Icons.Logo className="icon" />
    <Icons.LogoGetir className="icon" />
    <Icons.Plus className="icon" />
    <Icons.CheckCircle className="icon" />
    <Icons.Wastebasket className="icon" />
  </Box>
);
