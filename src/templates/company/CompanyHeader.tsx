import { ReactNode } from '@mdx-js/react/lib';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface CompanyHeaderProps extends BaseComponentProps {
  title?: ReactNode;
  description: ReactNode;
  bgImage?: string;
}

export default function CompanyHeader({
  title,
  description,
  bgImage,
  className,
}: CompanyHeaderProps) {
  return (
    <header
      className={cls`relative flex h-[560px] w-full items-center justify-center bg-cover py-16 ${bgImage} ${className}`}>
      <div className='mt-24 flex w-full max-w-page-full items-center space-x-8 px-8'>
        {/* info */}
        <section>
          {title}
          <div className={'mt-[40px] w-full md:w-1/2'}>{description}</div>
        </section>
      </div>
    </header>
  );
}
