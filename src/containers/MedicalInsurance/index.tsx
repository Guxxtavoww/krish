import React, { memo } from 'react';

import { serviceArray } from '@/assets';
import { ContainerWrapper } from '@/components';

import { InsurancesArrayContainer, Insurance } from './styles';

const MedicalInsurance: React.FC = () => (
  <>
    <h2 className="container_title">Convênios que aceitamos</h2>
    <InsurancesArrayContainer>
      {serviceArray.map((service, index) => (
        <Insurance
          src={service}
          alt={`Convênio ${index}`}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.15 + (index - 0.75) }}
          key={index}
        />
      ))}
    </InsurancesArrayContainer>
  </>
);

export default memo(
  ContainerWrapper({
    element: MedicalInsurance,
    id: 'insurances',
    isAnimated: true,
  })
);
