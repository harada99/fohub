export const L10_ADD_TODO   = 'L10_ADD_TODO'
export const L10_TOGGLE_TODO = 'L10_TOGGLE_TODO'

// Action Createors
export function addTodo(text) {
  console.info("call:L10Action.addTodo",text);
  return {
    type: L10_ADD_TODO,
    text
  }
}
export function toggleTodo(index) {
  console.info("call:L10Action.toggleTodo",index);
  return {
    type: L10_TOGGLE_TODO,
    index
  }
}
