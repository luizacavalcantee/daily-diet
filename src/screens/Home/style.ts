import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',},
    textBox: {
        gap: 8
    },
    mainText: {
        textAlign: 'center',
        color: '#639339',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    text: {
        textAlign: 'center',
        color: '#1B1D1E',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Nunito Sans',
    },
    image: {
        width: 224,
        height: 288,
        marginTop: 40,
        marginBottom: 32
    },
    button: {
        height: 50,
        width: 191,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333638',
        borderRadius: 6
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold',
        alignItems: 'center'
    }
});