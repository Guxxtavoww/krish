import React, { memo, useState } from 'react';

import { krish } from '@/assets';
import { ContainerWrapper, PopUp } from '@/components';

import {
  AboutContainer,
  AboutContent,
  AboutImageContainer,
  AboutButton,
} from './styles';

const About: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <>
      <h2 className="container_title">
        Dra. Krishna Sandoval CRM 6823 - RQE 5144
      </h2>
      <AboutContainer>
        <AboutImageContainer>
          <img src={krish} alt="Krishna Sandoval" loading="lazy" />
        </AboutImageContainer>
        <AboutContent>
          <p className="content_text">
            Minha maior satisfação é fazer com que meus pacientes sintam-se bem,
            elevem sua autoestima, de forma natural, duradoura. Procuro oferecer
            rejuvenescimento com ciência e naturalidade. Médica Dermatologista,
            especialista pela Sociedade Brasileira de Dermatologia (SBD) e
            residência médica em dermatologia pela Universidade Federal
            Fluminense (UFF). Residência médica em clinica médica e mestrado
            pela Universidade Federal do Espírito Santo (UFES). Estágio/fellow
            em dermatologia (USP/SP e Santa Casa/RJ Prof. Azulay).
          </p>
          <AboutButton
            type="button"
            onClick={() => setIsContactModalOpen(true)}
          >
            Agende sua avaliação!
          </AboutButton>
        </AboutContent>
      </AboutContainer>
      <PopUp
        isOpen={isContactModalOpen}
        handleClose={() => setIsContactModalOpen(false)}
        closeWhenClickOutside
        type="whatsapp"
      />
    </>
  );
};

export default memo(
  ContainerWrapper({ element: About, id: 'about', isAnimated: true })
);
