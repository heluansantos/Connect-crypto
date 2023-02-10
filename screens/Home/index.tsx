import { StatusBar } from "expo-status-bar";
import { RootTabScreenProps } from "../../types";
import Header from "../../components/Header";
import {
  ButtonAction,
  ButtonTitle,
  Container,
  ListTitleLeft,
  ListTitleRight,
  ViewBalance,
  ViewButtons,
  ViewList,
  ViewListTitle,
} from "./styles";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <Container>
      <StatusBar style="light" />
      <Header />

      <ViewBalance>
        <ViewButtons>
          {/* <ButtonAction>
            <ButtonTitle>Deposit</ButtonTitle>
          </ButtonAction>
          <ButtonAction>
            <ButtonTitle>Withdraw</ButtonTitle>
          </ButtonAction> */}
        </ViewButtons>
      </ViewBalance>

      <ViewList>
        <ViewListTitle>
          <ListTitleLeft>Token list</ListTitleLeft>
          <ListTitleRight>Manage token list</ListTitleRight>
        </ViewListTitle>
      </ViewList>
    </Container>
  );
}
