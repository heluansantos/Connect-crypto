import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import MyCollectionsScreen from "../screens/MyCollections";
import Connect from "../screens/Connect";
import HomeScreen from "../screens/Home";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import CreateSPLtokenScreen from "../screens/CreateSPLtoken";
import SettingsScreen from "../screens/Settings";
import SwapTokensScreen from "../screens/SwapTokens";
import { usePhantom } from "../providers/wallet/PhantomContext";

// Icons
import IconHome from "../assets/icons/IconHome.svg";
import IconWhiteHome from "../assets/icons/IconWhiteHome.svg";
import IconSwap from "../assets/icons/IconSwap.svg";
import IconWhiteSwap from "../assets/icons/IconWhiteSwap.svg";
import IconCollections from "../assets/icons/IconCollections.svg";
import IconWhiteCollections from "../assets/icons/IconWhiteCollections.svg";
import IconToken from "../assets/icons/IconToken.svg";
import IconWhiteToken from "../assets/icons/IconWhiteToken.svg";
import IconSettings from "../assets/icons/IconSettings.svg";
import IconWhiteSettings from "../assets/icons/IconWhiteSettings.svg";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { phantomWalletPublicKey } = usePhantom();

  return (
    <Stack.Navigator>
      {phantomWalletPublicKey ? (
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Connect"
          component={Connect}
          options={{ headerShown: false }}
        />
      )}
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          height: 90,
          position: "absolute",
          backgroundColor: "rgba(38, 38, 38, 0.6)",
        },
        headerShown: false,
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={30} style={{ height: 90 }} />
        ),
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? <IconWhiteHome /> : <IconHome />,
        }}
      />
      <BottomTab.Screen
        name="SwapTokens"
        component={SwapTokensScreen}
        options={{
          title: "SwapTokens",
          tabBarIcon: ({ focused }) =>
            focused ? <IconWhiteSwap /> : <IconSwap />,
        }}
      />
      <BottomTab.Screen
        name="MyCollections"
        component={MyCollectionsScreen}
        options={{
          title: "Collections",
          tabBarIcon: ({ focused }) =>
            focused ? <IconWhiteCollections /> : <IconCollections />,
        }}
      />
      <BottomTab.Screen
        name="CreateSPLtoken"
        component={CreateSPLtokenScreen}
        options={{
          title: "CreateSPLtoken",
          tabBarIcon: ({ focused }) =>
            focused ? <IconWhiteToken /> : <IconToken />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) =>
            focused ? <IconWhiteSettings /> : <IconSettings />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
