import { MAIN_COLOR } from '@/styles/constants';
import React from 'react';
import { HiPhone } from 'react-icons/hi';

import { PhoneContainer, PhoneHeader, PhoneBody } from './styles';

const Phone: React.FC = () => {
  return (
    <PhoneContainer>
      <PhoneHeader>
        <h2>Entre em contato conosco através do nosso telefone:</h2>
      </PhoneHeader>
      <PhoneBody>
        <a href="tel:(27) 3500-1899">
          <span>Vamos Conversar?</span>
          <div className="desc">
            <HiPhone fill={MAIN_COLOR} width="16px" height="16px" />
            (27) 3500-1899
          </div>
        </a>
      </PhoneBody>
    </PhoneContainer>
  );
};

export default Phone;
