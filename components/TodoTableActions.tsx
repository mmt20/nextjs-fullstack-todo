"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";

interface TodoTableActionsProps {
  id: string;
}

const TodoTableActions = ({ id }: TodoTableActionsProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteTodoAction({ id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <Button size="icon" variant="outline" className="text-muted-foreground">
        <Pen size={16} />
      </Button>
      <Button size="icon" variant="destructive" onClick={handleDelete} disabled={loading}>
        {loading ? <Loader2 className="animate-spin" size={16} /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodoTableActions;
