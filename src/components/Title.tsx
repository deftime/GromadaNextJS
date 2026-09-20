import cls from '@/styles/modules/title.module.scss';

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  sup?: string;
  title?: string;
}

export function Title({ as: Tag = 'h1', sup, title }: TitleProps) {
  return (
    <>

      {sup && <div className="text-xs text-[#5157A3] text-center font-semibold tracking-[0.22em] uppercase mb-6">
        {sup}
      </div>}

      {title && <Tag className={cls.title}>
        {title}
      </Tag>}

      {title && <div className="mx-auto mt-8 mb-12 bg-[#FFBF37]"
            style={{ width: 56, height: 2 }}
      />}

    </>
  )
}