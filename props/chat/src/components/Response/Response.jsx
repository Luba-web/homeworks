export const Response = ({ from, text, time }) => {
  return (
    <li>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle"></i> {from.name}
        </span>
        <span className="message-data-time ">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};
