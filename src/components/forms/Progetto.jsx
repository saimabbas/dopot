import React , { useState }  from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";

const Progetto = (props) => {
    const [campagna, setcampagna] = useState("reward");
    const [giorniCampagna, setgiorniCampagna] = useState(45);

    function toggleCampagna(event) {
        setcampagna(event.target.name);
        const fevent = {
            target: {name: "tipoCampagna", value: event.target.name},
        };
        props.handleChange(fevent);
    }

    function toggleGiorniCampagna(event) {
        setgiorniCampagna(event.target.value);
        const fevent = {
            target: {name: "giorniCampagna", value: event.target.value},
        };
        props.handleChange(fevent);
    }

    return(<><div className="ins-input-box">
            <h4>Che tipo di campagna vuoi realizzare?</h4>
            <div className="ins-btn-box">
                <button name="reward" onClick={toggleCampagna} className={campagna == "reward" ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg"}  type="button">
                    Campagna Reward
                </button>
                <button name="equity" onClick={toggleCampagna} className={campagna == "equity" ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } type="button">
                    Campagna Equity
                </button>
            </div>
            <h6>Non sai quale scegliere?</h6>
        </div><div className="ins-input-box">
            <h4>Che quota vuoi raggiungere?</h4>
            <input  name="quota" value={props.inputs.quota || ""} 
        onChange={props.handleChange} type="text" placeholder="inserisci la cifra" />
        </div><div className="ins-input-box">
            <h4>Che tipo di campagna vuoi realizzare?</h4>
            <div className="ins-btn-box">
                <button value={45} className={giorniCampagna == 45 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } onClick={toggleGiorniCampagna}  type="button">45 giorni</button>
                <button value={65} className={giorniCampagna == 65 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } onClick={toggleGiorniCampagna}  type="button">65 giorni</button>
                <button value={90} className={giorniCampagna == 90 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } onClick={toggleGiorniCampagna}  type="button">90 giorni</button>
            </div>
        </div><div className="ins-input-box">
            <h4>Raccontaci del tuo progetto...</h4>
            <input
                name="descProgetto" value={props.inputs.descProgetto || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Com’è nata l’idea, quanti anni fa, aneddoti, etc..." />
        </div><div className="ins-input-box">
            <h4>Obiettivo del progetto</h4>
            <input
                name="obbProgetto" value={props.inputs.obbProgetto || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Perchè le persone dovrebbero aiutarti? Quale scopo raggiungi?" />
        </div><div className="ins-input-box">
            <h4>Il team</h4>
            <input
                name="team" value={props.inputs.team || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Presenta le persone che lavorano al progetto e il loro background" />
        </div><div className="ins-input-box">
            <h4>Roadmap</h4>
            <input  name="titoloRoadStep1" value={props.inputs.titoloRoadStep1 || ""} 
                onChange={props.handleChange} type="text" placeholder="inserisci titolo step" />
            <textarea name="descrRoadStep1" value={props.inputs.descrRoadStep1 || ""} 
                onChange={props.handleChange} placeholder="descrivi lo step della roadmap" />
            <input name="titoloRoadStep2" value={props.inputs.titoloRoadStep2 || ""} 
                onChange={props.handleChange} type="text" placeholder="inserisci titolo step" />
            <textarea name="descrRoadStep2" value={props.inputs.descrRoadStep2 || ""} 
                onChange={props.handleChange} placeholder="descrivi lo step della roadmap" />
        </div>
        
        {(() => {
        if (props.setState != null ) {
          return (
            <div className="add-btn-box">
            <a onClick={props.setState}>
                <img src={PlusGrdIcon} alt="PlusGrdIcon" />
            </a>
        </div>
          )
        } 
      })()}

        </>)
}


const ProgettoHeader = (props) => {
    return(<><div className="ins-progress">
    <div className="ins-circle ins-circle-done">
        <p>Informazioni di base</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-done">
        <p>Questionario</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-active">
        <p>Progetto</p>
    </div>
    <div className="ins-line ins-line-pending"></div>
    <div className="ins-circle ins-circle-pending">
        <p>Prodotto</p>
    </div>
    <div className="ins-line ins-line-pending"></div>
    <div className="ins-circle ins-circle-pending">
        <p>FAQ</p>
    </div>
</div>
    </>)
}

export {Progetto, ProgettoHeader};