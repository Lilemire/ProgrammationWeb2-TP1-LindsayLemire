import iconup from "../src/images/icon-up.svg";
import iconfacebook from "../src/images/icon-facebook.svg";
import icontwitter from "../src/images/icon-twitter.svg";
import iconinstagram from "../src/images/icon-instagram.svg";
import iconyoutube from "../src/images/icon-youtube.svg";
import icondown from "../src/images/icon-down.svg";

import Container from "./components/Container";
import Tableausocial from "./components/Tableausocial";
import Sectionsocial from "./components/Sectionsocial";
import Text from "./components/Text";
import IconFacebook from "./components/Iconfacebook";
import Flexsocial from "./components/Flexsocial";
import Iconup from "./components/Iconup";
import Icontwitter from "./components/Icontwitter";
import Iconinstagram from "./components/Iconinstagram";
import IconYoutube from "./components/Iconyoutube";
import Icondown from "./components/Icondown";

function App() {
  return (
    <div className="App">
      <Container>
        <Text as="h1">Social Media Dashboard</Text>
        <Text as="h2">Total Followers: 23,004</Text>
        <Tableausocial>

          <Sectionsocial as="facebook">
            <Flexsocial>
              <IconFacebook src={iconfacebook} alt="IconFacebook"/>
              <Text as="h2">@nathanf</Text>
            </Flexsocial>
            <Text as="h3">1987</Text>
            <Text as="p">F O L L O W E R S</Text>
            <Flexsocial>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">12 Today</Text>
            </Flexsocial>
          </Sectionsocial> 
          
          <Sectionsocial as="twitter">
            <Flexsocial>
              <Icontwitter src={icontwitter} alt="IconTwitter"/>
              <Text as="h2">@nathanf</Text>
            </Flexsocial>
            <Text as="h3">1044</Text>
            <Text as="p">F O L L O W E R S</Text>
            <Flexsocial>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">99 Today</Text>
            </Flexsocial>
          </Sectionsocial> 

          <Sectionsocial as="instagram">
           <Flexsocial>
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
            <Text as="h2">@realnathanf</Text>
           </Flexsocial>
           <Text as="h3">11k</Text>
           <Text as="p">F O L L O W E R S</Text>
           <Flexsocial>
            <Iconup src={iconup} alt="IconUp"/>
            <Text as="h4">1099 Today</Text>
           </Flexsocial>
          </Sectionsocial> 

          <Sectionsocial as="youtube">
            <Flexsocial>
              <IconYoutube src={iconyoutube} alt="IconYoutube"/>
              <Text as="h2">Nathan F.</Text>
            </Flexsocial>
            <Text as="h3">8239</Text>
            <Text as="p">S U B S C R I B E R S</Text>
            <Flexsocial>
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">144 Today</Text>
            </Flexsocial>
          </Sectionsocial> 

        </Tableausocial>
      </Container>
    </div>
  );
}

export default App;
