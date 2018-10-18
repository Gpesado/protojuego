import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import './style.css'
import { Button} from 'reactstrap';
import { ROUTES } from 'constants/routes';
import 'react-toastify/dist/ReactToastify.css';
import history from 'history/history';


export default class CarrerasComponent extends Component {
  
  render() {
    return (
      <div>
          <h1>Carreras y Estrategias de los Trabajos Informáticos</h1> 
            <iframe title="Carreras" scrolling="no" src="https://docs.google.com/a/cas.austral.edu.ar/presentation/d/e/2PACX-1vSx84lOHOF1TO-r-aXDLRLa6__ZDzxmlC4eydywdAqHdh7ZnpTrYMfKtHpwddvSQENwP09OB-T9XQii/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        <br/>
        <div className="quiz-button">
          <Button onClick={() =>  history.push(ROUTES.CARRERAS_QUIZ)}>Realizar QUIZ</Button>
        </div>
      </div>
    );
  }
}