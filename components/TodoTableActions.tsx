"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodoTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteTodoAction({ id: todo.id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <EditTodoForm todo={todo} />
      <Button size="icon" variant="destructive" className="cursor-pointer" onClick={handleDelete} disabled={loading}>
        {loading ? <Loader2 className="animate-spin " size={16} /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodoTableActions;
