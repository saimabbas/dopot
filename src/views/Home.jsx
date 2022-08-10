import React, { useState } from "react";
import HeroImg from "../assets/img/hero.png";
import LogoWhite from "../assets/img/logo-white.svg";
import IconWhitePaper from "../assets/img/icon-whitepaper.svg";
import IconPlane from "../assets/img/icon-plane.svg";
import IconArrowGrd from "../assets/img/icon-arrow-02-02.svg";
import IconDollarGrd from "../assets/img/icon-dollar-02.svg";
import IconPersonGrd from "../assets/img/icon-person-02.svg";
import IconCommentsGrd from "../assets/img/icon-comments-02.svg";
import PlaneLaptopPlanet from "../assets/img/plane-laptop-planet-full.png";
import BitcoinPeople from "../assets/img/bitcoin-people.png";
import ScelgonoImg1 from "../assets/img/scelgono-img-1.png";
import ScelgonoImg2 from "../assets/img/scelgono-img-2.png";
import ScelgonoImg3 from "../assets/img/scelgono-img-3.png";
import HandToHand from "../assets/img/hand-to-hand.png";
import LeftWave from "../assets/img/left-wave-02.svg";
import RightWave from "../assets/img/right-wave-02.svg";
import PlanetCoreImg from "../assets/img/planet-core-img.png";
import RoboImg from "../assets/img/robo-img.png";
import DaiBg from "../assets/img/dai-bg.png";
import ProfitIcon from "../assets/img/profit-icon-02.svg";
import ValoreIcon from "../assets/img/valore-icon-02.svg";
import BlockChainIcon from "../assets/img/blockchain-icon-02.svg";
import StableIcon from "../assets/img/stable-icon-02.svg";
import HoldingIcon from "../assets/img/holding-icon-02.svg";
import QuiBottomSparkles from "../assets/img/qui-bottom-sparkles.svg";
import ScorpiPlanets from "../assets/img/scorpi-planets.svg";
import RoadmapBg from "../assets/img/roadmap-bg-full.png";
import Planet1 from "../assets/img/planet-1-02.svg";
import Planet2 from "../assets/img/planet-2-02.svg";
import Planet3 from "../assets/img/planet-3-02.svg";
import Planet4 from "../assets/img/planet-4-02.svg";
import Planet5 from "../assets/img/planet-5-02.svg";
import "../styles/home.css";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MdMenu, MdClear } from "react-icons/md";

