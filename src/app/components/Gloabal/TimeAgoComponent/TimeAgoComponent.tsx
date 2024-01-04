import React from "react";
import TimeAgo from "react-timeago";

type Props = {
  timestamp: string; // Assuming the timestamp is in the format '2024-01-01T16:30:00Z'
};

const TimeAgoComponent = ({ timestamp }: Props) => {
  return <TimeAgo date={timestamp} />;
};

export default TimeAgoComponent;
