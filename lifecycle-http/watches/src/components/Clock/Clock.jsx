export const Clock = ({ item, removeClock }) => {
  return (
    <li className="list">
      <h3 className="titleClock">{item.title}</h3>
      <button className="block-btn" onClick={() => removeClock(item.id)}>
        x
      </button>
      <div>{item.time}</div>
    </li>
  );
};
