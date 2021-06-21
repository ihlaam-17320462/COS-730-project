import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Ionicons } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import {Marker } from 'react-native-maps';
import { useState } from 'react';
import { useEffect } from 'react';
import ordersApi from "../api/request";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from '../config/colours';


function CustDeliveryScreen({route}) {
    const [driverLocation, setDriverLocation] = useState({
        latitude: route.params.quote.driver.location.coordinates[1],
        longitude: route.params.quote.driver.location.coordinates[0],
    });

    const renderContent = () => (
        <View
            style={styles.bottomSheet}
        >
            <Ionicons name="md-reorder-two-outline" size={24} color="#4e4e4e" style={{alignSelf:'center'}}/>
            <View
                style={{
                    marginTop:10
                }}
            >
                <View style={styles.driver}>
                    <Image source={{uri:route.params.quote.driver.image}} style={styles.driverImage}/>
                    <View style={styles.driverInfo}>
                        <Text style={{color:colours.accent1, fontWeight: "500", fontSize:13}}>Driver</Text>
                        <Text>{route.params.quote.driver.name}</Text>
                        <Text>{route.params.quote.driver.vehicleType} </Text>
                        <Text>{route.params.quote.driver.vehicleRegistration}</Text>
                    </View>
                </View>
                <View style={styles.hr}/>
                <View style={styles.driver}>
                    <Ionicons style={{padding:2,marginRight:5}} name="location-outline"/>
                    <Text>{route.params.order.pickup_address}</Text>
                </View>
                <View style={styles.driver}>
                    <Ionicons style={{padding:2,marginRight:5}} name="location"/>
                    <Text>{route.params.order.dropoff_address}</Text>
                </View>
                <View style={styles.driver}>
                    <Ionicons style={{padding:2,marginRight:5}} name="md-logo-dropbox"/>
                    <Text>{`Width: ${route.params.order.width}cm; Height: ${route.params.order.height}cm; length: ${route.params.order.length}cm`}</Text>
                </View>
                <Image source={{uri:route.params.order.image}} style={styles.image}/>
            </View>

        </View>
    );

    const sheetRef = React.useRef(null);
    const mapRef = React.useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            ordersApi.getDriver(route.params.quote.driver._id).then(response => {
                setDriverLocation({
                    latitude:response.data.location.coordinates[1],
                    longitude:response.data.location.coordinates[0],
                })
                mapRef.current.animateCamera({center:driverLocation,zoom:8})
            }).catch(err => {
                console.log(err);
            })
        }, 5000);
        return () => clearInterval(interval);
    },[]);

    return (
        <>
            <View style={styles.container}>
                <MapView 
                    style={styles.map}
                    ref={mapRef}
                >
                    <Marker
                        key={0}
                        coordinate={driverLocation}
                        title={"Driver"}
                    >
                        <Image source={require('../assets/map_driver.png')} style={{height: 35, width:35 }} />
                    </Marker>
                    <Marker
                        key={1}
                        coordinate={{
                            latitude:route.params.order.pickup.coordinates[1],
                            longitude:route.params.order.pickup.coordinates[0],
                        }}
                        title={'Pickup'}
                        description={route.params.order.pickup_address}
                    >
                        <Image source={require('../assets/location2.png')} style={{height: 35, width:35 }} />
                    </Marker>
                    <Marker
                        key={2}
                        coordinate={{
                            latitude:route.params.order.dropoff.coordinates[1],
                            longitude:route.params.order.dropoff.coordinates[0],
                        }}
                        title={'Dropoff'}
                        description={route.params.order.dropoff_address}
                        >
                        <Image source={require('../assets/location1.png')} style={{height: 35, width:35 }} />
                    </Marker>
                </MapView>
            </View>
            <BottomSheet
                ref={sheetRef}
                initialSnap={0}
                snapPoints={[350, 50]}
                borderRadius={20}
                renderContent={renderContent}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    driver:{
        flexDirection: "row",
    },
    driverImage:{
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 50
    },
    driverInfo:{
        margin: 10,
        color: colours.accent1,
    },
    hr:{
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
    },
    image: {
        marginTop: 15,
        marginBottom: 10,
        height: 120,
        width: "100%",
        resizeMode: 'contain'
    },
  });

export default CustDeliveryScreen;
