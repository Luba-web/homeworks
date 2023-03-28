import { messages } from '../../utils/utils';
import { Message } from '../Message/Message';
import { Response } from '../Response/Response';
import { Typing } from '../Typing/Typing';

export const MessageHistory = ({ list }) => {
  return (
    <ul>
      {messages.map((item, index) => {
        list.push(item);
        if (item.type === 'message') {
          return (
            <Message
              key={index}
              from={item.from}
              time={item.time}
              text={item.text}
            />
          );
        }
        if (item.type === 'response') {
          return (
            <Response
              key={index}
              from={item.from}
              time={item.time}
              text={item.text}
            />
          );
        }
        if (item.type === 'typing') {
          return (
            <Typing
              key={index}
              from={item.from}
              time={item.time}
              text={item.text}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};
