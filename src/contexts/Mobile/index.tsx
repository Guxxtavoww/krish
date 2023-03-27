import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

import { FCWithChildren } from '@/types';

interface iMobileContextProps {
  isMobileDevice: boolean;
}

const MobileContext = createContext<iMobileContextProps>(
  {} as iMobileContextProps
);

export const MobileProvider: FCWithChildren<{}, true> = ({ children }) => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>();

  const handleWindowResize = useCallback(() => {
    setIsMobileDevice(window.innerWidth <= 680);
  }, []);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <MobileContext.Provider value={{ isMobileDevice: !!isMobileDevice }}>
      {children}
    </MobileContext.Provider>
  );
};

export function useMobile(): iMobileContextProps {
  const context = useContext(MobileContext);

  if (!context) {
    throw new Error('Usagem inválida');
  }

  return context;
}
