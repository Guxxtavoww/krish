import { Button } from '@mui/material';
import styled from 'styled-components';

import { MAIN_COLOR, MAIN_TEXT_COLOR } from '@/styles/constants';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;

  @media screen and (max-width: 1680px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const AboutImageContainer = styled.div`
  display: grid;
  place-items: center;

  img {
    max-width: 336px;
    /* object-fit: cover; */
  }
`;

export const AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
  padding-right: 3rem;

  p.content_text {
    font-size: 1em;
    font-weight: 500;
    line-height: 1.65em;
    text-align: justify;
    color: ${MAIN_TEXT_COLOR};
  }

  @media screen and (max-width: 1680px) {
    align-items: center;
    padding-right: 0;
    gap: 2rem;
  }
`;

export const AboutButton = styled(Button)`
  background-color: ${MAIN_COLOR} !important;
  color: #fff !important;
  text-align: center !important;
  width: 100% !important;
  max-width: 335px !important;
  font-weight: 400 !important;
  text-transform: capitalize !important;
  padding: 0.55em 0 !important;
  font-size: 1rem !important;
  transition: 0.25s ease !important;

  &:hover {
    opacity: 0.8 !important;
  }
`;
