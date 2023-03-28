import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { iPrivacyPolicyModalProps } from '../types';
import { PrivacyPolicyModalOverlay } from './styles';

const PrivacyPolicyModal: React.FC<iPrivacyPolicyModalProps> = ({
  handleClose,
  isOpen,
}) => (
  <AnimatePresence>
    {isOpen ? (
      <PrivacyPolicyModalOverlay
        exit={{ opacity: [1, 0] }}
        animate={{ opacity: [0, 1] }}
      ></PrivacyPolicyModalOverlay>
    ) : null}
  </AnimatePresence>
);

export default PrivacyPolicyModal;
