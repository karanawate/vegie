import React from 'react'
import { View, } from 'react-native'
import {Button as BaseButton, Text} from 'native-base'

const Button = React.memo((props: any) => {
	return (
		<BaseButton onPress={props.onPress}>
			<Text>{props.title}</Text>
		</BaseButton>
	)
})

export default Button