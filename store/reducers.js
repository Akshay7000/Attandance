import {ADD, SUB, OUT} from './actionType';
import moment from 'moment';

const initialState = {
  exitDate: [''],
  date: [''],
  time: [''],
  buttonState: false,
  buttonState2: true,
};
// const initialStateSignUp = [
//   {
//     id: '',
//     email: '',
//     username: '',
//     password: '',
//     userToken: '',
//   },
// ];

export const mainReducer = (
  state = initialState,
  action,
  initialStateSignUp,
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        date: [...state.date.concat(moment().format('hh:mm A'))],
        time: [...state.time.concat(moment().format('DD/MM/YYYY'))],
        buttonState: !initialState.buttonState,
        buttonState2: !initialState.buttonState2,
      };
    case SUB:
      return {
        ...state,
        exitDate: [...state.exitDate.concat(moment().format('hh:mm A'))],
        buttonState: initialState.buttonState,
        buttonState2: initialState.buttonState2,
      };
    case OUT:
      return {
        ...initialStateSignUp,
        exitDate: [''],
      };
    default:
      return state;
  }
};
