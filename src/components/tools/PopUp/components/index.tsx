import { lazy } from 'react';

const Whatsapp = lazy(() => import('./Whatsapp'));
const Phone = lazy(() => import('./Phone'));

export const componentsObject = {
  whatsapp: <Whatsapp />,
  phone: <Phone />,
  policy: <div>policy</div>,
};

export function handleMapComponents(
  type: keyof typeof componentsObject
): JSX.Element {
  return componentsObject[type];
}
