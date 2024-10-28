import { styles } from "@/styles/onboaring/onboard";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingScreen() {

    let [fontLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontLoaded && !fontError) {
        return null;
    }

    return (
        <LinearGradient colors={["#E5ECF9", "#F6F7F9"]}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <View style={styles.firstContainer}>
                <View>
                    <Image
                        source={require("@/assets/logo.png")}
                        style={styles.logo}
                    />
                    <Image source={require("@/assets/onboarding/shape_9.png")} />
                </View>
                <View style={styles.titleWrapper}>
                    <Image
                        source={require("@/assets/onboarding/shape_3.png")}
                        style={styles.titleTextShape1}
                    />
                    <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
                        Start Learning With
                    </Text>
                    <Image
                        style={styles.titleTextShape2}
                        source={require("@/assets/onboarding/shape_2.png")}
                    />
                </View>
                <View>
                    <Image
                        style={styles.titleShape3}
                        source={require("@/assets/onboarding/shape_6.png")}
                    />
                    <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
                        Faizan Shaikh
                    </Text>
                </View>
                <View style={styles.dscpWrapper}>
                    <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                        Explore a variety of interactive lesson,
                    </Text>
                    <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                        video, quizze and assignment.
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
                        Getting Started
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}