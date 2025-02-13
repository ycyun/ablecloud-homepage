import Image from 'next/image';

import { NextSeo } from 'next-seo';
import { ProductsDemoContent } from 'src/templates/productsContents';

import { CustomLink } from '@/components/common';
import { ProductContent, ProductHeaderProps, ProductTemplate } from '@/templates';

import Logo_Article_1_1 from '@/public/images/new/product/ablestack/ablestackFiles/article_1_1.png';
import Logo_Article_2_1 from '@/public/images/new/product/ablestack/ablestackFiles/article_2_1.svg';
import Logo_Article_2_2 from '@/public/images/new/product/ablestack/ablestackFiles/article_2_2.svg';
import Logo_Article_2_3 from '@/public/images/new/product/ablestack/ablestackFiles/article_2_3.svg';
import Logo_Article_3_1 from '@/public/images/new/product/ablestack/ablestackFiles/article_3_1.png';
import Logo_Article_4_1 from '@/public/images/new/product/ablestack/ablestackFiles/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/product/ablestack/ablestackFiles/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/product/ablestack/ablestackFiles/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/product/ablestack/ablestackFiles/article_4_4.svg';

const headerContent: ProductHeaderProps = {
  title: 'Files 파일시스템',
  description: `
      Glue Files는 Glue에 내장된 표준 파일 시스템으로 데이터 중심의 IT 
      환경에서 간단하고 유연하며, 지능적인 파일 스토리지 서비스를 제공합니다.
   `,
  bgImage: 'bg-ablestack-files-header-bg',
  textColor: 'text-[#444444]',
  image: <Image src={Logo_Article_1_1} />,
};

export default function AblestackFilesPage() {
  return (
    <>
      <NextSeo
        title='Files 파일시스템'
        description='Files 파일시스템'
        openGraph={{
          type: 'website',
          url: 'https://www.ablecloud.io/products/ablestack/files',
          images: [
            {
              url: '',
              alt: 'Files 파일시스템',
            },
          ],
        }}
      />
      <ProductTemplate {...headerContent}>
        <ProductContent
          title='Files  스토리지를 선택하는 이유'
          description={`다양한 비즈니스 애플리케이션에 적합한 파일 시스템으로써, 단일 플랫폼으로 구성된 통합 사일로 구조를 통해
        데이터 파편화 및 스토리지 팽창 문제를 해결하고, 필요한 시기에 쉽게 확장 가능합니다. `}>
          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <ProductContent.Item
              image={<Logo_Article_2_1 />}
              title={'단 몇 분만에 배포하기'}
              description={
                <p>몇 번의 클릭만으로 중단없이 공유스토리지, 또는 전용스토리지를 통합 관리</p>
              }
            />
            <ProductContent.Item
              image={<Logo_Article_2_2 />}
              title={'다양한 프로토콜 지원'}
              description={<p>POSIX, NFS, SMB 등의 다양한 스토리지 프로토콜 지원</p>}
            />
            <ProductContent.Item
              image={<Logo_Article_2_3 />}
              title={'운영 자동화'}
              description={
                <p>파일 시스템의 데이터 구성, 사용자, 세션 정보 등을 효율적으로 관리 가능</p>
              }
            />
          </div>
        </ProductContent>

        <ProductContent
          className={'bg-backgroudGray text-[#444444]'}
          title='다양한 애플리케이션을 지원하는 범용 파일 시스템'
          imagePosition='first'
          image={<Image src={Logo_Article_3_1} loading={'lazy'} />}>
          <ProductContent.Description
            contents={[
              {
                title: '다양한 애플리케이션 지원',
                descriptions: ['POSIX, NFS, SMB 지원', '가상 파일서버를 통한 파일 시스템'],
              },
              {
                title: '안정성 및 확장성',
                descriptions: ['원클릭 파일 서버 배포', '필요 할 때 언제든 서버 확장'],
              },
              {
                title: '편리한 관리 환경 제공',
                descriptions: [
                  '가파일 시스템 경로별 저장 용량 제한',
                  '저장 용량 증가 패턴, 흐름 분석',
                  '저장 용량 및 사용량 측정',
                ],
              },
            ]}
          />
        </ProductContent>

        <ProductContent title='관련 솔루션'>
          <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <CustomLink href='/solutions/business-critical'>
              <ProductContent.RowSummaryCard
                title={'비즈니스 크리티컬 앱'}
                description={`다수의 가상머신을 통해 서비스되는 비즈니스 앱을 위해
              공유 스토리지를 제공합니다.`}
                image={<Logo_Article_4_1 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>

            <CustomLink href='/solutions/virtual-desktop-and-daas'>
              <ProductContent.RowSummaryCard
                title={'VDI/DaaS'}
                description={`Hyper-V, Citrix 등의 환경에서의 고성능 파일시스템을
              통해 안정적인 데스크톱 환경을 구축합니다.`}
                image={<Logo_Article_4_2 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/video-surveillance'>
              <ProductContent.RowSummaryCard
                title={'영상 감시'}
                description={`영상 수집 서버를 통해 수집되는 영상 데이터를 저장하고
              조회할 수 있는 대용량 공유 스토리지를 제공합니다.`}
                image={<Logo_Article_4_3 />}
                hoverBehavior={'scale'}
              />
            </CustomLink>
            <CustomLink href='/solutions/multi-cloud'>
              <ProductContent.RowSummaryCard
                title={'멀티 클라우드'}
                description={`다양한 프로토콜 지원을 통해 VMWare, Hyper-V, 
              Citrix, Linux KVM 등의 멀티 하이퍼바이저를 지원합니다.`}
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
