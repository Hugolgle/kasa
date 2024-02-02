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
    const equipement = ficheLogement.equipments.map((equipement) => <p key={equipement}>{equipement}</p>)

    return <>
        <Carrousel pictures={ficheLogement.pictures} />
        <section className="details">

            <div className="infos">
                <div className="locTag">
                    <Location />
                    <Tag tags={ficheLogement.tags} />
                </div>
                <div className="hostRate">
                    <Host />
                    <Rate rating={ficheLogement.rating} />
                </div>
            </div>

            <div className="logementCollapseContainer">
                <div className="logementCollapse">
                    <Collapses title="Description" text={<p>{ficheLogement.description}</p>} />
                </div>
                <div className="logementCollapse">
                    <Collapses title="Equipement" text={equipement} />
                </div>
            </div>

        </section>
        <Footer />
    </>
}