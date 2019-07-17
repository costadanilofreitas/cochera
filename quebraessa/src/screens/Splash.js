import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('App') },
            2000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/logo_quebra_essa.png')}
                    style={styles.image} />
            </View>
        )
    }
}

//<Text style={styles.header}>Quebra Essa</Text>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})