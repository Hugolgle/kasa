import './about.scss'
import collapses from '../../../public/about.json';
import Banner from '../../components/Banner/banner'
import Collapse from '../../components/Collapse/collapse'
import Footer from '../../components/Footer/footer'

export default function About() {
    return <>
        <Banner img="./src/assets/images/banner_2.jpg" />
        <section className="collapses">
            {
                collapses.map((collapse) => {
                    return (
                        <Collapse title={collapse.title} text={collapse.text} />
                    )
                })
            }
        </section>
        <Footer />
    </>
}