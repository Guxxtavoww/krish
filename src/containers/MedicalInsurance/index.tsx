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
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.75 + index }}
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
