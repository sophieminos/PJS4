import React from "react";
import {AppRegistry, Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const Connexion = () => {
    //rendu de la page
    return (

        <View style = {styles.window}>

            <Text  style = {styles.fontTitre}>Connexion</Text>

            <Text style = {styles.fontSousTitre}>Email</Text>

            <TextInput
                style={styles.input}
                placeholder= "Votre email..."
            />
            <Text style = {styles.fontSousTitre}>Mot de passe</Text>

            <TextInput
                style={styles.input}
                placeholder="Votre mot de passe..."

            />


            <View style = {styles.button}>
                <Button  title={'Confirmer'}  color = '#8868B5'   > </Button>
            </View>

            <View style = {styles.button}>
                <Button    title={'Retour'} color = '#8868B5'   > </Button>
            </View>

        </View>


    );
};


//ca correspond a du css

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginTop: 20,
        marginBottom : 20,
        padding: 10,
        backgroundColor: '#8868B5'
    },

    fontTitre: {
        fontFamily : 'Dangrek' ,
        color: '#FFD966',
        fontSize:32,
        textAlign : "center",
        marginTop: '10%',
        marginBottom : '10%',
    },

    fontSousTitre: {
        fontFamily : 'Dangrek',
        color: '#FFD966',
        fontSize: 18,
        marginLeft : 10

    },

    window: {
        backgroundColor: '#5D336B',
        height:'100%'
    },

    button: {
        width : '30%',
        marginLeft: '33%',
        marginTop : 20,
        backgroundColor : '#8868B5'
    }

});

export default Connexion;
