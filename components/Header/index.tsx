import { View } from "../Themed";
import { Container, Image, Name, SubTitle, Title, ViewRow } from "./styles";
import IconLogo from "../../assets/icons/IconLogo.svg";
import { useState } from "react";
import { usePhantom } from '../../providers/wallet/PhantomContext';

const Header = () => {
  const {wallet} = usePhantom()
  const [user] = useState({
    image: wallet?.icon,
    name: wallet?.name,
  });
  return (
    <Container>
      <ViewRow>
        <IconLogo />
        <Title>Slide Labs</Title>
      </ViewRow>
      <ViewRow>
        <Image source={{ uri: user?.image }} />
        <View>
          <SubTitle>Hello</SubTitle>
          <Name>{user?.name}</Name>
        </View>
      </ViewRow>
    </Container>
  );
};

export default Header;
