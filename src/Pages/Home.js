import Hero from "../Component/Hero";
import Projects from "../Component/Projects";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Skills from "../Component/Skills";

export default function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}