import { Button } from 'react-native';
import bs58 from "bs58";
import nacl from "tweetnacl";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { View } from '../../components/Themed';
import { useState } from 'react';
import { useWallet } from '../../providers/wallet/WalletProvider';
import { RootTabScreenProps } from '../../types';
import Header from '../../components/Header';
import { Container } from './styles';

const onDisconnectRedirectLink = Linking.createURL("onDisconnect");
const buildUrl = (path: string, params: URLSearchParams) =>
  `https://phantom.app/ul/v1/${path}?${params.toString()}`;

const encryptPayload = (payload: any, sharedSecret?: Uint8Array) => {
  if (!sharedSecret) throw new Error("missing shared secret");

  const nonce = nacl.randomBytes(24);

  const encryptedPayload = nacl.box.after(
    Buffer.from(JSON.stringify(payload)),
    nonce,
    sharedSecret
  );

  return [nonce, encryptedPayload];
};

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const {session, setSession} = useWallet()
  const [dappKeyPair] = useState(nacl.box.keyPair());
  const [sharedSecret, setSharedSecret] = useState<Uint8Array>();


  const disconnect = async () => {
    const payload = {
      session,
    };
    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret);

    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onDisconnectRedirectLink,
      payload: bs58.encode(encryptedPayload),
    });
    
    setSession(undefined)
    navigation.replace('Connect')
    const url = buildUrl("disconnect", params);
    Linking.openURL(url);
  };

  return (
    <Container>
      <StatusBar style="light" />
      <Header />
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
