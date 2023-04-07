export const Content = ({ item, removeContent }) => {
  return (
    <li className="list">
      <div>{item.content}</div>
      <button onClick={() => removeContent(item.id)}>x</button>
    </li>
  );
};
