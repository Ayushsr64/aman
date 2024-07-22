import PropTypes from "prop-types";

const LogoBarWrapper = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[900px] left-[0px] w-[1440px] flex flex-col items-center justify-start py-[60px] px-[55px] box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[60px] px-0 border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-10@2x.png"
        />
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-12@2x.png"
        />
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-13@2x.png"
        />
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-151@2x.png"
        />
        <img
          className="w-[163.6px] relative h-[72.1px] object-cover"
          alt=""
          src="/image-16@2x.png"
        />
      </div>
    </div>
  );
};

LogoBarWrapper.propTypes = {
  className: PropTypes.string,
};

export default LogoBarWrapper;
