const Frame = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-40 px-[108px] pb-[196px] box-border leading-[normal] tracking-[normal] text-left text-20xl text-gray-200 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq900:pl-[54px] mq900:pr-[54px] mq900:box-border">
      <h1 className="m-0 w-[600px] relative text-inherit tracking-[0.33px] inline-block shrink-0 max-w-full text-orange-100 font-inherit mq450:text-[23px] mq900:text-[31px]">
        <span className="font-extrabold">User-Centric Excellence</span>
        <span className="text-gray-200">
          <span className="font-semibold font-inter">{`: Our `}</span>
          <b className="font-inter">App Development services</b>
          <span className="font-semibold"> Tackles Your Pain Points</span>
        </span>
      </h1>
      <div className="w-[600px] flex flex-col items-start justify-start pt-[161px] px-0 pb-0 box-border max-w-full ml-[-600px] text-lg font-sf-pro-text">
        <div className="self-stretch relative tracking-[-0.24px]">
          <span>{`Experience a Seamless Digital Journey with `}</span>
          <span className="font-extrabold text-olivedrab">Desun</span>
          <span>
            <span>
              {" "}
              - Where Every Line of Code Resolves Your Challenges and
            </span>
            <span className="font-medium font-sf-pro-text">{` `}</span>
          </span>
          <b className="text-orange-100">Elevates Your App Experience</b>
          <span> to Unparalleled Heights.</span>
        </div>
      </div>
      <img
        className="h-[2063.5px] w-[1021.4px] absolute !m-[0] top-[-633.7px] right-[-209.4px] object-contain z-[1]"
        alt=""
        src="/group-1@2x.png"
      />
      <div className="w-[676px] flex flex-col items-start justify-start pt-[284px] px-0 pb-0 box-border max-w-full ml-[-600px] text-xl">
        <div className="self-stretch shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-start justify-center p-6 box-border gap-[32px] max-w-full z-[2] mq700:gap-[16px]">
          <b className="w-[600px] relative tracking-[0.38px] leading-[24px] inline-block max-w-full mq450:text-base mq450:leading-[19px]">
            <p className="m-0">Leave your contacts and we will call you back</p>
            <p className="m-0">within 30 minutes</p>
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[24px] max-w-full text-smi text-slategray font-sf-pro-text">
            <div className="flex-1 flex flex-col items-start justify-center gap-[24px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] mq700:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Full name
                  </div>
                  <input
                    className="w-[69px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-pro-text text-base text-gray-200"
                    placeholder="My Name"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Phone number
                  </div>
                  <div className="w-40 flex flex-row items-start justify-start gap-[8px] text-base text-gray-200">
                    <div className="flex flex-col items-center justify-center py-[5px] px-0">
                      <img
                        className="w-[18px] h-3 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="relative tracking-[-0.41px] leading-[22px] inline-block min-w-[28px] whitespace-nowrap">
                      +91
                    </div>
                    <div className="flex-1 relative tracking-[-0.41px] leading-[22px]">
                      0000000000
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] mq700:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Business name
                  </div>
                  <div className="w-[198px] flex flex-row items-start justify-start text-base text-gray-200">
                    <div className="flex-1 relative tracking-[-0.41px] leading-[22px]">
                      ABC Technologies PVT LTD
                    </div>
                  </div>
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[8px] min-w-[146px]">
                  <div className="self-stretch relative tracking-[-0.08px] leading-[16px] font-medium">
                    Business mail
                  </div>
                  <input
                    className="w-[187px] [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-row items-start justify-start font-sf-pro-text text-base text-gray-200"
                    placeholder="demoaccount@gmail.com"
                    type="text"
                  />
                  <img
                    className="self-stretch h-[0.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-olivedrab flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
              <div className="w-[84px] relative tracking-[-0.15px] leading-[18px] font-semibold inline-block">
                <p className="m-0">Get</p>
                <p className="m-0">consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
