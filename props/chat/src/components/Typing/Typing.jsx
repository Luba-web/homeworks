export const Typing = ({ from, time }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-class">
          <i className="fa fa-circle online"></i> {from.class}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
    </li>
  );
};
