import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
  

`
const dragReject = css`
  border-color: #e57878;
  
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 30%;
  width: 40%;
  margin: 30ex;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  color: black;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#999',
  error: '#e57878',
  success: '#78e5d5'
}

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 30px 0;

`


