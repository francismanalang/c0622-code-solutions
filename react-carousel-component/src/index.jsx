import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const imagesURL = ['https://cellularnews.com/wp-content/uploads/2020/03/17-Summer-Sky-Wallpaper-325x485.jpg',
  'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbiUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&w=1000&q=80',
  'https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/79/77/67/7977678c-89be-76ff-b9f3-cdc560170cb6/source/512x512bb.jpg',
  'https://i.scdn.co/image/ab6761610000e5ebe63a5a473aeb74902087c522',
  'https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTM4MjA0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images={imagesURL}/>);
