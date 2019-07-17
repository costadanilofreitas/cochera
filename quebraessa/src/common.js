import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://localhost:4000' : 'http://10.0.2.2:4000'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }