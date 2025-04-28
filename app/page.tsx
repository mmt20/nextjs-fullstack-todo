import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodosTable";

export default async function Home() {
  const todos = await getTodoListAction();

  return (
    <main className="container flex flex-col gap-6 p-24">
      <div className="flex justify-end">
        <AddTodoForm />
      </div>

      <TodosTable todos={todos} />
    </main>
  );
}
