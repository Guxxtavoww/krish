import { Link } from 'react-scroll';
import styled from 'styled-components';
import { IconButton } from '@mui/material';

import { MAIN_COLOR, MAIN_TEXT_COLOR } from '@/styles/constants';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 120px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease;
  z-index: 5;

  @media screen and (max-width: 991px) {
    max-height: 65px;
  }
`;

export const InnerContent = styled.div`
  width: 100%;
  background-color: inherit;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    padding: 0 1rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  flex-grow: 1;
`;

export const HeaderLink = styled(Link)`
  color: ${MAIN_COLOR};
  font-weight: 400;
  font-size: 14px;
  transition: ease 0.1s;
  text-align: center;

  &:hover {
    font-weight: 700;
  }
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContactButton = styled(IconButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px !important;

  .label {
    color: ${MAIN_TEXT_COLOR};
    font-size: 12px;
    font-weight: 500;
  }
`;
