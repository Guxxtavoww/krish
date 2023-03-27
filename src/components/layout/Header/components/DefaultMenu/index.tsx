import React from 'react';
import { HiPhone } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';

import { WHATSAPP_BUTTON_BG } from '@/styles/constants';

import { header_links } from '../../utils/header_links';
import Logo from '../Logo';
import {
  InnerContent,
  HeaderLink,
  LinksContainer,
  ContactButton,
  ContactButtonContainer,
} from '../../styles';
import { iMenuProps } from '../../types';

const DefaultMenu: React.FC<iMenuProps> = ({
  setIsWhatsAppModalOpen,
  setIsPhoneContactModalOpen,
}) => (
  <InnerContent>
    <Logo />
    <LinksContainer>
      {header_links.map((link, index) => (
        <HeaderLink to={link.to} key={index}>
          {link.label}
        </HeaderLink>
      ))}
    </LinksContainer>
    <ContactButtonContainer>
      <ContactButton onClick={() => setIsWhatsAppModalOpen(true)}>
        <BsWhatsapp fill={WHATSAPP_BUTTON_BG} />
        <span className="label">Whatsapp</span>
      </ContactButton>
      <ContactButton onClick={() => setIsPhoneContactModalOpen(true)}>
        <HiPhone />
        <span className="label">Telefone</span>
      </ContactButton>
    </ContactButtonContainer>
  </InnerContent>
);

export default DefaultMenu;
