import { useNavigation } from "@react-navigation/native";
import {Button, SafeAreaView, Text,StyleSheet} from "react-native";
import {EMAIL} from "@env";
import styles from "../styles/splash";
import { useEffect ,useState} from "react";
import codes from 'country-calling-code';
import CountryFlag from "react-native-country-flag";
import Modal from "../components/Modal";

const Splash=()=>{
    const navigation=useNavigation();
    useEffect(()=>{
        console.log(codes);
    },[]);
    const [open,set_open]=useState(false);
    const close=()=>{
        set_open(false);
    }
    return (
        <SafeAreaView style={styles.splash} >
            <Button title="open"  onPress={e=>set_open(true)} />
            {open==true && <Modal content={<Button title="Fermer" onPress={close} />} />}
        </SafeAreaView>
    )
}



export default Splash;