import { ComponentType } from 'react';

import { ContainerId } from '../../layout/Header/utils/header_links';
import { ContainerWrapperContainer } from './styles';

interface iContainerWrapperProps {
  element: ComponentType;
  id: ContainerId | 'insurances';
  isAnimated?: boolean;
}

const ContainerWrapper = ({
  element: Component,
  id,
  isAnimated,
}: iContainerWrapperProps) =>
  function HOC() {
    return (
      <ContainerWrapperContainer
        id={id}
        whileInView={isAnimated ? { opacity: [0, 1], x: [-10, 0] } : undefined}
        transition={{ delay: 0.25 }}
      >
        <Component />
      </ContainerWrapperContainer>
    );
  };

export default ContainerWrapper;
