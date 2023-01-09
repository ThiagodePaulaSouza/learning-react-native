import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MeuComponent() {
    return (
        <View style={_.card}>
            <Text style={_.cardTitle}>
                React Native
            </Text>
            <Text style={_.cardSubtitle}>
                Estou aprendendo react native
            </Text>
        </View>
    )
}

const _ = StyleSheet.create({
    card: {
        backgroundColor: '#ddd',
        padding: 12,
        borderRadius: 3,
        marginVertical: 6
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardSubtitle: {
        color: '#777',
        fontSize: 14,
    }
})