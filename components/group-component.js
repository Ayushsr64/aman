import Component from "./component";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1179.2px] left-[108px] w-[961px] h-[340px] text-left text-xl text-gray-200 font-sf-title-2-regular ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[32px] text-17xl font-inter">
        <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
          Full development cycle
        </b>
        <div className="w-[600px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
          We use proven technologies
        </div>
      </div>
      <div className="absolute top-[0px] left-[728px] flex flex-col items-start justify-start text-gray-100">
        <Component iOSDevelopment="iOS  development" />
        <div className="flex flex-row items-center justify-start py-3 px-0 gap-[12px] text-gray-200">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
              Android development
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="w-[189px] relative max-h-full"
                alt=""
                src="/vector-109.svg"
              />
            </div>
          </div>
          <img
            className="w-6 relative h-6"
            alt=""
            src="/chevron-right-small-24.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/chevron-right-outline-24.svg"
          />
        </div>
        <Component iOSDevelopment="Web development" />
        <Component iOSDevelopment="UI/UX design" />
        <Component iOSDevelopment="Testing" />
        <Component iOSDevelopment="Launch" />
        <Component iOSDevelopment="IT consulting" />
      </div>
      <div className="absolute top-[138px] left-[0px] flex flex-col items-start justify-start gap-[32px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[496px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block">
            Web
          </div>
          <div className="w-[496px] relative text-mid tracking-[-0.41px] leading-[22px] font-sf-pro-text inline-block text-darkslategray-200">
            <span>{`PHP `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Javascript `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Node.JS `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Web Socket `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Socket.io `}</span>
            <span className="text-olivedrab">/</span>
            <span> Vue.js</span>
            <span className="text-olivedrab">/</span>
            <span>{` Nuxt `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` MySQL `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Laravel `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` GO lang `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` django `}</span>
            <span className="text-olivedrab">{`/ `}</span>
            <span>Python</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[496px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block">
            Mobile
          </div>
          <div className="w-[496px] relative text-mid tracking-[-0.41px] leading-[22px] font-sf-pro-text inline-block text-darkslategray-200">
            <span>{`Swift `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Kotlin `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Alamofire `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Firebase `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` CoreData `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Room `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Realm `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Coroutine `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` RxJava `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` RxSwift `}</span>
            <span className="text-olivedrab">/</span>
            <span>{` Unit Test `}</span>
            <span className="text-olivedrab">/</span>
            <span> Navigation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
