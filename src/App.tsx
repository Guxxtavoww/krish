import React from 'react';

import Contexts from './contexts';
import { LandingPage } from './features';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Contexts>
    <LandingPage />
    <GlobalStyles />
  </Contexts>
);

export default App;
