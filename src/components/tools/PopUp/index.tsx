import { memo, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CircularProgress, ClickAwayListener } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { MAIN_COLOR, WHATSAPP_BUTTON_BG } from '@/styles/constants';

import { iPopUpProps } from './types';
import { handleMapComponents } from './components';
import { PopUpContainer, PopUpOverlay, CloseButton } from './styles';

const PopUp: React.FC<iPopUpProps> = ({
  handleClose,
  isOpen,
  type = 'phone',
  closeWhenClickOutside,
}) => (
  <AnimatePresence>
    {isOpen ? (
      <PopUpOverlay exit={{ opacity: [1, 0], scale: [1, 0.55] }}>
        <ClickAwayListener
          onClickAway={() => {
            if (closeWhenClickOutside) {
              handleClose();
            }
          }}
        >
          <PopUpContainer
            animate={{
              opacity: [0, 1],
              scale: [0.85, 1],
            }}
            exit={{ opacity: [1, 0], scale: [1, 0.55] }}
          >
            <CloseButton onClick={handleClose} currenttheme={type}>
              <CloseIcon
                style={{
                  fill: type === 'phone' ? '#fff' : WHATSAPP_BUTTON_BG,
                }}
              />
            </CloseButton>
            <Suspense
              fallback={
                <CircularProgress
                  style={{
                    maxWidth: '80px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  color="inherit"
                />
              }
            >
              {handleMapComponents(type)}
            </Suspense>
          </PopUpContainer>
        </ClickAwayListener>
      </PopUpOverlay>
    ) : null}
  </AnimatePresence>
);

const MemorizedPopUp = memo(PopUp) as typeof PopUp;

export default MemorizedPopUp;
