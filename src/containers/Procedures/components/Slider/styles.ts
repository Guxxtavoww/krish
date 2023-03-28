import { IconButton } from '@mui/material';
import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 15fr 1fr;
  place-items: center;
`;

export const InnerSlider = styled.div`
  width: 100%;
  max-width: 1742px;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  scroll-snap-type: proximity;

  &::-webkit-scrollbar {
    display: none;
  }
  img {
    border-radius: 8px;
  }
`;

export const SliderButton = styled(IconButton)<{
  position: 'left' | 'right';
}>`
  background-color: rgba(0,0,0,.5) !important;
  border-radius: 0 !important;
`;
