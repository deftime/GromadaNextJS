export interface FeedbackType {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  answered: string;
  answer: string;
  date: string;
}

export interface TeamMemberType {
  id: string;
  name: string;
  status: string;
  desc: string;
  photo: string;
  order: number;
  active: boolean;
}