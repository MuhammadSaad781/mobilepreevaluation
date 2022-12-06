import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import * as yup from "yup";
import { Formik } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUpNew() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [picture, setPicture] = useState(null);
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm(formOptions);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmpassword: yup
      .string()

      .required("Confrim Password is required")
      .oneOf([yup.ref("password")], "Passwords does not match"),
    name: yup
      .string()

      .required("Name is Required")
      .min(3, "Name must be 3 characters"),
  });
  const formOptions = { resolver: yupResolver(loginValidationSchema) };
  const onSubmit = async (data) => {
    console.log(data);
    // const fData = new FormData();
    // const ext = image?.split(".").pop();
    // const filename = `${data.name}.${ext}`;
    // const file = {
    //   uri: image,
    //   name: filename,
    //   type: `image/${ext}`,
    // };
    // await handleUpload(file);
    // data.role = "user";
    // data.picture = picture;
    // // console.log("Data: ", data);
    // // fData.append("name", data.name);
    // // fData.append("email", data.email);
    // // fData.append("password", data.password);
    // // fData.append("role", "user");
    // // fData.append("picture", picture);
    // // console.log(fData);
    // fetch("http://192.168.1.135:3001/funderr/register", {
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //     //   // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setTimeout(() => {
      navigation.navigate("SignIn");
    }, 1000);
  };

  // const handleUpload = async (image) => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "funderrApp");
  //   data.append("cloud_name", "dfmhxmauj");

  //   await fetch("https://api.cloudinary.com/v1_1/dfmhxmauj/image/upload", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Picture: ", data.url);
  //       setPicture(data.url);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log("image",result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //console.log('errors', errors);
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.backicon}
        name="arrowleft"
        size={28}
        color="#242F9B"
        onPress={() => navigation.navigate("MainPage")}
      />
      <Text
        style={{
          color: "#242F9B",
          fontSize: 40,
          fontWeight: "bold",
          marginLeft: "10%",
          marginTop: 10,
        }}
      >
        Funderr
      </Text>
      <Text
        style={{
          color: "#242F9B",
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: "10%",
        }}
      >
        Sign Up to Funderr
      </Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Text
              style={{
                color: "#242F9B",
                fontSize: 18,
                marginTop: "10%",
                marginLeft: "10%",
              }}
            >
              Name
            </Text>
            <TextInput
              name="name"
              style={styles.email2}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {errors.name && <Text style={styles.errors}>{errors.name}</Text>}
            <Text
              style={{
                color: "#242F9B",
                fontSize: 18,
                marginTop: "5%",
                marginLeft: "10%",
              }}
            >
              Email
            </Text>
            <TextInput
              name="email"
              style={styles.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
            <Text
              style={{
                color: "#242F9B",
                fontSize: 18,
                marginTop: "5%",
                marginLeft: "10%",
              }}
            >
              Password
            </Text>
            <TextInput
              name="password"
              style={styles.email}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={styles.errors}>{errors.password}</Text>
            )}
            <Text
              style={{
                color: "#242F9B",
                fontSize: 18,
                marginTop: "5%",
                marginLeft: "10%",
              }}
            >
              Confirm Password
            </Text>
            <TextInput
              name="password"
              style={styles.email}
              onChangeText={handleChange("confirmpassword")}
              onBlur={handleBlur("confirmpassword")}
              value={values.confirmpassword}
              secureTextEntry
            />
            {errors.confirmpassword && (
              <Text style={styles.errors}>{errors.confirmpassword}</Text>
            )}
            <TouchableOpacity style={styles.imagebutton} onPress={pickImage}>
              <Text style={{ color: "#242F9B" }}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signupbuttoncontainer}
              onPress={handleSubmit}
            >
              <Text style={styles.signupbutton}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
          fontSize: 15,
          margin: "10%",
        }}
      >
        Or Sign Up with{" "}
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: "37%",
          bottom: 75,

          width: "10%",
        }}
      >
        <AntDesign name="google" size={35} color="#242F9B" />
      </TouchableOpacity>
      <Text
        style={{
          color: "#242F9B",
          fontWeight: "bold",
          fontSize: 15,
          marginLeft: "10%",
          bottom: "7%",
        }}
      >
        Or Sign Up with{" "}
      </Text>
      <TouchableOpacity
        style={{
          marginLeft: "37%",
          bottom: 80,

          width: "10%",
        }}
      >
        <AntDesign name="facebook-square" size={35} color="#242F9B" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },

  backicon: {
    marginTop: 40,
    marginLeft: 10,
  },
  email: {
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 40,
    width: "75%",

    borderRadius: 10,
  },
  signupbuttoncontainer: {
    backgroundColor: "#242F9B",
    height: "7%",
    borderRadius: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "13%",
    marginTop: "5%",
  },
  signupbutton: {
    color: "white",
  },
  imagebutton: {
    width: 130,
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#242F9B",
  },
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
  email2: {
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 40,
    width: "75%",
    marginTop: "2%",
    borderRadius: 10,
  },
});
