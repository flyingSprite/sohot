export default function counter(state = 0, action) {
  console.log('====> ' + action.type);
  return state;
};
