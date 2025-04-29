"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ITodo } from "@/interfaces";
import TodoTableActions from "./TodoTableActions";

interface TodosTableProps {
  todos: ITodo[];
}

export function TodosTable({ todos }: TodosTableProps) {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map(todo => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge className="bg-green-500 text-white hover:bg-green-600 transition-colors">Completed</Badge>
              ) : (
                <Badge variant="secondary" className="text-gray-700 dark:text-gray-300">
                  Uncompleted
                </Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <TodoTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right ">{!todos.length ? "YOU DONT HAVE TODO YET! " : todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default TodosTable;
