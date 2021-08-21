import logo from './logo.svg';
import './App.css';
import Osc from './components/Osc';
import SimonSays from './components/SimonSays';




// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
// import * as Tone from "tone";
// import './shim.js'
// import { AudioBuffer } from 'standardized-audio-context';
// export default function App() {
//   const synth = new Tone.Synth().toDestination();
//   const now = Tone.now()
//   const [isPressed, setPressed] = useState(false)
//   // make and start a 440hz sine tone
//   const osc = new Tone.Oscillator().toDestination();
//   const tremolo = new Tone.Tremolo(1, 1, 200).toDestination();
//   const [howManySounds,setHowManySounds]= useState("")
//   useEffect(() => {
    
//     let res = parseInt(Dimensions.get('window').height * 0.8 / 10 *Dimensions.get('window').width * 0.8 / 10)
//     setHowManySounds(res)
    
//   }, [])
//   const playNote = async (e) => {
//     let num = e+100
//     osc.frequency.value = `${800+num}`
//     tremolo.type = "triangle3"
//     osc.connect(tremolo.start()).start()
//     // await setPressed(true)
//     //  console.log(note.note_on())
//     // synth.triggerAttack(`${note}4`, now);


//   }
//   const stopNote = (note) => {
//     osc.stop()

//   }
//   const getColumns = () => {
//     let res = []
//     let rowCounter = 0

//     let rows = []
    
//     for (let index = 0; index < (Dimensions.get('window').height * 0.8) / 10; index++) {
//       rowCounter++
      

//     }
//     for (let index = 0; index < (Dimensions.get('window').width * 0.8) / 10; index++) {
//       rows[index]=""
//       columnsCounter++
      
//     }
//     let columnsCounter = []
//     for (let i = 0; i < rowCounter; i++) {
    
    
//       res.push(<View style={{flexDirection:'row'}}>
//         {
//         rows.map((row,index)=><TouchableOpacity key={index} value="hello"  onBlur={(e) => stopNote(((i *25)+(index*25)))} onFocus={() => playNote(((i *25)+(index*25)))}  style={styles.column}></TouchableOpacity>)}
//       </View>)
//     }

//     return res
//   }

//   return (
//     <View style={styles.container}>
//       {alert(howManySounds)}
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <View style={styles.boardContainer}>
//         {getColumns()}
//       </View>
//       <View style={styles.note_wrapper}>
//         <TouchableOpacity title="C" style={styles.note} onPressOut={() => stopNote("C")} onPressIn={() => playNote("C")}>
//           C
//         </TouchableOpacity>
//         <TouchableOpacity title="D" style={styles.note} onPress={() => playNote("D")}>
//           D
//         </TouchableOpacity>
//         <TouchableOpacity title="E" style={styles.note} onPress={() => playNote("E")}>
//           E
//         </TouchableOpacity>
//         <TouchableOpacity title="G" style={styles.note} onPress={() => playNote("G")}>
//           G
//         </TouchableOpacity>
//         <TouchableOpacity title="A" style={styles.note} onPress={() => playNote("A")}>
//           A
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   note_wrapper: {
//     height: Dimensions.get('window').height,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   note: {
    // .note {
    //     height: 80px;
    //     width: 40px;
    //     background: white;
    //     border: 2px solid #ccc;
    //     border-radius: 2px;
    //     margin: 2px;
    //     cursor: pointer;
    //   }
    //   .note:active {
    //     background: grey;
    //   } 
//     height: 80,
//     width: 40,
//     backgroundColor: 'white',
//     borderWidth: 2,
//     borderRadius: 5,
//     margin: 2,



//   },
//   boardContainer: {
//     height: Dimensions.get('window').height * 0.8,
//     width: Dimensions.get('window').width * 0.8,
//     backgroundColor: 'red',
//     // borderRadius:50
//   },
//   column: {
//     width: 10,
//     height: 10,
//     borderWidth: 2
//   }
// });

function App() {
  return (
    <div style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',flexDirection:'column'}} className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Osc/>
      {/* <SimonSays/> */}

    </div>
  );
}

export default App;
