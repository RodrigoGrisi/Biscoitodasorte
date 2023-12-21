import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

function App() {
  const [img, setImg] = useState(require("./src/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'frase 1',
    'frase 2',
    'frase 3',
    'frase 4',
    'frase 5',
    'frase 6',
    'frase 7',
  ]


  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase(`" ${frases[numeroAleatorio]} "`)
    setImg(require('./src/biscoitoAberto.png'))
  }

  function fecharBiscoito(){
    setTextoFrase('')
    setImg(require('./src/biscoito.png'))
  }


  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}> Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]}
        onPress={fecharBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}> Reiniciar Biscoito </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    margin: 30,
    color: '#dd7b22',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

})

export default App;