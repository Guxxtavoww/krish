import styled from 'styled-components';

import { DIFS_CARD_BG, MAIN_COLOR, MAIN_TEXT_COLOR } from '@/styles/constants';

export const DifferentialsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  padding-right: 18rem;

  @media screen and (max-width: 991px) {
    padding-right: 0;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const DifferentialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  min-height: 200px;

  .icon_container {
    width: 100%;
    max-width: 198px;
    height: 100%;
    background-color: ${MAIN_COLOR};
    display: grid;
    place-items: center;
    padding: 5px;
    border-radius: 10px 0 0 10px;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content_container {
    background-color: ${DIFS_CARD_BG};
    border-radius: 0 10px 10px 0;
    padding: 1.5rem 8px 10px 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    color: ${MAIN_TEXT_COLOR};
    h3.title {
      color: inherit;
      font-weight: 400;
      font-size: clamp(1.2rem, 5vmin, 20px);
      text-align: left;
    }
    p.content {
      color: inherit;
      font-size: 1em;
      line-height: 1.5em;
    }
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    .icon_container {
      max-width: 100%;
      border-radius: 10px 10px 0 0;
    }
    .content_container {
      border-radius: 0 0 10px 10px;
    }
  }
`;
