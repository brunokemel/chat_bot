import React, { useState, FormEvent, ChangeEvent } from 'react';
import { LoginProps } from '../../types';

import {
    LoginContainer,
    LoginCard,
    Title,
    Form,
    Input,
    Button,
    ErrorMessage

} from './Styled'



 export const UserLogin: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Por favor, digite um nome de usuário');
      return;
    }

    if (username.trim().length < 3) {
      setError('O nome de usuário deve ter pelo menos 3 caracteres');
      return;
    }

    setError('');
    onLogin(username.trim());
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };
  return (
   <LoginContainer>
      <LoginCard>
        <Title>Chat App</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu nome de usuário"
            value={username}
            onChange={handleUsernameChange}
            maxLength={20}
          />
          <Button type="submit">Entrar no Chat</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </LoginCard>
    </LoginContainer>
  );

};

