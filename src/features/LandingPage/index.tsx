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
    <Banner />
    <MedicalInsurance />
    <Differentials />
    <About />
    <Procedures />
    <Footer />
  </LandingPageContainer>
);

export default LandingPage;
