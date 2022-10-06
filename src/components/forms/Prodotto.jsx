import React from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";

const Prodotto= (props) => {
    return(<><div className="ins-input-box">
            <h4>Nome prodotto</h4>
            <input type="text" placeholder="inserisci il nome" />
        </div><div className="ins-input-box">
            <h4>Descrizione</h4>
            <input
                type="text"
                placeholder="descrivi il tuo prodotto" />
        </div><div className="ins-input-box">
            <h4>Specigiche tecniche </h4>
            <input
                type="text"
                placeholder="caratteristiche" />
        </div><div className="ins-input-box">
            <h4>Supply </h4>
            <input
                type="text"
                placeholder="quanti esemplari saranno disponibili" />
        </div>

        <div className="ins-input-box">
            <h4>Foto del prodotto</h4>
            <input
                type="file" placeholder="trascina il o
                trascina il filele o
                clicca per inserirlo
                (.jpeg .png))"
                multiple
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


const ProdottoHeader = (props) => {
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
    <div className="ins-circle ins-circle-active">
        <p>Prodotto</p>
    </div>
    <div className="ins-line ins-line-pending"></div>
    <div className="ins-circle ins-circle-pending">
        <p>FAQ</p>
    </div>
</div>
    </>)
}

export {Prodotto, ProdottoHeader};