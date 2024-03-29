import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const topics = [
  { name: 'HyperText Markup Language', text: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.It can be assisted by technologies such as Cascading Style Sheets(CSS) and scripting languages such as JavaScript.' },
  { name: 'Cascading Style Sheets', text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
  { name: 'JavaScript', text: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' }
];

const element = <Accordion topicsArray={topics} />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
