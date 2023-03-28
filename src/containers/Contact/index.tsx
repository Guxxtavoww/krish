import React, { memo, useState } from 'react';

import { PopUp } from '@/components';
import { contact_image } from '@/assets';

import {
  ContactContainer,
  ContactInnerContainer,
  ContactWrapper,
} from './styles';

const Contact: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactContainer id="contact">
        <ContactInnerContainer
          whileInView={{ opacity: [0, 1], scale: [0.75, 1] }}
          transition={{ delay: 0.25 }}
        >
          <ContactWrapper>
            <h2 className="title">Agende sua avaliação!</h2>
            <h3 className="subtitle">Edifício Affinity Home Work</h3>
          </ContactWrapper>
          <ContactWrapper isImageContainer>
            <img src={contact_image} alt="Contact Image" />
          </ContactWrapper>
        </ContactInnerContainer>
      </ContactContainer>
      <PopUp
        handleClose={() => setIsContactModalOpen(false)}
        isOpen={isContactModalOpen}
        closeWhenClickOutside
        type="whatsapp"
      />
    </>
  );
};

export default memo(Contact);
