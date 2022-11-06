import type { NextPage } from "next/types";
import Todo from "../../components/Todo";
import { trpc } from "../../utils/trpc";

const Simple: NextPage = () => {
  const todoArrayQuery = trpc.todo.getAllByUser.useQuery();
  const createRandomTodoMutation = trpc.todo.createRandom.useMutation({
    onSuccess: () => todoArrayQuery.refetch(),
  });

  if (!todoArrayQuery.data) {
    return <>Loading...</>;
  }

  return (
    <>
      <button
        onClick={() => createRandomTodoMutation.mutate()}
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        Create random todo
      </button>
      {todoArrayQuery.data.map((todo) => (
        <Todo.TodoLine key={todo.id}>
          <Todo.TodoContent {...todo} />
        </Todo.TodoLine>
      ))}
    </>
  );
};

export default Simple;
