// import các thư viện cần thiết
import {
    View, Image, Text, TextInput, TouchableOpacity,
    StyleSheet,
    StatusBar,
  } from "react-native";
  import appColor from "../../constants/appColor";
  import  { SectionComponent, HeaderComponent, RowComponent, TextComponent, ButtonComponent} from '@/components/index'
  import globalStyle from '@/constants/globalStyle'
  export default function login() {
    return (
      <View style={globalStyle.containerLogin}>
      <StatusBar backgroundColor={appColor.black}/>
      <SectionComponent 
        login
        styles={{
          justifyCotent: 'center',
          alignItems: 'center'
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
        <TextInput placeholder="Name"
          style={globalStyle.input} placeholderTextColor={appColor.gray}/>
        <TextInput placeholder="Email Address"
          style={globalStyle.input} placeholderTextColor={appColor.gray}/>
        <View>
          <TextInput placeholder="Password"
            style={globalStyle.input} placeholderTextColor={appColor.gray}/>
          <TouchableOpacity style={globalStyle.eyeContainer}>
            <Image
              source={require("@/assets/images/Eye.png")}
              style={globalStyle.eye}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput placeholder="Re-type password"
            style={globalStyle.input} placeholderTextColor={appColor.gray}/>
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
          text='Register'
          color={appColor.orange}
          textColor={appColor.white}
        />
      </SectionComponent >

      <SectionComponent login>
        <RowComponent justify="center">
          <TextComponent
            text='You have an account? Click '
            color={appColor.gray1}
            fontWeight="bold"
          />
          <TextComponent
            text='Sign in'
            color={appColor.orange}
            fontWeight="bold"
            />
        </RowComponent>
      </SectionComponent>
    </View>
    );
  }
