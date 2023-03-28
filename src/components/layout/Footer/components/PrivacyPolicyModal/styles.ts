import styled from 'styled-components';
import { motion } from 'framer-motion';

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
