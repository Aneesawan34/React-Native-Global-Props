//import {setCustomText} from 'react-native-global-props';
//open package.json file and add following things in main object
// "jest": {
//     "preset": "react-native"
//   },
//   "rnpm": {
//     "assets": [
//       "./assets/fonts/"
//     ]
//   }


const customTextProps = {
    style: {
      // fontSize: 16,
      fontFamily: 'Nunito-SemiBold',
      // color: 'black'
    },
  };


  export default class App extends Component {
    componentDidMount() {
        setCustomText(customTextProps);
      }
      render() {
        return <StackNavigator />;
      }  
}