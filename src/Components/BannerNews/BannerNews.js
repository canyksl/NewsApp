import React from "react";
import { ScrollView, Image } from "react-native";
import styles from "./BannerNews.style";

const BannerNews = ({ banner }) => {
  return (
    <Image
      style={styles.banner_image}
      source={{ uri: banner.imageUrl }}
    />
  );
};

export default BannerNews;
