import { Provider } from "react-redux";

import "./App.css";
import MainContent from "./components/mainContent/MainContent";
import Navbar from "./components/navbar/Navbar";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <MainContent />
    </Provider>
  );
}

export default App;