const Home = () => {
  const [isTempMsgHidden, setIsTempMsgHidden] = useState(false);
  return (
    <div className="app">
      <main className="home">
        {/* Temporary Message */}
        {isTempMsgHidden ? null : (
          <div className="temp-msg">
            <p>la piattaforma dopot è in fase di sviluppo</p>
            <div
              onClick={() => {
                setIsTempMsgHidden(true);
              }}
            >
              <MdClear />
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="hero-section" id="hero-section">
          <Header />
          <img className="hero-bg" src={HeroImg} alt="HeroImg" />
          <div className="box">
            <div className="hero-content">
              {/* <img src={LogoWhite} alt="LogoWhite" /> */}
              <h1>
                Il crowdfunding incontra la <br /> potenza della Blockchain.{" "}
              </h1>
              <h2>
                Dopot è la prima piattaforma di crypto-crowdfunding
                decentralizzata in Italia
              </h2>
              <div className="main-btns-box">
                <div className="box">
                  <div className="mbb-content">
                    <button className="grd-btn dopot-btn-lg">
                      <img src={IconPlane} alt="IconPlane" /> Esplora i progetti
                    </button>
                    <button className="purple-border-btn dopot-btn-lg">
                      {" "}
                      <img src={IconWhitePaper} alt="IconWhitePaper" />{" "}
                      Whitepaper
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scopri Cosa Puoi Fare Section */}
        <section className="scorpi-section">
          <img
            className="scorpi-planets"
            src={ScorpiPlanets}
            alt="ScorpiPlanets"
          />
          <div className="box">
            <div className="scorpi-content">
              <h3 className="section-heading">Scopri cosa puoi fare</h3>
              <div className="scorpi-grid">
                <div className="scorpi-grid-card">
                  <img src={IconArrowGrd} alt="IconArrowGrd" />
                  <h4>Investi</h4>
                  <p>
                    Aiuta a crescere progetti ambiziosi e vinci insieme a loro
                  </p>
                </div>
                <div className="scorpi-grid-card">
                  <img src={IconDollarGrd} alt="IconDollarGrd" />
                  <h4>Guadagna</h4>
                  <p>
                    Guadagna token Dopot invitando persone nella piattaforma
                  </p>
                </div>
                <div className="scorpi-grid-card">
                  <img src={IconPersonGrd} alt="IconPersonGrd" />
                  <h4>Impara</h4>
                  <p>
                    Scopri di più sulle criptovalute grazie ai nostri percorsi
                    gratuiti
                  </p>
                </div>
                <div className="scorpi-grid-card">
                  <img src={IconCommentsGrd} alt="IconCommentsGrd" />
                  <h4>Connettiti</h4>
                  <p>Conosci e confrontati con la nostra community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Il web 3.0 è Qui Section */}
        <section className="qui-section">
          <img
            className="plane-laptop-planet-img"
            src={PlaneLaptopPlanet}
            alt="PlaneLaptopPlanet"
          />
          <img
            className="qui-bottom-sparkles"
            src={QuiBottomSparkles}
            alt="QuiBottomSparkles"
          />

          <div className="box">
            <div className="ill-web">
              <div>
                <h4>
                  {" "}
                  Il web 3.0
                  <br /> è qui
                </h4>
                <p>
                  Il futuro del web è qui, le novità tecnologiche del web 3.0 e
                  in particolare la blockchain sta permettendo a startup e
                  progetti di innovare sempre di più.
                  <br />
                  Noi siamo qui per permetterti di contribuire alla nascita di
                  questi progetti ed essere parte della rivoluzione
                </p>
              </div>
            </div>
            <h4 className="crowd-funding">
              Perché investire <br /> nel Crowdfounding 3.0
            </h4>
          </div>
          <img
            className="bitcoin-people"
            src={BitcoinPeople}
            alt="BitcoinPeople"
          />
          <div className="box">
            <div className="ill-text-info-box-1">
              <div className="ill-text-info-box">
                <h5>I vantaggi della decentralizzazione</h5>
                <p>
                  La piattaforma Dopot sarà al 100% decentralizzata, questo
                  significa che nessun individuo può manomettere i dati o
                  compiere azioni fraudolente con i fondi raccolti grazie alla
                  sicurezza fornita dalla blockchain.
                  <br />
                  <br />
                  Ciò che le persone investono viene trasferito su un contratto
                  intelligente senza intermediari e in maniera totalmente sicura
                  grazie alla crittografia.
                </p>
              </div>
            </div>
            <div className="ill-text-info-box-2">
              <div className="ill-text-info-box">
                <h5>QUALI BENEFICI COMPORTA ?</h5>
                <p>
                  Tramite il multi-sig presente nello smart contract si avrà la
                  totale sicurezza sulla raccolta fondi senza richiedere
                  collaterali ai richiedenti denaro.
                  <br />
                  <br />
                  Questo sistema estenderà la possibilità a chiunque voglia,
                  indipendentemente dalle possibilità economiche, di effettuare
                  un crowdfunding; e allo stesso tempo mettere in sicurezza i
                  soldi degli investitori
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Perché le Aziende Scelgono Dopot Section */}
        <section className="scelgono-section">
          <div className="box">
            <h3 className="section-heading">
              Perché le aziende <br /> scelgono Dopot ?
            </h3>
            <div className="scelgono-grid-box">
              <div className="scelgono-grid-text-box">
                <h5>
                  Meno burocrazia grazie <br /> agli Smart Contract
                </h5>
                <p>
                  Grazie alla tecnologia oggi è possibile creare contratti
                  intelligenti che sostituiscono tutta la procedura burocratica,
                  svolgendo un rapporto contrattuale in modo completamente
                  autonomo.
                </p>
              </div>
              <img src={ScelgonoImg1} alt="ScelgonoImg1" />
            </div>
            <div className="scelgono-grid-box">
              <img src={ScelgonoImg2} alt="ScelgonoImg2" />
              <div className="scelgono-grid-text-box">
                <h5>Transazioni veloci</h5>
                <p>
                  Grazie al peer-to-peer le transazioni saranno istantanee e
                  molto più sicure dei sistemi di pagamento tradizionali.
                </p>
              </div>
            </div>
            <div className="scelgono-grid-box">
              <div className="scelgono-grid-text-box">
                <h5>Nessun intermediario</h5>
                <p>
                  Il funzionamento dei contratti intelligenti, permette di non
                  avere intermediari, ciò riduce i costi e velocizza il processo
                  d’investimento.
                </p>
              </div>
              <img src={ScelgonoImg3} alt="ScelgonoImg3" />
            </div>
          </div>
        </section>
        {/* Roadmap Section */}
        <section className="roadmap-section">
          <img className="roadmap-bg" src={RoadmapBg} alt="RoadmapBg" />
          <div className="box">
            <h3 className="section-heading">Roadmap</h3>
            <div className="roadmap-grid">
              <div className="roadmap-con">
                <div className="roadmap-step-box">
                  <img src={Planet1} alt="Planet1" />
                  <div className="roadmap-step-content-box">
                    <h4>01</h4>
                    <div>
                      <h6>Fase Mercurio</h6>
                      <p>
                        Apertura ufﬁciale della prima sezione di Reward
                        crowdfunding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap-con">
                <div className="roadmap-step-box">
                  <img src={Planet2} alt="Planet2" />
                  <div className="roadmap-step-content-box">
                    <h4>02</h4>
                    <div>
                      <h6>Fase Venere</h6>
                      <p>Vendita NFT limitati ai primi sostenitori</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap-con">
                <div className="roadmap-step-box">
                  <img src={Planet3} alt="Planet3" />
                  <div className="roadmap-step-content-box">
                    <h4>03</h4>
                    <div>
                      <h6>Fase Terra</h6>
                      <p>Lancio del token “Dopot token” e apertura IDO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap-con">
                <div className="roadmap-step-box">
                  <img src={Planet4} alt="Planet4" />
                  <div className="roadmap-step-content-box">
                    <h4>04</h4>
                    <div>
                      <h6>Fase Luna</h6>
                      <p>Istituzione della DAO</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="roadmap-con">
                <div className="roadmap-step-box">
                  <img src={Planet5} alt="Planet5" />
                  <div className="roadmap-step-content-box">
                    <h4>05</h4>
                    <div>
                      <h6>Fase Marte</h6>
                      <p>Apertura sezione "Equity"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Big Image */}
        <section className="hand-to-hand-section">
          <h4>Scopri DopotShare Token, Il Token della piattaforma</h4>
          <img src={HandToHand} alt="HandToHand" />
        </section>
        <section className="supply-section">
          {/* <div className="left-wave-heading">
            <img src={LeftWave} alt="LeftWave" />
            <div className="box">
              <h3>Distibuzione Supply</h3>
            </div>
          </div>
          <div className="planet-img-box">
            <img src={PlanetCoreImg} alt="PlanetCoreImg" />
          </div>
          <div className="right-wave-heading">
            <img src={RightWave} alt="RightWave" />
            <div className="box">
              <h3>Fornitura: 10 milioni di Token </h3>
            </div>
          </div> */}
          <div className="della-msg">
            <div className="box">
              <div className="della-msg-box">
                <img src={RoboImg} alt="RoboImg" />{" "}
                <h5>I VANTAGGI DELLA DAI</h5>
              </div>
            </div>
          </div>
        </section>
        {/* Cos’è DAI Secction */}
        <section className="dai-section">
          <img className="dai-bg" src={DaiBg} alt="DaiBg" />
          <div className="box">
            <div className="dai-right-text-box">
              <div>
                <h4>Cos’è DAI?</h4>
                <p>
                  La criptovaluta DAI (DAI) è un token ERC-20 che è stato
                  progettato per funzionare come stablecoin o valuta stabile il
                  cui valore è ancorato al dollaro.
                  <br />
                  <br />
                  Tale valuta è emessa in maniera decentralizzata grazie alla
                  collateralizzazione di garanzie che servono a garantirne in
                  ogni momento l’emissione.
                </p>
              </div>
            </div>
            <div className="dai-grid-box">
              <img src={ProfitIcon} alt="ProfitIcon" />
              <p>
                Proﬁt
                <br />
                L’aggiunta di vari prodotti di credito consente agli utenti di
                investire i propri DAI e guadagnare interessi annui che battono
                il mercato tradizionale.
              </p>
            </div>
            <div className="dai-grid-box">
              <img src={BlockChainIcon} alt="BlockChainIcon" />
              <p>
                Multi Blockchain
                <br />
                Può essere trasferito fra tutte le principali blockchain ed è
                supportato da oltre 200 exchange
              </p>
            </div>
            <div className="dai-grid-box">
              <img src={ValoreIcon} alt="ValoreIcon" />
              <p>
                Valore
                <br />
                DAI sta dimostrando il suo valore diventando parte di oltre 400
                app e servizi decentralizzati.
              </p>
            </div>
            <div className="dai-grid-box">
              <img src={StableIcon} alt="StableIcon" />
              <p>
                Stablecoin
                <br />
                gli smart contracts di makerDAO permettono a chiunque di fare
                transazioni dal valore stabile alla velocità della blockchain
              </p>
            </div>
            <div className="dai-grid-box">
              <img src={HoldingIcon} alt="HoldingIcon" />
              <p>
                Holding
                <br />
                Gli utenti possono tenere DAI nei loro portafogli, coprendo le
                loro scommesse contro la volatilità delle risorse digitali
                accumulate, oppure possono scambiarlo sul mercato.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
