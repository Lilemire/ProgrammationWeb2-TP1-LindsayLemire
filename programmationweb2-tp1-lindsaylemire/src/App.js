import Container from "./components/Container";
import Tableausocial from "./components/Tableausocial";
import Sectionsocial from "./components/SectionSocial";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Container>
        <Text as="h1">Social Media Dashboard</Text>
        <Text as="h2">Total Followers: 23,004</Text>
        <Tableausocial>
          <Sectionsocial as="facebook">
            
          </Sectionsocial> 
        </Tableausocial>
      </Container>
    </div>
  );
}

export default App;
