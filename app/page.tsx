import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import Navbar from "@/components/Navbar";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  const todos = await getUserTodoListAction({ userId });

  return (
    <>
      <Navbar />
      <main className="container flex flex-col gap-6 px-24 py-6">
        <div className="flex justify-end">
          <AddTodoForm userId={userId} />
        </div>

        <TodosTable todos={todos} />
      </main>
    </>
  );
}
