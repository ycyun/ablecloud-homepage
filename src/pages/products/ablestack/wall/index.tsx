import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { ProductsDemoContent } from 'src/templates/productsContents';

import { CustomLink } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackWall/article_2_1.png';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackWall/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackWall/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackWall/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackWall/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackWall/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Wall ',
  description: `
      ABLESTACK의 Wall은 HCI 인프라와 가상머신, 그리고 각종 애플리케이션을 모니터링하고, 
      필요시 알람을 제공하는 등의 감시 및 보호를 위한 모니터링 플랫폼입니다.
    `,
  bgImage: 'bg-ablestack-wall-header-bg',
};

export default function AblestackWallPage() {
  return (
    <>
      <NextSeo
        title='Wall'
        description=''
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/wall',
          images: [
            {
              url: '',
              alt: '',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          title='아키텍처 개요'
          description={`인프라의 안정적인 운영과 품질 보장을 위해서 엔터프라이즈 모니터링 플랫폼인 Wall은
        ABLESTACK HCI는 HCI를 구성하는 모든 호스트 및 가상머신, 그리고 사용자가 모니터링하기 원하는 인프라에 대한 매트릭을 쿼리하고
        시각화하며, 임계치 설정에 따른 경고를 받을 수 있습니다.`}>
          <div className={'mx-auto flex w-full max-w-[550px] items-center justify-center'}>
            <Image src={Logo_Article_2_1} loading={'lazy'} />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='데이터 쿼리, 시각화 그리고 경고하는 모니터링 플랫폼'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} loading={'lazy'} />}>
          <ProductContent.Description
            contents={[
              {
                title: '대시보드 제공',
                descriptions: ['전반적인 ABLESTACK 인프라에 대한 대시보드 제공'],
              },
              {
                title: '실시간 모니터링 및 알람',
                descriptions: [
                  'Cube Host 에 대한 실시간 모니터링 및 알람',
                  '각종 컨트롤 가상머신에 대한 실시간 모니터링 및 알람',
                  '관리자 레벨에서 실행 중인 각종 애플리케이션에 대한 모니터링',
                  '사용자가 생성한 가상머신에 대한 실시간 모니터링',
                  '사용자 레벨에서 실행 중인 각종 애플리케이션에 대한 모니터링',
                ],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CustomLink href='/solutions/devops-and-operations'>
              <ProductContent.RowSummaryCard
                title={'IT 운영'}
                description={`인프라에 대한 통합적인 실시간 모니터링과 알람을 통해
              안정적으로 IT 인프라가 운영될 수 있도록 합니다.`}
                image={<Logo_Article_4_1 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/virtual-desktop-and-daas'>
              <ProductContent.RowSummaryCard
                title={'VDI/DaaS'}
                description={`사용자에게 할당된 가상 데스크톱의 운영 상태와
              데스크톱의 성능, 네트워크 상태 등에 대한 
              모니터링을 통해 개선사항 도출이 가능합니다.`}
                image={<Logo_Article_4_2 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>

            <CustomLink href='/solutions/edge-computing'>
              <ProductContent.RowSummaryCard
                title={'Edge Computing'}
                description={`권역별로 분산된 인프라로 이루어진 엣지 컴퓨팅 환경에서
              실시간 모니터링 및 알람을 통해 이슈에 대한 즉시 대응이
              가능해 집니다. `}
                image={<Logo_Article_4_3 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/business-critical'>
              <ProductContent.RowSummaryCard
                title={'비즈니스 크리티컬 앱'}
                description={`각종 비즈니스 애플리케이션의 서비스 모니터링 및
              알람을 통해 무중단 운영을 효과적으로 지원합니다.`}
                image={<Logo_Article_4_4 />}
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
