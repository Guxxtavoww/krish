import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { MAIN_BG, MAIN_COLOR, MAIN_TEXT_COLOR } from '@/styles/constants';
import { Button } from '@mui/material';

export const ContactContainer = styled.section`
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${MAIN_BG};
  @media screen and (max-width: 991px) {
    padding: 2rem 10px;
  }
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
  max-width: 100%;
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
          gap: 2.5rem;
          padding: 1.25rem 0;
          .address_box {
            margin-top: 1rem;
            display: inline-flex;
            align-items: flex-end;
            text-align: justify;
            gap: 5px;
            svg {
              width: 1.5em;
              height: 1.5em;
            }
          }
        `}

  h2.title, 
  h3.subtitle {
    font-weight: 400;
    text-align: left;
  }

  h3.subtitle {
    font-size: clamp(1.25rem, 5vmin, 22px);
  }

  h2.title {
    font-size: clamp(1.25rem, 5vmin, 30px);
  }

  @media screen and (max-width: 991px) {
    align-items: center;
    justify-content: center;
  }
`;

export const LocationButton = styled(Button)`
  background-color: ${MAIN_COLOR} !important;
  color: #fff !important;
  text-transform: capitalize !important;
  font-size: 1.025em !important;
  font-weight: 600 !important;
  padding: 6px 14px !important;
  margin-top: 1em !important;

  a {
    color: #fff;
  }
`;
