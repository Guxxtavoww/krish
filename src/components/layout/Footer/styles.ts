import styled from 'styled-components';

import { MAIN_TEXT_COLOR } from '@/styles/constants';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 8px 2rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .logo_box :nth-child(1) {
    margin-bottom: 10px;
  }

  button,
  a,
  span {
    color: ${MAIN_TEXT_COLOR};
    font-size: 12px;
    cursor: pointer;
    background-color: transparent;
  }
`;
