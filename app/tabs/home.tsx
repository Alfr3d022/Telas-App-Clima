import { SafeAreaView, Text, View, StyleSheet,TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Olá User,</Text>
                    <Text style={styles.title}>Descubra o clima</Text>
                </View>
                <TouchableOpacity>
                    <Image style={styles.globo} source={require('../../assets/images/globo.png')}></Image>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Link href="/"><Text style={styles.buttonText}>Pesquise por uma cidade</Text></Link>
            </TouchableOpacity>
            <View style={styles.cities}>
                <Text style={styles.title}>Ao redor do mundo</Text>
                <View style={styles.boxCities}>
                    <Text style={styles.cityInfo}>País</Text>
                    <Text style={styles.cityName}>Cidade</Text>
                    <View style={styles.cityFooter}>
                        <Text style={styles.cityInfo}>Clear</Text>
                        <Text style={styles.cityInfo}>xºC</Text>
                    </View>
                </View>
                <View style={styles.boxCities}>
                    <Text style={styles.cityInfo}>País</Text>
                    <Text style={styles.cityName}>Cidade</Text>
                    <View style={styles.cityFooter}>
                        <Text style={styles.cityInfo}>Clear</Text>
                        <Text style={styles.cityInfo}>xºC</Text>
                    </View>
                </View>
                <View style={styles.boxCities}>
                    <Text style={styles.cityInfo}>País</Text>
                    <Text style={styles.cityName}>Cidade</Text>
                    <View style={styles.cityFooter}>
                        <Text style={styles.cityInfo}>Clear</Text>
                        <Text style={styles.cityInfo}>xºC</Text>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 40,
        marginHorizontal: 30,
        alignItems: 'center'
    },
    header:{
        flexDirection: 'row',
    },
    title:{
        fontSize: 20,
    },
    globo:{
        width:50,
        height:50,
        marginLeft: 150
    },
    button:{
        marginTop: 63,
        marginBottom: 98,
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
    cities:{
        alignContent: 'flex-start'
    },
    boxCities:{
        backgroundColor: '#6151c3',
        borderRadius: 30,
        width:338,
        height: 144,
        marginTop: 16,
        padding: 15
    },
    cityName:{
        fontSize: 28,
        color: "#fff",
        fontFamily: 'Roboto'
    },
    cityInfo:{
        fontSize: 18,
        color: "#fff",
        fontFamily: 'Roboto'
    },
    cityFooter:{
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})