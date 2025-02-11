import { View, Text, Image, ScrollView, StatusBar } from "react-native";
import React from "react";
import CardComponent from "../../components/home/CardComponent";
import appColor from "@/constants/appColor";
import CategoriesComponent from "../../components/home/PagerScroll";
import SearchComponent from "../../components/home/SearchComponent";
import  { SectionComponent, HeaderComponent, TextComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle'

const HomeScreen = () => {
  return (
    <View style={globalStyle.container}>
      <StatusBar backgroundColor={appColor.black} />
      <SectionComponent>
        <HeaderComponent home avatar />
      </SectionComponent>

      <SectionComponent styles={{ width: 195 }}>
        <TextComponent
          text={"Find the best coffee for you"}
          title
          fontWeight={"bold"}
        />
      </SectionComponent>

      <SectionComponent>
        <SearchComponent />
      </SectionComponent>
      
      <ScrollView>
        <CategoriesComponent />
        <SectionComponent>
          <TextComponent title text={"Coffee beans"} />
        </SectionComponent>
        <CardComponent bean />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
