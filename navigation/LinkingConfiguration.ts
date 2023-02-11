import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              WalletScreen: "home",
            },
          },
          MyCollections: {
            screens: {
              WalletScreen: "mycollections",
            },
          },
          Settings: {
            screens: {
              WalletScreen: "settings",
            },
          },
          CreateSPLtoken: {
            screens: {
              WalletScreen: "createspltoken",
            },
          },
          SwapTokens: {
            screens: {
              WalletScreen: "swaptokens",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
