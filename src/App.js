import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import NewsCard from "./Components/newscard";
import Banner from "./Components/BannerNews";
import news_data from "../news_data.json";
import news_banner_data from "../news_banner_data.json";

export default function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  // const bannerNews = item=>()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map((bannerItem) => (
              <Banner banner={bannerItem} key={bannerItem.id} />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header_text: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
