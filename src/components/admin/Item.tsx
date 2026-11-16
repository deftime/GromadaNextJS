import Link from "next/link";
import clsx from "clsx";
import '@/styles/admin/Item.scss';

type ItemProps = {
  num: number;
  id: string;
  title: string;
  href: string;
  options?: string[];
  isDisabled?: boolean;
};

// Универсальный компонент елементов списка

export function Item({ num, id, title, href, options, isDisabled }: ItemProps) {
  return (
    <Link href={`/admin/${href}`} className={clsx("admin-item", isDisabled && "disabled")}>
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