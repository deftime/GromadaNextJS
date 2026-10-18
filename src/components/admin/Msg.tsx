import clsx from "clsx";
import '@/styles/admin/Msg.scss';

type MsgProps = {
  msg: string;
  status: 'error' | 'success';
}

export function Msg({ msg, status = 'success' }: MsgProps) {
  return (
    <div className={clsx("admin-msg", status)}>{msg}</div>
  );
}