import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { Ionicons } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import {Marker } from 'react-native-maps';
import { useState } from 'react';
import { useEffect } from 'react';

const imageURL='https://i0.wp.com/www.dailycal.org/assets/uploads/2021/04/package_gusler_cc-900x580.jpg';
const profileImg='https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png';

const destination = {
    coordinate:{
        latitude:-33.974763,
        longitude:25.497774
    },
    title:'Dropoff',
    description:'44 avondale Road',
}

function CustDeliveryScreen() {
    const [driverLocation, setDriverLocation] = useState();

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
                    <Image source={{uri:profileImg}} style={styles.driverImage}/>
                    <View style={styles.driverInfo}>
                        <Text style={{color:'#4e4e4e',fontSize:10}}>Driver</Text>
                        <Text>John Doe</Text>
                        <Text>Honda Civic</Text>
                    </View>
                </View>
                <View style={styles.hr}/>
                <View style={styles.driver}>
                    <Ionicons style={{padding:2,marginRight:5}} name="location-outline"/>
                    <Text>44 avondale Road</Text>
                </View>
                <View style={styles.driver}>
                    <Ionicons style={{padding:2,marginRight:5}} name="md-logo-dropbox"/>
                    <Text>Width: 20cm; Height: 10cm; length: 40cm</Text>
                </View>
                <Image source={{uri:imageURL}} style={styles.image}/>
            </View>

        </View>
    );

    const sheetRef = React.useRef(null);
    const mapRef = React.useRef(null);

    useEffect(() => {
        let coords = {
            latitude:-33.976,
            longitude:25.47,
        }
        setDriverLocation(coords);
        mapRef.current.animateCamera({center:coords,zoom:14})
    },[]);

    return (
        <>
            <View style={styles.container}>
                <MapView 
                    style={styles.map}
                    ref={mapRef}
                >
                    {driverLocation ? <Marker
                        key={0}
                        coordinate={driverLocation}
                        title={"Driver"}
                        image={require('../assets/map_driver.png')}
                    /> : null}
                    <Marker
                        key={1}
                        coordinate={destination.coordinate}
                        title={destination.title}
                        description={destination.description}
                        image={require('../assets/map_destination.png')}
                    />
                </MapView>
            </View>
            <BottomSheet
                ref={sheetRef}
                initialSnap={1}
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
