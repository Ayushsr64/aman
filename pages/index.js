import GroupComponent from "../components/group-component";
import LogoBarWrapper from "../components/logo-bar-wrapper";
import FrameComponent5 from "../components/frame-component";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white h-[5720px] overflow-hidden text-left text-20xl text-orange-100 font-inter">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1440px] h-[900px] overflow-hidden">
        <div className="absolute top-[160px] left-[108px] flex flex-col items-start justify-start gap-[20px]">
          <div className="w-[600px] relative tracking-[0.33px] inline-block">
            <span className="font-extrabold">User-Centric Excellence</span>
            <span className="text-gray-200">
              <span className="font-semibold font-inter">{`: Our `}</span>
              <b className="font-inter">App Development services</b>
              <span className="font-semibold"> Tackles Your Pain Points</span>
            </span>
          </div>
          <div className="w-[600px] relative text-lg tracking-[-0.24px] inline-block text-gray-200 font-sf-pro-text">
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
          className="absolute top-[-633.7px] left-[628px] w-[1021.4px] h-[2063.5px] object-contain"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="absolute top-[444px] left-[108px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-start justify-center p-6 gap-[32px] text-xl text-gray-200">
          <b className="w-[600px] relative tracking-[0.38px] leading-[24px] inline-block">
            <p className="m-0">Leave your contacts and we will call you back</p>
            <p className="m-0">within 30 minutes</p>
          </b>
          <div className="flex flex-row items-end justify-start gap-[24px] text-smi text-slategray font-sf-pro-text">
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div className="flex flex-row items-center justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                    Full name
                  </div>
                  <div className="flex flex-row items-start justify-start text-base text-gray-200">
                    <div className="relative tracking-[-0.41px] leading-[22px]">
                      My Name
                    </div>
                  </div>
                  <img
                    className="w-56 relative max-h-full"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                    Phone number
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-base text-gray-200">
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <img
                        className="w-[18px] relative h-3 object-cover"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="relative tracking-[-0.41px] leading-[22px]">
                      +91
                    </div>
                    <div className="relative tracking-[-0.41px] leading-[22px]">
                      0000000000
                    </div>
                  </div>
                  <img
                    className="w-56 relative max-h-full"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                    Business name
                  </div>
                  <div className="flex flex-row items-start justify-start text-base text-gray-200">
                    <div className="relative tracking-[-0.41px] leading-[22px]">
                      ABC Technologies PVT LTD
                    </div>
                  </div>
                  <img
                    className="w-56 relative max-h-full"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                    Business mail
                  </div>
                  <div className="flex flex-row items-start justify-start text-base text-gray-200">
                    <div className="relative tracking-[-0.41px] leading-[22px]">
                      demoaccount@gmail.com
                    </div>
                  </div>
                  <img
                    className="w-56 relative max-h-full"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-olivedrab flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
              <div className="relative tracking-[-0.15px] leading-[18px] font-semibold">
                <p className="m-0">Get</p>
                <p className="m-0">consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1253px] left-[863px] w-[15px] h-4"
        alt=""
        src="/cursor.svg"
      />
      <GroupComponent />
      <div className="absolute top-[1593px] left-[0px] flex flex-col items-center justify-start text-17xl text-gray-200">
        <div className="flex flex-col items-start justify-start">
          <div className="w-[1440px] relative bg-whitesmoke h-[1392px] overflow-hidden shrink-0">
            <div className="absolute top-[80px] left-[108px] w-[1223px] h-[92px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.33px] leading-[144%] inline-block w-[600px]">
                <span>{`Developed more than `}</span>
                <span className="text-olivedrab">100</span>
                <span>{` projects in `}</span>
                <span className="text-olivedrab">15</span>
                <span> industries</span>
              </b>
            </div>
            <div className="absolute top-[212px] left-[108px] flex flex-row items-start justify-start gap-[25px] text-mid font-sf-pro-text">
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/narrative-active-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Social media
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/ball-outline-24@2x.png"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Fitness and sport
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/bank-outline-24@2x.png"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Bank
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/employee-outline-24@2x.png"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Construction
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/game-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Game projects
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/education-outline-24@2x.png"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Education
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/car-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Auto, transport
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/health-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Medicine, health
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/bowl-sticks-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Restaurants, food delivery
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/market-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Marketplaces
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/live-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    AR technology
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/video-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    TV series
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/work-outline-24@2x.png"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Startups
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/magic-wand-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Religion
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-2.5">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/video-circle-outline-24.svg"
                    />
                  </div>
                  <div className="w-[331px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block shrink-0">
                    Online cources
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[612px] left-[108px] flex flex-col items-start justify-start gap-[40px]">
              <div className="w-[1223px] relative h-[130px]">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
                  <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                    Projects we are proud of
                  </b>
                  <div className="w-[600px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                    Our software development company is truly proud of the
                    wonderful clients we have worked with. We enjoy a long-term
                    partnership
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[40px] text-mid text-gray-100 font-sf-pro-text">
                <div className="w-[1224px] relative h-[58px]">
                  <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-start p-4 text-gray-200">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[-0.41px] leading-[22px] font-medium">
                          Project 1
                        </div>
                        <img
                          className="w-12 relative max-h-full"
                          alt=""
                          src="/vector-1091.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 3
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-17xl text-gray-200 font-inter">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <b className="relative tracking-[0.33px] leading-[144%]">
                      Project 1
                    </b>
                    <div className="flex flex-col items-start justify-start gap-[40px] text-mini font-sf-pro-text">
                      <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] inline-block">
                        Crafted an innovative rental property management app,
                        seamlessly integrating secure login, absence
                        registration, and a tenant notice board. Elevating the
                        resident experience with user-friendly design and
                        efficient communication channels
                      </div>
                      <div className="w-[496px] relative text-mid tracking-[-0.41px] leading-[22px] inline-block text-darkslategray-100">
                        <span>{`Business analysis `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` iOS `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` Android `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` QA `}</span>
                        <span className="text-orange-100">/</span>
                        <span> UI/UX Design</span>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[32px]">
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/place-outline-24@2x.png"
                          />
                          <div className="relative tracking-[-0.24px] leading-[20px]">
                            India
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/work-outline-24@2x.png"
                          />
                          <div className="relative tracking-[-0.24px] leading-[20px]">
                            Real Estate
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[48px] text-5xl font-inter">
                        <div className="flex flex-col items-start justify-start gap-[8px]">
                          <b className="relative tracking-[0.33px] leading-[144%]">
                            400%
                          </b>
                          <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-pro-text text-slategray">
                            User Growth
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[8px]">
                          <b className="relative tracking-[0.33px] leading-[144%]">
                            + 200 000
                          </b>
                          <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-pro-text text-slategray">
                            Active Users
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl hidden flex-col items-start justify-center p-6 text-mid border-[1px] border-solid border-gainsboro-100">
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="w-11 relative rounded-81xl h-11 object-cover"
                            alt=""
                            src="/telegrampeerphotosize23904150204805392305100-1@2x.png"
                          />
                          <div className="flex flex-col items-start justify-start gap-[4px]">
                            <div className="w-[324px] relative tracking-[-0.41px] leading-[22px] font-medium inline-block">
                              Назерке Дильдаханова
                            </div>
                            <div className="relative text-smi tracking-[-0.08px] leading-[16px] text-slategray">
                              Со-основатель Vibe
                            </div>
                          </div>
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/chevron-right-outline-241.svg"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[16px]">
                        <img
                          className="w-[148px] relative h-10 overflow-hidden shrink-0"
                          alt=""
                          src="/ios.svg"
                        />
                        <img
                          className="w-[136px] relative h-10"
                          alt=""
                          src="/frame-10782.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch w-[446px] relative max-h-full object-cover"
                    alt=""
                    src="/image-15@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] relative [background:linear-gradient(90deg,_#fabc1f,_#7ca546)] h-[350px] overflow-hidden shrink-0 text-white">
            <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px]">
              <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px] opacity-[0.5] mix-blend-overlay" />
              <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px] opacity-[0.3] mix-blend-overlay" />
            </div>
            <div className="absolute top-[53px] left-[calc(50%_-_611px)] w-[1221px] flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                  <p className="m-0">Let's discuss</p>
                  <p className="m-0">Your project</p>
                </b>
                <div className="w-[600px] relative text-mini leading-[20px] font-medium font-sf-pro-text inline-block">
                  <p className="m-0">
                    Let's figure out how to create an effective application,
                  </p>
                  <p className="m-0">its cost and terms of its development</p>
                </div>
              </div>
              <div className="shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-end justify-center p-6 gap-[24px] text-smi text-slategray font-sf-pro-text">
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Full name
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        My Name
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Phone number
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-base text-gray-200">
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <img
                          className="w-[18px] relative h-3 object-cover"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        +91
                      </div>
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        000000000
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Business name
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        ABC Technologies PVT LTD
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Business mail
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        demoaccount@gmail.com
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-orange-200 flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
                  <div className="relative tracking-[-0.15px] leading-[18px] font-semibold">
                    Discuss the project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] relative bg-white h-[810px]">
            <div className="absolute top-[80px] left-[108px] flex flex-col items-start justify-start">
              <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                Application Development Stages
              </b>
            </div>
            <div className="absolute top-[166px] left-[108px] flex flex-row items-start justify-start gap-[440px] text-xl font-sf-title-2-regular">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/planing.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Analysis
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      We craft precise technical specs, aligning with your
                      business, technology, and user requirements.
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[306px] w-[85.9px] h-[172px]"
                    alt=""
                    src="/1.svg"
                  />
                </div>
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/graphicdesign.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Design
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      We adapt the customer's corporate identity to the platform
                      guidelines. We draw convenient and understandable
                      interfaces.
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[261px] w-[131.4px] h-[172px]"
                    alt=""
                    src="/2.svg"
                  />
                </div>
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/codinglanguage.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Development
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      We create an extensible architecture, write clean and
                      stable code. We integrate with customer technologies.
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[253px] w-[138.6px] h-[172px]"
                    alt=""
                    src="/3.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/security.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Testing
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      We carry out functional testing and do bug fixes. We adapt
                      the application to different phone resolutions
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[244px] w-[148.2px] h-[172px]"
                    alt=""
                    src="/4.svg"
                  />
                </div>
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/hosting-1.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Launching
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      <p className="m-0">
                        We design the application page and publish it in the App
                        Store and Google Play stores.
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[258px] w-[134.3px] h-[172px]"
                    alt=""
                    src="/5.svg"
                  />
                </div>
                <div className="w-[392px] relative h-[172px]">
                  <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start p-6 gap-[16px]">
                    <div className="flex flex-row items-center justify-start gap-[24px]">
                      <img
                        className="w-12 relative h-12 overflow-hidden shrink-0"
                        alt=""
                        src="/application.svg"
                      />
                      <div className="relative tracking-[0.38px] leading-[24px] font-semibold">
                        Support
                      </div>
                    </div>
                    <div className="w-[344px] relative text-mini tracking-[-0.24px] leading-[20px] font-sf-pro-text inline-block">
                      We monitor the stability of the application, update it for
                      new devices and versions of iOS and Android.
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] left-[253px] w-[139.4px] h-[172px]"
                    alt=""
                    src="/6.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[166px] left-[500px] w-[440px] h-[564px] object-cover"
              alt=""
              src="/hopegif1@2x.png"
            />
          </div>
          <div className="bg-whitesmoke flex flex-row items-start justify-start py-20 px-[108px] gap-[24px] text-mini">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <b className="w-[600px] relative text-17xl tracking-[0.33px] leading-[144%] inline-block">
                Our team
              </b>
              <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                Thousand is a full-cycle digital production company with its own
                product analytics, design, web and mobile development.
              </div>
              <div className="flex flex-row items-start justify-start py-2 px-0 gap-[16px] text-29xl">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    28
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    team members
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    +100
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    projects
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    7 years
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    in IT sphere
                  </div>
                </div>
              </div>
              <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                All the necessary specialists - from a designer to a tester -
                are on our staff. We hire the best specialists in the market.
                It's expensive but worth it
              </div>
            </div>
            <div className="w-[600px] relative h-[408px]">
              <div className="absolute top-[48px] left-[20px] rounded-2xl w-[560px] h-[360px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.178)]"
                  alt=""
                  src="/img-6115@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[600px] h-[400px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[600px] h-[400px] object-cover"
                  alt=""
                  src="/img-61151@2x.png"
                />
                <div className="absolute top-[170px] left-[270px] rounded-81xl flex flex-row items-start justify-start p-3">
                  <img className="w-9 relative h-9" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-20 px-[108px] gap-[40px]">
            <div className="flex flex-col items-start justify-start">
              <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                FAQ
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px] text-xl font-sf-title-2-regular">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    What is the cost of a mobile application?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    Do you provide a guarantee for the mobile application?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-start justify-start py-3 px-0 gap-[16px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block">
                      How long will development take?
                    </div>
                    <div className="w-[524px] relative leading-[20px] inline-block text-mini font-sf-pro-text">
                      <p className="m-0 tracking-[-0.24px]">
                        Development terms directly depend on the requirements
                        for the mobile application, the characteristics of the
                        company, as well as the wishes of the customer.
                      </p>
                      <p className="m-0 tracking-[-0.24px]">&nbsp;</p>
                      <p className="m-0 tracking-[-0.24px]">
                        Average development time from start to finished
                        application:
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          Medium projects up to
                        </span>
                        <span className="text-base tracking-[-0.32px] font-semibold font-sf-pro-text">
                          {" "}
                          3 months.
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          <span>{`Large projects about `}</span>
                          <span className="font-semibold font-sf-pro-text">
                            4-6 months.
                          </span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          <span>
                            To get a more accurate estimate of the project
                            completion time, it is necessary to determine the
                            main task of the application, think over its logic
                            and functionality.
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-81xl flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-361.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    I will not tell my idea, do you guarantee confidentiality?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_2px_24px_rgba(0,_0,_0,_0.08)] rounded-xl bg-gray-300 flex flex-col items-center justify-start p-6 gap-[40px] text-sm text-darkgray font-sf-pro-text">
          <img
            className="w-[290px] relative h-[113px] object-cover"
            alt=""
            src="/logobg3-2@2x.png"
          />
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/smartphone-outline-24.svg"
                />
                <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
                  Contact nums
                </div>
              </div>
              <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
                +91 0000000000
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/mail-outline-24@2x.png"
                />
                <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
                  Gmail
                </div>
              </div>
              <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
                demo@gmail.com
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/place-outline-241@2x.png"
                />
                <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
                  Adress
                </div>
              </div>
              <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
                Mumbai, India
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/document-outline-24.svg"
                />
                <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
                  Leave a request
                </div>
              </div>
              <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
                Leave a request
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start text-smi text-white">
            <div className="relative tracking-[-0.08px] leading-[16px]">
              We work throughout the world
            </div>
          </div>
        </div>
      </div>
      <LogoBarWrapper />
      <FrameComponent5 />
    </div>
  );
};

export default Desktop;
