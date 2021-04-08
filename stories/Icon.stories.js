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
    <Icons.Logo className="icons" />
    <Icons.LogoGetir className="icons" />
    <Icons.Plus className="icons" />
    <Icons.CheckCircle className="icons" />
    <Icons.Wastebasket className="icons" />
  </Box>
);
