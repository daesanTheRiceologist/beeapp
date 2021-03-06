import styled from "styled-components";
import { GetName, GetAnswers,qs, CheckAnswers } from "../../data/que_content"

import { useRouter } from "next/router"; 

var score = 0;

const Heading1 = styled.div`
display: flex;
justify-content: center;
font-size:xx-large;
font-family: Helvetica;
font-weight:bold;
padding-top: 15vh;
`

const ButtonCont = styled.div`
diplay:flex;
justify-content: center;
`

const Heading2 = styled.div`
display: flex;
justify-content: center;
font-size:x-large;
font-family: Helvetica;
font-weight:540;
text-align: center;
`

const Score = styled.div`
display:flex;
justify-content: center;
border-radius:50%;
font-size 14vh;
text-align: center;
margin:10vh;
`

const GetStartedButton = styled.button`
margin-top: 3vw;
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
`;  
const NextCont = styled.div`
display:flex;
justify-content: center;
margin-top: 4vh;
`

const ScreenCont = styled.div`
background-image: url("/results.png");
height: 100vh;
`


export default function QResults(){
    const nm = GetName();
    const an = GetAnswers();
    const r = useRouter();

    return <ScreenCont>
        <Heading1>
            You did Great!
        </Heading1>
        <Heading2>
            Quiz Results
        </Heading2>
            <Score>
                3/5
            </Score>
        <Heading2>
            Let's learn about how we can help save the bees
        </Heading2>
        <NextCont>
            <GetStartedButton onClick={
                    ()=>r.push("/questions/importance")
                }>Learn about bees</GetStartedButton>
        </NextCont>

    </ScreenCont>
}