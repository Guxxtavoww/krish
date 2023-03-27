import React, { useState } from 'react';

import { PopUp } from '@/components';
import { useMobile } from '@/contexts/Mobile';

import { DefaultMenu, MobileMenu } from './components';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const { isMobileDevice } = useMobile();

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isPhoneContactModalOpen, setIsPhoneContactModalOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        {!isMobileDevice ? (
          <DefaultMenu
            setIsWhatsAppModalOpen={setIsWhatsAppModalOpen}
            setIsPhoneContactModalOpen={setIsPhoneContactModalOpen}
          />
        ) : (
          <MobileMenu />
        )}
      </HeaderContainer>
      <PopUp
        isOpen={isWhatsAppModalOpen}
        handleClose={() => setIsWhatsAppModalOpen(false)}
        closeWhenClickOutside
        type="whatsapp"
      />
      <PopUp
        isOpen={isPhoneContactModalOpen}
        handleClose={() => setIsPhoneContactModalOpen(false)}
        closeWhenClickOutside
      />
    </>
  );
};

export default Header;
