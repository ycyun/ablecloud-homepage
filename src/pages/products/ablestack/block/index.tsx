import React from 'react';

import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { ProductsDemoContent } from 'src/templates/productsContents';

import { CustomLink, SvgIcon } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackBlock/article_3_1.png';

const Logo_Article_2_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_1.svg'),
);
const Logo_Article_2_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_2.svg'),
);
const Logo_Article_2_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_2_3.svg'),
);

const Logo_Article_4_1 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_1.svg'),
);
const Logo_Article_4_2 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_2.svg'),
);
const Logo_Article_4_3 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_3.svg'),
);
const Logo_Article_4_4 = React.lazy(
  () => import('@/public/images/new/product/ablestack/ablestackBlock/article_4_4.svg'),
);
const Logo_Product_Default = React.lazy(() => import('@/public/images/new/product_default.svg'));

const headerContent: ProductHeaderProps = {
  title: 'Volume 블록 스토리지',
  description: `Volume은 Glue에 내장된 확장형 블록 스토리지로, 가상머신의 워크로드
    및 물리적인 워크로드 에 모드 대응할 수 있도록 설계된 단일 통합 스토리
    지 플랫폼입니다.`,
  bgImage: 'bg-ablestack-block-header-bg',
  textColor: 'text-[#444444]',
};

export default function AblestackBlockPage() {
  return (
    <>
      <NextSeo
        title='Volume 블록 스토리지'
        description='Volume 블록 스토리지'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/block',
          images: [
            {
              url: '',
              alt: 'Volume 블록 스토리지',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          title='Volume 스토리지를 선택하는 이유'
          description={`Volume은 가상머신의 디스크 워크로드를 위해 Glue를 통해 제공되는 단일 통합 스토리지 플랫폼으로
지능적이고 효율적인 데이터 관리, 고수준의 재해복구 및 데이터 계층화, 스냅샷 백업 등의 HCI 이점을 제공하는 동시에
레거시 스토리지 인프라의 비용과 복잡성을 제거합니다. `}>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <ProductContent.Item
              image={<SvgIcon Svg={Logo_Article_2_1} />}
              title={'간편한 관리'}
              description={<p>볼륨의 생성, 확장 관리가 간편한 엔터프라이즈급 블록 스토리지</p>}
            />
            <ProductContent.Item
              image={<SvgIcon Svg={Logo_Article_2_2} />}
              title={'복잡성 해소 및 비용 절감'}
              description={<p>구형의 레거시 인프라 유지보수를 위한 오버헤드 비용 절감</p>}
            />
            <ProductContent.Item
              image={<SvgIcon Svg={Logo_Article_2_3} />}
              title={'HCI의 장점 활용'}
              description={<p>HCI의 이점인 지능형 데이터 관리, 고수준 재해복구, 백업 등을 활용</p>}
            />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='원하는 플랫폼에서 모든 워크로드 연결'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} />}>
          <ProductContent.Description
            contents={[
              {
                title: '통합 클라우드 관리',
                descriptions: [
                  '사용자 별로 완전히 격리된 인프라를 제공',
                  '웹 기반 애플리케이션으로 데스크톱, 모바일 환경에서 모두 사용 가능',
                ],
              },
              {
                title: '가상화 기능 통합 제공',
                descriptions: [
                  '가상머신, 스토리지, 네트워크 관리',
                  '정책 기반 가상 자원 배포 관리사용자 별로 완전히 격리된 인프라를 제공',
                ],
              },
              {
                title: '내장된 비즈니스 연속성 제공',
                descriptions: [
                  '가상머신 단위별 스냅샷 백업 및 복구',
                  '클러스터 간 미러링을 통한 재해 복구 지원',
                  'Synology, Veem, EMC Networker 등의 백업 어플라이언스 연동 지원',
                ],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CustomLink href='/solutions/server-virtualization'>
              <ProductContent.RowSummaryCard
                title={'서버 가상화'}
                description={`블록스토리지는 가상머신을 위한 기본적인 디스크 
              형식으로 고성능의 IO를 제공합니다.`}
                image={<SvgIcon Svg={Logo_Article_4_1} />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/video-surveillance'>
              <ProductContent.RowSummaryCard
                title={'영상 감시'}
                description={`최신 Kernel 을 사용한 블록 디스크는 지속적인 
              영상 데이터 저장 및 조회 환경에 최적의 성능을
              제공합니다. `}
                image={<SvgIcon Svg={Logo_Article_4_2} />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/edge-computing'>
              <ProductContent.RowSummaryCard
                title={'엣지컴퓨팅'}
                description={`권역별로 구성된 소형 HCI의 경우에도 높은 성능을
              제공하여 안정적인 정보 수집/정제가 가능합니다.`}
                image={<SvgIcon Svg={Logo_Article_4_3} />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/artificial-intelligence-and-machine-learning'>
              <ProductContent.RowSummaryCard
                title={'인공지능/머신러닝'}
                description={`효율적이고 고성능의 연산이 필요한 분석 환경에서
              높은 IO 성능을 통해 안정적 분석/학습을 보장합니다.`}
                image={<SvgIcon Svg={Logo_Article_4_4} />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
          </div>
        </ProductContent>

        <ProductContent className={'bg-backgroudGray text-[#444444]'} title='최신 리소스 살펴보기'>
          <ProductsDemoContent />
        </ProductContent>
      </ProductTemplate>
    </>
  );
}
