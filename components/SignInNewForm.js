import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { TouchableOpacity } from "react-native";
export default function SignInNewForm() {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  const onSubmit = async (data) => {
    console.log(data);
    navigation.navigate("LandingPage");
  };
  return (
    <View>
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
            <TouchableOpacity
              style={styles.signupbuttoncontainer}
              onPress={handleSubmit}
            >
              <Text style={styles.signupbutton}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
  },

  backicon: {
    marginLeft: 10,
    alignSelf: "flex-start",
    bottom: 40,
  },
  email: {
    marginLeft: "10%",
    borderWidth: 1,
    borderColor: "#242F9B",
    height: 40,
    width: "75%",
    marginTop: "2%",
    borderRadius: 10,
    color: "black",
  },
  signupbuttoncontainer: {
    backgroundColor: "#242F9B",
    height: 50,
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
  errors: {
    fontSize: 10,
    color: "red",
    marginLeft: 45,
    marginTop: 5,
  },
});
<TouchableOpacity style={styles.imagebutton} onPress={pickImage}>
  <Text style={{ color: "#242F9B" }}>Upload Image</Text>
</TouchableOpacity>;
