import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import PrimeiroComponente from './src/components/Primeiro'
import CompPadrao, { Comp1, Comp2 } from './src/components/Multi'

const App = () => {
  return (
    <SafeAreaView style={style.App}>
      <PrimeiroComponente />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
    </SafeAreaView>
  )
}

export default App

const style = StyleSheet.create({
  App: {
    padding: 16,
    paddingTop: 38,
    backgroundColor: '#ccc',
    flex: 1
  }
})
