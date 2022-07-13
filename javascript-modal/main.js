var modalButton = document.querySelector('.button');
var surveyButton = document.querySelector('.button2');
var $survey = document.querySelector('.survey');
var $body = document.querySelector('.body');

function openModalButton(event) {
  if (modalButton) {
    $survey.className = 'survey text-align-center survey-shape';
    modalButton.className = 'button button1-light';
    $body.className = 'body dark-background';
  }
}

function noButton(event) {
  if (surveyButton) {
    $survey.className = 'survey text-align-center display-none';
    $body.className = 'body';
  }
}

modalButton.addEventListener('click', openModalButton);
surveyButton.addEventListener('click', noButton);
