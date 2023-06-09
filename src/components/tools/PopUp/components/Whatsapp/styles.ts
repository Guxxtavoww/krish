import styled from 'styled-components';

import { WHATSAPP_BUTTON_BG } from '@/styles/constants';
import { Button } from '@mui/material';

export const WhatsappContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WhatsappHeader = styled.header`
  border-radius: 10px 10px 0 0;
  background-color: ${WHATSAPP_BUTTON_BG};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  color: #fff !important;
  padding: 1.35rem 10px;

  .icon {
    fill: #fff;
    svg {
      width: 1.8em;
      height: 1.8em;
    }
  }
  .title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;

    h3 {
      font-size: 1.3em;
      color: #fff;
    }
    span {
      font-size: 1rem;
      color: #fff;
    }
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  background-color: #ececec;
  border-radius: 0 0 10px 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const SubmitButton = styled(Button)`
  background-color: ${WHATSAPP_BUTTON_BG} !important;
  color: #fff !important;
  text-transform: capitalize !important;
  padding: 5px 10px !important;
  font-size: 0.95em !important;
  font-weight: 300 !important;
  margin-top: 10px !important;
`;
