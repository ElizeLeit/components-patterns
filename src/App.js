import "./App.scss";
import Lexend from "./components/atoms/Lexend";
import Alert from "./components/molecules/Alert";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <p>Components</p>
        <Lexend text="Lexend" size="80px" weight={600} color="#061C3D" />
        <Alert
          title="This is a info alert"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          status="error"
          type=""
          filledBackground={false}
          linkRedirect="www.google.com.br"
          linkText="Alert link"
          hasIconClose
        />
      </div>
    </div>
  );
}

export default App;
