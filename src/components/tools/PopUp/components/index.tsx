import { lazy } from 'react';

const Whatsapp = lazy(() => import('./Whatsapp'));
const Phone = lazy(() => import('./Phone'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

export const componentsObject = {
  whatsapp: <Whatsapp />,
  phone: <Phone />,
  policy: <PrivacyPolicy />,
};

export function handleMapComponents(
  type: keyof typeof componentsObject
): JSX.Element {
  return componentsObject[type];
}
