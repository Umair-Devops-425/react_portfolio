import styles from "./App.module.css";
import  {Navbar}  from "./components/navbar"; 
import { Hero } from "./components/hero";

function App() {
    return (
        <div className={styles.app}>
            
            <Navbar/>
            <Hero/>
        </div>
    );
}

export default App;