import styled, { css } from 'styled-components';

import { WHATSAPP_BUTTON_BG } from '@/styles/constants';

export const InputContainer = styled.div<{ hasLabel: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${(props) =>
    !props.hasLabel &&
    css`
      gap: 10px;
    `}

  input {
    width: 100%;
    max-width: 260px;
    padding: 16px 5px 16px 15px;
    border-radius: 12px;
    font-size: 13px;
    transition: 0.25s ease;
    background: transparent;
    background-color: #fff;
    border: 1.5px solid transparent;

    &:hover,
    &:focus {
      border-color: ${WHATSAPP_BUTTON_BG};
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
