import Header from "./components/header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Testimonies from "./components/Testimonies";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App(){
    return(
    <>
        <Header />
        <main>
            <About />
            <Features />
            <Tours />
            <Testimonies />
            <Booking />
        </main>
        <Footer />
    </>
    )
}

export default App;