import {
  NamedExoticComponent,
  PropsWithChildren,
  ReactNode,
  memo,
  useEffect,
  useState,
} from 'react';

import { useMediaQuery } from 'react-responsive';

import { BaseComponentProps } from '@/types';
import { cls } from '@/utils';

import { ActionCard, ItemCard, RowSmallCard, RowSummaryCard } from '@/components/common';
import { Container } from '@/components/layout';

import ProductContentBox from './ProductContentBox';
import ProductContentDescription from './ProductContentDescription';
import ProductContentGoDetail from './ProductContentGoDetail';
import ProductContentIntro from './ProductContentIntro';
import ProductContentItemGrid from './ProductContentItemGrid';

export interface ProductContentProps extends BaseComponentProps {
  title?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  imagePosition?: 'first' | 'last';
}

const ProductContent = memo<PropsWithChildren<ProductContentProps>>(
  ({ title, description, image, imagePosition = 'last', className, children }) => {
    const [isBigScreen, setIsBigScreen] = useState<boolean | undefined>();

    const bigScreen = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
      setIsBigScreen(bigScreen);
    }, [bigScreen]);

    return (
      <section
        className={cls`not-prose group relative flex w-full flex-col items-center overflow-hidden pb-8 ${
          className ? className : 'text-[#444444]'
        }`}>
        {/* ::before */}
        {/* <div className='group-odd:absolute group-odd:inset-0 group-odd:-z-10 group-odd:-skew-y-2 group-odd:bg-slate-100' /> */}

        <Container.PageWidth className='px-4'>
          <header className='flex flex-col items-center px-8 text-center '>
            {typeof title === 'string' ? (
              <p className={'m-0 mb-[25px] p-0 text-[30px] font-[500] leading-[43.44px]'}>
                {title}
              </p>
            ) : (
              title
            )}
            {typeof description === 'string' ? (
              <p className='m-0 mb-[25px] max-w-full p-0 text-[16px] font-[400] leading-[23.17px]'>
                {description}
              </p>
            ) : (
              description
            )}
          </header>
          {image ? (
            <section className='flex max-w-page-full items-center justify-between'>
              {imagePosition === 'first' && (
                <div
                  className={`${
                    isBigScreen ? 'flex w-1/2' : 'hidden'
                  } mr-8 mt-16 items-center justify-center `}>
                  {image}
                </div>
              )}

              <div className={`${isBigScreen ? 'w-1/2' : 'w-full'} flex flex-col justify-center`}>
                {children}
              </div>

              {imagePosition === 'last' && (
                <div
                  className={`${
                    isBigScreen ? 'w-1/2' : 'hidden'
                  } ml-8 mt-16 items-center justify-center`}>
                  {image}
                </div>
              )}
            </section>
          ) : (
            <>{children}</>
          )}
        </Container.PageWidth>
      </section>
    );
  },
) as NamedExoticComponent<PropsWithChildren<ProductContentProps>> & {
  ActionCard: typeof ActionCard;
  Box: typeof ProductContentBox;
  Description: typeof ProductContentDescription;
  ItemGrid: typeof ProductContentItemGrid;
  GoDetail: typeof ProductContentGoDetail;
  RowSmallCard: typeof RowSmallCard;
  RowSummaryCard: typeof RowSummaryCard;
  Intro: typeof ProductContentIntro;
  Item: typeof ItemCard;
};

ProductContent.displayName = 'ProductContent';

ProductContent.ActionCard = ActionCard;
ProductContent.Box = ProductContentBox;
ProductContent.Description = ProductContentDescription;
ProductContent.ItemGrid = ProductContentItemGrid;
ProductContent.GoDetail = ProductContentGoDetail;
ProductContent.RowSmallCard = RowSmallCard;
ProductContent.RowSummaryCard = RowSummaryCard;
ProductContent.Intro = ProductContentIntro;
ProductContent.Item = ItemCard;

export default ProductContent;
