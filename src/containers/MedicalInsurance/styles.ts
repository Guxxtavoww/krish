import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InsurancesArrayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
`;

export const Insurance = styled(motion.img)`
  max-width: 258px;
  min-height: 258px;
  object-fit: cover;
  border-radius: 5px;
`;
