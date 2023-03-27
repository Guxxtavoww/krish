import React from 'react';

import { Footer, Header } from '@/components';
import { Banner, MedicalInsurance, Differentials } from '@/containers';

import { LandingPageContainer } from './styles';

const LandingPage: React.FC = () => (
  <LandingPageContainer>
    <Header />
    <Banner />
    <MedicalInsurance />
    <Differentials />
    <Footer />
  </LandingPageContainer>
);

export default LandingPage;
