import { LinkHTMLAttributes } from 'react';

import { FCWithChildren } from '@/types';

type TargetBlankLinkProps = Omit<
  LinkHTMLAttributes<HTMLAnchorElement>,
  'target' | 'rel'
>;

const TargetBlankLink: FCWithChildren<TargetBlankLinkProps, true> = ({
  children,
  href,
  ...rest
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);

export default TargetBlankLink;
