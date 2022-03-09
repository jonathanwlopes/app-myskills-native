import React from "react"
import { View, Text, StyleSheet } from "react-native"

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jonathan</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
  },

  title: {
    color: "#ffffff",
  },
})
