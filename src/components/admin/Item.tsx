import Link from "next/link";
import '@/styles/admin/Item.scss';

type ItemProps = {
  num: number;
  id: string;
  title: string;
  href: string;
};

export function Item({ num, id, title, href }: ItemProps) {
  return (
    <Link href={`/admin/${href}`} className="admin-item">
      <div className="num">{num}.</div>
      <div className="title">{title}</div>
      <div className="side-zone">
        <div className="id">{id}</div>
      </div>
    </Link>
  );
}