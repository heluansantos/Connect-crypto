import { StatusBar } from "expo-status-bar";
import { RootTabScreenProps } from "../../types";
import Header from "../../components/Header";

// Styles
import {
  BalanceTitle,
  ButtonAction,
  ButtonActionTitle,
  Container,
  ListTitleLeft,
  ListTitleRight,
  SubTitle,
  ViewBalance,
  ViewBalanceInfo,
  ViewButtons,
  ViewList,
  ViewListTitle,
} from "./styles";

// Icons
import IconArrowDownRight from "../../assets/icons/IconArrowDownRight.svg";
import IconArrowDownLeft from "../../assets/icons/IconArrowDownLeft.svg";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <Container>
      <StatusBar style="light" />
      <Header />

      <ViewBalance>
        <ViewButtons>
          <ButtonAction onPress={() => {}} type="Deposit">
            <ButtonActionTitle>
              {" "}
              <IconArrowDownRight />
              Deposit
            </ButtonActionTitle>
          </ButtonAction>
          <ButtonAction onPress={() => {}} type="Withdraw">
            <ButtonActionTitle>
              {" "}
              <IconArrowDownLeft />
              Withdraw
            </ButtonActionTitle>
          </ButtonAction>
        </ViewButtons>

        <ViewBalanceInfo>
          <SubTitle>Your balance</SubTitle>
          <BalanceTitle>$ 2.450,56</BalanceTitle>
        </ViewBalanceInfo>
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
