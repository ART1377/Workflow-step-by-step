// Product types
export interface Product {
  id: string;
  productName: string;
  productDescription: string;
  steps: Step[];
}

export interface Step {
  person: Person;
  state: string;
  step: number;
  file:File|null|string;
}
export interface Person {
  personName: string;
  personId: string;
}


// Notification types
export type NotificationSender = {
  senderName: string;
  senderId: string;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  sender: NotificationSender;
  timestamp: string;
  read: boolean;
};

export type Notifications = {
  notifications: Notification[];
};

// SidebarItme type
export type SidebarItme = {
  title: string;
  path: string;
  icon: React.ReactNode;
}