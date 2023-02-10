import { Button } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import Header from '../../components/Header';
import { Container } from './styles';
import IconLogo from '../../assets/icons/IconLogo.svg'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  return (
    <Container>
      <StatusBar style="light" />
      <Header />
      <IconLogo />
      {/* <View style={{ flex: 0, paddingTop: 20, paddingBottom: 40 }}>
        <Btn title="Disconnect" onPress={disconnect} />
      </View> */}
    </Container>
  );
}

const Btn = ({ title, onPress }: { title: string; onPress: () => Promise<void> }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};
