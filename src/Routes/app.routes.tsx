import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import Config from "../screens/Config/Config";
import ListaDeTarefas from "../screens/ListaDeTarefas/ListaDeTarefas";
import Conselhos from "../screens/Conselhos/Conselhos";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Config"
                component={Config}
            />

            <Screen
                name="Todo"
                component={ListaDeTarefas}
            />

            <Screen
                name="Conselho"
                component={Conselhos}
            />
        </Navigator>
    )
};