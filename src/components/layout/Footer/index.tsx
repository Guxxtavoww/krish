import React, { useState } from 'react';

import { TargetBlankLink } from '@/components';

import Logo from '../Logo';
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <FooterContainer>
      <button type="button" onClick={() => setIsPrivacyPolicyOpen(true)}>
        Política de Privacidade
      </button>
      <div className="logo_box">
        <Logo />
        <span>@{new Date().getFullYear()} Todos os direitos reservados</span>
      </div>
      <TargetBlankLink href="https://portfolio-gustavo-augusto.netlify.app/">
        Desenvolvido por Gustavo
      </TargetBlankLink>
    </FooterContainer>
  );
};

export default Footer;
