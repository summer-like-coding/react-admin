import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  img {
    width: 350px;
    margin: 0 auto;
  }
  div{
    text-align:center;
    p {
    color: #666;
    padding: 20px 0;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: bold;
  }
  }

`;
export { ImgContainer };
