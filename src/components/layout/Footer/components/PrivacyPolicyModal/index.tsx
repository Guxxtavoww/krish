import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { ClickAwayListener } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

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
      >
        <ClickAwayListener onClickAway={handleClose}></ClickAwayListener>
      </PrivacyPolicyModalOverlay>
    ) : null}
  </AnimatePresence>
);

export default PrivacyPolicyModal;
