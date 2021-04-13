import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100vw;
  padding: 32px;
  
`


export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 28px 0px 50px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 480px;

  h1 {
    color: rgb(225, 225, 230);
    margin-bottom: 24px;
    font-size: 54px;
    line-height: 64px;
  }
`

export const LogoContent = styled.div`
 display: flex;
 margin-bottom: 66px;
`

export const FormContainer = styled.div`
 width: 100%;
 max-width: 480px;
 background:rgb(32, 32, 36);
 border-radius: 5px;
 padding: 64px; 
`



