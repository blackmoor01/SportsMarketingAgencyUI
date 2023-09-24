import {View, Text, ImageBackground,Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {s} from 'react-native-wind';

const AboutScreen = () => {
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
            source={require('../../assets/AboutBG.png')}
            resizeMode={"stretch"}
            style={s `flex-1`}
        >
            <View style={s `flex-row pt-4 justify-between mb-4`}>
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

            <View style={s `flex-1 items-center`}>
                <Text style={s `text-yellow-500 text-2xl font-extrabold p-0`}>ABOUT US</Text>
                <Text style={s `text-white font-bold text-2xl pb-2`}>GET YOUR FITNESS BRAND TO THE DIGITAL WORLD</Text>
                <Text style={s `text-white font-bold text-2xl content-end pr-10`}>TOGETHER WE CREATE,WE DESIGN,WE FIT</Text>
                <Image source={require('../../assets/SinLogo.png')} style={{width:"50%",height:"9%",marginBottom:"10%",marginLeft:"88%"}} resizeMode={"contain"} />
                <View style={s `bg-black items-center h-full w-full`}>
                    <Text style={s `text-yellow-500 text-2xl font-extrabold`}>WE ARE</Text>
                    <Text style={s `text-white font-bold pl-12`}>ONLINE ADS AND CAMPAIGN CENTERS</Text>
                    <Image source={require('../../assets/ADSBG.png')} style={{width:"50%",height:"10%",marginLeft:"60%",marginTop:"2%",padding:"9%"}}/>
                    <Text style={s `text-white font-bold pr-12`}>CONTENT CREATORS AND SOCIAL MEDIA MANAGERS</Text>
                    <Image source={require('../../assets/ContentBG.png')} style={{width:"50%",height:"10%",marginRight:"64%",marginTop:"2%",padding:"10%"}}/>
                    <Text style={s `text-white font-bold pl-12`}>WEB AND APP DESIGNERS AND HOST</Text>
                    <Image source={require('../../assets/ExpertsBG.png')} style={{width:"50%",height:"10%",marginLeft:"60%",marginTop:"2%",padding:"10%"}}/>
                    <Text style={s `text-white font-bold pl-12`}>EXPERTS IN RESEARCH AND POSITIONING</Text>
                </View>
            </View>

        </ImageBackground>

    )
};

export default AboutScreen;