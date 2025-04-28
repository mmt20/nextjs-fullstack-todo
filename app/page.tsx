import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="container flex flex-col  items-center p-24">
      <AddTodoForm />
      <TodoTable />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  );
}
