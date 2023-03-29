import styled from "styled-components";

const Cardcomponents = styled.div`
  min-width:200px;
  margin:0;
  padding:0;
  margin-bottom:1rem;
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
  justify-content:flex-start;
  align-items: flex-start;
  width:100%  
`;
export { Cardcomponents,CardContainers };
