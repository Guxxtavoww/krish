import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconButton } from '@mui/material';

import { MAIN_COLOR } from '@/styles/constants';

import { iPopUpProps } from './types';

export const PopUpOverlay = styled(motion.div)`
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

export const PopUpContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 520px;
  border-radius: 10px;
  background-color: #fff;

  & > div {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const CloseButton = styled(IconButton)<{
  currenttheme: iPopUpProps['type'];
}>`
  position: absolute;
  top: -20px;
  right: -95%;
  width: 40px !important;
  height: 40px !important;
  border-radius: 8px !important;
  z-index: 5;
  background-color: ${(props) =>
    props.currenttheme === 'phone' ? MAIN_COLOR : '#fff'} !important;
`;
