import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[24px] left-[calc(50%_-_611px)] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white w-[1222px] flex flex-row items-center justify-start py-4 px-6 box-border gap-[80px] text-left text-sm text-gray-200 font-sf-pro-text ${className}`}
    >
      <img
        className="w-[174px] relative h-[60px] object-cover"
        alt=""
        src="/logobg2-1@2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-start gap-[24px]">
        <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
          Services
        </div>
        <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
          Media
        </div>
        <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
          Cases
        </div>
        <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
          FAQ
        </div>
        <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
          Contacts
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[32px] text-olivedrab">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/smartphone-outline-241.svg"
          />
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
              +91
            </div>
            <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
              000000000
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mail-outline-241@2x.png"
          />
          <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
            <a
              className="text-[inherit]"
              href="mailto:thousanditcompany@gmail.com"
              target="_blank"
            >
              @gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
