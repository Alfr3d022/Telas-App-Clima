import { SafeAreaView, Text, View, StyleSheet,TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    
    <View style={styles.container}>
      <View style={styles.containerSetup}>
        <Image style={styles.imageTree} source={require('../assets/images/tree.png')}/>
        <Text style={styles.title}>
          Veja como está o tempo ao redor do mundo 🌍️
        </Text>
        <Text style={styles.text}>
          Comece agora gratuitamente
        </Text>
        <TouchableOpacity style={styles.button}>
          <Link href={'./tabs/home'}><Text style={styles.buttonText}>Vamos lá</Text></Link>
        </TouchableOpacity>
        <View style={{flexDirection: "row"}}>
        <Text style={styles.text}>
          Já tem uma conta?
        </Text>
        <Link href={'/'}><Text style={styles.buttonLogin}>Log in</Text></Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6151C3',
  },
  containerSetup:{
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 30,
    width:350,
    height: 361
  },
  imageTree:{
    width: 43,
    height: 9
  },
  title:{
    marginTop: 24,
    marginBottom:16,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  button:{
    marginTop: 64,
    marginBottom: 16,
    backgroundColor: '#6151c3',
    padding: 10,
    width: 264,
    height: 60,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
  },

  text:{
    fontSize: 14
  },
  buttonLogin:{
    fontSize: 14,
    color: '#6151c3'
  },
});
