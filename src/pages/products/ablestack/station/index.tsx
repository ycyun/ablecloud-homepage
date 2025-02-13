import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { ProductsDemoContent } from 'src/templates/productsContents';

import { CustomLink } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackStation/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackStation/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackStation/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackStation/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackStation/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackStation/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackStation/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackStation/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Station 플랫폼 서비스',
  description: `
      Station은 Mold와 Genie를 통해 제공되는 플랫폼 서비스로
     ABLESTACK이 제공하는 이머징 플랫폼을 바로 사용할 수 있습니다.
    `,
  bgImage: 'bg-ablestack-station-header-bg',
  textColor: 'text-[#444444]',
  imagePosition: 'last',
};

export default function AblestackStationPage() {
  return (
    <>
      <NextSeo
        title=''
        description=''
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/station',
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
          title='Station 플랫폼을 선택하는 이유'
          description={`ABLESTACK으로 구성된 클라우드 환경에서 최신의 혁신적인 기술을 적용한 애플리케이션을 개발하기 위해
        에이블클라우드가 자체적으로 구성하여 통합 지원하는 턴키 이머징 플랫폼을 사용하십시오.`}>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <ProductContent.Item
              image={<Logo_Article_2_1 />}
              title={'턴키 플랫폼 서비스'}
              description={<p>제조사가 직접 제공하는 배포판 플랫폼으로 지속적 유지보수를 보장함</p>}
            />
            <ProductContent.Item
              image={<Logo_Article_2_2 />}
              title={'통합된 인프라'}
              description={<p>HCI와 통합되어 구성이 단순하고 별도의 외부 SW가 필요 없음</p>}
            />
            <ProductContent.Item
              image={<Logo_Article_2_3 />}
              title={'원클릭 자동화'}
              description={<p>Genie를 통해 원클릭으로 플랫폼을 배포하고 상태를 모니터링</p>}
            />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='HCI와 통합된 턴키 이머징 플랫폼 서비스'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} />}>
          <ProductContent.Description
            contents={[
              {
                title: '다양한 이머징 플랫폼',
                descriptions: [
                  '빅데이터, 인공지능 및 다양한 이머징 플랫폼',
                  'HCI 제조사가 직접 배포판을 제공하고 유지보수',
                ],
              },
              {
                title: '원클릭 자동 배포',
                descriptions: [
                  '사전 구성된 배포판 스크립트를 통한 배포 자동화',
                  '오픈소스 프로젝트의 공식 배포판 제공',
                ],
              },
              {
                title: 'HCI 통합 구성',
                descriptions: ['HCI에 내장된 플랫폼 제공', '배포 플랫폼에 대한 통합 모니터링'],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CustomLink href='/solutions/big-data-analysis'>
              <ProductContent.RowSummaryCard
                title={'빅데이터'}
                description={`자체 배포판 제공으로 효율적인 빅데이터 인프라 및 
            플랫폼을 제공합니다.`}
                image={<Logo_Article_4_1 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>

            <CustomLink href='/solutions/artificial-intelligence-and-machine-learning'>
              <ProductContent.RowSummaryCard
                title={'인공지능/머신러닝'}
                description={`검증된 인공지능, 머신러닝 아키텍처를 기반으로
            신뢰성 높은 플랫폼을 구성할 수 있습니다. `}
                image={<Logo_Article_4_2 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/ci-and-cd'>
              <ProductContent.RowSummaryCard
                title={'CI/CD'}
                description={`배포판 이머징 플랫폼과 이에 적합한 개발환경을 같이
            배포하여 애플리케이션 생산성을 높일 수 있습니다.`}
                image={<Logo_Article_4_3 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/video-surveillance'>
              <ProductContent.RowSummaryCard
                title={'영상감시'}
                description={`영상감시를 위한 다양한 인프라와 SW, 분석 시스템 등을
            통합 배포하여 효율성을 높일 수 있습니다. `}
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
