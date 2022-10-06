import React from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";

const Questionario = (props) => {
    return(<><div className="ins-input-box">
            <h4>Domanda 1</h4>
            <textarea  value={props.inputs.domanda1 || ""} 
                onChange={props.handleChange} name="domanda1" placeholder="inserisci la risposta" />
           
            <h4>Domanda 2</h4>
            <textarea value={props.inputs.domanda2 || ""} 
                onChange={props.handleChange} name="domanda2" placeholder="inserisci la risposta" />
            
            <h4>Domanda 3</h4>
            <textarea value={props.inputs.domanda3 || ""} 
                onChange={props.handleChange} name="domanda3" placeholder="inserisci la risposta" />

            <h4>Domanda 4</h4>
            <textarea value={props.inputs.domanda4 || ""} 
                onChange={props.handleChange} name="domanda4" placeholder="inserisci la risposta" />
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


const QuestionarioHeader = (props) => {
    return(<><div className="ins-progress">
        <div className="ins-circle ins-circle-done">
            <p>Informazioni di base</p>
        </div>
        <div className="ins-line ins-line-done"></div>
        <div className="ins-circle ins-circle-active">
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

export {Questionario, QuestionarioHeader};
