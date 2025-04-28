import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodosTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="container flex flex-col  items-center p-24">
      <AddTodoForm />
      <TodoTable todos={todos} />
    </main>
  );
}
