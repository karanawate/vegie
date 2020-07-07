import React from 'react'
import { View, } from 'react-native'
import { H1, Title, Container, Content, Grid, Col } from 'native-base'
import Button from '../ui/Button'

const Auth = React.memo((props:any) => {
	const {navigation} = props
	return (
		<Container>
			<Content centerContent={true} style={{ padding: 15, }} contentContainerStyle={{flex: 1, justifyContent: 'center', }} >
				<View>
					<H1 style={{marginBottom: 20}}>Welcome, login to continue</H1>
					<Grid>
						<Col size={45}>
							<Button title='Login' onPress={() => navigation.navigate('Login')} />
						</Col>
						<Col size={10}></Col>
						<Col size={45}>
							<Button title='Register' onPress={() => navigation.navigate('Register')} />
						</Col>
					</Grid>
					
				</View>
			</Content>
		</Container>
	)
})
export default Auth