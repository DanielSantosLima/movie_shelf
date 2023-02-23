import { createDrawerNavigator } from "@react-navigation/drawer";
import { Entypo } from "react-native-vector-icons";
import ConfiguracoesScreen from "../screens/ConfiguracoesScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MinhaListaScreen from "../screens/MinhaListaScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "red",
        drawerInactiveTintColor: "#000",
        drawerActiveBackgroundColor: "#000",
        drawerInactiveBackgroundColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="star" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Minha Lista"
        component={MinhaListaScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="user" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={ConfiguracoesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="cog" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="cog" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
