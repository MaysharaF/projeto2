import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 32px;

  @media (max-width: 375px) { 
    padding: 10px 0px 32px;
  }
`;

export const ContainerSignup = styled.div`
  flex-grow: 1;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 28px 0px 50px;

  @media (max-width: 375px) { 
    flex-direction: column;
  }
`;

export const ContentSignup = styled.div`
  position: relative;
  animation: 0.5s ease 0s 1 normal none running ContentSignup;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 375px) { 
    flex-direction: column;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 480px;
  padding-left: 100px;

  h1 {
    font-size: 36px;
    color: rgb(225, 225, 230);
    margin-bottom: 39px;

    @media (max-width: 375px) { 
      font-size: 30px;
    }
  }

  p {
    line-height: 26px;
    color: rgb(168, 168, 179);
    font-size: 16px;
  }

  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(130, 87, 230);
    margin: 40px 0px 24px;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
    text-decoration: none;

    svg {
    margin-right: 16px;
    vertical-align: middle;
    display: inline-block;
    align-self: flex-start;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  margin-bottom: 66px;

  svg {
    display: block;
    align-self: flex-start;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
`;

export const HeaderForm = styled.div`
  display: flex;
  border-bottom: none;
  padding-left: 64px;
  width: 100%;
  max-width: 480px;
  margin: 0px auto;

  @media (max-width: 375px) { 
      padding-left: 32px;
      margin-top: 30px;
    }
`;

export const ButtonAluno = styled.div`
  position: relative;
  padding-bottom: 16px;
  background: transparent;
  border: 0px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(225, 225, 230);
  cursor: pointer;

  @media (max-width: 375px) { 
    padding: 4px 0px 4px 16px;
    font-size: 15px;
    text-align: left;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 100%;
    height: 2px;
    background: rgb(130, 87, 229);
    opacity: 0;
    transition: opacity 0.2s ease 0s;

    @media (max-width: 375px) { 
      left: -1px;
      bottom: 0px;
      width: 2px;
      height: 100%;
    }
  }
  &::after {
    opacity: 1;
  }
`;

export const ButtonEmpresa = styled.div`
  position: relative;
  padding-bottom: 16px;
  background: transparent;
  border: 0px;
  font-size: 16px;
  color: rgb(115, 115, 128);
  cursor: pointer;
  margin-left: 24px;

  @media (max-width: 375px) { 
    margin: 8px 0px 0px;
  }
`;

export const FormContainer = styled.div`
 width: 100%;
 max-width: 480px;
 background:rgb(32, 32, 36);
 border-radius: 5px;
 padding: 64px; 
 margin-top: 32px;
`







