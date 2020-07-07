import React from 'react'
import { View, Text, Button } from 'react-native'

const AppLoading = React.memo((props:any) => {
	return (
		<View style={styles.loadingContainer}>
			<Text>Loading...</Text>
		</View>
	)
})

const styles: any = {
	loadingContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
}
export default AppLoading