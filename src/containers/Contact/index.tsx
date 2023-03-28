import React, { memo } from 'react';
import { MdLocationCity } from 'react-icons/md';

import { TargetBlankLink } from '@/components';
import { contact_image, instagram_icon } from '@/assets';
import { MAIN_TEXT_COLOR } from '@/styles/constants';

import {
  ContactContainer,
  ContactInnerContainer,
  ContactWrapper,
  LocationButton,
} from './styles';

const Contact: React.FC = () => (
  <ContactContainer id="contact">
    <ContactInnerContainer
      whileInView={{ opacity: [0, 1], scale: [0.75, 1] }}
      transition={{ delay: 0.25 }}
    >
      <ContactWrapper>
        <h2 className="title">Agende sua avaliação!</h2>
        <h3 className="subtitle">Edifício Affinity Home Work</h3>
        <p className="address_box">
          <MdLocationCity fill={MAIN_TEXT_COLOR} />
          Rua José Alexandre Buaiz, 350 - Enseada Do Sua, Vitória - ES |
          29050-545s
        </p>
        <TargetBlankLink href="https://www.instagram.com/drakrishnasandoval/">
          <img src={instagram_icon} alt="Insta Icon" loading="lazy" />
        </TargetBlankLink>
        <LocationButton type="button">
          <TargetBlankLink href="https://goo.gl/maps/DnPxuYaeWz98hQqF9">Ver no mapa</TargetBlankLink>
        </LocationButton>
      </ContactWrapper>
      <ContactWrapper isImageContainer>
        <img src={contact_image} alt="Contact Image" loading="lazy" />
      </ContactWrapper>
    </ContactInnerContainer>
  </ContactContainer>
);

export default memo(Contact);
