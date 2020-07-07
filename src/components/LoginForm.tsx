import React from 'react'
import {StyleSheet, View, } from 'react-native'
import {Text, H3, Form, Item, Input} from 'native-base'
import Button from '../ui/Button'
import { BorderlessButton } from 'react-native-gesture-handler'

const LoginForm = React.memo((props: any) => {
	function handleSubmit() {
		alert('Login successful')
	}
	return (
		<View>
			<Form style={{ margin: 20 }}>
				<Item floatingLabel>
					<Input label={'Username'} placeholder={'Username'} />
				</Item>
				<Item floatingLabel>
					<Input label={'Password'} secureTextEntry={true} placeholder={'Password'} />
				</Item>
				<View style={styles.loginbutton}>
					<Button  title={'Login'} onPress={() => handleSubmit()} />
				</View>
			</Form>
		</View>
	)
})

const styles = StyleSheet.create({
	loginbutton:{
		alignItems:  'center',
		margin:20
	}
})

export default LoginForm