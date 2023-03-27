import React, { memo } from 'react';

import { ContainerWrapper } from '@/components';
import { diferentialsArray } from '@/assets';

import { DifferentialContainer, DifferentialsContainer } from './styles';

const Differentials: React.FC = () => (
  <>
    <h2 className="container_title">Diferenciais</h2>
    <DifferentialsContainer>
      {diferentialsArray.map((dif, index) => (
        <DifferentialContainer key={index}>
          <div className="icon_container">
            <img src={dif.icon} alt={`${dif.title} Icon`} loading="lazy" />
          </div>
          <div className="content_container">
            <h3 className="title">{dif.title}</h3>
            <p className="content">{dif.content}</p>
          </div>
        </DifferentialContainer>
      ))}
    </DifferentialsContainer>
  </>
);

export default memo(
  ContainerWrapper({
    element: Differentials,
    id: 'differentials',
    isAnimated: true,
  })
);
