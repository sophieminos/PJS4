import React from "react";
import {AppRegistry, Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

const Accueil = () => {
    //rendu de la page

    return (

        <View style = {styles.window} >

            <Text  style = {styles.fontTitre}
            >Qui veut gagner son DUT Info ?</Text>


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


    fontTitre: {
        fontFamily : 'Dangrek' ,
        color: '#FFD966',
        fontSize:32,
        textAlign : "center",
        marginTop: '10%',
        marginBottom : '10%',
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

export default Accueil;
