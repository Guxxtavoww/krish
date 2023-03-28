import React, { memo } from 'react';

import { ContactContainer, ContactInnerContainer } from './styles';

const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <ContactInnerContainer
        whileInView={{ opacity: [0, 1], scale: [0.75, 1] }}
        transition={{ delay: 0.25 }}
      >
        <div className="a"></div>
      </ContactInnerContainer>
    </ContactContainer>
  );
};

export default memo(Contact);
