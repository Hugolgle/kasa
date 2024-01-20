import logements from '../../../public/logements.json'
import Carrousel from '../..//components/PageLogement/Carrousel/carrousel'
import Location from '../../components/PageLogement/Location/location'
import Host from '../../components/PageLogement/Host/host'
import Tag from '../../components/PageLogement/Tags/tags'
import Rate from '../../components/PageLogement/Rates/rates'
import Collapses from '../../components/Collapse/collapse'
import Footer from '../../components/Footer/footer'
import './logement.scss'
import { useParams } from "react-router-dom";

export default function Logement() {

    const { id } = useParams();
    const ficheLogement = logements.find((logement) => logement.id === id);

    return <>
        <Carrousel />
        <section className="details">
            <div className="locHost">
                <Location />
                <Host />
            </div>
            <div className="tagsRate">
                <Tag />
                <Rate />
            </div>
            <div className="logementCollapseContainer">
                <div className="logementCollapse">
                    <Collapses title="Description" text={ficheLogement.description} />
                </div>
                <div className="logementCollapse">
                    <Collapses title="Equipement" text={ficheLogement.equipments} />
                </div>
            </div>

        </section>
        <Footer />
    </>
}