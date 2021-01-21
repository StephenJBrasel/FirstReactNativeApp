import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	center: {
		alignItems: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center'
	}
})

const Increment = () => {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.center}>
			<Text>You clicked {count} times!</Text>
			<Button
				onPress={() => setCount(count + 1)}
				title="Click me!"
			/>
		</View>
	)
}

const Greeting = (props) => {
	return (
		<View style={styles.center}>
			<Text>Hello, {props.name}!</Text>
		</View>
	)
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
		<Greeting name={'Rexxar'}/>
		<Greeting name={'Tom'}/>
		<Greeting name={'Bob'}/>
		<Text>Hello, world!</Text>
		<Increment></Increment>
    </View>
  )
}

export default LotsOfGreetings;
