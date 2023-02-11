import { StatusBar } from "expo-status-bar";

// Providers
import { usePhantom } from "../../providers/wallet/PhantomContext";

// Components
import ItemCrypto from "../../components/ItemCrypto";
import Header from "../../components/Header";

// Icons
import IconArrowDownRight from "../../assets/icons/IconArrowDownRight.svg";
import IconArrowDownLeft from "../../assets/icons/IconArrowDownLeft.svg";

// Styles
import {
  BalanceTitle,
  ButtonAction,
  ButtonActionTitle,
  Container,
  List,
  ListTitleLeft,
  ListTitleRight,
  SubTitle,
  ViewBalance,
  ViewBalanceInfo,
  ViewButtons,
  ViewList,
  ViewListTitle,
} from "./styles";

//Utils
import { RootTabScreenProps } from "../../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { wallet } = usePhantom();
  const cryptoList = [
    {
      id: 0,
      icon: wallet.icon,
      nick: "BTC",
      title: "Biticoin",
      balance: 530.9,
      price: 23000,
      positiveBalance: 10.23,
      negativeBalance: null,
    },
    {
      id: 1,
      icon: wallet.icon,
      nick: "ETH",
      title: "Ethereum",
      balance: 30,
      price: 1200,
      positiveBalance: null,
      negativeBalance: 10,
    },
    {
      id: 2,
      icon: wallet.icon,
      nick: "HNT",
      title: "Helium",
      balance: 1240,
      price: 2.5,
      positiveBalance: null,
      negativeBalance: 50,
    },
  ];
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
        <List>
          {cryptoList.map((crypto) => {
            return <ItemCrypto />;
          })}
        </List>
      </ViewList>
    </Container>
  );
}
