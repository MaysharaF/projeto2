import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  color: rgb(255, 255, 255);
  background: rgb(18, 18, 20);
  padding-top: 72px;
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
  box-shadow: rgb(18 18 20) 0px 1rem 2rem;
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

