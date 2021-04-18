import styled, { css } from 'styled-components';
import { Input as InputAnt, Form } from 'antd'

import { Email, LockAlt } from '../../styles/Icons'

export const Container = styled(Form)`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;

  .ant-form-item-explain-error {
    display: inline-block;
    color: rgb(211, 66, 66);
    font-size: 14px;
  }
`;

export const Input = styled(InputAnt)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: rgb(18, 18, 20);
  border-color: rgb(18, 18, 20);
  color: rgb(255, 255, 255);
  padding: 0px 1em 0px 2.65em;
  border-radius: 5px;
  border: none;

  :focus {
    border: 2px solid rgb(130, 87, 230);
  }
`;

const IconsCSS = css`
  width: 14px;
  height: 14px;
`;


export const EmailIcon = styled(Email)`
  ${IconsCSS};
`;

export const PasswordIcon = styled(LockAlt)`
  ${IconsCSS};
`;

export const LabelForm = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: rgb(130, 87, 230);
  margin: 8px 0px 24px;
  opacity: 0.8;
  transition: opacity 0.2s ease 0s;
  align-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: rgb(160, 120, 255);
  }
`;

export const ButtonLogin = styled.button`
  background: rgb(130, 87, 229);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  height: 50px;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 16px;
  text-transform: uppercase;

  :disabled{
    background: rgb(65, 53, 107);
    color: rgba(255, 255, 255, 0.35);
  }
`;

export const SignupContent = styled.div`
  font-size: 14px;
  margin-top: 24px;
  color: rgb(204, 204, 204);
  text-align: center;
`;

export const Divider = styled.div`
    position: relative;
    font-size: 12px;
    color: rgb(135, 134, 139);
    margin: 24px 0px;
    text-align: center;

    &::before {
      left: 0px;
    }
    &::after{
      right: 0px;
    }

    
    &::before, &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: calc(50% - 25px);
      height: 1px;
      background: rgb(40, 39, 47);
    }
`;

export const Footer = styled.div`
  display: flex;
`;

export const InfoFooter = styled.div`
  color: rgb(225, 225, 230);
  font-size: 14px;
  white-space: nowrap;
  margin-right: 24px;
  align-self: center;
`;

export const ButtonGit = styled.a`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(41, 41, 46);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  height: 50px;
  transition: background 0.2s ease 0s;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  :hover {
    background: rgb(124, 98, 212);

    svg {
      color: white;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: rgb(124, 98, 212);
    transition: all 0.2s ease 0s;
  }
`;






