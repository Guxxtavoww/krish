import styled from 'styled-components';

export const LandingPageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  .absolute_box {
    position: absolute;
    top: 120px;
    left: 0;
    scroll-padding-top: 120px;

    @media screen and (max-width: 991px) {
      top: 65px;
      scroll-padding-top: 65px;
    }
  }
`;
