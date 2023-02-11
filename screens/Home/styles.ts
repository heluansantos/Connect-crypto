import styled from "styled-components/native";

interface ButtonActionProps {
  type?: string;
}

interface ViewBalanceInfoProps {
  type?: string;
}

interface BalanceProps {
  status?: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222222;
`;

export const ViewList = styled.View`
  background-color: #222222;
  align-items: center;
  margin-top: 50px;
`;

export const ViewListTitle = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListTitleLeft = styled.Text`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

export const ListTitleRight = styled.Text`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #9d9d9d;
`;

export const ViewBalance = styled.View`
  justify-content: space-between;
`;

export const ViewButtons = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 25px;

  margin-bottom: 40px;
`;

export const ButtonAction = styled.TouchableOpacity<ButtonActionProps>`
  background: ${(props) => (props.type === "Deposit" ? "#7e13c8" : "#373737")}
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 10%;
`;

export const ButtonActionTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;
`;

export const ViewBalanceInfo = styled.View<ViewBalanceInfoProps>`
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 60%;
  flex-direction: ${(props) => (props.type === "row" ? "row" : "colunm")};
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #747474;
  align-self: flex-start;
`;

export const BalanceTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  letter-spacing: 0.02em;

  color: #ffffff;
`;

export const List = styled.ScrollView.attrs({
  horizontal: false,
})`
  width: 90%;
  height: 100%;
`;

export const BalancePercent = styled.Text<BalanceProps>`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #fa5454;
  color: ${(props) =>
    props.status === "positive"
      ? "#58CC4E"
      : props.status === "negative"
      ? "#FF5656"
      : "#858585"};
`;

export const BalancePercentView = styled.View`
  border-radius: 8px;
  padding-vertical: 3px;
  padding-horizontal: 10px;
  margin: 5px;
  background: rgba(255, 135, 135, 0.1);
`;
