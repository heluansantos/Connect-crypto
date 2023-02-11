import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { Buffer } from "buffer";
global.Buffer = global.Buffer || Buffer;
import React from "react";
import { Button, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "./styles";
import { usePhantom } from "../../providers/wallet/PhantomContext";

export default function Connect() {
  const { publicKey, connect } = usePhantom();
  console.log(publicKey);

  return (
    <Container>
      <StatusBar style="light" />
      <View style={{ flex: 0, paddingTop: 20, paddingBottom: 40 }}>
        <Button title="Connect" onPress={connect} />
      </View>
    </Container>
  );
}
