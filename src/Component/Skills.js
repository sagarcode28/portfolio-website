import js from '../Images/icons8-javascript-50.png';
import react from '../Images/icons8-react-native-50.png';
import html from '../Images/icons8-html-50.png';
import css from '../Images/icons8-css-50.png';
import node from '../Images/icons8-node-js-50.png';
import express from '../Images/icons8-express-js-50.png';
import mongo from '../Images/icons8-mongodb-a-cross-platform-document-oriented-database-program-50.png';
import figma from '../Images/icons8-figma-50.png';
import cplusplus from '../Images/icons8-c-50.png';
import firebase from '../Images/icons8-firebase-50.png';

export default function Skills() {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <div className="links">
                <a href='https://html.com/' rel="external" ><img src={html} alt="html" /></a>
                <a href='https://www.css3.com/' rel="external" ><img src={css} alt="css" /></a>
                <a href='https://www.javascript.com/' rel="external" ><img src={js} alt="javascript" /></a>
                <a href='https://nodejs.org/en' rel="external" ><img src={node} alt="node js" /></a>
                <a href='https://expressjs.com/' rel="external" ><img src={express} alt="express js" /></a>
                <a href='https://www.mongodb.com/' rel="external" ><img src={mongo} alt="mongo-db" /></a>
                <a href='https://react.dev/' rel="external" ><img src={react} alt="react js" /></a>
                <a href='https://firebase.google.com/' rel="external" ><img src={firebase} alt="firebase" /></a>
                <a href='https://www.figma.com/' rel="external" ><img src={figma} alt="figma" /></a>
                <a href='https://cplusplus.com/doc/tutorial/' rel="external" ><img src={cplusplus} alt="c++" /></a>
            </div>
        </div>
    );
}