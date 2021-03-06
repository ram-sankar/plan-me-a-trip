import React, {useState, useContext} from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { NavigationContext } from '@react-navigation/native';

import AppIcons from "../../components/AppIcons";
import routes from "../../navigator/routes";
import AppScreen from "../../components/AppScreen";
import AppText from "../../components/AppText";
import { sizes } from "../../constants/theme";
import { profileDetails } from "../../constants/mocks";
import Posts from "./Posts";
import Cities from "./Cities";
import { Themes } from "../../constants/models/Common";
import ThemeContext from "../../common/ThemeContext";

const iconSize = 80, iconPadding = 20;
function Profile() {
  const { theme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation = React.useContext(NavigationContext);
  const tabHeaders = ['Posts', 'Cities'];
  const tabComponents = [<Posts data={profileDetails.posts} />, <Cities data={profileDetails.cities} />];

  const [activeTab, setActiveTab] = useState(tabHeaders[0]);
  const [renderContent, setRenderContent] = useState(tabComponents[0])

  const handleTabChange = (tab: string, index: number) => {
    setActiveTab(tab);
    setRenderContent(tabComponents[index])
  }
  const RenderTabs = () => (
  <>
    {tabHeaders.map((tab, index) => (
      <Pressable style={[styles.tabHeaderContainer, activeTab===tab && styles.activeTab]} onPress={() => handleTabChange(tab, index)} key={index}>
          <AppText style={[styles.tabHeaderText, activeTab===tab && styles.activeText]}>{tab}</AppText>
      </Pressable>
    ))}
  </>)

  const Stats = () => (
    <View style={styles.statsContainer}>
      <View style={styles.statsContent}>
        <AppText style={styles.statsValue}>{profileDetails.postsCount}</AppText>
        <AppText style={styles.statsText}>Posts</AppText>
      </View>
      <View style={styles.statsContent}>
        <AppText style={styles.statsValue}>{profileDetails.citiesCount}</AppText>
        <AppText style={styles.statsText}>Cities</AppText>
      </View>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topSection}>
      <Pressable onPress={() => navigation?.navigate(routes.SETTINGS)} style={styles.settings}>
        <AppIcons Icon="Ionicons" name="ios-settings" size={24} color={theme.gray} />
      </Pressable>
        <AppIcons Icon="MaterialCommunityIcons" name="account" size={iconSize} style={styles.profileIcon} color={theme.bg}/>
        <AppText style={styles.username}>{profileDetails.name}</AppText>
        <Stats />
      </View>
      <View style={styles.tabContainer}>
        <RenderTabs />
      </View>
      {renderContent}
    </AppScreen>
  )
}

const useStyles = (theme: Themes) => StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  topSection: {
    alignItems: 'center',
    margin: 10,
    width: '100%'
  },
  settings: {
    position: 'absolute',
    right: sizes.padding
  },
  profileIcon: {
    backgroundColor: theme.primary,
    height: iconSize + iconPadding,
    width: iconSize + iconPadding,
    borderRadius: (iconSize + iconPadding)/2,
    paddingLeft: iconPadding/2,
    paddingTop: iconPadding/2
  },
  username: {
    fontWeight: '700',
    fontSize: sizes.fontXXL,
    marginTop: 10
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
    justifyContent: 'center'
  },
  statsContent: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10
  },
  statsValue: {
    fontWeight: '700',
    fontSize: sizes.fontL
  },
  statsText: {
    fontWeight: '600',
    fontSize: sizes.fontL
  },
  tabContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: theme.gray2,
    borderBottomWidth: 1,
  },
  tabHeaderText: {
    fontWeight: '700',
    fontSize: sizes.fontL,
    color: theme.gray5,
  },
  tabHeaderContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomColor: theme.primary,
    borderBottomWidth: 2
  },
  activeText: {
    color: theme.primary,
  }
});
export default Profile;