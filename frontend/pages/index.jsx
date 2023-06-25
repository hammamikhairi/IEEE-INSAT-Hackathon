import { Layout } from '@vercel/examples-ui'
import FooterSection from '../components/Footer'
import Features from '../components/LandingPage/Features'
import Hero from '../components/LandingPage/Hero'
import Navbar from '../components/LandingPage/Navbar'
import Testimonials from '../components/LandingPage/Testimonials'
import TwoColumnWithImage from '../components/LandingPage/TwoColumnWithImage'

import second from '../public/images/second.svg'
import third from '../public/images/third.svg'

const MainMenu = [
  {url : "#first", label:"Home"},
  {url : "#die", label:"About"},
  {url : "#fifth", label:"Contact"},
]

function Home() {
  return (
    <>
        <Navbar mainMenu={MainMenu} />
        <Hero image={true} scrollAnchorId={"first"} />
        <TwoColumnWithImage title="Empowering Growth and Healing through Innovative Mental Health Care"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum pariatur sint a nam, fuga deserunt ducimus maiores itaque laborum aspernatur minima rem nobis est. Beatae libero illum eligendi doloremque!"
          img={second} scrollAnchorId={"second"} imagePosition={"left"} />
        <Features scrollAnchorId={"third"} />
        <TwoColumnWithImage title="Stay in Touch with Our Professionals"
          description="TLorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum pariatur sint a nam, fuga deserunt ducimus maiores itaque laborum aspernatur minima rem nobis est. Beatae libero illum eligendi doloremque!"
          img={third} scrollAnchorId={"fourth"} imagePosition={"right"} />
        <Testimonials   scrollAnchorId={"fifth"} />
        <FooterSection mainMenu={MainMenu} scrollAnchorId={"fifth"} />
    </>

  )
}

Home.Layout = Layout

export default Home
