import { ComposeProviders } from '@/components';
import { FCWithChildren } from '@/types';

import { MobileProvider } from './Mobile';

const Contexts: FCWithChildren<{}, true> = ({ children }) => (
  <ComposeProviders with={[MobileProvider]}>{children}</ComposeProviders>
);

export default Contexts;
