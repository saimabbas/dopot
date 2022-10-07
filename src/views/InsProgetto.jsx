import React,  { useState } from "react";
import "../styles/globals.css";
import "../styles/ins-progetto.css";
import ProfileIconArrowLeft from "../assets/img/profile-icon-arrow-left.png";
import genproj from "../utils/genproj";

import {InfBase, InfBaseHeader} from "../components/forms/InfBase";
import { Questionario, QuestionarioHeader } from "../components/forms/Questionario";
import { Progetto, ProgettoHeader } from "../components/forms/Progetto";
import { Prodotto, ProdottoHeader } from "../components/forms/Prodotto";
import { Faq, FaqHeader } from "../components/forms/Faq";

const InsProgetto = () => {
  var step = [];
  const [inputs, setInputs] = useState({});
  const [progressionStep, setprogressionStep] = useState(0);
  
  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    if (event.target.files != null) {
      setInputs(values => ({...values, [name+"ListFiles"]: event.target.files}))
    }
    
    setInputs(values => ({...values, [name]: value}))
    

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    genproj(inputs);
  }
  
  const renderCurrentSelection = () => {
    switch (progressionStep) {
      
        case 0:
          step[0]=<InfBase inputs={inputs} handleChange={handleChange} setState={incrementStep} ></InfBase>;
            return step;
        case 1:
          step[0]=<InfBase inputs={inputs} handleChange={handleChange}></InfBase>;
          step[1]=<Questionario inputs={inputs} handleChange={handleChange} setState={incrementStep}></Questionario>;
            return step;

        case 2:
          step[0]=<InfBase inputs={inputs} handleChange={handleChange}></InfBase>;
          step[1]=<Questionario inputs={inputs} handleChange={handleChange}></Questionario>;
          step[2]=<Progetto inputs={inputs} handleChange={handleChange} setState={incrementStep}></Progetto>;
            return step;
        
        case 3:
          step[0]=<InfBase inputs={inputs} handleChange={handleChange}></InfBase>;
          step[1]=<Questionario inputs={inputs} handleChange={handleChange}></Questionario>;
          step[2]=<Progetto inputs={inputs} handleChange={handleChange}></Progetto>;
          step[3]=<Prodotto inputs={inputs} handleChange={handleChange} setState={incrementStep}></Prodotto>;
            return step;
        case 4:
          step[0]=<InfBase inputs={inputs} handleChange={handleChange}></InfBase>;
          step[1]=<Questionario inputs={inputs} handleChange={handleChange}></Questionario>;
          step[2]=<Progetto inputs={inputs} handleChange={handleChange}></Progetto>;
          step[3]=<Prodotto inputs={inputs} handleChange={handleChange} ></Prodotto>;
          step[4]=<Faq inputs={inputs} handleChange={handleChange}></Faq>;

            return step;
      
        default:
            return null;
    }
  };

  const renderCurrentSelectionHeader = () => {
    switch (progressionStep) {
        case 0:
            return <InfBaseHeader ></InfBaseHeader>;
        case 1:
            return <QuestionarioHeader> </QuestionarioHeader>;
        case 2:
          return <ProgettoHeader></ProgettoHeader>;

        case 3:
          return <ProdottoHeader></ProdottoHeader>;

        case 4:
          return <FaqHeader></FaqHeader>;
        default:
            return null;
    }
  };

  const incrementStep = () => {
    setprogressionStep(progressionStep + 1);
  };

  
  return (
    <div className="app">
      <main className="ins-progetto-page">
        <section className="ins-progetto-content">
          <div className="box">
            <div className="ins-head">
              <a href="#">
                <img src={ProfileIconArrowLeft} alt="ProfileIconArrowLeft" />
              </a>
              <h2>Inserisci il tuo progetto </h2>
            </div>
            {renderCurrentSelectionHeader()}
            <form onSubmit={handleSubmit}>
            {renderCurrentSelection()}
            </form>            
          </div>
        </section>
      </main>
    </div>
  );
};



export default InsProgetto;
