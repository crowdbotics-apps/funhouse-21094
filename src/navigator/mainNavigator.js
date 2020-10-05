import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings127010Navigator from '../features/Settings127010/navigator';
import UserProfile127003Navigator from '../features/UserProfile127003/navigator';
import Settings127002Navigator from '../features/Settings127002/navigator';
import Settings127000Navigator from '../features/Settings127000/navigator';
import SignIn2126998Navigator from '../features/SignIn2126998/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings127010: { screen: Settings127010Navigator },
UserProfile127003: { screen: UserProfile127003Navigator },
Settings127002: { screen: Settings127002Navigator },
Settings127000: { screen: Settings127000Navigator },
SignIn2126998: { screen: SignIn2126998Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
