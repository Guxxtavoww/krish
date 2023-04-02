import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { ClickAwayListener, IconButton } from '@mui/material';

import { mobile_header_logo } from '@/assets';
import { MAIN_COLOR } from '@/styles/constants';

import Logo from '../../../Logo';
import { header_links } from '../../utils/header_links';
import {
  MobileMenuContainer,
  MobileMenuWrapper,
  MobileMenuInnerWrapper,
  MobileLink,
  MobileLinksContainer,
  MobileLogoContainer,
  ExitButton,
} from './styles';
import { AnimatePresence } from 'framer-motion';

const MobileMenu: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickLink = () => setIsMobileMenuOpen(false);

  return (
    <>
      <MobileMenuContainer isMenuOpen={isMobileMenuOpen}>
        <IconButton
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
        >
          <RiMenu3Fill fill={MAIN_COLOR} />
        </IconButton>
        <Logo />
        <div className="invisible-block" />
      </MobileMenuContainer>
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <MobileMenuWrapper
            animate={{ scale: [0.85, 1], opacity: [0, 1] }}
            exit={{ scale: [1, 0.85], opacity: [1, 0] }}
          >
            <ClickAwayListener onClickAway={handleClickLink}>
              <MobileMenuInnerWrapper>
                <MobileLogoContainer to="#root" onClick={handleClickLink}>
                  <img src={mobile_header_logo} alt="header_mobile_logo" />
                </MobileLogoContainer>
                <MobileLinksContainer>
                  {header_links.map((link, index) => (
                    <MobileLink
                      to={link.to}
                      key={index}
                      onClick={handleClickLink}
                    >
                      {link.label}
                    </MobileLink>
                  ))}
                </MobileLinksContainer>
                <ExitButton onClick={handleClickLink}>Fechar Menu</ExitButton>
              </MobileMenuInnerWrapper>
            </ClickAwayListener>
          </MobileMenuWrapper>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
