const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                I am an allround web developer. I am a senior programmer with
                good knowledge of front-end and back-end techniques. I love
                structure and order and I also stand for quality. I love
                spending time on fixing little details and optimizing web apps.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                Also I like working in a team, you&apos;ll learn faster and much
                more. Currently Python and Typescript are very close to my
                heart. Developing few side projects to learn more advanced
                applications using Go routines and React.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
