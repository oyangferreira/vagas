import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const App = () => {
  const vagas = [
    {
      id: 1,
      nome: 'Desenvolvedor Web',
      salario: 'Salário: R$ 5000 - R$ 8000',
      descricao: 'Descrição: Desenvolvimento de aplicações web utilizando React.js e Node.js.',
      contato: 'Contato: contato@empresa.com',
    },
    {
      id: 2,
      nome: 'Analista de Dados',
      salario: 'Salário: R$ 6000 - R$ 10000',
      descricao: 'Descrição: Análise de dados e criação de dashboards utilizando Python e SQL.',
      contato: 'Contato: rh@empresa.com',
    },
    {
      id: 3,
      nome: 'Designer UI/UX',
      salario: 'Salário: R$ 4000 - R$ 7000',
      descricao: 'Descrição: Design de interfaces para aplicativos mobile e web.',
      contato: 'Contato: recrutamento@empresa.com',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      <ScrollView style={styles.scrollView}>
        {vagas.map((vaga) => (
          <View key={vaga.id} style={styles.vaga}>
            <Text style={styles.nomeVaga}>{vaga.nome}</Text>
            <Text>{vaga.salario}</Text>
            <Text>{vaga.descricao}</Text>
            <Text style={styles.contato}>{vaga.contato}</Text>
            <View style={styles.divisor} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'red',
  },
  scrollView: {
    width: '100%',
  },
  vaga: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  nomeVaga: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'blue',
  },
  contato: {
    marginTop: 10
  },
  divisor: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
  },
});

export default App;
