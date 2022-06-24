import iconfacebook from "../src/images/icon-facebook.svg";

import Container from "./components/Container";
import Tableausocial from "./components/Tableausocial";
import Sectionsocial from "./components/Sectionsocial";
import Text from "./components/Text";
import IconFacebook from "./components/Iconfacebook";

function App() {
  return (
    <div className="App">
      <Container>
        <Text as="h1">Social Media Dashboard</Text>
        <Text as="h2">Total Followers: 23,004</Text>
        <Tableausocial>
          <Sectionsocial as="facebook">
            <IconFacebook src={iconfacebook} alt="IconFacebook"/>
          </Sectionsocial> 
          <Sectionsocial as="twitter">
            blbl
          </Sectionsocial> 
          <Sectionsocial as="instagram">
            blbl
          </Sectionsocial> 
          <Sectionsocial as="youtube">
            blbl
          </Sectionsocial> 
        </Tableausocial>
      </Container>
    </div>
  );
}

export default App;
