import React from "react";
import { StyleSheet} from 'react-native';

const Styles = StyleSheet.create({

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
        width : '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop : 20,
        backgroundColor : '#8868B5'
    }

});

export default Styles;