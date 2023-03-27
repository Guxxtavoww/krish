import { ElementType } from 'react';

import { FCWithChildren } from '@/types';

interface iComposeProvidersProps {
  with: ElementType[];
}

const ComposeProviders: FCWithChildren<iComposeProvidersProps, true> = ({
  children,
  with: Providers,
}) => (
  <>
    {Providers.reduce(
      (AccProviders, Provider) => (
        <Provider>{AccProviders}</Provider>
      ),
      children
    )}
  </>
);

export default ComposeProviders;
