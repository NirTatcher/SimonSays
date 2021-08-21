import React, { createRef, useEffect, useState } from 'react'
import Countdown from 'react-countdown';
import * as Tone from "tone";
import '../styles/simon_says.css'



export default function SimonSays() {
    const [osc, setOsc] = useState("");
    const [isPressed, setPressed] = useState(null)
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
    const redRef = createRef()
    const [moves, setMoves] = useState([])
    const [userMoves, setUserMoves] = useState([])
    const [level, setLevel] = useState(1)
    const [isPlaying, setUserPlaying] = useState(false)
    const [scoreIsShown, setScoreIsShown] = useState(false)
    const [time, setTime] = useState(level * 5)
    const [coundownStarted, setCoundownStarted] = useState(false)

    useEffect(() => {
        var oscTemp = new Tone.Oscillator(440, "square").toDestination()
        setOsc(oscTemp)
        // Mytest()
    }, [])

    useEffect(() => {
        // setTimeout(() => console.log("changed"), 2000)
        return () => {
            // setTimeout(() => setPressed(""), 1000)
            // setPressed("")
            setTimeout(() => setPressed(""), (level) * 1000)
        }
    }, [isPressed])
    const startGame = async () => {

        // synth1.triggerAttack("D4", now);
        // synth1.triggerAttack("F4", now + 0.5);
        // synth1.triggerAttack("A4", now + 1);
        // synth1.triggerAttack("C5", now + 1.5);
        // synth1.triggerAttack("E5", now + 2);
        // synth1.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
        let moves = []
        for (let index = 0; index < level; index++) {
            let num = Math.floor(Math.random() * 3)
            moves.push(num + 1)

        }
        setMoves(moves)

        alert("LEVEL " + level)

        // for (let i = 0; i < moves.length; i++) {
        //     var synth1 = new Tone.PolySynth(Tone.Synth).toDestination();
        //     var now = Tone.now()
        //     console.log(now + i);
        //     if (moves[i] === 1) {

        //         // synth1.triggerAttackRelease("C4", "8n", now + i)

        //         await setPressed("trapezoidUp")



        //         //     setTimeout(()=>{alert("finshed")

        //         // },3000)
        //         // setPressed("")



        //     }
        //     else if (moves[i] === 2) {


        //         // synth1.triggerAttackRelease("D4", "8n", now + i)
        //         await setPressed("trapezoidLeft")



        //     }
        //     else if (moves[i] === 3) {

        //         // synth1.triggerAttackRelease("E4", "8n", now + i)
        //         await setPressed("trapezoidRight")


        //     }
        //     else if (moves[i] === 4) {

        //         // synth1.triggerAttackRelease("F4", "8n", now + i)

        //         await setPressed("trapezoidDown")

        //     }


        // }

        for (let i = 0; i < moves.length; i++) {
            var synth1 = new Tone.PolySynth(Tone.Synth).toDestination();
            var now = Tone.now()

            setTimeout(() => {
                if (moves[i] === 1) {
                    setPressed("trapezoidUp")
                    synth1.triggerAttackRelease("C4", "8n", now + i)





                    //     setTimeout(()=>{alert("finshed")

                    // },3000)
                    // setPressed("")



                }
                else if (moves[i] === 2) {

                    setPressed("trapezoidLeft")

                    synth1.triggerAttackRelease("D4", "8n", now + i)



                }
                else if (moves[i] === 3) {
                    setPressed("trapezoidRight")

                    synth1.triggerAttackRelease("E4", "8n", now + i)


                }
                else if (moves[i] === 4) {
                    setPressed("trapezoidDown")

                    synth1.triggerAttackRelease("F4", "8n", now + i)


                }
            }, (0 + i) * 1000)

        }


        // moves.map(async (sound) => {
        //     var synth1 = new Tone.PolySynth(Tone.Synth).toDestination();
        //     var now = Tone.now()
        //     var i = 0;
        //    if(sound===1){
        //             synth1.triggerAttack("C4", "8n", now + i)
        //             i+=5
        //         }
        //         else if(sound===2){
        //             synth1.triggerAttack("D4", "8n", now + i)

        //             i+=5
        //         }
        //         else if(sound===3){
        //             synth1.triggerAttack("E4", "8n", now + i)

        //             i+=5
        //         }
        //        else if(sound===4){
        //             synth1.triggerAttack("F4", "8n", now + i)

        //             i+=5
        //         }



        //     // synth1.triggerRelease(["C4","D4","E4","F4"])


        // }

        // )


        setUserPlaying(true)



    }
    const play = (e) => {

        // osc.partialCount = 2
        // osc.start()


        switch (e) {
            case "trapezoidUp":

                synth.triggerAttack("C4", "8n", now)
                break;
            case "trapezoidLeft":
                synth.triggerAttack("D4", "8n", now)
                break;
            case "trapezoidRight":
                synth.triggerAttack("E4", "8n", now)
                break;
            case "trapezoidDown":
                synth.triggerAttack("F4", "8n", now)
                break;
            default:
                break;
        }

        synth.triggerRelease()

        // const synth = new Tone.Synth().toDestination();
        // const seq = new Tone.Sequence((time, note) => {
        //     synth.triggerAttackRelease(note, 0.1, time);
        //     // subdivisions are given as subarrays
        // }, ["C4", "E4", "D4", "E4", "G4", "A4", "G4"]).start(0);
        // Tone.Transport.start(0).stop('+1')


        // console.log("oi");
        // var seq = new Tone.Sequence((time, note)=>{
        //     console.log(note);
        // //straight quater notes
        // }, ["C4", "E4", "G4", "A4"], "4n");
        // console.log(seq);
        // seq.start()
        // synth.triggerAttackRelease("C4","8n",now+0.25)
        // synth.triggerAttackRelease("G4","8n",now+0.5)
        // synth.triggerAttackRelease("C4","8n",now+1)
        // synth.triggerAttackRelease("G4","8n",now+1.5)
        // synth.triggerAttackRelease("C4","8n",now+2)
        // synth.triggerAttackRelease("G4","8n",now+2.5)



        // setPressed("")

    }
    const finishSession = async () => {



        if (redRef.current !== null) {
            redRef.current.className = isPressed.replace("Active", "")
            setPressed("")

        }
    }

    const checkScore = () => {
        if (!isPlaying) {
            console.log(moves);
            console.log(userMoves);
            setScoreIsShown(false)
            if (moves.toString() === userMoves.toString()) {
                let tempLevel = level
                alert("WINNER")
                setLevel(tempLevel + 1)
                setTime(((tempLevel + 1) * 5))


            }
            else {

                alert("LOSER")
                setLevel(1)
                setTime(5)
            }
            setMoves([])
            setUserMoves([])
        }

    }
   const checkMoves=()=>{
   
    var user = userMoves
    var move = moves
   
    if(user.length>0&& user.length===move.length)
    {alert("WINS")}
   }
    const Mytest = () => {
        var count = time
     
       
        let interval = setInterval(() => {
            console.log(count--);
            setTime(count)
            checkMoves()
            if (count === 0 ) {

                alert("time ended!")

                setCoundownStarted(false)
                setUserPlaying(false)
                setScoreIsShown(true)
                clearInterval(interval)


            }

        }, 1000)

    }
    return (

        <div className="wrapper">

            simon
            {/* <Countdown date={Date.now() + level * 5000} /> */}
            {!isPlaying ? "" : time}

            <div className="simonWrapper">
                {/* <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', height: '25%' }}>
                    <div id="trapezoid" className="yellow_btn"></div>
                    <div className="green_btn"></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-between', height: '25%' }}>
                    <div className="red_btn"></div>
                    <div className="blue_btn"></div>
                </div> */}
                <div className="simonRow">
                    <div ref={redRef} data-index={1} onMouseUp={() => setPressed("")} onMouseDown={(e) => {
                        console.log(e.target.dataset.index)
                        setPressed(e.target.id)

                    }} onClick={async (e) => {
                        if (isPlaying) {
                         
                            await setUserMoves([...userMoves, parseInt(e.target.dataset.index)])
                        

                        }
                        play(e.target.id)

                    }} id={isPressed === "trapezoidUp" ? "trapezoidUpActive" : "trapezoidUp"}></div>
                </div>
                <div className="simonRow">
                    <div ref={redRef} data-index={2} onMouseUp={() => setPressed("")} onMouseDown={(e) => setPressed(e.target.id)} onClick={async (e) => {
                        if (isPlaying) {
                           
                            await setUserMoves([...userMoves, parseInt(e.target.dataset.index)])
                       

                        }
                        play(e.target.id)

                    }} id={isPressed === "trapezoidLeft" ? "trapezoidLeftActive" : "trapezoidLeft"}></div>
                    {/* <div onClick={(e) => {
                        play(e)
                    }} id="trapezoidLeft"></div> */}
                    <div className="play_btn" onClick={async () => {
                        startGame()
                        Mytest()
                        // setTimeout(async () => {
                        //     alert("time ended!")

                        //     setCoundownStarted(false)
                        //     setUserPlaying(false)
                        //     setScoreIsShown(true)




                        // }, level * 5000)
                        // console.log(time);
                        // setInterval(() => setTime(time - 1), level * 5000)
                        // console.log(time);


                        // setTimeout(()=>

                        // setPressed(""),(level+3)*1000)


                    }}>
                        {scoreIsShown ? checkScore() : null}
                        SIMON
                    </div>
                    <div ref={redRef} data-index={3} onMouseUp={() => setPressed("")} onMouseDown={(e) => setPressed(e.target.id)} onClick={async (e) => {
                        if (isPlaying) {
                       
                            await setUserMoves([...userMoves, parseInt(e.target.dataset.index)])
                       

                        }
                        play(e.target.id)

                    }} id={isPressed === "trapezoidRight" ? "trapezoidRightActive" : "trapezoidRight"}></div>
                    {/* <div onClick={(e) => {
                        setPressed(e.target.id)
                        play(e)
                    }} id="trapezoidRight"></div> */}
                </div>
                <div className="simonRow">
                    <div ref={redRef} data-index={4} onMouseUp={() => setPressed("")} onMouseDown={(e) => setPressed(e.target.id)} onClick={async (e) => {
                        if (isPlaying) {
                          
                            await setUserMoves([...userMoves, parseInt(e.target.dataset.index)])
                           
                        }
                        play(e.target.id)

                    }} id={isPressed === "trapezoidDown" ? "trapezoidDownActive" : "trapezoidDown"}></div>
                    {/* <div onClick={(e) => {
                        setPressed(e.target.id)
                        play(e)
                    }} id="trapezoidDown"></div> */}
                </div>
            </div>
            <div id="trapezoidUp"></div>


        </div>
    )
}
