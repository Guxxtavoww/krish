import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { iPrivacyPolicyModalProps } from '../types';

const PrivacyPolicyModal: React.FC<iPrivacyPolicyModalProps> = ({
  handleClose,
  isOpen,
}) => (
  <AnimatePresence>
    <div className="test"></div>
  </AnimatePresence>
);

export default PrivacyPolicyModal;
