import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./Navigation/Stack";
import Profile from "./Screens/Profile";
import { Provider as Paper } from "react-native-paper";
import ProfileN from "./Screens/ProjileN";
import Home from "./Screens/Home";
import UserProfile from "./Screens/Userprofile";
export default function App() {
  return (
    <Paper>
      <UserProfile />
      {/* <NavigationContainer>
        <Profile />
      </NavigationContainer> */}
    </Paper>
  );
}
