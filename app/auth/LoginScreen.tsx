import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import appColor from "@/constants/appColor";
import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
import globalStyle from '@/constants/globalStyle';

export default function login() {
  return (
    <View style={globalStyle.containerLogin}>
      <StatusBar backgroundColor={appColor.black} />
      <SectionComponent
        login
        styles={{
          justifyCotent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/Logo.png")}
          style={globalStyle.logo}
        />
        <Text style={globalStyle.welcome}>Welcome to Lungo!</Text>
        <Text style={globalStyle.login}>Login to Continue</Text>
      </SectionComponent>

      <SectionComponent login>
        <TextInput
          placeholder="Email Address"
          style={globalStyle.input}
          placeholderTextColor={appColor.gray}
        />
        <View>
          <TextInput
            placeholder="Password"
            style={globalStyle.input}
            placeholderTextColor={appColor.gray}
          />
          <TouchableOpacity style={globalStyle.eyeContainer}>
            <Image
              source={require("@/assets/images/Eye.png")}
              style={globalStyle.eye}
            />
          </TouchableOpacity>
        </View>
      </SectionComponent>

      <SectionComponent login>
        <ButtonComponent
          type="primary"
          text="Sign in"
          color={appColor.orange}
          styles={{
            marginBottom: 10,
          }}
        />
        <ButtonComponent
          type="primary"
          text="Sign in with Google"
          icon={require("@/assets/images/google.png")}
          color={appColor.white}
          textColor={appColor.black}
          styles={{ justifyContent: "space-between" }}
        />
      </SectionComponent>

      <SectionComponent login>
        <RowComponent justify="center">
          <TextComponent
            text="Don’t have account? Click "
            color={appColor.gray1}
            fontWeight="bold"
          />
          <TextComponent
            text="Register"
            color={appColor.orange}
            fontWeight="bold"
          />
        </RowComponent>
      </SectionComponent>

      <SectionComponent login>
        <RowComponent justify="center">
          <TextComponent
            text="Forget Password? Click "
            color={appColor.gray1}
            fontWeight="bold"
          />
          <TextComponent
            text="Reset"
            color={appColor.orange}
            fontWeight="bold"
          />
        </RowComponent>
      </SectionComponent>
    </View>
  );
}

const myStyle = StyleSheet.create({});
