import styled from "styled-components/native";

interface ButtonActionProps {
  type?: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #222222;
`;

export const ViewList = styled.View`
  background-color: #222222;
  align-items: center;
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

export const ViewBalanceInfo = styled.View`
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 60%;
  margin-vertical: 40px;
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
