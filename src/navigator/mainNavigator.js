import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList126536Navigator from '../features/ArticleList126536/navigator';
import ArticleList126535Navigator from '../features/ArticleList126535/navigator';
import ArticleList126534Navigator from '../features/ArticleList126534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList126536: { screen: ArticleList126536Navigator },
ArticleList126535: { screen: ArticleList126535Navigator },
ArticleList126534: { screen: ArticleList126534Navigator },

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
