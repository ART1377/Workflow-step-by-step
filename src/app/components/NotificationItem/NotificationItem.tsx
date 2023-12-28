// components/NotificationItem.tsx
import React from 'react';

interface NotificationItemProps {
  title: string;
  description: string;
  timestamp: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  description,
  timestamp,
}) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3m6-3a10 10 0 1 0-16 0h0"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm leading-5 font-medium text-gray-900">{title}</p>
          <p className="mt-1 text-sm leading-5 text-gray-500">{description}</p>
          <p className="mt-1 text-xs leading-4 text-gray-500">{timestamp}</p>
        </div>
      </div>
    </div>
    //    <div>
    //    <NotificationItem
    //      title="Task Assigned"
    //      description="You have been assigned a new task on project XYZ."
    //      timestamp="2 hours ago"
    //    />
    //    {/* Add more NotificationItems as needed */}
    //  </div>
  );
};

export default NotificationItem;
