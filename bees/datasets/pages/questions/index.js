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

  var {qnum} = r.query;
  if(qnum === undefined){
    qnum = 1;
  }

  return <div>
    <div>
      <h3>Hi {nm}</h3>
      <hr />
      Question {qnum}
    </div>
    
    <Options
    q={qs[qnum].title}
    arr={qs[qnum].ops}
    
    />

    {
      Number(qnum) >= qs.length - 1 &&
      <button>Finish!</button>
    }

    {
      Number(qnum) < qs.length - 1 &&
      <button onClick={
        ()=>r.push({
        pathname:"/questions",
        query:{
          qnum:Number(qnum)+1 > qs.length - 1 ? qs.length-1 : Number(qnum)+1
        }
      })
      }>Next</button>
    }
    <ExCont>bruh</ExCont>
  </div>
}