import '../app/App.css';

export const Step = ({ day, deleteStep }) => {
  return (
    <li className="list">
      <div>{day.date.split('-').reverse().join('.')}</div>
      <div>{day.distance}</div>

      <div className="block-btn">
        <div onClick={() => deleteStep(day.id)}>x</div>
      </div>
    </li>
  );
};
