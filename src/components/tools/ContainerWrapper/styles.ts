import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MAIN_BG, MAIN_TEXT_COLOR } from '@/styles/constants';

export const ContainerWrapperContainer = styled(motion.section)`
  position: relative;
  min-width: 100vw;
  height: fit-content;
  padding: 2rem 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: ${MAIN_BG};
  gap: 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 93%;
    height: 1px;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
  }

  h2.container_title {
    text-align: left;
    font-size: clamp(14px, 5vmin, 30px);
    color: ${MAIN_TEXT_COLOR};
    font-weight: 300;
  }

  @media screen and (max-width: 661px) {
    gap: 1.5rem;
    padding: 1rem 20px;
  }
`;
