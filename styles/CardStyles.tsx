import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');


const CardStyles = StyleSheet.create({
    card: {  
        width: width * 0.95,
        height: height * 0.65,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        position: 'relative',
        marginLeft: width * 0.025,
        marginRight: width * 0.025,
        marginTop: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    date: {
        position: 'absolute',
        bottom: 6,
        left: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    weight: {
        position: 'absolute',
        bottom: 6,
        right: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
      },
    counter: {
        position: 'absolute',
        top: 6,
        right: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    }

  });
  
  export default CardStyles