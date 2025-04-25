import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";

export default function Home() {
  //const todos = await getTodoListAction();

  return (
    <main className="container flex flex-col  items-center p-24">
      <AddTodoForm />
      {/* {todos.map(todo => (
        <div key={todo.id} className="flex items-center justify-between p-4 border-b w-5xl">
          <div>
            <h2 className="text-lg font-semibold">{todo.title}</h2>
            <p>{todo.body}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </div>
      ))} */}
    </main>
  );
}
