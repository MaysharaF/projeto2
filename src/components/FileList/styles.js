import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 40%;
  border-radius: 4px;
  padding: 15px;
  @media (max-width: 375px) { 
    width: 85%;
  }
`;

export const Container = styled.ul`
  margin-top: 20px;
  width: 50%;
  @media (max-width: 375px) { 
    width: 100%;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;