import React from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";

const InfBase = (props) => {
    return(<><div className="ins-input-box">
            <h4>Nome dell'azienda</h4>
            <input type="text"  name="nomeAzienda" value={props.inputs.nomeAzienda || ""} 
        onChange={props.handleChange}  placeholder="inserisci il nome" />
        </div><div className="ins-input-box">
            <h4>Settote aziendale </h4>
            <select name="settore" onChange={props.handleChange} required >
                 <option disabled selected value>seleziona un opzione </option>
                <option value="tipo1">tipo 1</option>
                <option value="tipo2">tipo 2</option>
                <option value="tipo3">tipo 3</option>
                <option value="tipo4">tipo 4</option>
            </select>
        </div><div className="ins-input-box">
            <h4>Logo</h4>
            <input
            name="logoAzienda" value={props.inputs.logoAzienda || ""} 
            onChange={props.handleChange}
                type="file" required
                />
        </div><div className="ins-input-box">
            <h4>Numero P.IVA (favoltativo)</h4>
            <input
                name="pIva" value={props.inputs.pIva || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Inserisci numero partita IVA" />
        </div><div className="ins-input-box">
            <h4>Sito Web</h4>
            <input
                name="sito" value={props.inputs.sito || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Inserisci link " />
        </div>
        <div className="ins-input-box">
            <h4>Social Media </h4>
            <input
                name="socialMedia" value={props.inputs.socialMedia || ""} 
                onChange={props.handleChange}
                type="text"
                placeholder="Inserisci link eventuali Social Media" />
        </div>
        <div className="ins-input-box">
            <h4>documentazione aziendale (pitch, business plan, relazioni coi partner)</h4>
            <input
                name="documentazione" value={props.inputs.documentazione || ""} 
                onChange={props.handleChange}
                type="file" placeholder="trascina il o
                clicca per inserirlo
                (.pdf)"
                required
                />
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


const InfBaseHeader = (props) => {
    return(<><div className="ins-progress">
        <div className="ins-circle ins-circle-active">
            <p>Informazioni di base</p>
        </div>
        <div className="ins-line ins-line-pending"></div>
        <div className="ins-circle ins-circle-pending">
            <p>Questionario</p>
        </div>
        <div className="ins-line ins-line-pending"></div>
        <div className="ins-circle ins-circle-pending">
            <p>Progetto</p>
        </div>
        <div className="ins-line ins-line-pending"></div>
        <div className="ins-circle ins-circle-pending">
            <p>Prodotto</p>
        </div>
        <div className="ins-line ins-line-pending"></div>
        <div className="ins-circle ins-circle-pending">
            <p>FAQ</p>
        </div></div>
    </>)
}

export {InfBase, InfBaseHeader};
