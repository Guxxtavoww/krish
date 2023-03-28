import styled from 'styled-components';

import { MAIN_COLOR } from '@/styles/constants';

export const PhoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 3rem; */
  background-color: #fff;
  border-radius: 10px;
`;

export const PhoneHeader = styled.header`
  padding: 2rem 8px;
  text-align: center;
  h2 {
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
    color: ${MAIN_COLOR};
  }
`;

export const PhoneBody = styled.div`
  background-color: #ececec;
  padding: 16px 0 4rem 0;
  width: 100%;
  border-radius: 0 0 10px 10px;
  a {
    background-color: #e7e7e7;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 1rem;

    & > * {
      color: #63657c;
    }

    span {
      font-size: 1rem;
      font-weight: 600;
    }

    .desc {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      svg {
        width: 1.4em;
        height: 1.4em;
      }
    }
  }
`;
