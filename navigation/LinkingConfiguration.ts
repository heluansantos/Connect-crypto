import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Wallet: {
            screens: {
              WalletScreen: 'wallet',
            },
          },
          Home: {
            screens: {
              WalletScreen: 'home',
            },
          },
          Collections: {
            screens: {
              WalletScreen: 'collections',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
