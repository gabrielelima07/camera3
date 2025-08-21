import * as React from "react";
import {
    Stylesheet,
    Platform,
    View,
    SafeAreaView,
    StatusBar,
    TouchableHighligh,
    Linking,
    Text,

} from "react-native";

import{
    Camera,
    useCameraDeevice,
    useCameraDeevices,
    useCameraPermission,

}from "react-native-vision-camera";
import{ Redirect, useRouter} from "expo-router";
import{ ThemedText} from "@/components/ThemedText";
import ObscuraButton from "@/components/ObscuraButton";
import {FontAwesome5} from "@expo/vector-icons";
import {BlurView} from "expo-blur";
import ExposureControls from "@/components/ExposureControls";

export default function HomeScreen() {
    const {hasPermission} = useCameraPermission();
    const microphonePermission = Camera.getMicrophonePermissionStatus();
    const redirectToPermissions = !hasPermission || microphonePermission === "not-determined";

    const device = useCameraDevice("back");
    const router = useRouter();
    

    if(redirectToPermissions) return <Redirect href={"/permissions"} />;
    if (!device) return <></>


    return <ThemedText> oi</ThemedText>

    
}