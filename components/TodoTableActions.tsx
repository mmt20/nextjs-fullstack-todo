"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader2, Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
const TodoTableActions = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button size={"icon"}>
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id });
          setLoading(false);
        }}
      >
        {loading ? <Loader2 className="animate-spin" size={16} /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableActions;
