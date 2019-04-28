import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
	static navigationOptions = {
		title: 'Links',
	};

	render() {
		return (
			<ScrollView style={styles.container} contentContainerStyle={styles.con}>
				<View style={styles.box}>
					<View style={styles.tab}>
						<Text>Hobby</Text>
					</View>
					<View style={styles.tab}>
						<Text>Job</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
		
	},
	tab : {
		flex:1,
		justifyContent: 'center',
		borderWidth:1,
		borderColor:'blue',
		alignItems:'center'
	},
	con: {
		alignItems:'center'
	},
	box : {
		height: 50,
		width:'70%',
		flexDirection:'row',
	}
});
