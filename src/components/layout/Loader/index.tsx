import React from 'react';
import { CircularProgress } from '@mui/material';

import { MAIN_COLOR } from '@/styles/constants';

const Loader: React.FC = () => (
  <div style={{ color: MAIN_COLOR }}>
    <CircularProgress
      style={{
        maxWidth: '80px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      color="inherit"
    />
  </div>
);

export default Loader;
