import React, { memo } from 'react';
import { MdLocationCity } from 'react-icons/md';

import { contact_image, instagram_icon } from '@/assets';
import { FCWithChildren, iLinkProps } from '@/types';

import {
  ContactContainer,
  ContactInnerContainer,
  ContactWrapper,
  LocationButton,
} from './styles';
import { MAIN_TEXT_COLOR } from '@/styles/constants';

const Link: FCWithChildren<iLinkProps, true> = ({ children }) => (
  <a
    href="https://goo.gl/maps/DnPxuYaeWz98hQqF9"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

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
          29050-545
        </p>
        <Link href="https://www.instagram.com/drakrishnasandoval/">
          <img src={instagram_icon} alt="Insta Icon" />
        </Link>
        <LocationButton type="button">
          <Link href="https://goo.gl/maps/DnPxuYaeWz98hQqF9">Ver no mapa</Link>
        </LocationButton>
      </ContactWrapper>
      <ContactWrapper isImageContainer>
        <img src={contact_image} alt="Contact Image" />
      </ContactWrapper>
    </ContactInnerContainer>
  </ContactContainer>
);

export default memo(Contact);
