import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GlobalStyle } from '../styles/style'

const PrimeiroComponente = () => {
  //   console.warn('testando')
  return (
    <View>
      <View style={style.Box}>
        <Text style={[GlobalStyle.HeaderXl, style.Text]}>
          Meu Primeiro Componente
        </Text>
      </View>
      <Text>Somando 1 + 1 = {1 + 1}</Text>
    </View>
  )
}

export default PrimeiroComponente

const style = StyleSheet.create({
  Box: {
    backgroundColor: '#6495EDAA',
    padding: 8,
    marginHorizontal: 'auto',
    marginVertical: 8,
    alignItems: 'center'
  },
  Text: {
    color: '#fff'
  }
})
