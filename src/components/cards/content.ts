import styled from "styled-components";

const Cardcomponents = styled.div`
  width: 100%;
  min-width:200px;
  margin:0;
  padding:0;
  .data {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  .rate{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom:15px
  }
  .footer{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
`;


const CardContainers = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items: flex-start;
  width:100%  
`;
export { Cardcomponents,CardContainers };
