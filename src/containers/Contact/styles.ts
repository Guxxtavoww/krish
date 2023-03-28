import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MAIN_BG } from '@/styles/constants';

export const ContactContainer = styled.section`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${MAIN_BG};
`;

export const ContactInnerContainer = styled(motion.div)`
  padding: 30px;
  border-radius: 15px;
  background-color: #e7e7e7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;
