import { GetName, qs } from "../../data/que_content"
import styled from 'styled-components';

import Options from "../../comps/Question/Options";
import { useRouter } from "next/router";

export default function Questions(){

  const nm = GetName();
  const r = useRouter();

  const ExCont = styled.div`
  background-color: #C06817;
  `

  const QNumCont = styled.div`
  display: flex;
  justify-content: center;
  font-size:xx-large;
  font-family: Helvetica;
  font-weight:600;
  text-align: center;
  background-color: #FF9F0E;
  height: 10vh;
  color: white;
  margin-top: -1vh;
  `

  const SpacerTop = styled.div`
  background-color: #FF9F0E;
  height: 5vh;
  color: white;
  `
  const NextCont = styled.div`
  display:flex;
  justify-content: center;
  `

  const NextButton = styled.button`
  margin-top: 5vh;
  background-color: #FF9F0E; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  `

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 1;
  }

  return <div>
    <div>
      <SpacerTop />
      <QNumCont>
        Question {qnum}
        
      </QNumCont>
    </div>
    
    <Options
    q={qs[qnum].title}
    arr={qs[qnum].ops}
    
    />

    {
      Number(qnum) >= qs.length - 1 &&
      <NextCont>
        <NextButton>Finish!</NextButton>
      </NextCont>
    }

    {
      Number(qnum) < qs.length - 1 &&
      <NextCont>
        <NextButton onClick={
          ()=>r.push({
          pathname:"/questions",
          query:{
            qnum:Number(qnum)+1 > qs.length - 1 ? qs.length-1 : Number(qnum)+1
          }
        })
        }>Next</NextButton>
      </NextCont>
    }
  </div>
}