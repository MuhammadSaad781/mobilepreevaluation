import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
export default function Drawer() {
  const navigation = useNavigation();
  return (
    <View style={{ height: height, width: width }}>
      <View style={styles.Navbar}></View>
      <View>
        <AntDesign
          style={styles.backicon}
          name="arrowleft"
          size={28}
          color="#242F9B"
          onPress={() => navigation.navigate("LandingPage")}
        />
      </View>
      <Image
        style={{
          width: "30%",
          height: "20%",
          resizeMode: "stretch",
          marginTop: 5,
          alignSelf: "center",
          borderRadius: 50,
          borderColor: "#242F9B",
          borderWidth: 2,
        }}
        source={require("../assets/landingpage.png")}
      />
      <TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            color: "#242F9B",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Mycampaignscontainer}
        onPress={() => navigation.navigate("MyCampaigns")}
      >
        <Text style={styles.Mycampaignstext}>My Campaigns</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Mycampaignscontainer2}
        onPress={() => navigation.navigate("HowItWorks")}
      >
        <Text style={styles.Mycampaignstext}>How it Works</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Mycampaignscontainer2}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <Text style={styles.Mycampaignstext}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Mycampaignscontainer2}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.Mycampaignstext}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  backicon: {
    marginLeft: 10,
    alignSelf: "flex-start",
    marginTop: 30,
  },
  Mycampaignscontainer: {
    backgroundColor: "#242F9B",
    height: "7%",
    borderRadius: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  Mycampaignstext: {
    color: "white",
  },
  Mycampaignscontainer2: {
    backgroundColor: "#242F9B",
    height: "7%",
    borderRadius: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
  },
});
