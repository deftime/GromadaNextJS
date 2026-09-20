import cls from '@/styles/modules/bigNumber.module.scss';

type BigNumberProps = {
  value: string,
  label: string,
}

export function BigNumber({ value, label }: BigNumberProps) {
  return (
    <div className="text-center">
      <div className={cls.num}>
        {value}
      </div>
      <div className="mt-2 text-xs text-[#241102] opacity-50 tracking-widest uppercase">
        {label}
      </div>
      <div className="mx-auto mt-3 bg-[#FFBF37]"
        style={{ width: 24, height: 1 }}
      />
    </div>
  )
}