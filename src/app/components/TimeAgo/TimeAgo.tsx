import { formatDistanceToNow } from 'date-fns';
import { parseISO } from 'date-fns';

interface TimeAgoProps {
  timestamp: string; // Assuming the timestamp is in the format '2024-01-01T16:30:00Z'
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  
  const parsedTimestamp = parseISO(timestamp);
  const timeAgo = formatDistanceToNow(parsedTimestamp, { addSuffix: true });

  
  const numericalTimeAgo = timeAgo.match(/\d+/);

  return `${numericalTimeAgo} hours ago`
};

export default TimeAgo;
