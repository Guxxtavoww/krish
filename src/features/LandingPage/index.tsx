import React from 'react';

import { Footer, Header } from '@/components';
import {
  Banner,
  MedicalInsurance,
  Differentials,
  About,
  Procedures,
} from '@/containers';

import { LandingPageContainer } from './styles';

const LandingPage: React.FC = () => (
  <LandingPageContainer>
    <Header />
    <div className="absolute_box">
      <Banner />
      <MedicalInsurance />
      <Differentials />
      <About />
      <Procedures />
      <Footer />
    </div>
  </LandingPageContainer>
);

export default LandingPage;
