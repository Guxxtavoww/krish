import { Button } from '@mui/material';
import styled from 'styled-components';

import { MAIN_COLOR, MAIN_TEXT_COLOR } from '@/styles/constants';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  & > * {
    flex: 1;
  }
`;

export const AboutImageContainer = styled.div`
  max-width: 100%;
  display: grid;
  place-items: center;

  img {
    max-width: 336px;
    object-fit: cover;
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
  max-width: 100%;

  p.content_text {
    font-size: 1.05em;
    font-weight: 500;
    line-height: 1.65em;
    text-align: justify;
    color: ${MAIN_TEXT_COLOR};
  }

  @media screen and (max-width: 1680px) {
    align-items: center;
    padding-right: 0;
    gap: 2rem;
    width: 100%;
    padding: 0 8px;
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
