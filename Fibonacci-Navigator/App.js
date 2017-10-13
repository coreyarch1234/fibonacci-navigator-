import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Welcome to the Fibonacci App</Text>
//       </View>
//     );
//   }
// }

class HomeScreen extends React.Component {
    static navigationOptions = {
        title:"Fibonacci Generator"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style= {styles.container}>
                <Text style={{fontSize:30, textAlign: 'center'}}> Tap next to get the following fibonacci number </Text>
                <Button
                    onPress={() => navigate('FibonacciOne')}
                    title = "Next"
                />
            </View>
        )
    }

}

class FibonacciOne extends React.Component {
    static navigationOptions = {
        title: "Fibonacci Generator"
    };
    constructor(props) {
        super(props);

        this.previous = 1;
        this.next = 1;
        const { params } = this.props.navigation.state;
        if (params !== undefined){
            this.previous = params.previous;
            this.next = params.next;
            console.log("PREVIOUS IS: " + this.previous);
            console.log("NEXT IS: " + this.next);
        }
        console.log("PREVIOUS IS: " + this.previous);
        console.log("NEXT IS: " + this.next);

        // const previous = params.previous;
        // const next = params.next ? params.next : 1;

        // this.state = {
        //     previous: 1,
        //     next: 1
        // }
    }

    // showButton(){
    //     const {params} = this.props.navigation.state;
    //     const { navigate } = this.props.navigation;
    //     if (params == undefined){
    //         console.log("Params is undefined");
    //         return (
    //             <Button
    //                 onPress={() => navigate('FibonacciTwo', {previous:this.state.previous, next:(this.state.previous + this.state.next)})}
    //                 title = "Next"
    //             />
    //         )
    //     }else{
    //         console.log("Params is not undefined");
    //         <Button
    //             onPress={() => navigate('FibonacciTwo', {previous:params.next, next:(params.previous + params.next)})}
    //             title = "Next"
    //         />
    //     }
    // }

    render() {
        // const {params} = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text style = {{fontSize: 50, textAlign: 'center', fontWeight: '200'}}>{this.next}</Text>
                <Button
                    onPress={() => navigate('FibonacciTwo', {previous:this.next, next:(this.previous + this.next)})}
                    title = "Next"
                />

            </View>
        )
    }
};

//
// {
//     params: {a:1, b:2},
//     sum: function() {
//         const { a, b } = this.params;
//         return a + b;
//     }
// }


class FibonacciTwo extends React.Component {
    static navigationOptions = {
        title: "Fibonacci Generator"
    };
    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
        this.previous = params.previous;
        this.next = params.next;
        console.log("our previous is: " + params.previous);
        console.log("our next is: " + params.next);
    }

    render() {

        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style = {{fontSize: 50, textAlign: 'center', fontWeight: '200'}}>{this.next}</Text>
                <Button
                    onPress={() => navigate('FibonacciOne', {previous:this.next, next:(this.previous + this.next)})}
                    title = "Next"
                />

            </View>
        )
    }
}
const NavStack = StackNavigator ({
    HomeScreen: {screen:HomeScreen},
    FibonacciOne: {screen:FibonacciOne},
    FibonacciTwo: {screen:FibonacciTwo}
})

export default class App extends React.Component {
    render() {
        return <NavStack />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
