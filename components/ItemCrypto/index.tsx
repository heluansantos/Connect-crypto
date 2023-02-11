import { View } from "../Themed";
import {
  Balance,
  Container,
  Image,
  SubTitle,
  ViewImage,
  ViewRow,
} from "./styles";
import { usePhantom } from "../../providers/wallet/PhantomContext";

interface ItemCryptoProps {}

const ItemCrypto: React.FC<ItemCryptoProps> = ({}) => {
  const { wallet } = usePhantom();

  return (
    <Container>
      <ViewRow>
        <ViewImage>
          <Image source={{ uri: wallet?.icon }} />
        </ViewImage>
        <View>
          <SubTitle>Bitcoin</SubTitle>
          <Balance>0.0000000 BTC</Balance>
        </View>
      </ViewRow>
      <ViewRow>
        <View>
          <SubTitle>$ 530</SubTitle>
          <Balance status="positive">+ $50,23</Balance>
        </View>
      </ViewRow>
    </Container>
  );
};

export default ItemCrypto;
