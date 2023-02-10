import { View } from "../Themed";
import { Container, Image, Name, SubTitle, Title, ViewRow } from "./styles";
import IconLogo from "../../assets/icons/IconLogo.svg";
import { useState } from "react";

const Header = () => {
  const [user] = useState({
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "Heluan",
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
