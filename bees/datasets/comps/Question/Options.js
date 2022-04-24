import styled from 'styled-components';

const OpsCont = styled.div`
`;

const ButtonCont = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
`

const OpsTitle = styled.h3`
width:75vw;
`;

const TitleCont = styled.div`
width:100vw;
display:flex;
justify-content:center;
`

const OpsButton = styled.button`
font-family: Helvetica;
font-weight: bold;
font-size:x-large;
margin-top: 5vh;
background-color: #FFEA00;
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
width: 40vw;
`;

export default function Options({
  q="How many eyes do bees have?",
  arr=[]
}){

  return <OpsCont>
    <TitleCont>
      <OpsTitle>{q} </OpsTitle>
    </TitleCont>
    <ButtonCont>
      {
        arr.map((o,i)=><OpsButton>{o}</OpsButton>)
      }
    </ButtonCont>
  </OpsCont>
}