import styled from "styled-components";

const Greet = styled.div`
  display: flex;
  flex-direction: row;
  .greeting {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    .top {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    .bottom{
      margin-top: 20px;
      color: gray;
    }
  }
`;
export {Greet}