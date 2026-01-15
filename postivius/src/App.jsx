import Header from "./components/header"
import Hero from "./components/hero"
import Card from "./components/card"
import Contact from "./components/contact";
import Case from "./components/case";
import Process from "./components/process"
import Logotyps from "./images/Logotypes.png";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <img src={Logotyps} alt="" className="w-full mt-4 lg:mt-2 h-5 lg:h-auto object-cover"/>
      <Card />
      <Contact />
      <Case />
      <Process />
    </div>
  )
}

export default App
