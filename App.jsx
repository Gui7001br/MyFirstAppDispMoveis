// Importação de componentes padrões do react-native;
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native';

// Função principal do app

export default function App (){
  return(
    <SafeAreaView style={styles.conteiner}>
    
    <Text style={styles.titulo}> Formulario de Cadastro </Text>
    <Text style={styles.label}>Nome: </Text>
    <TextInput style={styles.input}/>

    <Text style={styles.label}>E-mail: </Text>
    <TextInput style={styles.input}/>

    <Text style={styles.label}>Telefone: </Text>
    <TextInput style={styles.input}/>

    <Button title="Salvar" />
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    margin: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
    
  },
  label:{
    fontSize: 18,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 8,
    marginBottom: 8,
  }
})



