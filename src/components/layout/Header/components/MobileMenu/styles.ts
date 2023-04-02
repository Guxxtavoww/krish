import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';

import { MAIN_COLOR } from '@/styles/constants';

export const MobileMenuContainer = styled.div<{ isMenuOpen: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  overflow: ${(props) => (props.isMenuOpen ? 'visible' : 'hidden')};

  .invisible-block {
    visibility: none;
    opacity: 0;
  }
`;

export const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  z-index: 10;
`;

export const MobileMenuInnerWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content !important;
  gap: 2rem;
`;

export const MobileLogoContainer = styled(Link)`
  width: 100%;
  max-width: 200px;
  height: 100px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const MobileLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const MobileLink = styled(Link)`
  position: relative;
  color: ${MAIN_COLOR};
  font-weight: 600;
  font-size: 18px;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100px;
    height: 1px;
    background-color: ${MAIN_COLOR};
  }

  &:hover {
    opacity: 0.85;
  }
`;

export const ExitButton = styled(Button)`
  width: 100% !important;
  max-width: 670px;
  background-color: transparent !important;
  border: 1px solid ${MAIN_COLOR} !important;
  color: ${MAIN_COLOR} !important;
  border-radius: 6px !important;
  font-weight: 600;
  font-size: 14px;
  transition: 0.25s ease;
  text-align: center !important;
  padding: 8px 8px !important;

  &:hover {
    background-color: ${MAIN_COLOR} !important;
    color: #fff !important;
  }
`;
