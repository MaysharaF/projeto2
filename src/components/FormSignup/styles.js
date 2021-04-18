import styled from 'styled-components';
import { Form } from 'antd'

export const Container = styled(Form)`
  width: 100%;
  height: 100%;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 25px;
    margin-bottom: 39px;
    display: block;
    font-weight: bold;
  }

  .ant-form-item-explain-error {
    display: inline-block;
    color: rgb(211, 66, 66);
    font-size: 14px;
  }
`;

export const InputContainer = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
`;

export const InputDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  
`;

export const InputContent = styled.div`
  position: relative;
  flex-grow: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    fill: rgb(40, 39, 44);
    font-size: 14px;
    transition: fill 0.2s ease 0s;
  }

 
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em 0px 2.65em;
  border-radius: 5px;
  border: none;

  :hover {
    border: 2px solid rgb(130, 87, 230);
    fill: rgb(130, 87, 230);
  }
`;

export const InfosBottom = styled.div`
  font-size: 14px;
  color: rgb(204, 204, 204);
  text-align: center;
  margin-top: 14px;
  line-height: 26px;
`

export const TermsInfo = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: rgb(130, 87, 230);
  margin: 40px 0px 24px;
  opacity: 0.8;
  transition: opacity 0.2s ease 0s;
  text-decoration: none;
`

export const ButtonSignup = styled.button`
  margin-top: 20px;
  background: rgb(130, 87, 229);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  height: 50px;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: rgb(164, 142, 214);
  }
`

