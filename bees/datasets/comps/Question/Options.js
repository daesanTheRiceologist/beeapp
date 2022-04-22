import styled from 'styled-components';

const OpsCont = styled.div`

`;

const OpsTitle = styled.h3`
`;

const OpsButton = styled.button`
font-family: Helvetica;
font-weight: bold;
font-size:x-large;
margin-top: 5vh;
background-color: #FFEA00; /* Green */
border: none;
color: black;
padding: 20px;
text-align: center;
text-decoration: none;
cursor: pointer;
border-radius: 12px;
padding-left: 35px;
padding-right: 35px;
margin-right: 10px;
`;

export default function Options({
  q="How many eyes do bees have?",
  arr=[]
}){

  return <OpsCont>
    <OpsTitle>{q} </OpsTitle>
    {
      arr.map((o,i)=><OpsButton>{o}</OpsButton>)
    }
  </OpsCont>
}