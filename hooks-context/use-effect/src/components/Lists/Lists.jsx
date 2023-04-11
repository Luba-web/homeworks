export const Lists = ({ dataUsers, onOpen }) => {
  return (
    <ul className="lists">
      {dataUsers.map((i) => {
        return (
          <li className="list" key={i.id} onClick={() => onOpen(i.id)}>
            {i.name}
          </li>
        );
      })}
    </ul>
  );
};
