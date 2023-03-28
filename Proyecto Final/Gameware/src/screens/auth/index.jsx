import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import React, { useReducer, useState } from 'react'
import formSlice, { initialState } from '../../store/form.slice';
import { login, registerUser } from '../../store/auth.slice';

import { onInputChange } from '../../utils';
import { styles } from './styles'
import { useDispatch } from 'react-redux';

const AuthScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formSlice, initialState);
    const title = isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE';
    const message = isLogin ? "No tengo una cuenta" : 'Ya tengo cuenta';
    const messageButton = isLogin ? 'INGRESAR' : 'REGISTRARME';

    const onHandlerSubmit = () => {
        dispatch(
            isLogin
                ? login(formState.email.value, formState.password.value)
                : registerUser(formState.email.value, formState.password.value)
        )
    }

    const onHandlerInputChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState);
    };

    return (
        <KeyboardAvoidingView behavior='height' style={styles.authScreen}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.promptMessage}>Email:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandlerInputChange(text, "email")}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    label="Email"
                />
                <Text style={styles.promptMessage}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandlerInputChange(text, 'password')}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    label="Password"
                />
                <View style={{ alignItems: "center", marginBottom: "8%" }}>
                    <Pressable style={styles.wrapperConfirm} onPress={onHandlerSubmit}>
                        <Text style={styles.confirm}>{messageButton}</Text>
                    </Pressable>
                </View>
                <View style={styles.prompt}>
                    <Pressable onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.promptButton}>{message}</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen