import React, { Component, createElement } from 'react';
import {
  AppRegistry,
  BackAndroid,
  Text,
  View,
  Navigator,
  Image,
  DrawerLayoutAndroid,
} from 'react-native';

import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';
import TouchableIcon from './components/TouchableIcon/TouchableIcon';
import Home from './scenes/Home/Home';
import Profile from './scenes/Profile/Profile';
import Music from './scenes/Music/Music';
import Photos from './scenes/Photos/Photos';
import Friends from './scenes/Friends/Friends';
import TakePhoto from './scenes/TakePhoto/TakePhoto';
import Style from './Style';
import menuIcon from './hamburguer.png';
import backArrowIcon from './navigate-before.png';

import findIndexRoute from './utils/findIndexRoute';

export default class App extends Component {
  state = {
    routes: [
      {
        title: 'Home',
        component: Home,
      },
      {
        title: 'Profile',
        component: Profile,
        passProps: {
          profile: {
            photoPath: null,
            name: 'Janet Sarmiento',
            username: 'janet.sarmiento',
            mobilePhone: null,
          },
        },
      },
      {
        title: 'Music',
        component: Music,
      },
      {
        title: 'Photos',
        component: Photos,
      },
      {
        title: 'Friends',
        component: Friends,
      },
      {
        title: 'TakePhoto',
        component: TakePhoto,
      }
    ],
  };

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
        this.navigator.pop();
        return true;
      }
      return false;
    });
  };

  editPhoto = (photoPath) => {
    const {
      routes
    } = this.state;

    const index = findIndexRoute(routes, 'Profile');
    routes[index].passProps.profile.photoPath = photoPath;
    this.setState({routes: routes});
  };

  editUsername = (username) => {
    const {
      routes
    } = this.state;

    const index = findIndexRoute(routes, 'Profile');
    routes[index].passProps.profile.username = username;
    this.setState({routes: routes});
  };

  editMobilePhone = (phone) => {
    const {
      routes
    } = this.state;

    const index = findIndexRoute(routes, 'Profile');
    routes[index].passProps.profile.mobilePhone = mobilePhone;
    this.setState({routes: routes});
  };

  renderScene = (route, navigator) => {
    const {
      routes,
    } = this.state;

    let RouteComponent = route.component;
    return <RouteComponent navigator={navigator} routes={routes} title={route.title} parent={this} {...route.passProps}/>
  };

  render() {
    const {
      routes,
    } = this.state;

    const navigationView =
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>;

    const navigationBar = <Navigator.NavigationBar
      routeMapper={{
        LeftButton: (route, navigator, index, navState) => {
          const button = index > 0 ?
            <TouchableIcon
              style={Style.leftButtonNavbar}
              onPress={() => navigator.pop()}
              source={backArrowIcon}
            /> :
            <TouchableIcon
              style={Style.leftButtonNavbar}
              onPress={() => this.drawer.openDrawer()}
              source={menuIcon}
            />;
          return button;
        },
         RightButton: (route, navigator, index, navState) => {
          return (<Text></Text>);
        },
         Title: (route, navigator, index, navState) =>
           { return (<Text style={Style.titleTextNavbar}>{route.title}</Text>); },
       }}
       style={Style.navigationBar}
     />;

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <NavigationDrawer />}
        ref={drawer => {this.drawer = drawer;}}
      >
        <Navigator
          initialRoute={routes[0]}
          renderScene={this.renderScene}
          ref={navigator => {this.navigator = navigator;}}
          navigationBar={navigationBar}
          sceneStyle={Style.scene}
        />
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
