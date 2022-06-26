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
import Tableauoverview from "./components/Tableauoverview";
import Sectionoverview from "./components/Sectionoverview";
import Flexoverview from "./components/Flexoverview";
import Ovupdown from "./components/Ovupdown";

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

        <Text as="h1">Overview - Today</Text>

        <Tableauoverview>

        <Sectionoverview as="ovpgfacebook">
          <Flexoverview>
            <Text as="h2">Page views</Text>
            <IconFacebook src={iconfacebook} alt="IconFacebook"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">87</Text>
            <Ovupdown>
              <Iconup src={iconup} atl="IconUp"/>
              <Text as="h4">3%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovlkfacebook">
          <Flexoverview>
            <Text as="h2">Likes</Text>
            <IconFacebook src={iconfacebook} alt="IconFacebook"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">52</Text>
            <Ovupdown>
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">2%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovlkinstagram">
          <Flexoverview>
            <Text as="h2">Likes</Text>
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">5462</Text>
            <Ovupdown>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">2267%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovpginstagram">
          <Flexoverview>
            <Text as="h2">Profile Views</Text>
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">52k</Text>
            <Ovupdown>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">1375%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovpgtwitter">
          <Flexoverview>
            <Text as="h2">Retweets</Text>
            <Icontwitter src={icontwitter} alt="IconTwitter"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">117</Text>
            <Ovupdown>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">303%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovlktwitter">
          <Flexoverview>
            <Text as="h2">Likes</Text>
            <Icontwitter src={icontwitter} alt="IconTwitter"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">507</Text>
            <Ovupdown>
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">553%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovlkyoutube">
          <Flexoverview>
            <Text as="h2">Likes</Text>
            <IconYoutube src={iconyoutube} alt="IconYoutube"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">107</Text>
            <Ovupdown>
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">19%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        <Sectionoverview as="ovpgyoutube">
          <Flexoverview>
            <Text as="h2">Total views</Text>
            <IconYoutube src={iconyoutube} alt="IconYoutube"/>
          </Flexoverview>
          <Flexoverview>
            <Text as="h6">1407</Text>
            <Ovupdown>
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">12%</Text>
            </Ovupdown>
          </Flexoverview>
        </Sectionoverview>

        </Tableauoverview>
        
      </Container>
    </div>
  );
}

export default App;
