import ProjectsCount from "../components/frame-113";
import FrameComponent1 from "../components/frame-625869";
import FrameComponent4 from "../components/frame-6258691";
import TeamIntro from "../components/frame-625868";
import QuestionOne from "../components/frame-6258693";
import NextQuestions from "../components/frame-6258694";
import Footer from "../components/footer";
import { getSEOTags } from "./seo/seo";

const Root = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Head>
        {getSEOTags({
          title: "User-Centric Excellence: Landing",
          description: "Our app development services tackle your pain points with a seamless digital journey.",
          keywords: "app development, user-centric, digital solutions"
        })}
      </Head>
      <ProjectsCount />
      <FrameComponent1 />
      <FrameComponent4 />
      <TeamIntro />
      <footer className="self-stretch flex flex-col items-start justify-start py-20 px-[108px] box-border gap-[40px] max-w-full text-left text-17xl text-gray-200 font-inter mq750:gap-[20px] mq750:py-[52px] mq750:px-[54px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[600px] flex flex-col items-start justify-start max-w-full mq750:gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.33px] leading-[52px] font-bold font-inherit mq450:text-3xl mq450:leading-[31px] mq1050:text-10xl mq1050:leading-[41px]">
            FAQ
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <QuestionOne />
          <NextQuestions />
        </div>
      </footer>
      <Footer />
    </div>
  );
};

export default Root;
