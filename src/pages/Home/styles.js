import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
  background: rgb(18, 18, 20);
  padding-top: 72px;

  hr {
    color: #ccc;
  }
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  padding: 0px 30px;
  background: rgb(32, 32, 36);
  top: 0px;
  z-index: 9998;
  transition: all 0.5s ease-in-out 0s;
  
  opacity: 1;
  transform: translateY(0px);
  visibility: visible;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1366px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  padding: 12px 0px;
`
export const LogoContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  z-index: 2;

  a {
    display: flex;
    text-decoration: none;
  }
`
export const Content = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex: 1 1 0%;
  z-index: 2;
`

export const ButtonSignup = styled.a`
  background: rgb(130, 87, 229);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 16px;
  cursor: pointer;
  padding: 11px;
  text-decoration: none;

  &:hover {
    background: rgb(164, 142, 214);
  }
`

export const ContentUpload = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 35%;
  background: #fff;

  span {
    font-size: 20px;
    font-weight: 600;
    padding: 3px;
  }
`;

export const Mural = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60%;
  width: 100%;
  background: #fff;
`;





