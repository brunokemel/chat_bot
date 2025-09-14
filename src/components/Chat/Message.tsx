import React from "react";
import { MessageType } from "../../types";
import { Message, MessageBubble, MessageInfo } from "./Styled";
import { formatTime } from "../../ultils/date";

type MessageItemProps = {
  data: MessageType;
};

const MessageItem: React.FC<MessageItemProps> = ({ data }) => (
  <Message isOwn={data.isOwn}>
    <div>
      <MessageBubble isOwn={data.isOwn}>{data.text}</MessageBubble>
      <MessageInfo>
        {data.username} • {formatTime(data.timestamp)}
      </MessageInfo>
    </div>
  </Message>
);

export default MessageItem;