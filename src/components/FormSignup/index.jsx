import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'

import { 
   Container,
   InputContainer,
   InputDiv,
   InputContent,
   Input,
   InfosBottom,
   TermsInfo,
   ButtonSignup } from './styles';

import { Form, message, Spin } from 'antd'
const { Item } = Form;

function FormSignup({history}) {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();

  const submitUser = async () => {
    try {
      await form.validateFields()
      setLoading(true)
      const {email, password} = form.getFieldsValue()
      await api.post('/register', {
        email,
        password
      })
      const { data: {token} } = await api.post('/login', {
        email,
        password
      })
      login(token)
      history.push('/');
    }catch{
      message.error('')
    }finally{
      setLoading(false)
    }
  }

  return (
    <Container form={form}>
      <h1>Crie sua conta</h1>
      <InputContainer>
        <InputDiv>
          <InputContent>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
            <Item rules={[{required: true,message: "E-mail é obrigatório", min: 5}]} name="email">
              <Input placeholder="Seu E-mail" name="email"/>
            </Item>
          </InputContent>
        </InputDiv>

        <InputDiv>
          <InputContent>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            <Item rules={[{required: true,message: "Nome é obrigatório", min: 5}]} name="name">
              <Input placeholder="Seu nome" name="name"/>
            </Item>
          </InputContent>
        </InputDiv>


        <InputDiv>
          <InputContent>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
            <Item rules={[{required: true,message: "Senha é obrigatório", min: 5}]} name="password">
              <Input placeholder="Sua senha" type="password" name="password"/>
            </Item>
          </InputContent>
        </InputDiv>

        <InputDiv>
          <InputContent>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
            <Item rules={[{required: true,message: "Confirmação de senha é obrigatório", min: 5}]} name="confirm_password">
              <Input placeholder="Confirme sua senha" type="password" name="confirm_password"/>
            </Item>
          </InputContent>
        </InputDiv>

        <InfosBottom>
          Ao se registrar, você aceita nossos 
          <TermsInfo href="https://rocketseat.com.br/terms"> termos de uso </TermsInfo>
           e a nossa <TermsInfo href="https://rocketseat.com.br/privacy">política de privacidade</TermsInfo>.
        </InfosBottom>
        {loading ? 
          <Spin/> 
          :
          <ButtonSignup onClick={() => submitUser()}>Cadastrar</ButtonSignup>
        }
      </InputContainer>
    </Container>
  );
}

export default withRouter(FormSignup);