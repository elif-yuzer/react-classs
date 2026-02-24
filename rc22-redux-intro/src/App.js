import React from "react";
import { store } from "./redux/store";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";
import Todo from "./components/todo/Todo";

import "./App.css";

/* burdakı store reduxtatakı store topladıgımz reducerları tum projeye duyurmak ıcın yazdık */
const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
         <Counter /> 
      {/*   <Todo/> */}
      </Provider>
    </div>
  );
};

export default App;
