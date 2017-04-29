/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

const indexStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})

export default class Doorto extends Component {
    shouldComponentUpdate() {

    }

    render() {
        return (
            <View style={indexStyles.container}>
                <Text style={indexStyles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={indexStyles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={indexStyles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        )
    }
}


AppRegistry.registerComponent('doorto', () => Doorto)
