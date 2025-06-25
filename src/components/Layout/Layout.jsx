import Routers from "../../router/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export default function Layout() {
  return (
    <div>
      <Header />
      <Routers/>
      <Footer/>
    </div>
  )
}
