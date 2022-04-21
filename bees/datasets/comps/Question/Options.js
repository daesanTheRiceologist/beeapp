import styled from 'styled-components';

const OpsCont = styled.div``;

const OpsTitle = styled.h3``;

const OpsButton = styled.button``;

export default function Options({
  q="How many eyes do bees have?"
}){

  return <OpsCont>
    <OpsTitle>{q} </OpsTitle>
    <OpsButton> 1 </OpsButton>
    <OpsButton> 5 </OpsButton>
    <OpsButton> 2 </OpsButton>
  </OpsCont>
}