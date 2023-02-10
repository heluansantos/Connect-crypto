import { Image } from "react-native";
import { Text, View } from "../Themed";
import { Container } from "./styles";
import IconLogo from '../../assets/icons/IconLogo.svg'


const Header = () => {
  return (
    <Container>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
            <View>
            <IconLogo/>
            </View>
           <View>
            <Text style={{
              fontSize: 14,
              lineHeight: 19,
              marginLeft: 10,
              color: '#D19DF5',
            }}>Slide Labs</Text>
           </View>
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View>
            <Image 
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              marginRight: 2,
            }}/>
          </View>
         <View>
          <Text style={{
              fontSize: 8,
              lineHeight: 11,
              color: '#838383',
            }}>Hello</Text>
          <Text style={{
              fontSize: 12,
              lineHeight: 16,
              color: '#D3D3D3',
            }}>Heluan</Text>
         </View>
        </View>
    </Container>
  );
}

export default Header;
