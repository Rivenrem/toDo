enum ErrorMessages {
  emptyInput = "You can't add empty task",
  tooLongInput = 'Task is too long',
  duplicate = 'This task already exist',
}

enum Numbers {
  maxInputLength = 120,
}

enum TaskFields {
  value = 'value',
  done = 'done',
}

enum Actions {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO_ITEM = 'ADD_TODO_ITEM',
  REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM',
  EDIT_TODO_ITEM = 'EDIT_TODO_ITEM',
  TOGGLE_DONE = 'TOGGLE_DONE',
}

export default { ErrorMessages, Numbers, TaskFields, Actions };
