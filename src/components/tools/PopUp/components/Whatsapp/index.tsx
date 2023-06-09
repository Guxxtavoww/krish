import React, { useCallback, createRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

import { Input } from '@/components';
import { krishPhoneNumber } from '@/constants';

import {
  WhatsappContainer,
  WhatsappHeader,
  FormContainer,
  SubmitButton,
} from './styles';

const Whatsapp: React.FC = () => {
  const nameInputRef = createRef<HTMLInputElement>();
  const cellInputRef = createRef<HTMLInputElement>();

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const personName = nameInputRef.current?.value;
      const personCell = Number(cellInputRef.current?.value);

      if (personName === '' || Number.isNaN(personCell)) {
        alert('Insira dados válidos');
        return nameInputRef.current?.focus();
      }

      const whatsUrl = new URL(`https://wa.me/${krishPhoneNumber}`);

      whatsUrl.searchParams.set(
        'text',
        `Olá! Meu nome é ${personName} e meu telefone é ${personCell}, gostaria de saber mais sobre o produto`
      );

      window.open(whatsUrl, '_blank');
    },
    []
  );

  return (
    <WhatsappContainer>
      <WhatsappHeader>
        <div className="icon">
          <BsWhatsapp scale="1.2" />
        </div>
        <div className="title_container">
          <h3>Vamos conversar?</h3>
          <span>Informe seus dados abaixo.</span>
        </div>
      </WhatsappHeader>
      <FormContainer onSubmit={handleFormSubmit}>
        <Input
          name="personName"
          placeholder="Nome"
          ref={nameInputRef}
          type="text"
        />
        <Input
          name="personCell"
          placeholder="Telefone"
          ref={cellInputRef}
          type="tel"
        />
        <SubmitButton type="submit">Iniciar Coversa</SubmitButton>
      </FormContainer>
    </WhatsappContainer>
  );
};

export default Whatsapp;
