import React from 'react'
import { Text } from 'react-native'
import { GlobalStyle } from '../styles/style'

export default function Comp() {
  return <Text style={GlobalStyle.HeaderX}>Comp #Oficial</Text>
}

export function Comp1() {
  return <Text style={GlobalStyle.HeaderX}>Comp #01</Text>
}

export function Comp2() {
  return <Text style={GlobalStyle.HeaderX}>Comp #02</Text>
}
