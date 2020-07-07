import React from 'react'
import {StyleSheet, View, } from 'react-native'
import {Text, H3, Form, Item, Input} from 'native-base'
import Button from '../ui/Button'

const RegisterForm = React.memo((props: any) => {
	 function handleSubmit()
	{
		alert("Hi")
	}

	return (
		<View>
			<Form>
				<Item floatingLabel>
					<Input label={'Name'} placeholder={'Name'} />
				</Item>
				<Item floatingLabel>
					<Input label={'Lastname'} secureTextEntry={true} placeholder={'LastName'} />
				</Item>
				<Item floatingLabel>
					<Input label={'Number'} secureTextEntry={true} placeholder={'Number'} />
				</Item>
				<Item floatingLabel>
					<Input label={'Email'} secureTextEntry={true} placeholder={'Email'} />
				</Item>
				<Item floatingLabel>
					<Input label={'password'} secureTextEntry={true} placeholder={'password'} />
				</Item>
				<View style={styles.owncontainer }>
					<Button  title={"Ragister"} onPress={() => handleSubmit()} />
				</View>
			</Form>
		</View>
	)
})

const styles = StyleSheet.create({
	owncontainer:{
		alignItems:'center',
		margin:50
	}

})


export default RegisterForm