import { Button, Platform, ScrollView } from 'react-native';
import bs58 from "bs58";
import nacl from "tweetnacl";
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { Text, View } from '../components/Themed';
import { useRef, useState } from 'react';

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

export default function HomeScreen() {
  const [dappKeyPair] = useState(nacl.box.keyPair());
  const [sharedSecret, setSharedSecret] = useState<Uint8Array>();
  const [session, setSession] = useState<string>();
  const scrollViewRef = useRef<any>(null);
  const [logs, setLogs] = useState<string[]>([]);


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

    const url = buildUrl("disconnect", params);
    Linking.openURL(url);
  };


  return (
    <View style={{ flex: 1, backgroundColor: "#333" }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: "#111",
            padding: 20,
            paddingTop: 100,
            flexGrow: 1,
          }}
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }}
          style={{ flex: 1 }}
        >
          {logs.map((log, i) => (
            <Text
              key={`t-${i}`}
              style={{
                fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
                color: "#fff",
                fontSize: 14,
              }}
            >
              {log}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 0, paddingTop: 20, paddingBottom: 40 }}>
        <Btn title="Disconnect" onPress={disconnect} />
      </View>
    </View>
  );
}

const Btn = ({ title, onPress }: { title: string; onPress: () => Promise<void> }) => {
  return (
    <View style={{ marginVertical: 10 }}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};
