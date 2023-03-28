import React, { memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ClickAwayListener } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { iPrivacyPolicyModalProps } from '../types';
import {
  PrivacyPolicyModalOverlay,
  PrivacyPolicyModalContainer,
  CloseModalButton,
} from './styles';

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
        <ClickAwayListener onClickAway={handleClose}>
          <PrivacyPolicyModalContainer
            animate={{
              opacity: [0, 1],
              y: [-50, 0],
            }}
            exit={{ opacity: [1, 0], y: [0, -50] }}
          >
            <CloseModalButton type="button" onClick={handleClose}>
              <CloseIcon fill="#fff" />
            </CloseModalButton>
          </PrivacyPolicyModalContainer>
        </ClickAwayListener>
      </PrivacyPolicyModalOverlay>
    ) : null}
  </AnimatePresence>
);

export default memo(PrivacyPolicyModal);
