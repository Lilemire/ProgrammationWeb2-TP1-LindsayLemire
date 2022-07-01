import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import iconup from "../src/images/icon-up.svg";
import iconfacebook from "../src/images/icon-facebook.svg";
import icontwitter from "../src/images/icon-twitter.svg";
import iconinstagram from "../src/images/icon-instagram.svg";
import iconyoutube from "../src/images/icon-youtube.svg";
import icondown from "../src/images/icon-down.svg";

import Container from "./components/Container";
import Text from "./components/Text";
import IconFacebook from "./components/Iconfacebook";
import Iconup from "./components/Iconup";
import Icontwitter from "./components/Icontwitter";
import Iconinstagram from "./components/Iconinstagram";
import IconYoutube from "./components/Iconyoutube";
import Icondown from "./components/Icondown";
import Box from "./components/Box";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
     
      <Container>

        <div className="flexcontainer">
          <Text as="h1">Social Media Dashboard</Text>

          <div className="switch">
            <label> {theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>


        <Text as="h2">Total Followers: 23,004</Text>

        <div className="tableausocial">

          <Box anotherClassName="socialfacebook">
            <div className="flexsocial">
              <IconFacebook src={iconfacebook} alt="IconFacebook"/>
              <Text as="h2">@nathanf</Text>
            </div>
            <Text as="h3">1987</Text>
            <Text as="p">F O L L O W E R S</Text>
            <div className="flexsocial">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">12 Today</Text>
            </div>
          </Box> 

          
          <Box anotherClassName="socialtwitter">
            <div className="flexsocial">
              <Icontwitter src={icontwitter} alt="IconTwitter"/>
              <Text as="h2">@nathanf</Text>
            </div>
            <Text as="h3">1044</Text>
            <Text as="p">F O L L O W E R S</Text>
            <div className="flexsocial">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">99 Today</Text>
            </div>
          </Box> 

          <Box anotherClassName="socialinstagram">
            <div className="flexsocial">
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
            <Text as="h2">@realnathanf</Text>
           </div>
           <Text as="h3">11k</Text>
           <Text as="p">F O L L O W E R S</Text>
           <div className="flexsocial">
            <Iconup src={iconup} alt="IconUp"/>
            <Text as="h4">1099 Today</Text>
           </div>
          </Box> 

          <Box anotherClassName="socialyoutube">
            <div className="flexsocial">
              <IconYoutube src={iconyoutube} alt="IconYoutube"/>
              <Text as="h2">Nathan F.</Text>
            </div>
            <Text as="h3">8239</Text>
            <Text as="p">S U B S C R I B E R S</Text>
            <div className="flexsocial">
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">144 Today</Text>
            </div>
          </Box> 

        </div>

        <Text as="h1">Overview - Today</Text>

        <div className="tableauoverview">

        <Box anotherClassName="ovpgfacebook">
          <div className="flexoverview">
            <Text as="h2">Page views</Text>
            <IconFacebook src={iconfacebook} alt="IconFacebook"/>
          </div>
            <div className="flexoverview">
            <Text as="h6">87</Text>
            <div className="ovupdown">
              <Iconup src={iconup} atl="IconUp"/>
              <Text as="h4">3%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovlkfacebook">
          <div className="flexoverview">
            <Text as="h2">Likes</Text>
            <IconFacebook src={iconfacebook} alt="IconFacebook"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">52</Text>
            <div className="ovupdown">
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">2%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovlkinstagram">
          <div className="flexoverview">
            <Text as="h2">Likes</Text>
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">5462</Text>
            <div className="ovupdown">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">2267%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovpginstagram">
          <div className="flexoverview">
            <Text as="h2">Profile Views</Text>
            <Iconinstagram src={iconinstagram} alt="IconInstagram"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">52k</Text>
            <div className="ovupdown">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">1375%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovpgtwitter">
          <div className="flexoverview">
            <Text as="h2">Retweets</Text>
            <Icontwitter src={icontwitter} alt="IconTwitter"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">117</Text>
            <div className="ovupdown">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">303%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovlktwitter">
          <div className="flexoverview">
            <Text as="h2">Likes</Text>
            <Icontwitter src={icontwitter} alt="IconTwitter"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">507</Text>
            <div className="ovupdown">
              <Iconup src={iconup} alt="IconUp"/>
              <Text as="h4">553%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovlkyoutube">
          <div className="flexoverview">
            <Text as="h2">Likes</Text>
            <IconYoutube src={iconyoutube} alt="IconYoutube"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">107</Text>
            <div className="ovupdown">
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">19%</Text>
            </div>
          </div>
        </Box>

        <Box anotherClassName="ovpgyoutube">
          <div className="flexoverview">
            <Text as="h2">Total views</Text>
            <IconYoutube src={iconyoutube} alt="IconYoutube"/>
          </div>
          <div className="flexoverview">
            <Text as="h6">1407</Text>
            <div className="ovupdown">
              <Icondown src={icondown} alt="IconDown"/>
              <Text as="h5">12%</Text>
            </div>
          </div>
        </Box>

        </div>
        
      </Container>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
