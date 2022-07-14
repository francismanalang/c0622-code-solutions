var $taskList = document.querySelector('.task-list');

function handleTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item');
    console.log('closest task-list-item:', event.target.closest('.task-list-item'));
    event.target.closest('.task-list-item').remove();
  }
}

$taskList.addEventListener('click', handleTaskList);
