import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: String,
    position?: 'bl' | 'br',
    onPress: () => void,
}

export const Fab = ( { title, position = 'bl', onPress }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress={ onPress }
                style={[
                    styles.fabMain,
                    styles[position]
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{ title }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.fabMain,
                    styles[position]
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    fabMain: {
        position: 'absolute',
        bottom: 25,
    },
    bl: {
        left: 25,
    },
    br: {
        right: 25,
    },
    fab: {
        backgroundColor: '#5856D6',
        height: 60,
        width: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});