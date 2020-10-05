import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList126555Navigator from '../features/ArticleList126555/navigator';
import ArticleList126554Navigator from '../features/ArticleList126554/navigator';
import ArticleList126553Navigator from '../features/ArticleList126553/navigator';
import ArticleList126536Navigator from '../features/ArticleList126536/navigator';
import ArticleList126535Navigator from '../features/ArticleList126535/navigator';
import ArticleList126534Navigator from '../features/ArticleList126534/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList126555: { screen: ArticleList126555Navigator },
ArticleList126554: { screen: ArticleList126554Navigator },
ArticleList126553: { screen: ArticleList126553Navigator },
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
