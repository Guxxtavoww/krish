import { componentsObject } from '../components';

export interface iPopUpProps {
  isOpen: boolean;
  handleClose: () => void | Promise<void>;
  closeWhenClickOutside?: boolean;
  type?: keyof typeof componentsObject;
}
