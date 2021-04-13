import styled, { css } from 'styled-components';
import { Input as InputAnt } from 'antd'

import { Email, LockAlt } from '../../styles/Icons'

export const Container = styled.form`
  width: 100%;
  height: 100%;
`;

export const InputContainer = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
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
`;

export const SignupContent = styled.div`
  font-size: 14px;
  margin-top: 24px;
  color: rgb(204, 204, 204);
  text-align: center;
`;




