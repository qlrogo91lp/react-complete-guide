import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  
  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
