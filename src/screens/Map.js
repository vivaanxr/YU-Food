import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import ResContainer from '../components/ResContainer';
import firebase from 'firebase/app';
import 'firebase/firestore';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 130;

const firebaseConfig = {
  apiKey: 'AIzaSyCZm25yKGgFTsdu3PGzGQqU67mqwQLDstA',
  authDomain: 'fir-testing-c9440.firebaseapp.com',
  databaseURL: 'https://fir-testing-c9440.firebaseio.com',
  projectId: 'fir-testing-c9440',
  storageBucket: 'fir-testing-c9440.appspot.com',
  messagingSenderId: '766679207635',
  appId: '1:766679207635:ios:03a4d9f4b2052617b74e26' };
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export default class Map extends Component {

  Vari = {
    markers: [
      {
        coordinate: {
          latitude: 43.773059,
          longitude: -79.50465,
        },
        title: "Starbucks",
      },
      {
        coordinate: {
          latitude: 43.7730367,
          longitude: -79.5049256,
        },
        title: "Subway",
      }
    ],
    region: {
               latitude: 43.7729946,
               longitude: -79.5046252,
               latitudeDelta: 0.0000000122,
               longitudeDelta: 0.00121,
    },
  };

  Lanes = {
    markers: [
      {
        coordinate: {
          latitude: 43.7745195,
          longitude: -79.5015894,
        },
        title: "Cucinetta",
      },
      {
        coordinate: {
          latitude: 43.7744832,
          longitude: -79.5016624,
        },
        title: "Hero",
      },
      {
        coordinate: {
          latitude: 43.7741312,
          longitude: -79.5017516,
        },
        title: "Qoola",
      },
      {
        coordinate: {
          latitude:   43.7744352,
          longitude: -79.5017516,
        },
        title: "Sakura",
      }
    ],
    region: {
               latitude: 43.7741759,
               longitude: -79.5018033,
               latitudeDelta: 0.0000000122,
               longitudeDelta: 0.00221,
    },
  };

  Quad = {
    markers: [
      {
        coordinate: {
          latitude: 43.7699842,
          longitude: -79.5015,
        },
        title: "M2GO",
        
      },
      {
        coordinate: {
          latitude: 43.7699615,
          longitude: -79.5016803,
        },
        title: "Subway",
      },
      {
        coordinate: {
          latitude: 43.7698984,
          longitude: -79.5018683,
        },
        title: "Basil Box",
      },
      {
        coordinate: {
          latitude: 43.7698771,
          longitude: -79.5020111,
        },
        title: "Aroma",
      },
      {
        coordinate: {
          latitude: 43.7697173,
          longitude: -79.5019568,
        },
        title: "Booster Juice",
      },
      {
        coordinate: {
          latitude: 43.7696432,
          longitude: -79.5019139,
        },
        title: "Sushi Q",
      },
      {
        coordinate: {
          latitude: 43.7695222,
          longitude: -79.5018556,
        },
        title: "Pizza",
      },
      {
        coordinate: {
          latitude: 43.7701775,
          longitude: -79.5007846,
        },
        title: "Bahn Mi Boys",
        Time: "9:00"
      },
      {
        coordinate: {
          latitude: 43.7701988,
          longitude: -79.5006538,
        },
        title: "Amaya Express",
      },
      {
        coordinate: {
          latitude: 43.7702381,
          longitude: -79.5004641,
        },
        title: "Gong Cha Tea",
      },
      {
        coordinate: {
          latitude: 43.770287,
          longitude: -79.5002273,
        },
        title: "Osmows",
      },
      {
        coordinate: {
          latitude: 43.7701088,
          longitude: -79.5001522,
        },
        title: "Galito's",
      },
      {
        coordinate: {
          latitude: 43.7700332,
          longitude: -79.5000912,
        },
        title: "Fat Bastard",
      },
    ],
    region: {
               latitude: 43.7698758,
               longitude: -79.5011854,
               latitudeDelta: 0.0000000122,
               longitudeDelta: 0.00321,
    },
  };

  state=this.Quad;

  UNSAFE_componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
    async function getData(){
      var collection={}
      const collectionRef = db.collection('collection').doc('3qXsG0Cf23fw1xsOK5TL');
      const doc = await collectionRef.get();
      collection=doc.data();
      const Ref = db.collection(collection.Name);
      const snapshot = await Ref.get();
      const restaurantsArray = [];
      snapshot.forEach(doc => {
        restaurantsArray.push(doc.data());
      })
      permArray=restaurantsArray;
      currentArray=restaurantsArray;
    } 
    getData();
  }
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
        <View style={styles.filterView}>
          <TouchableOpacity onPress={()=> this.state=this.Quad}>
          <Image style={styles.filter}  source={require('../../assets/button_quad.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.state=this.Vari}>
          <Image style={styles.filter}  source={require('../../assets/button_vari-hall.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.filter} source={require('../../assets/button_york-lanes.png')}/>
          </TouchableOpacity>
        </View>

        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
          showsBuildings={true}
          showsPointsOfInterest={false}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <Text style={styles.Time}>Opens at {marker.Time}</Text>
                {/* <TouchableOpacity styles={{justifyContent:"flex-end",flexDirection:"column",flex:1}}>
                <Image style={styles.click} source={require("../../assets/button_click-for-more-info.png")}/>
                </TouchableOpacity> */}
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: "NewYorkMedium-Medium"
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
  click:{
    alignSelf:"center"
  },
  filterView:{
    flexDirection:"row",
    alignContent:"space-between"
  },
  filter:
  {
    width:(width-7)/3,
    resizeMode:"contain",
  },
  Time:{
    fontFamily:"NewYorkMedium-Regular",
  }
});