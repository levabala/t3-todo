import type { Todo as TodoModel } from "@prisma/client";
import { useLayoutEffect, useState } from "react";

const TodoContent: React.FC<{ todo: TodoModel }> = ({
  todo: { title, description },
}) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    {description && <p>{description}</p>}
  </div>
);

const TodoContentEditable: React.FC<{
  todo: TodoModel;
  onTitleChanged: (value: string) => void;
  onDescriptionChanged: (value: string) => void;
}> = ({
  todo: { title: titleExternal, description: descriptionExternal },
  onTitleChanged,
  onDescriptionChanged,
}) => {
  const [title, setTitle] = useState(titleExternal);
  const [description, setDescription] = useState(descriptionExternal);

  useLayoutEffect(() => {
    setTitle(titleExternal);
  }, [titleExternal]);

  useLayoutEffect(() => {
    setDescription(descriptionExternal);
  }, [descriptionExternal]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    onTitleChanged(val);
  };
  const handleDescriptionChange = (val: string) => {
    setDescription(val);
    onDescriptionChanged(val);
  };

  return (
    <div>
      <input
        className="w-full border-none bg-transparent text-lg font-semibold outline-none"
        value={title}
        onInput={(e) => handleTitleChange((e.target as HTMLInputElement).value)}
      />
      {description && (
        <textarea
          className="w-full resize-none border-none bg-transparent outline-none"
          onInput={(e) => {
            const node = e.target as HTMLTextAreaElement;
            node.style.height = "auto";
            node.style.height = `${node.scrollHeight}px`;

            handleDescriptionChange((e.target as HTMLInputElement).value);
          }}
          value={description}
        />
      )}
    </div>
  );
};

const TodoLine: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="py-1">{children}</div>
);

const Todo = {
  TodoContent,
  TodoContentEditable,
  TodoLine,
};

export default Todo;
