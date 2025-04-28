"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Pen } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { todoFormSchema, TodoFormValues } from "@/schema";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ITodo } from "@/interfaces";
import { updateTodoAction } from "@/actions/todo.actions";

const EditTodoForm = ({ todo }: { todo: ITodo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const defaultValues: TodoFormValues = {
    title: todo.title,
    body: todo.body as string,
    completed: todo.completed,
  };

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async ({ title, body, completed }: TodoFormValues) => {
    try {
      setIsLoading(true);

      await updateTodoAction({ id: todo.id, title, body: body as string, completed: completed ?? false });
      form.reset(defaultValues);
      setDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              setDialogOpen(true);
            }}
          >
            <Pen size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit This Todo</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Go to gym" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about this task"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Write a short description about your next todo.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="completed"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <div className=" cursor-pointer flex items-center gap-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="m-0  font-medium">Completed</FormLabel>
                      </div>
                      <FormDescription>
                        Your to-do item will be uncompleted by default unless you check it.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button disabled={isLoading} type="submit" className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={16} />
                      Saving...
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditTodoForm;
