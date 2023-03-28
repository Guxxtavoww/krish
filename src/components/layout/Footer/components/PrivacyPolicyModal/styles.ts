import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';

import { MAIN_COLOR } from '@/styles/constants';

export const PrivacyPolicyModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: rgba(0, 0, 0, 0.733);
  width: 100vw;
  min-height: 100vh;

  @media screen and (max-width: 680px) {
    overflow-y: scroll;
  }
`;

export const PrivacyPolicyModalContainer = styled(motion.div)`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.75rem;
  height: 850px;
  width: 100%;
  max-width: 500px;
`;

export const CloseModalButton = styled(IconButton)`
  position: absolute !important;
  background-color: ${MAIN_COLOR} !important;
  border-radius: 5px !important;
  color: #fff !important;
  top: 10px;
  right: 10px;
  height: 30px !important;
  width: 30px !important;
`;

export const PrivacyPolicyModalContent = styled.div`
  position: top;
  left: 0;
  top: 40px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: inherit;
  padding: 10px;
`;
