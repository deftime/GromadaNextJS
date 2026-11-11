import { FeedbackType, TeamMemberType } from "@/types/firebase-data";

// Конструктор-класс, который создает объект Фидбека
export class FeObject implements FeedbackType {
  name: string;
  phone: string;
  email: string;
  message: string;
  answered: string = '';
  answer: string = '';
  readonly date: string = this.getFormattedDate();
  readonly id: string = this.genId();

  constructor(name: string, phone: string = '', email: string, text: string) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.message = text;
  }

  private getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  }

  private genId() {
    return `${Math.floor(Math.random() * 100000)}`;
  }

}

// Конструктор-класс, который создает объект Тиммейта
export class MemberObject implements TeamMemberType{
  name: string;
  status: string;
  desc: string;
  photo: string;
  order: number;
  active: boolean;
  readonly id: string = this.genId();

  constructor(name: string, status: string, desc: string, photo: string, order: number, active: boolean) {
    this.name = name;
    this.status = status;
    this.desc = desc;
    this.photo = photo;
    this.order = order;
    this.active = active;
  }

  private genId() {
    return `${Math.floor(Math.random() * 100000)}`;
  }

}