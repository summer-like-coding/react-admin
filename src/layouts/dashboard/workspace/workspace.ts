// 一些样式

import styled from "styled-components";

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 246px;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  .title {
    font-weight: 500;
    font-size: 18px;
    flex: 1;
    padding: 19px 24px;
  }
`;
const Tips = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0px, 1fr));
  gap: 0px;
  height: 158px;
  padding: 0 24px 19px 24px;
`;

const Messages = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .items {
    flex: 1 1 0%;
    text-align: right;
    .num {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  gap: 9px 12px;
`;

const ContainerItem = styled.div`
  grid-column: span 1 / span 1;
`;
const ImgContainer = styled.div`
  margin-top:1rem;
  padding: 0 12px 16px 12px;
  background-color:#fff;
  width: 100%;
`
export { Todo, Tips, Messages, Container, ContainerItem,ImgContainer };
