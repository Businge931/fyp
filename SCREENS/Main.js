import { Alert, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";

import { upload } from "../STORE/predictions-actions";
import Button from "../COMPONENTS/Button";
import { GlobalStyles } from "../CONSTANTS/styles";
import Icon from "../COMPONENTS/Icon";

import { setLoading, setClearImages } from "../STORE/prediction-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../COMPONENTS/Loader";

const Main = () => {
  const dispatch = useDispatch();
  const picFromServer = useSelector((state) => state?.predict?.prediction);

  const showAlert = useSelector((state) => state.predict?.isShowAlert);
  const isLoading = useSelector((state) => state.predict?.isLoading);
  const label = useSelector((state) => state.predict?.prediction?.label);
  const confidence = useSelector(
    (state) => state.predict?.prediction?.confidence
  );
  const [pickedImage, setPickedImage] = useState();

  const accuracy = Math.round(confidence * 100);

  if (showAlert) {
    if (picFromServer) {
      Alert.alert(
        "Results",
        `${label} with a prediction accuracy of: ${accuracy}%`,
        [
          {
            text: "OK",
            onPress: () => dispatch(setClearImages()),
          },
        ]
      );
    }
  }
  // console.log("from server", picFromServer);

  const [cameraPermissionInfo, requestCameraPermission] =
    useCameraPermissions();

  const [galleryPermissionInfo, requestGalleryPermission] =
    useMediaLibraryPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const cameraPermissionResponse = await requestCameraPermission();
      return cameraPermissionResponse.granted;
    }

    // if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
    //   Alert.alert(
    //     "Insufficient Pemissions",
    //     "The app will need to access the camera in order to continue!"
    //   );
    //   return false;
    // }

    if (galleryPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const galleryPermissionResponse = await requestGalleryPermission();
      return galleryPermissionResponse.granted;
    }
    if (galleryPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Pemissions",
        "The app needs to access your media in order to continue!"
      );
      return false;
    }
    return true;
  };

  /////////TAKE IMAGE//////////
  const takeImageHandler = async () => {
    try {
      const hasCameraPermission = await verifyPermissions();

      if (!hasCameraPermission) {
        return;
      }

      const camera = await launchCameraAsync({
        // allowsEditing: true,
        quality: 1,
        aspect: [16, 9],
        base64: true,
      });

      setPickedImage(camera.uri);
      dispatch(upload(camera));
    } catch (error) {
      console.log("Error is:", error);
    }
  };

  ///////GET IMAGE FROM GALLERY//////

  const uploadImageHandler = async () => {
    const hasGalleryPermission = await requestGalleryPermission();

    if (!hasGalleryPermission) {
      return;
    }
    const image = await launchImageLibraryAsync({
      // allowsEditing: true,
      quality: 1,
      aspect: [16, 9],
      base64: true,
    });
    setPickedImage(image.uri);
    dispatch(upload(image));
  };

  let imagePreview = (
    <View style={styles.imagePreview}>
      <Text>No Image Taken yet!</Text>
      <Icon name="camera" size={40} color={GlobalStyles.colors.gray800} />
    </View>
  );

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <>
      <LinearGradient
        colors={[
          GlobalStyles.colors.pink500,
          GlobalStyles.colors.teal800,
          // GlobalStyles.colors.color300,
        ]}
        style={styles.rootScreen}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <View style={styles.outerContainer}>
            <View style={styles.imageContainer}>{imagePreview}</View>
            <View style={styles.buttonContainer}>
              <Button classes={styles.button} onPress={takeImageHandler}>
                Take photo
              </Button>

              <Button classes={styles.button} onPress={uploadImageHandler}>
                Upload Image
              </Button>
            </View>
            <View style={styles.responseContainer}>
              <Text style={{ textAlign: "center", paddingVertical: 30 }}>
                Get yourself scanned today😊
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagePreview: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    borderWidth: 1,
    borderRadius: 4,
  },
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  responseContainer: {
    width: 300,
    height: 100,
    borderRadius: 30,
    backgroundColor: "#ced4da",
    marginVertical: 50,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: GlobalStyles.colors.gray800,
    borderColor: GlobalStyles.colors.teal800,
    borderWidth: 1,
    // padding: 8,
    width: 120,
  },
});
