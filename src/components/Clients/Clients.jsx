import './Clients.css';
import { clientsText } from '../../content/text';

import aidan from '../../assets/clients logos/aidan logo.svg';
import becoMagico from '../../assets/clients logos/beco mágico logo.png';
import datavence from '../../assets/clients logos/datavence logo.png';
import formule from '../../assets/clients logos/fórmule logo.png';
import geSolar from '../../assets/clients logos/ge solar logo.png';
import logauto from '../../assets/clients logos/logauto logo.png';
import mateusPalhano from '../../assets/clients logos/Logo-Mateus-Palhano2.png.webp';
import xcont from '../../assets/clients logos/xcont logo.png';

export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <h2 className="h2">{clientsText.title}</h2>
        <p className="clients__subtitle">{clientsText.subtitle}</p>

        <div className="clients__track">
          <div className="clients__row">

            <img src={aidan} alt="Aidan" className="clients__logo" />
            <img src={becoMagico} alt="Beco Mágico" className="clients__logo" />
            <img src={datavence} alt="DataVence" className="clients__logo" />
            <img src={formule} alt="Fórmule" className="clients__logo" />
            <img src={geSolar} alt="GE Solar" className="clients__logo" />
            <img src={logauto} alt="LogAuto" className="clients__logo" />
            <img src={mateusPalhano} alt="Mateus Palhano" className="clients__logo" />
            <img src={xcont} alt="XCont" className="clients__logo" />

          </div>
        </div>
      </div>
    </section>
  );
}
