import Header from '../../components/Header/header'
import Banner from '../../components/Banner/banner'
import Gallery from '../../components/Gallery/gallery'
import Footer from '../../components/Footer/footer'

export default function Home() {
    return <>
        {/* <Header /> */}
        <Banner title="Chez vous, partout et ailleurs" img="./src/assets/images/banner_1.jpg" />
        <Gallery />

        <Footer />
    </>
}