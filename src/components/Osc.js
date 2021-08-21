import React, { useEffect, useState } from 'react'
import * as Tone from "tone";
import '../styles/osc.css'


export default function Osc() {
    // make and start a 440hz sine tone
    const [osc, setOsc] = useState("");
    const [oscList, setOscList] = useState([]);
    const [tremolo, setTremolo] = useState("");
    const [isClicked, setClicked] = useState(false)
    const [mouthClassname,setMouthClassName]=useState("mouth-wrapper")
    const [animationFinished,setAnimationFinished]=useState(false)
    const[currentNote,setCurrentNote]=useState(0)
    const playNote = async (e) => {
        // console.log(osc)
        // let num = e + 100
        // osc.frequency.value = `${800 + num}`
        // osc.start();
        // osc.frequency.value =887
        // osc.type='sawtooth'
        // tremolo.type = "triangle3"
        // osc.start()
        // if (e === "D")
        //     osc.frequency.value = 900
        // else
        //     osc.frequency.value = 440
        console.log(e);
        setCurrentNote(parseInt(e) * 10)
        osc.frequency.value = parseInt(e) * 10
        osc.connect(tremolo.start()).start()
        // await setPressed(true)
        //  console.log(note.note_on())
        // synth.triggerAttack(`${note}4`, now);


    }
    const playNote2 = async (e) => {
        // console.log(osc)
        // let num = e + 100
        // osc.frequency.value = `${800 + num}`
        // osc.start();
        // osc.frequency.value =887
        // osc.type='sawtooth'
        // tremolo.type = "triangle3"
        // osc.start()
        // var osc2=new Tone.Oscillator(e, "sine").toDestination()
        // if (e === "D")
        //     osc.frequency.value = 900
        // else
        //     osc.frequency.value = 440
        osc.frequency.value = e
        osc.connect(tremolo.start()).start()
        // await setPressed(true)
        //  console.log(note.note_on())
        // synth.triggerAttack(`${note}4`, now);


    }
    useEffect(() => {
        var oscTemp = new Tone.Oscillator(440, "square").toDestination()
        var tremoloTemp = new Tone.Tremolo(1, 1, 200).toDestination()
        var oscListTemp = [];
        for (let index = 0; index <= 50; index++) {
            oscListTemp.push(index + 1);

        }
        setOsc(oscTemp)
        setTremolo(tremoloTemp)
        setOscList(oscListTemp)
    }, [])
    const stopNote = () => {
        osc.stop()

    }
    const stopNote2 = (o) => {
        // new Tone.Oscillator(o, "sine").toDestination().stop()

    }
    return (
        <div style={{MozWindowDragging:'no-drag'}} className="wrapper"  >

            {/* <div title="C" style={{ MozWindowDragging: 'no-drag' }} onMouseOver={() => isClicked === true ? playNote(440) : null} onMouseOut={() => {
                stopNote()
            }} onMouseUp={() => {
                setClicked(false)

                stopNote()
            }} onMouseDown={() => {

                setClicked(true)

                playNote(440)
            }}>
                C
            </div>
            <div title="D" onMouseUp={() => {
                setClicked(false)
                stopNote()
            }} onMouseOver={() => isClicked === true ? playNote(900) : null} onMouseDown={() => {
                setClicked(true)
                playNote(900)
            }}>
                D
            </div> */}
            <div style={{ display: 'flex', flexDirection: 'column-reverse',zIndex:5,width:'100%',height:'100%',MozWindowDragging:'no-drag' }}>
                {oscList.map((o, i) =>
                    <div style={{width:'100%',flexGrow:1 ,MozWindowDragging:'no-drag'}} title={i} onMouseUp={() => {
                        setClicked(false)
                        stopNote()
                        setMouthClassName("mouth-wrapper")
                    }} onMouseOver={() => isClicked === true ? playNote(i*5) : null} onMouseDown={async() => {
                      
                        setClicked(true)
                       await playNote(i*5)
                       setMouthClassName("mouth-wrapper-animation")
                    }}>
                       
                    </div>
                )}
            </div>
            <div style={{height:currentNote<1100 ? null :`${currentNote/10}px`}} className="green-man">
                <div className="eyes-container">
                <div className="eye"></div>
                <div className="eye"></div>
           
                </div>
                {console.log(currentNote)}
                <div 
                style={{borderRadius:`${currentNote/10}%`}}
                className={mouthClassname}
                //  className="mouth-wrapper"
                ></div>
            </div>
            {/* <div title="D" style={styles.note} onPress={() => playNote("D")}>
          D
        </div>
        <div title="E" style={styles.note} onPress={() => playNote("E")}>
          E
        </div>
        <div title="G" style={styles.note} onPress={() => playNote("G")}>
          G
        </div>
        <div title="A" style={styles.note} onPress={() => playNote("A")}>
          A
        </div> */}
        </div>
    )
}
