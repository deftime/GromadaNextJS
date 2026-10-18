import Link from "next/link";
import '@/styles/admin/Item.scss';

type ItemProps = {
  num: number;
  id: string;
  title: string;
  href: string;
  options?: string[];
};

// Универсальный компонент елементов списка

export function Item({ num, id, title, href, options }: ItemProps) {
  return (
    <Link href={`/admin/${href}`} className="admin-item">
      <div className="num">{num}.</div>
      <div className="title">{title}</div>
      <div className="side-zone">
        {options && options.map((option) => (
          <div key={option} className="option">{option}</div>
        ))}
        <div className="id">{id}</div>
      </div>
    </Link>
  );
}