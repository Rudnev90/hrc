import { ConfigProvider, Layout } from 'antd';

import BenefitsSection from '~/componens/BenefitsSection';
import FeedbackSection from '~/componens/FeedbackSection';
import MainHeader from '~/componens/MainHeader';
import RelocateSection from '~/componens/RelocateSection';
import TeamSection from '~/componens/TeamSection';
import WorkLifeBalanceSection from '~/componens/WorkLifeBalanceSection';
import { mainTheme } from '~/themes/main';

const { Content } = Layout;

export default function Home() {
  return (
    <ConfigProvider theme={mainTheme}>
      <MainHeader />
        <Content>
          <Layout>
            <RelocateSection />
            <WorkLifeBalanceSection />
            <BenefitsSection />
            <FeedbackSection />
            <TeamSection />
          </Layout>
        </Content>
        {/* <Footer>Ant Design ©2023 Created by Ant UED</Footer> */}
    </ConfigProvider>
  );
}