import React from 'react'
import { View, Text, Button } from 'react-native'

const About = React.memo((props:any) => {
	const {navigation} = props
	return (
		<View>
			<Text>Hpme</Text>
			<Button title='About' onPress={() => navigation.navigate('About')} />
		</View>
	)
})
export default About