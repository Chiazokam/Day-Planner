import React, { useReducer } from 'react';

const initialValues = {

}

const { Provider} = React.createContext(initialValues);

// const { Provider } = store;

// const StateProvider = ( { children } ) => {
//   const [state, dispatch] = useReducer((state, action) => {
//     switch(action.type) {
//       case 'action description':
//         const newState = // do something with the action
//         return newState;
//       default:
//         throw new Error();
//     };
//   }, initialState);

//   return (<Provider value={{ state, dispatch }}>
//     {children}
//     </Provider>);
// };

// export { store, StateProvider }