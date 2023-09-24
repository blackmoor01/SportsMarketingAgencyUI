import {View, Text, ImageBackground, Image } from 'react-native';
import {s} from 'react-native-wind'
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    const HomePage = () => {
        navigation.navigate("HomeScreen")
    }
    const AboutPage = () => {
        navigation.navigate("AboutScreen")
    }
    const LetsTalkPage = () => {
        navigation.navigate("LetUsTalkScreen")
    }

    return(
        <View style={s `flex-1`}>
            <ImageBackground
                source={require("../../assets/HomeScreenBG.png")}
                resizeMode={"stretch"}
                style={s `flex-1`}
            >
                <View style={s `flex-row pt-5 justify-between mb-10`}>
                    <Text
                        style={s ` text-yellow-500 text-semibold font-extrabold text-opacity-80 `}
                    >
                        FITSIGHT</Text>
                    <View style={s `flex-row`}>
                            <Text
                                onPress={HomePage}
                                style={s `text-white text-xs hover:text-yellow-500 mr-5 font-extrabold text-opacity-80`}
                            >HOME</Text>
                            <Text
                                onPress={AboutPage}
                                style={s `text-white text-xs hover:text-yellow-500 mr-5 font-extrabold text-opacity-80`}>ABOUT US</Text>
                            <Text
                                onPress={LetsTalkPage}
                                style={s `text-white text-xs hover:text-yellow-500 font-extrabold text-opacity-80`}>LET'S TALK</Text>
                    </View>
                </View>
                <View style={s `flex-1 justify-center pb-20`}>
                    <Image source={require('../../assets/TutiloLogo.png')} style={{width:"70%",height:"15%"}} resizeMode={"contain"}/>
                    <Text style={s ` text-white pl-12`}>MAKING YOUR BRAND <Text style={s `text-yellow-500 font-extrabold`}>FIT</Text></Text>
                </View>
                <Image source={require('../../assets/SinLogo.png')} style={{width:"50%",height:"10%",marginBottom:"10%",paddingHorizontal:"92%"}} resizeMode={"contain"} />
            </ImageBackground>
        </View>


    )
};

export default HomeScreen;