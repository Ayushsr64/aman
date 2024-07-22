import PropTypes from "prop-types";

const Component = ({ className = "", iOSDevelopment }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start py-3 px-0 gap-[12px] text-left text-xl text-gray-100 font-sf-title-2-regular ${className}`}
    >
      <div className="relative tracking-[0.38px] leading-[24px] whitespace-pre-wrap">
        {iOSDevelopment}
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
  );
};

Component.propTypes = {
  className: PropTypes.string,
  iOSDevelopment: PropTypes.string,
};

export default Component;
