import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: { contador }
            </Text>

            <Fab
                title="-1"
                position="bl"
                onPress={ () => setContador(contador - 1) }
            ></Fab>

            <Fab
                title="+1"
                position="br"
                onPress={ () => setContador(contador + 1) }
            ></Fab>

            {/* <TouchableOpacity
                onPress={ () => setContador(contador + 1) }
                style={styles.fabMainRight }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
});