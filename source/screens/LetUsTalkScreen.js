import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {s} from "react-native-wind";

const LetUsTalkScreen = () => {
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
        <ImageBackground
            source={require("../../assets/LetsTalkBG.png")}
            resizeMode={"stretch"}
            style={s `flex-1`}
        >
            <View style={s `flex-row pt-5 justify-between mb-10`}>
                <Text
                    style={s ` text-yellow-500 text-semibold font-extrabold text-opacity-80 `}
                >
                    FITSIGHT</Text>
                <View style={s `flex-row justify-evenly`}>
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
            <View style={{flexDirection:"row"}}>
                <View style={s `flex-1 items-center justify-center`}>
                    <Image source={require('../../assets/SinLogo.png')} style={{width:"90%",height:"80%",marginBottom:"10%",marginRight:"50%"}} resizeMode={"contain"} />
                </View >
                <View style={s `items-center justify-center pl-10 pr-12 mr-10 mb-12`}>
                    <Text style={s `text-white text-2xl font-extrabold justify-center `}>LET'S TALK</Text>
                    <TextInput style={{width:"150%",height:"10%",backgroundColor:"green",marginBottom:"10%"}} placeholder={"YOUR NAME"} placeholderTextColor={"white"} />
                    <TextInput style={{width:"150%",height:"10%",backgroundColor:"green",marginBottom:"10%"}} placeholder={"YOUR E-MAIL"} placeholderTextColor={"white"}/>
                    <TextInput style={{width:"150%",height:"10%",backgroundColor:"green",padding:"10%"}} placeholder={"TELL US EVERYTHING"} placeholderTextColor={"white"}/>

                </View>
            </View>
        </ImageBackground>
    )
};

export default LetUsTalkScreen;