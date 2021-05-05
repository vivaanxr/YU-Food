import React, { Component } from 'react';
import { StyleSheet, View, Animated, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import ResContainer2 from '../components/ResContainer2';
import restaurantList from '../../restaurantList';

const { width, height } = Dimensions.get('window');

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width - 130;

export default class Map extends Component {
	SetVari() {
		this.setState({
			markers: [
				{
					coordinate: {
						latitude: 43.773059,
						longitude: -79.50465,
					},
					Name: 'Starbucks CSQ',
					Building: restaurantList[23]['Building'],
					YUCARD: restaurantList[23]['YUCARD'],
					M: restaurantList[23]['M'],
					T: restaurantList[23]['T'],
					W: restaurantList[23]['W'],
					TH: restaurantList[23]['TH'],
					F: restaurantList[23]['F'],
					SA: restaurantList[23]['SA'],
					SU: restaurantList[23]['SU'],
					MC: restaurantList[23]['MC'],
					TC: restaurantList[23]['TC'],
					WC: restaurantList[23]['WC'],
					THC: restaurantList[23]['THC'],
					FC: restaurantList[23]['FC'],
					SAC: restaurantList[23]['SAC'],
					SUC: restaurantList[23]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7730367,
						longitude: -79.5049256,
					},
					Name: 'Subway CSQ',
					Building: restaurantList[24]['Building'],
					YUCARD: restaurantList[24]['YUCARD'],
					M: restaurantList[24]['M'],
					T: restaurantList[24]['T'],
					W: restaurantList[24]['W'],
					TH: restaurantList[24]['TH'],
					F: restaurantList[24]['F'],
					SA: restaurantList[24]['SA'],
					SU: restaurantList[24]['SU'],
					MC: restaurantList[24]['MC'],
					TC: restaurantList[24]['TC'],
					WC: restaurantList[24]['WC'],
					THC: restaurantList[24]['THC'],
					FC: restaurantList[24]['FC'],
					SAC: restaurantList[24]['SAC'],
					SUC: restaurantList[24]['SUC'],
				},
			],
		});
		this.setState({
			region: {
				latitude: 43.7729946,
				longitude: -79.5046252,
				latitudeDelta: 0.0000000122,
				longitudeDelta: 0.00121,
			},
		});
	}

	setLanes() {
		this.setState({
			markers: [
				{
					coordinate: {
						latitude: 43.7745195,
						longitude: -79.5015894,
					},
					Name: 'Cucinetta Italian Cafe',
					Building: restaurantList[6]['Building'],
					YUCARD: restaurantList[6]['YUCARD'],
					M: restaurantList[6]['M'],
					T: restaurantList[6]['T'],
					W: restaurantList[6]['W'],
					TH: restaurantList[6]['TH'],
					F: restaurantList[6]['F'],
					SA: restaurantList[6]['SA'],
					SU: restaurantList[6]['SU'],
					MC: restaurantList[6]['MC'],
					TC: restaurantList[6]['TC'],
					WC: restaurantList[6]['WC'],
					THC: restaurantList[6]['THC'],
					FC: restaurantList[6]['FC'],
					SAC: restaurantList[6]['SAC'],
					SUC: restaurantList[6]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7744832,
						longitude: -79.5016624,
					},
					Name: 'Hero Burgers',
					Building: restaurantList[14]['Building'],
					YUCARD: restaurantList[14]['YUCARD'],
					M: restaurantList[14]['M'],
					T: restaurantList[14]['T'],
					W: restaurantList[14]['W'],
					TH: restaurantList[14]['TH'],
					F: restaurantList[14]['F'],
					SA: restaurantList[14]['SA'],
					SU: restaurantList[14]['SU'],
					MC: restaurantList[14]['MC'],
					TC: restaurantList[14]['TC'],
					WC: restaurantList[14]['WC'],
					THC: restaurantList[14]['THC'],
					FC: restaurantList[14]['FC'],
					SAC: restaurantList[14]['SAC'],
					SUC: restaurantList[14]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7741312,
						longitude: -79.5017516,
					},
					Name: 'Qoola Frozen Yogurt',
					Building: restaurantList[21]['Building'],
					YUCARD: restaurantList[21]['YUCARD'],
					M: restaurantList[21]['M'],
					T: restaurantList[21]['T'],
					W: restaurantList[21]['W'],
					TH: restaurantList[21]['TH'],
					F: restaurantList[21]['F'],
					SA: restaurantList[21]['SA'],
					SU: restaurantList[21]['SU'],
					MC: restaurantList[21]['MC'],
					TC: restaurantList[21]['TC'],
					WC: restaurantList[21]['WC'],
					THC: restaurantList[21]['THC'],
					FC: restaurantList[21]['FC'],
					SAC: restaurantList[21]['SAC'],
					SUC: restaurantList[21]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7744352,
						longitude: -79.5017516,
					},
					Name: 'Sakura Japanese Foods',
					Building: restaurantList[22]['Building'],
					YUCARD: restaurantList[22]['YUCARD'],
					M: restaurantList[22]['M'],
					T: restaurantList[22]['T'],
					W: restaurantList[22]['W'],
					TH: restaurantList[22]['TH'],
					F: restaurantList[22]['F'],
					SA: restaurantList[22]['SA'],
					SU: restaurantList[22]['SU'],
					MC: restaurantList[22]['MC'],
					TC: restaurantList[22]['TC'],
					WC: restaurantList[22]['WC'],
					THC: restaurantList[22]['THC'],
					FC: restaurantList[22]['FC'],
					SAC: restaurantList[22]['SAC'],
					SUC: restaurantList[22]['SUC'],
				},
			],
		});
		this.setState({
			region: {
				latitude: 43.7741759,
				longitude: -79.5018033,
				latitudeDelta: 0.0000000122,
				longitudeDelta: 0.00221,
			},
		});
	}

	Lanes = {
		markers: [
			{
				coordinate: {
					latitude: 43.7745195,
					longitude: -79.5015894,
				},
				Name: 'Cucinetta Italian Cafe',
				Building: restaurantList[6]['Building'],
				YUCARD: restaurantList[6]['YUCARD'],
				M: restaurantList[6]['M'],
				T: restaurantList[6]['T'],
				W: restaurantList[6]['W'],
				TH: restaurantList[6]['TH'],
				F: restaurantList[6]['F'],
				SA: restaurantList[6]['SA'],
				SU: restaurantList[6]['SU'],
				MC: restaurantList[6]['MC'],
				TC: restaurantList[6]['TC'],
				WC: restaurantList[6]['WC'],
				THC: restaurantList[6]['THC'],
				FC: restaurantList[6]['FC'],
				SAC: restaurantList[6]['SAC'],
				SUC: restaurantList[6]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7744832,
					longitude: -79.5016624,
				},
				Name: 'Hero Burgers',
				Building: restaurantList[14]['Building'],
				YUCARD: restaurantList[14]['YUCARD'],
				M: restaurantList[14]['M'],
				T: restaurantList[14]['T'],
				W: restaurantList[14]['W'],
				TH: restaurantList[14]['TH'],
				F: restaurantList[14]['F'],
				SA: restaurantList[14]['SA'],
				SU: restaurantList[14]['SU'],
				MC: restaurantList[14]['MC'],
				TC: restaurantList[14]['TC'],
				WC: restaurantList[14]['WC'],
				THC: restaurantList[14]['THC'],
				FC: restaurantList[14]['FC'],
				SAC: restaurantList[14]['SAC'],
				SUC: restaurantList[14]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7741312,
					longitude: -79.5017516,
				},
				Name: 'Qoola frozen yogurt',
				Building: restaurantList[21]['Building'],
				YUCARD: restaurantList[21]['YUCARD'],
				M: restaurantList[21]['M'],
				T: restaurantList[21]['T'],
				W: restaurantList[21]['W'],
				TH: restaurantList[21]['TH'],
				F: restaurantList[21]['F'],
				SA: restaurantList[21]['SA'],
				SU: restaurantList[21]['SU'],
				MC: restaurantList[21]['MC'],
				TC: restaurantList[21]['TC'],
				WC: restaurantList[21]['WC'],
				THC: restaurantList[21]['THC'],
				FC: restaurantList[21]['FC'],
				SAC: restaurantList[21]['SAC'],
				SUC: restaurantList[21]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7744352,
					longitude: -79.5017516,
				},
				Name: 'Sakura Japenese Food',
				Building: restaurantList[22]['Building'],
				YUCARD: restaurantList[22]['YUCARD'],
				M: restaurantList[22]['M'],
				T: restaurantList[22]['T'],
				W: restaurantList[22]['W'],
				TH: restaurantList[22]['TH'],
				F: restaurantList[22]['F'],
				SA: restaurantList[22]['SA'],
				SU: restaurantList[22]['SU'],
				MC: restaurantList[22]['MC'],
				TC: restaurantList[22]['TC'],
				WC: restaurantList[22]['WC'],
				THC: restaurantList[22]['THC'],
				FC: restaurantList[22]['FC'],
				SAC: restaurantList[22]['SAC'],
				SUC: restaurantList[22]['SUC'],
			},
		],
		region: {
			latitude: 43.7741759,
			longitude: -79.5018033,
			latitudeDelta: 0.0000000122,
			longitudeDelta: 0.00221,
		},
	};

	state = {
		markers: [
			{
				coordinate: {
					latitude: 43.7699842,
					longitude: -79.5015,
				},
				Name: 'M2GO',
				Building: restaurantList[16]['Building'],
				YUCARD: restaurantList[16]['YUCARD'],
				M: restaurantList[16]['M'],
				T: restaurantList[16]['T'],
				W: restaurantList[16]['W'],
				TH: restaurantList[16]['TH'],
				F: restaurantList[16]['F'],
				SA: restaurantList[16]['SA'],
				SU: restaurantList[16]['SU'],
				MC: restaurantList[16]['MC'],
				TC: restaurantList[16]['TC'],
				WC: restaurantList[16]['WC'],
				THC: restaurantList[16]['THC'],
				FC: restaurantList[16]['FC'],
				SAC: restaurantList[16]['SAC'],
				SUC: restaurantList[16]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7699615,
					longitude: -79.5016803,
				},
				Name: 'Subway',
				Building: restaurantList[24]['Building'],
				YUCARD: restaurantList[24]['YUCARD'],
				M: restaurantList[25]['M'],
				T: restaurantList[25]['T'],
				W: restaurantList[25]['W'],
				TH: restaurantList[25]['TH'],
				F: restaurantList[25]['F'],
				SA: restaurantList[25]['SA'],
				SU: restaurantList[25]['SU'],
				MC: restaurantList[25]['MC'],
				TC: restaurantList[25]['TC'],
				WC: restaurantList[25]['WC'],
				THC: restaurantList[25]['THC'],
				FC: restaurantList[25]['FC'],
				SAC: restaurantList[25]['SAC'],
				SUC: restaurantList[25]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7698984,
					longitude: -79.5018683,
				},
				Name: 'Basil Box',
				Building: restaurantList[4]['Building'],
				YUCARD: restaurantList[4]['YUCARD'],
				M: restaurantList[4]['M'],
				T: restaurantList[4]['T'],
				W: restaurantList[4]['W'],
				TH: restaurantList[4]['TH'],
				F: restaurantList[4]['F'],
				SA: restaurantList[4]['SA'],
				SU: restaurantList[4]['SU'],
				MC: restaurantList[4]['MC'],
				TC: restaurantList[4]['TC'],
				WC: restaurantList[4]['WC'],
				THC: restaurantList[4]['THC'],
				FC: restaurantList[4]['FC'],
				SAC: restaurantList[4]['SAC'],
				SUC: restaurantList[4]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7698771,
					longitude: -79.5020111,
				},
				Name: 'Aroma Espresso Bar',
				Building: restaurantList[2]['Building'],
				YUCARD: restaurantList[2]['YUCARD'],
				M: restaurantList[2]['M'],
				T: restaurantList[2]['T'],
				W: restaurantList[2]['W'],
				TH: restaurantList[2]['TH'],
				F: restaurantList[2]['F'],
				SA: restaurantList[2]['SA'],
				SU: restaurantList[2]['SU'],
				MC: restaurantList[2]['MC'],
				TC: restaurantList[2]['TC'],
				WC: restaurantList[2]['WC'],
				THC: restaurantList[2]['THC'],
				FC: restaurantList[2]['FC'],
				SAC: restaurantList[2]['SAC'],
				SUC: restaurantList[2]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7697173,
					longitude: -79.5019568,
				},
				Name: 'Booster Juice',
				Building: restaurantList[5]['Building'],
				YUCARD: restaurantList[5]['YUCARD'],
				M: restaurantList[5]['M'],
				T: restaurantList[5]['T'],
				W: restaurantList[5]['W'],
				TH: restaurantList[5]['TH'],
				F: restaurantList[5]['F'],
				SA: restaurantList[5]['SA'],
				SU: restaurantList[5]['SU'],
				MC: restaurantList[5]['MC'],
				TC: restaurantList[5]['TC'],
				WC: restaurantList[5]['WC'],
				THC: restaurantList[5]['THC'],
				FC: restaurantList[5]['FC'],
				SAC: restaurantList[5]['SAC'],
				SUC: restaurantList[5]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7696432,
					longitude: -79.5019139,
				},
				Name: 'Sushi Q',
				Building: restaurantList[26]['Building'],
				YUCARD: restaurantList[26]['YUCARD'],
				M: restaurantList[26]['M'],
				T: restaurantList[26]['T'],
				W: restaurantList[26]['W'],
				TH: restaurantList[26]['TH'],
				F: restaurantList[26]['F'],
				SA: restaurantList[26]['SA'],
				SU: restaurantList[26]['SU'],
				MC: restaurantList[26]['MC'],
				TC: restaurantList[26]['TC'],
				WC: restaurantList[26]['WC'],
				THC: restaurantList[26]['THC'],
				FC: restaurantList[26]['FC'],
				SAC: restaurantList[26]['SAC'],
				SUC: restaurantList[26]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7695222,
					longitude: -79.5018556,
				},
				Name: 'Pizza Studio',
				Building: restaurantList[22]['Building'],
				YUCARD: restaurantList[22]['YUCARD'],
				M: restaurantList[22]['M'],
				T: restaurantList[22]['T'],
				W: restaurantList[22]['W'],
				TH: restaurantList[22]['TH'],
				F: restaurantList[22]['F'],
				SA: restaurantList[22]['SA'],
				SU: restaurantList[22]['SU'],
				MC: restaurantList[22]['MC'],
				TC: restaurantList[22]['TC'],
				WC: restaurantList[22]['WC'],
				THC: restaurantList[22]['THC'],
				FC: restaurantList[22]['FC'],
				SAC: restaurantList[22]['SAC'],
				SUC: restaurantList[22]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7701775,
					longitude: -79.5007846,
				},
				Name: 'Bahn Mi Boys',
				Building: restaurantList[3]['Building'],
				YUCARD: restaurantList[3]['YUCARD'],
				M: restaurantList[3]['M'],
				T: restaurantList[3]['T'],
				W: restaurantList[3]['W'],
				TH: restaurantList[3]['TH'],
				F: restaurantList[3]['F'],
				SA: restaurantList[3]['SA'],
				SU: restaurantList[3]['SU'],
				MC: restaurantList[3]['MC'],
				TC: restaurantList[3]['TC'],
				WC: restaurantList[3]['WC'],
				THC: restaurantList[3]['THC'],
				FC: restaurantList[3]['FC'],
				SAC: restaurantList[3]['SAC'],
				SUC: restaurantList[3]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7701988,
					longitude: -79.5006538,
				},
				Name: 'Amaya Express',
				Building: restaurantList[1]['Building'],
				YUCARD: restaurantList[1]['YUCARD'],
				M: restaurantList[1]['M'],
				T: restaurantList[1]['T'],
				W: restaurantList[1]['W'],
				TH: restaurantList[1]['TH'],
				F: restaurantList[1]['F'],
				SA: restaurantList[1]['SA'],
				SU: restaurantList[1]['SU'],
				MC: restaurantList[1]['MC'],
				TC: restaurantList[1]['TC'],
				WC: restaurantList[1]['WC'],
				THC: restaurantList[1]['THC'],
				FC: restaurantList[1]['FC'],
				SAC: restaurantList[1]['SAC'],
				SUC: restaurantList[1]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7702381,
					longitude: -79.5004641,
				},
				Name: 'Gong Cha Tea',
				Building: restaurantList[9]['Building'],
				YUCARD: restaurantList[9]['YUCARD'],
				M: restaurantList[9]['M'],
				T: restaurantList[9]['T'],
				W: restaurantList[9]['W'],
				TH: restaurantList[9]['TH'],
				F: restaurantList[9]['F'],
				SA: restaurantList[9]['SA'],
				SU: restaurantList[9]['SU'],
				MC: restaurantList[9]['MC'],
				TC: restaurantList[9]['TC'],
				WC: restaurantList[9]['WC'],
				THC: restaurantList[9]['THC'],
				FC: restaurantList[9]['FC'],
				SAC: restaurantList[9]['SAC'],
				SUC: restaurantList[9]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.770287,
					longitude: -79.5002273,
				},
				Name: 'Osmows',
				Building: restaurantList[20]['Building'],
				YUCARD: restaurantList[20]['YUCARD'],
				M: restaurantList[20]['M'],
				T: restaurantList[20]['T'],
				W: restaurantList[20]['W'],
				TH: restaurantList[20]['TH'],
				F: restaurantList[20]['F'],
				SA: restaurantList[20]['SA'],
				SU: restaurantList[20]['SU'],
				MC: restaurantList[20]['MC'],
				TC: restaurantList[20]['TC'],
				WC: restaurantList[20]['WC'],
				THC: restaurantList[20]['THC'],
				FC: restaurantList[20]['FC'],
				SAC: restaurantList[20]['SAC'],
				SUC: restaurantList[20]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7701088,
					longitude: -79.5001522,
				},
				Name: "Galito's",
				Building: restaurantList[8]['Building'],
				YUCARD: restaurantList[8]['YUCARD'],
				M: restaurantList[8]['M'],
				T: restaurantList[8]['T'],
				W: restaurantList[8]['W'],
				TH: restaurantList[8]['TH'],
				F: restaurantList[8]['F'],
				SA: restaurantList[8]['SA'],
				SU: restaurantList[8]['SU'],
				MC: restaurantList[8]['MC'],
				TC: restaurantList[8]['TC'],
				WC: restaurantList[8]['WC'],
				THC: restaurantList[8]['THC'],
				FC: restaurantList[8]['FC'],
				SAC: restaurantList[8]['SAC'],
				SUC: restaurantList[8]['SUC'],
			},
			{
				coordinate: {
					latitude: 43.7700332,
					longitude: -79.5000912,
				},
				Name: 'Fat Bastard Burrito',
				Building: restaurantList[7]['Building'],
				YUCARD: restaurantList[7]['YUCARD'],
				M: restaurantList[7]['M'],
				T: restaurantList[7]['T'],
				W: restaurantList[7]['W'],
				TH: restaurantList[7]['TH'],
				F: restaurantList[7]['F'],
				SA: restaurantList[7]['SA'],
				SU: restaurantList[7]['SU'],
				MC: restaurantList[7]['MC'],
				TC: restaurantList[7]['TC'],
				WC: restaurantList[7]['WC'],
				THC: restaurantList[7]['THC'],
				FC: restaurantList[7]['FC'],
				SAC: restaurantList[7]['SAC'],
				SUC: restaurantList[7]['SUC'],
			},
		],
		region: {
			latitude: 43.7698758,
			longitude: -79.5011854,
			latitudeDelta: 0.0000000122,
			longitudeDelta: 0.00321,
		},
	};

	setQuad() {
		this.setState({
			markers: [
				{
					coordinate: {
						latitude: 43.7699842,
						longitude: -79.5015,
					},
					Name: 'M2GO',
					Building: restaurantList[16]['Building'],
					YUCARD: restaurantList[16]['YUCARD'],
					M: restaurantList[16]['M'],
					T: restaurantList[16]['T'],
					W: restaurantList[16]['W'],
					TH: restaurantList[16]['TH'],
					F: restaurantList[16]['F'],
					SA: restaurantList[16]['SA'],
					SU: restaurantList[16]['SU'],
					MC: restaurantList[16]['MC'],
					TC: restaurantList[16]['TC'],
					WC: restaurantList[16]['WC'],
					THC: restaurantList[16]['THC'],
					FC: restaurantList[16]['FC'],
					SAC: restaurantList[16]['SAC'],
					SUC: restaurantList[16]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7699615,
						longitude: -79.5016803,
					},
					Name: 'Subway',
					Building: restaurantList[24]['Building'],
					YUCARD: restaurantList[24]['YUCARD'],
					M: restaurantList[25]['M'],
					T: restaurantList[25]['T'],
					W: restaurantList[25]['W'],
					TH: restaurantList[25]['TH'],
					F: restaurantList[25]['F'],
					SA: restaurantList[25]['SA'],
					SU: restaurantList[25]['SU'],
					MC: restaurantList[25]['MC'],
					TC: restaurantList[25]['TC'],
					WC: restaurantList[25]['WC'],
					THC: restaurantList[25]['THC'],
					FC: restaurantList[25]['FC'],
					SAC: restaurantList[25]['SAC'],
					SUC: restaurantList[25]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7698984,
						longitude: -79.5018683,
					},
					Name: 'Basil Box',
					Building: restaurantList[4]['Building'],
					YUCARD: restaurantList[4]['YUCARD'],
					M: restaurantList[4]['M'],
					T: restaurantList[4]['T'],
					W: restaurantList[4]['W'],
					TH: restaurantList[4]['TH'],
					F: restaurantList[4]['F'],
					SA: restaurantList[4]['SA'],
					SU: restaurantList[4]['SU'],
					MC: restaurantList[4]['MC'],
					TC: restaurantList[4]['TC'],
					WC: restaurantList[4]['WC'],
					THC: restaurantList[4]['THC'],
					FC: restaurantList[4]['FC'],
					SAC: restaurantList[4]['SAC'],
					SUC: restaurantList[4]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7698771,
						longitude: -79.5020111,
					},
					Name: 'Aroma Espresso Bar',
					Building: restaurantList[2]['Building'],
					YUCARD: restaurantList[2]['YUCARD'],
					M: restaurantList[2]['M'],
					T: restaurantList[2]['T'],
					W: restaurantList[2]['W'],
					TH: restaurantList[2]['TH'],
					F: restaurantList[2]['F'],
					SA: restaurantList[2]['SA'],
					SU: restaurantList[2]['SU'],
					MC: restaurantList[2]['MC'],
					TC: restaurantList[2]['TC'],
					WC: restaurantList[2]['WC'],
					THC: restaurantList[2]['THC'],
					FC: restaurantList[2]['FC'],
					SAC: restaurantList[2]['SAC'],
					SUC: restaurantList[2]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7697173,
						longitude: -79.5019568,
					},
					Name: 'Booster Juice',
					Building: restaurantList[5]['Building'],
					YUCARD: restaurantList[5]['YUCARD'],
					M: restaurantList[5]['M'],
					T: restaurantList[5]['T'],
					W: restaurantList[5]['W'],
					TH: restaurantList[5]['TH'],
					F: restaurantList[5]['F'],
					SA: restaurantList[5]['SA'],
					SU: restaurantList[5]['SU'],
					MC: restaurantList[5]['MC'],
					TC: restaurantList[5]['TC'],
					WC: restaurantList[5]['WC'],
					THC: restaurantList[5]['THC'],
					FC: restaurantList[5]['FC'],
					SAC: restaurantList[5]['SAC'],
					SUC: restaurantList[5]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7696432,
						longitude: -79.5019139,
					},
					Name: 'Sushi Q',
					Building: restaurantList[26]['Building'],
					YUCARD: restaurantList[26]['YUCARD'],
					M: restaurantList[26]['M'],
					T: restaurantList[26]['T'],
					W: restaurantList[26]['W'],
					TH: restaurantList[26]['TH'],
					F: restaurantList[26]['F'],
					SA: restaurantList[26]['SA'],
					SU: restaurantList[26]['SU'],
					MC: restaurantList[26]['MC'],
					TC: restaurantList[26]['TC'],
					WC: restaurantList[26]['WC'],
					THC: restaurantList[26]['THC'],
					FC: restaurantList[26]['FC'],
					SAC: restaurantList[26]['SAC'],
					SUC: restaurantList[26]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7695222,
						longitude: -79.5018556,
					},
					Name: 'Pizza Studio',
					Building: restaurantList[22]['Building'],
					YUCARD: restaurantList[22]['YUCARD'],
					M: restaurantList[22]['M'],
					T: restaurantList[22]['T'],
					W: restaurantList[22]['W'],
					TH: restaurantList[22]['TH'],
					F: restaurantList[22]['F'],
					SA: restaurantList[22]['SA'],
					SU: restaurantList[22]['SU'],
					MC: restaurantList[22]['MC'],
					TC: restaurantList[22]['TC'],
					WC: restaurantList[22]['WC'],
					THC: restaurantList[22]['THC'],
					FC: restaurantList[22]['FC'],
					SAC: restaurantList[22]['SAC'],
					SUC: restaurantList[22]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7701775,
						longitude: -79.5007846,
					},
					Name: 'Bahn Mi Boys',
					Building: restaurantList[3]['Building'],
					YUCARD: restaurantList[3]['YUCARD'],
					M: restaurantList[3]['M'],
					T: restaurantList[3]['T'],
					W: restaurantList[3]['W'],
					TH: restaurantList[3]['TH'],
					F: restaurantList[3]['F'],
					SA: restaurantList[3]['SA'],
					SU: restaurantList[3]['SU'],
					MC: restaurantList[3]['MC'],
					TC: restaurantList[3]['TC'],
					WC: restaurantList[3]['WC'],
					THC: restaurantList[3]['THC'],
					FC: restaurantList[3]['FC'],
					SAC: restaurantList[3]['SAC'],
					SUC: restaurantList[3]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7701988,
						longitude: -79.5006538,
					},
					Name: 'Amaya Express',
					Building: restaurantList[1]['Building'],
					YUCARD: restaurantList[1]['YUCARD'],
					M: restaurantList[1]['M'],
					T: restaurantList[1]['T'],
					W: restaurantList[1]['W'],
					TH: restaurantList[1]['TH'],
					F: restaurantList[1]['F'],
					SA: restaurantList[1]['SA'],
					SU: restaurantList[1]['SU'],
					MC: restaurantList[1]['MC'],
					TC: restaurantList[1]['TC'],
					WC: restaurantList[1]['WC'],
					THC: restaurantList[1]['THC'],
					FC: restaurantList[1]['FC'],
					SAC: restaurantList[1]['SAC'],
					SUC: restaurantList[1]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7702381,
						longitude: -79.5004641,
					},
					Name: 'Gong Cha Tea',
					Building: restaurantList[9]['Building'],
					YUCARD: restaurantList[9]['YUCARD'],
					M: restaurantList[9]['M'],
					T: restaurantList[9]['T'],
					W: restaurantList[9]['W'],
					TH: restaurantList[9]['TH'],
					F: restaurantList[9]['F'],
					SA: restaurantList[9]['SA'],
					SU: restaurantList[9]['SU'],
					MC: restaurantList[9]['MC'],
					TC: restaurantList[9]['TC'],
					WC: restaurantList[9]['WC'],
					THC: restaurantList[9]['THC'],
					FC: restaurantList[9]['FC'],
					SAC: restaurantList[9]['SAC'],
					SUC: restaurantList[9]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.770287,
						longitude: -79.5002273,
					},
					Name: 'Osmows',
					Building: restaurantList[20]['Building'],
					YUCARD: restaurantList[20]['YUCARD'],
					M: restaurantList[20]['M'],
					T: restaurantList[20]['T'],
					W: restaurantList[20]['W'],
					TH: restaurantList[20]['TH'],
					F: restaurantList[20]['F'],
					SA: restaurantList[20]['SA'],
					SU: restaurantList[20]['SU'],
					MC: restaurantList[20]['MC'],
					TC: restaurantList[20]['TC'],
					WC: restaurantList[20]['WC'],
					THC: restaurantList[20]['THC'],
					FC: restaurantList[20]['FC'],
					SAC: restaurantList[20]['SAC'],
					SUC: restaurantList[20]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7701088,
						longitude: -79.5001522,
					},
					Name: "Galito's",
					Building: restaurantList[8]['Building'],
					YUCARD: restaurantList[8]['YUCARD'],
					M: restaurantList[8]['M'],
					T: restaurantList[8]['T'],
					W: restaurantList[8]['W'],
					TH: restaurantList[8]['TH'],
					F: restaurantList[8]['F'],
					SA: restaurantList[8]['SA'],
					SU: restaurantList[8]['SU'],
					MC: restaurantList[8]['MC'],
					TC: restaurantList[8]['TC'],
					WC: restaurantList[8]['WC'],
					THC: restaurantList[8]['THC'],
					FC: restaurantList[8]['FC'],
					SAC: restaurantList[8]['SAC'],
					SUC: restaurantList[8]['SUC'],
				},
				{
					coordinate: {
						latitude: 43.7700332,
						longitude: -79.5000912,
					},
					Name: 'Fat Bastard Burritto',
					Building: restaurantList[7]['Building'],
					YUCARD: restaurantList[7]['YUCARD'],
					M: restaurantList[7]['M'],
					T: restaurantList[7]['T'],
					W: restaurantList[7]['W'],
					TH: restaurantList[7]['TH'],
					F: restaurantList[7]['F'],
					SA: restaurantList[7]['SA'],
					SU: restaurantList[7]['SU'],
					MC: restaurantList[7]['MC'],
					TC: restaurantList[7]['TC'],
					WC: restaurantList[7]['WC'],
					THC: restaurantList[7]['THC'],
					FC: restaurantList[7]['FC'],
					SAC: restaurantList[7]['SAC'],
					SUC: restaurantList[7]['SUC'],
				},
			],
		});
		this.setState({
			region: {
				latitude: 43.7698758,
				longitude: -79.5011854,
				latitudeDelta: 0.0000000122,
				longitudeDelta: 0.00321,
			},
		});
	}

	UNSAFE_componentWillMount() {
		this.index = 0;
		this.animation = new Animated.Value(0);
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
						350,
					);
				}
			}, 10);
		});
	}

	render() {
		const interpolations = this.state.markers.map((marker, index) => {
			const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH];
			const scale = this.animation.interpolate({
				inputRange,
				outputRange: [1, 2.5, 1],
				extrapolate: 'clamp',
			});
			const opacity = this.animation.interpolate({
				inputRange,
				outputRange: [0.35, 1, 0.35],
				extrapolate: 'clamp',
			});
			return { scale, opacity };
		});

		return (
			<View style={styles.container}>
				<View style={styles.filterView}>
					<TouchableOpacity onPress={() => this.setQuad()}>
						<Image style={styles.filter} source={require('../../assets/button_quad.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.SetVari()}>
						<Image style={styles.filter} source={require('../../assets/button_vari-hall.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.setLanes()}>
						<Image style={styles.filter} source={require('../../assets/button_york-lanes.png')} />
					</TouchableOpacity>
				</View>

				<MapView
					ref={(map) => (this.map = map)}
					region={this.state.region}
					style={styles.container}
					showsBuildings={true}
					showsPointsOfInterest={false}>
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
						{ useNativeDriver: true },
					)}
					style={styles.scrollView}
					contentContainerStyle={styles.endPadding}>
					{this.state.markers.map((item, index) => (
						<View style={styles.card} key={index}>
							<View style={styles.textContent}>
								<ResContainer2
									Name={item.Name}
									Building={item.Building}
									YUcard={item.YUCARD}
									Monday={item.M}
									Tuesday={item.T}
									Wednesday={item.W}
									Thursday={item.TH}
									Friday={item.F}
									Saturday={item.SA}
									Sunday={item.SU}
									MondayC={item.MC}
									TuesdayC={item.TC}
									WednesdayC={item.WC}
									ThursdayC={item.THC}
									FridayC={item.FC}
									SaturdayC={item.SAC}
									SundayC={item.SUC}
								/>
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
		position: 'absolute',
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
		backgroundColor: '#FFF',
		marginHorizontal: 10,
		shadowColor: '#000',
		shadowRadius: 5,
		shadowOpacity: 0.3,
		shadowOffset: { x: 2, y: -2 },
		height: CARD_HEIGHT,
		width: CARD_WIDTH,
		overflow: 'hidden',
		borderRadius: 30,
	},
	textContent: {
		flex: 1,
	},
	cardName: {
		fontSize: 30,
		marginTop: 5,
		fontFamily: 'NewYorkMedium-Medium',
	},
	cardDescription: {
		fontSize: 12,
		color: '#444',
	},
	markerWrap: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	marker: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: 'rgba(130,4,150, 0.9)',
	},
	ring: {
		width: 14,
		height: 14,
		borderRadius: 12,
		backgroundColor: 'rgba(130,4,150, 0.3)',
		position: 'absolute',
		borderWidth: 1,
		borderColor: 'rgba(130,4,150, 0.5)',
	},
	click: {
		alignSelf: 'center',
	},
	filterView: {
		flexDirection: 'row',
		alignContent: 'space-between',
	},
	filter: {
		width: width / 3,
		resizeMode: 'contain',
	},
	Time: {
		fontFamily: 'NewYorkMedium-Regular',
	},
});
