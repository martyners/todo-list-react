import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import ContainerHeader from "./ContainerHeader";
import ContainerSubHeader from "./ContainerSubHeader";

const tasks = [
   { id: 1, content: "lalala", done: false },
   { id: 2, content: "dsfsdfsdf", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
      <header>
        <ContainerHeader title="Lista zadań" />
        <ContainerSubHeader title="Dodaj nowe zadanie" />
      </header>
      <main>
        <Form />
        <div className="container__buttons">
          <ContainerSubHeader title="Lista zadań" />

          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </div>
        <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </main>

    </div>
  );
}

export default App;
