import React, { memo } from 'react';

import { ContainerWrapper } from '@/components';

import { Slider } from './components';

const Procedures: React.FC = () => (
  <>
    <h2 className="container_title">Procedimentos estéticos e tratamentos:</h2>
    <Slider />
  </>
);

export default memo(
  ContainerWrapper({ element: Procedures, id: 'specialties', isAnimated: true })
);
