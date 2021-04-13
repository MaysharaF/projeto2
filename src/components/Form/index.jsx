import React from 'react';
import { 
  Container,
  InputContainer,
  Input,
  EmailIcon,
  PasswordIcon,
  LabelForm,
  ButtonLogin,
  SignupContent

} from './styles';

function Form() {
  return (
    <Container>
      <InputContainer>
        <Input  placeholder="E-mail"/>
        <Input type="password" placeholder="Senha"/>

        <LabelForm>Esqueci minha senha</LabelForm>

        <ButtonLogin type="submit">Entrar</ButtonLogin>
        <SignupContent>
          Não tem uma conta? <LabelForm>Registre-se</LabelForm>
        </SignupContent>
        
      </InputContainer>
    </Container>
  );
}

export default Form;