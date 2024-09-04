import { Text, TextInput, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import React, { useState } from 'react';

export default function Home() {

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.mainText}>Continue assim!</Text>
                <Text style={styles.text}>Você continua dentro da dieta. Muito bem!</Text>
            </View>
            <Image style={styles.image} source={require('../../../assets/woman.png')} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Ir para a página inicial</Text>
            </TouchableOpacity>
        </View>
    )
}
