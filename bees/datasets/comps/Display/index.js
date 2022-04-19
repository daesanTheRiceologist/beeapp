import styled from 'styled-components';

const DispCont = styled.div`
display:flex;
`;

const ImgCont = styled.div`
width:100px;
height:100px;
`;

const DispImg = styled.div`
object-fit:cover;
width:100%;
height:100%;
`;

export default function Display({
    arr=[]
}){
  return <DispCont>
    {
    arr.map((o,i)=><ImgCont>
    <DispImg src={o} height={100} />
    </ImgCont>)
    }
  </DispCont>
}