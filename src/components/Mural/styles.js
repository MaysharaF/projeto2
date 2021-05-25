import styled from 'styled-components';

export const TextArea = styled.input`
  justify-content: flex-start;
  display: flex;
  height: 30%;
  width: 70%;
  font-size: 14px;
  padding: 5px;
  margin-top: 10px;
  border: 2px solid rgb(164, 142, 214);
  border-radius: 8px;
`;
export const ContentButtonSave = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 10%;
  width: 70%;
  margin-top: 10px;
`;

export const ButtonSave = styled.button`
  background: rgb(130, 87, 229);
  border-radius: 5px;
  border: 0px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;
  font-size: 14px;
  cursor: pointer;
  padding: 6px;
  text-decoration: none;
  width: 20%;

  &:hover {
    background: rgb(164, 142, 214);
  }
`

export const FeedContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70%;
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
`;

export const FeedText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const TextLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #494949;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
