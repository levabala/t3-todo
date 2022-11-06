import type { Todo as TodoModel } from "@prisma/client";

const TodoContent: React.FC<TodoModel> = ({ title, description }) => (
  <div>
    <h3 className='text-lg font-semibold'>{title}</h3>
    {description && <p>{description}</p>}
  </div>
);

const TodoLine: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className='py-1'>{children}</div>
);

const Todo = {
  TodoContent,
  TodoLine,
};

export default Todo;
