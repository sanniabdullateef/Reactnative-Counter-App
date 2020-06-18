import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const colors = ['#ecf0f1','steelblue', 'orange', 'midnightblue', 'carrot', 'skyblue', 'wisteria', 'concrete', ' asbestos']

export default function App() {
  const [count, setCount] = useState(0);
  const [event, setEvent] = useState('No Event')
  const [backgroundColorCounter, setBackgroundColorCounter] = useState (0)
  const [eventOccur, setEventOccur] = useState('None');
  const [pageBackground, setPageBackground] = useState('yellow')

  useEffect(()=> {
    if (eventOccur === 'Addition') {
      setEvent('counter increases');
    } else {
        setEvent('Counter Decreases');
      }
    // setBackgroundColor('blue');
  }, [count])

  useEffect
  (()=> {
    const index = Math.floor(Math.random() * colors.length);
    setPageBackground(colors[index]);
    // console.log('Successfully launches')
  }, [backgroundColorCounter])

  const subtract = () => {
    setCount(count - 1)
    setEventOccur('Subtraction')
  }
  const add = () => {
    setCount(count + 1)
    setEventOccur('Addition')
  }

  return (
    <View style={{ flex: 1 ,alignItems: 'center', justifyContent: 'center', backgroundColor: pageBackground}}>
    <Text>{event}</Text>
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.btnMinus} onPress= {()=> setCount (count - 1)}> */}
      <TouchableOpacity style={styles.btnMinus} onPress= {subtract}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 20, fontSize: 30}}>{count}</Text>
      {/* <TouchableOpacity style={styles.btnPlus} onPress={()=> setCount(count + 1)}> */}
      <TouchableOpacity style={styles.btnPlus} onPress= {add}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.resetBtn} onPress={()=> setBackgroundColorCounter(backgroundColorCounter + 1)}>
        <Text style={{color:'white', fontSize: 20, fontWeight:'bold' }}>Change background</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20
  },
  btnPlus: {
    backgroundColor: 'green',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnMinus: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 30,
    color: "white"
  },
  resetBtn: {
    marginVertical: 10,
    backgroundColor: 'tomato',
    alignItems: "center",
    width: 200,
    height: 50,
    justifyContent: 'center',
    marginTop: 30
  }
});
