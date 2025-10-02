import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//import Navbar
import Navbar from './Components/navbar/navbar';

//import Footer
import Footer from "./Components/footer/footer"

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disableMutationObserver: true // هذا يغطي كل العناصر في كل الـ components
    });
  }, []);


  return (
    <div className="App">
        <Navbar />
        <Footer />
    </div>
  );
}

export default App;
