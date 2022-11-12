import type { NextPage } from "next/types";
import { Button } from "../../components/Button";
import { Todo } from "../../components/Todo";
import { trpc } from "../../utils/trpc";

export const Simple: NextPage = () => {
  const todoArrayQuery = trpc.todo.getAllByUser.useQuery();
  const createRandomTodoMutation = trpc.todo.createRandom.useMutation({
    onSuccess: () => todoArrayQuery.refetch(),
  });

  if (!todoArrayQuery.data) {
    return <>Loading...</>;
  }

  return (
    <main className="flex h-screen flex-col gap-2 p-2">
      <section>UserId:</section>
      <section className="overflow-auto grow">
          {todoArrayQuery.data.map((todo) => (
            <Todo.TodoLine key={todo.id}>
              <Todo.TodoContentEditable todo={todo} onDescriptionChanged={console.log} onTitleChanged={console.log}/>
            </Todo.TodoLine>
          ))}
      </section>
      <section>
        <Button
          onClick={() => createRandomTodoMutation.mutate()}
        >
          Create random todo
        </Button>
      </section>
    </main>
  );
};
