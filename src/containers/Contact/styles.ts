import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { MAIN_BG, MAIN_TEXT_COLOR } from '@/styles/constants';

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
  min-height: 475px;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const ContactWrapper = styled.div<{ isImageContainer?: boolean }>`
  display: flex;
  color: ${MAIN_TEXT_COLOR};
  ${(props) =>
    props.isImageContainer
      ? css`
          justify-content: flex-start;
          align-items: flex-end;
          img {
            max-width: 100%;
            object-fit: cover;
          }
        `
      : css`
          align-items: flex-start;
          flex-direction: column;
          gap: 1.25rem;
          padding: 1.25rem 0;
        `}

  h2.title {
    font-size: clamp(1.25rem, 5vmin, 30px);
    font-weight: 400;
    text-align: left;
  }

  h3.subtitle {
    font-size: clamp(1.25rem, 5vmin, 22px);
    font-weight: 400;
    text-align: left;
  }

  @media screen and (max-width: 991px) {
    align-items: center;
    justify-content: center;
  }
`;
