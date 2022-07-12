var modalToggle = true;
var surveyToggle = true;

var modalButton = document.querySelector('.button');
var surveyButton = document.querySelector('.button2');
var $container = document.querySelector('.container');
var $survey = document.querySelector('.survey');

function openModalButton(event) {
  if (modalToggle) {
    $container.className = 'container dark-background';
    $survey.className = 'survey text-align-center';
    modalButton.className = 'button button1-dark';
  }
}

function noButton(event) {
  if (surveyToggle) {
    $container.className = 'container';
    $survey.className = 'survey text-align-center display-none';
    modalButton.className = 'button button1-light';
  }
}

modalButton.addEventListener('click', openModalButton);
surveyButton.addEventListener('click', noButton);
