import { StyleSheet, Text, View, Image, Animated, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { topicData } from './libraryData';

const styles = StyleSheet.create({
  subView: {
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 400,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  },
  title: {
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  blocks: {
    display: 'flex',
    flexDirection: 'row'
  },
  topic: {
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex'
  },
  imageGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 20
  },
  artTitle: {
    marginLeft: 10,
    marginRight: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  bookmarkBlock: { 
    height: 40, 
    width: 40, 
    borderRadius: 20, 
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 5,
    right: 15,
    zIndex: 1,
    alignSelf: 'flex-end'
  },
  bookmark: {
    height: 25,
    width: 15,
    position: 'absolute',
    top: 5,
    left: '30%',
  }
});

const bounceValue = new Animated.Value(400);
const cancelIcon = require('../../assets/icon/primary/x.png');
const bookmark_t = require('../../assets/icon/primary/bookmark.png');
const bookmark_f = require('../../assets/icon/Interactive/bookmark-true.png');

const toggleSubview = (savedHidden, setSavedHidden) => {    
  let toValue = 400;
  if(savedHidden) {
    toValue = 0;
  }

  Animated.spring(
    bounceValue,
    {
      toValue: toValue,
      tension: 2,
      friction: 5,
      useNativeDriver: true
    }
  ).start();

  setSavedHidden(!savedHidden);
}

const ArticleSingle = ({ art }) => {
  return (
    <View style={styles.topic}>
      <View style={styles.bookmarkBlock}>
        <TouchableOpacity style={{ display: 'flex' }} onPress={() => {}}>
          <Image source={bookmark_t} style={styles.bookmark} />
        </TouchableOpacity>
      </View>
      <ImageBackground source={{uri: art.pic}} 
                       style={{ height: 200, width: 200 }}
                       imageStyle={{ borderRadius: 20 }}>
          <LinearGradient colors={['#00000000', '#323333']} 
                          style={styles.imageGradient} />
      </ImageBackground>
      <Text numberOfLines={2} style={styles.artTitle}>{art.summary}</Text>
    </View>
  )
}

const Saved = ({ toggleSubview, savedHidden, setSavedHidden }) => {
  // just for test
  const art = [topicData['Planning for pregnancy'].article[0],
               topicData['Planning for pregnancy'].article[1],
               topicData['Planning for pregnancy'].article[2]]
  return (
    <Animated.View style={[styles.subView, {transform: [{translateY: bounceValue}]}]}>
      <View style={styles.title}>
        <View />
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Your Saved </Text>
        <TouchableOpacity onPress={() => {toggleSubview(savedHidden, setSavedHidden)}}>
          <Image source={cancelIcon} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.blocks}>
        {art.map((art, idx) => (
          <ArticleSingle art={art} key={idx} />
        ))}
      </View>
    </Animated.View>
  )
  
}

export { Saved, toggleSubview };