import FrameComponent3 from "./frame-2";
import PropTypes from "prop-types";

const ProjectsExperience = ({ className = "" }) => {
  return (
    <div
      className={`w-[1223px] flex flex-col items-start justify-start gap-[28px] max-w-full text-left text-17xl text-gray-200 font-inter ${className}`}
    >
      <h1 className="m-0 w-[600px] relative text-inherit tracking-[0.33px] leading-[144%] font-bold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[31px] mq1050:text-10xl mq1050:leading-[41px]">
        <span>{`Developed more than `}</span>
        <span className="text-olivedrab">100</span>
        <span>{` projects in `}</span>
        <span className="text-olivedrab">15</span>
        <span> industries</span>
      </h1>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
        <FrameComponent3
          narrativeActiveOutline24="/narrative-active-outline-24.svg"
          socialMedia="Social media"
          ballOutline24="/ball-outline-24@2x.png"
          fitnessAndSport="Fitness and sport"
          bankOutline24="/bank-outline-24@2x.png"
          bank="Bank"
          employeeOutline24="/employee-outline-24@2x.png"
          construction="Construction"
          gameOutline24="/game-outline-24.svg"
          gameProjects="Game projects"
        />
        <FrameComponent3
          narrativeActiveOutline24="/education-outline-24@2x.png"
          socialMedia="Education"
          ballOutline24="/car-outline-24.svg"
          fitnessAndSport="Auto, transport"
          bankOutline24="/health-outline-24.svg"
          bank="Medicine, health"
          employeeOutline24="/bowl-sticks-outline-24.svg"
          construction="Restaurants, food delivery"
          gameOutline24="/market-outline-24.svg"
          gameProjects="Marketplaces"
        />
        <FrameComponent3
          narrativeActiveOutline24="/live-outline-24.svg"
          socialMedia="AR technology"
          ballOutline24="/video-outline-24.svg"
          fitnessAndSport="TV series"
          bankOutline24="/work-outline-24@2x.png"
          bank="Startups"
          employeeOutline24="/magic-wand-outline-24.svg"
          construction="Religion"
          gameOutline24="/video-circle-outline-24.svg"
          gameProjects="Online cources"
        />
      </div>
    </div>
  );
};

ProjectsExperience.propTypes = {
  className: PropTypes.string,
};

export default ProjectsExperience;
