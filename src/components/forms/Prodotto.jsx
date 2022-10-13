import React, { useState }  from "react";
import PlusGrdIcon from "../../assets/img/plus-grd-icon.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Prodotto= (props) => {
    const [numeroProdotti, setnumeroProdotti] = useState(1);

    function toggleNumeroProdotti(event) {
        setnumeroProdotti(event.target.value);
        const fevent = {
            target: {name: "numeroProdotti", value: event.target.value},
        };
        props.handleChange(fevent);
    }

    return(<>
    <div class="ins-input-box">
            <h4>Quanti prodotti offri?</h4>
            <div className="ins-btn-box">
                <button value={1} onClick={toggleNumeroProdotti} className={numeroProdotti == 1 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg"}  type="button">
                    1
                </button>
                <button value={2} onClick={toggleNumeroProdotti} className={numeroProdotti == 2 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } type="button">
                    2
                </button>
                <button value={3} onClick={toggleNumeroProdotti} className={numeroProdotti == 3 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg"}  type="button">
                    3
                </button>
                <button value={4} onClick={toggleNumeroProdotti} className={numeroProdotti == 4 ? "grd-btn dopot-btn-lg" : "purple-border-btn dopot-btn-lg" } type="button">
                    4
                </button>
        </div>
        <br />
        <br />
        <Tabs>
        <TabList >
        { numeroProdotti>=1 && <Tab >Prodotto 1</Tab>}
        { numeroProdotti>=2 && <Tab >Prodotto 2</Tab>}
        { numeroProdotti>=3 && <Tab >Prodotto 3</Tab>}
        { numeroProdotti>=4 && <Tab >Prodotto 4</Tab>}
        </TabList>
        <TabPanel>
            <SchedaProdotto nProdotto={1} inputs={props.inputs} handleChange={props.handleChange} setState={props.incrementStep}></SchedaProdotto>
        </TabPanel>
        <TabPanel>
            <SchedaProdotto nProdotto={2} inputs={props.inputs} handleChange={props.handleChange} setState={props.incrementStep}></SchedaProdotto>
        </TabPanel>
        <TabPanel>
            <SchedaProdotto nProdotto={3} inputs={props.inputs} handleChange={props.handleChange} setState={props.incrementStep}></SchedaProdotto>
        </TabPanel>
        <TabPanel>
            <SchedaProdotto nProdotto={4} inputs={props.inputs} handleChange={props.handleChange} setState={props.incrementStep}></SchedaProdotto>
        </TabPanel>
        </Tabs>
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

const SchedaProdotto = (props) => {
    return(<><div className="ins-input-box">
    <h4>Nome prodotto n {props.nProdotto}</h4>
    <input name={"nomeProdotto" + props.nProdotto} value={props.inputs["nomeProdotto" + props.nProdotto]   || ""} 
onChange={props.handleChange} type="text" placeholder="inserisci il nome" required />
</div><div className="ins-input-box">
    <h4>Descrizione</h4>
    <input
        type="text"
        placeholder="descrivi il tuo prodotto" required/>
</div><div className="ins-input-box">
    <h4>Specigiche tecniche </h4>
    <input
        name={"specTecnica" + props.nProdotto} value={props.inputs["specTecnica" + props.nProdotto]}
        onChange={props.handleChange}
        type="text"
        placeholder="caratteristiche" required/>
</div>
<div className="ins-input-box">
    <h4>Prezzo </h4>
    <input
        name={"prezzo" + props.nProdotto} value={props.inputs["prezzo" + props.nProdotto]}
        onChange={props.handleChange}
        type="text"
        placeholder="Il costo del prodotto" required/>
</div>
<div className="ins-input-box">
    <h4>Supply </h4>
    <input
        name={"supply" + props.nProdotto} value={props.inputs["supply" + props.nProdotto]}
        onChange={props.handleChange}
        type="text"
        placeholder="quanti esemplari saranno disponibili" required />
</div>

<div className="ins-input-box">
    <h4>Foto del prodotto</h4>
    <input
       name={"fotoProdotto" + props.nProdotto} value={props.inputs["fotoProdotto" + props.nProdotto]}
        onChange={props.handleChange}
        type="file" placeholder="trascina il o
        trascina il filele o
        clicca per inserirlo
        (.jpeg .png))"
        multiple
        required
        />
</div>
    </>)
}

function convertToVariable(str){
    return eval("var "+ str +" = " + "null");
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