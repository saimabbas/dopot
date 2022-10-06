import React from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";

const Faq= (props) => {
    return(<>
    <div className="ins-input-box">
        <h4>Quali sono le domande più frequenti che potresti ricevere?</h4>
        <input name="titoloDomanda1" value={props.inputs.titoloDomanda1 || ""} 
                onChange={props.handleChange} type="text" placeholder="Scrivi la prima domanda" />
        <textarea name="rispostaDomanda1" value={props.inputs.rispostaDomanda1 || ""} 
                onChange={props.handleChange} placeholder="Rispondi alla domanda" />
        <input name="titoloDomanda2" value={props.inputs.titoloDomanda2 || ""} 
                onChange={props.handleChange} type="text" placeholder="Scrivi la seconda domanda" />
        <textarea name="rispostaDomanda2" value={props.inputs.rispostaDomanda2 || ""} 
                onChange={props.handleChange} placeholder="Rispondi alla domanda" />
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

        <div className="proceed-btn-box">
        <input className="grd-btn dopot-btn-lg" type="submit" />
        </div></>)
}


const FaqHeader = (props) => {
    return(<><div className="ins-progress">
    <div className="ins-circle ins-circle-done">
        <p>Informazioni di base</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-done">
        <p>Questionario</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-done">
        <p>Progetto</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-done">
        <p>Prodotto</p>
    </div>
    <div className="ins-line ins-line-done"></div>
    <div className="ins-circle ins-circle-active">
        <p>FAQ</p>
    </div>
</div>
    </>)
}

export {Faq, FaqHeader};