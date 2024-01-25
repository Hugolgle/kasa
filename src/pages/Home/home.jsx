import Banner from '../../components/Banner/banner'
import Gallery from '../../components/Gallery/gallery'
import Footer from '../../components/Footer/footer'
import logements from '../../../public/logements.json'

export default function Home() {
    return <>
        <Banner title="Chez vous, partout et ailleurs" img="./src/assets/images/banner_1.jpg" />
        <Gallery cards={logements} />

        <Footer />
    </>
}