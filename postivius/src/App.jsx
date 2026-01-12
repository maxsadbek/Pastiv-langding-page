import Header from "./components/header"
import Hero from "./components/hero"
import Logotyps from "./images/Logotypes.png";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <img src={Logotyps} alt="" className="w-full mt-2 h-5 lg:h-auto object-cover"/>
    </div>
  )
}

export default App
