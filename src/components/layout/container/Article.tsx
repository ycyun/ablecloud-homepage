import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

export interface ArticleProps extends BaseComponentProps {
  enableProseSpacing?: boolean;
}

export function Article({
  enableProseSpacing = false,
  className,
  children,
}: PropsWithChildren<ArticleProps>) {
  return (
    <article
      className={cls`prose-lg w-full max-w-none ${
        !enableProseSpacing && 'prose-headings:m-0'
      } ${className}`}>
      {children}
    </article>
  );
}
