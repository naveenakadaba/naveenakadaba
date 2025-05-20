import { useState } from "react";
import Container from "src/components/Container";
import Divider from "src/components/Divider";
import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Phone as PhoneIcon,
  EnvelopeAt as EnvelopeAltIcon,
} from "react-bootstrap-icons";
import photo from "src/photo.png";
import ushurLogo from "src/logos/ushur.png";
import tescoLogo from "src/logos/tesco.png";
import swiggyLogo from "src/logos/swiggy.jpeg";
import coviamLogo from "src/logos/coviam.png";
import mapplinksLogo from "src/logos/mapplinks.jpeg";

const App = () => {
  const [skills] = useState([
    "React",
    "NodeJS",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Redux",
    "Mongodb",
    "Redis",
    "Rabbitmq",
    "Playwright",
    "HAProxy",
    "Lerna",
    "Vite",
    "Webpack",
  ]);
  const [orgs] = useState([
    {
      name: "Ushur",
      logo: ushurLogo,
      designation: "Lead UI Developer",
      experience: "2.5+ years",
      url: "https://ushur.com",
    },
    {
      name: "Tesco",
      logo: tescoLogo,
      designation: "SDE2",
      experience: "3.5+ years",
      url: "https://tesco.com",
    },
    {
      name: "Swiggy",
      logo: swiggyLogo,
      designation: "UI Engineer 2",
      experience: "1.5+ years",
      url: "https://swiggy.com",
    },
    {
      name: "Coviam",
      logo: coviamLogo,
      designation: "Lead Engineer",
      experience: "Less than a year",
      url: "https://coviam.com",
    },
    {
      name: "Mapplinks",
      logo: mapplinksLogo,
      designation: "Senior Web Developer",
      experience: "1.5+ years",
      url: "https://mapplinks.com",
    },
  ]);

  const renderSkills = () => {
    return skills.map((skill) => (
      <div key={skill} className="mr-4 mb-4">
        <span className="block w-[100px] py-1 rounded text-center font-medium bg-white border-1 border-gray-100">
          {skill}
        </span>
      </div>
    ));
  };

  const renderExperience = () => {
    return orgs.map((org) => (
      <div
        key={org.name}
        className="w-100 sm:max-w-[160px] p-4 sm:mr-4 mb-4 text-center bg-white shadow-lg"
      >
        <div className="max-w-[120px] border-1 border-gray-100 mb-2 mx-auto">
          <a
            href={org.url}
            title={org.name}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img className="h-auto w-full" alt={org.name} src={org.logo} />
          </a>
        </div>

        <h3 className="font-bold mb-2">{org.name}</h3>
        <p className="text-sm mb-2">{org.designation}</p>
        <p className="text-sm text-gray-500">{org.experience}</p>
      </div>
    ));
  };

  return (
    <div className="border-t-4 border-orange-600">
      <Container width="1024px">
        <div className="mx-4 sm:mx-8">
          <div className="p-8 pb-0 bg-white shadow-xl">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                className="w-auto max-h-[240px] sm:max-h-[480px] max-w-full mx-auto"
                alt="photo"
                src={photo}
              />

              <span className="block sm:hidden h-[1px] w-[240px] bg-gray-100 mb-4" />

              <div className="sm:flex-1">
                <p className="font-bold sm:text-xl text-center mb-2">Hello</p>

                <h1 className="font-bold text-xl sm:text-3xl text-center mb-2">
                  I'm <span className="text-orange-600">Naveena Kadaba</span>
                </h1>

                <p className="text-center mb-8">
                  A passionate JavaScript Developer from India
                </p>

                <div className="flex flex-row flex-nowrap justify-center mb-8">
                  <span className="mr-4">
                    <a
                      className="text-orange-500"
                      href="https://www.linkedin.com/in/naveenakadaba/"
                      title="LinkedIn"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <LinkedinIcon size={28} />
                    </a>
                  </span>

                  <a
                    className="text-orange-500"
                    href="https://github.com/naveenakadaba"
                    title="Github"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <GithubIcon size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4 sm:mx-8">
            <div className="mt-8 mb-8">
              <h2 className="font-bold text-2xl">About me</h2>
              <span className="block h-[4px] w-[40px] bg-orange-600 mb-4" />

              <p>
                I live in Bangalore, India working full time as a JavaScript
                developer. I've been building stuff on the web for the last 12
                years, working with multiple organizations. I like to code
                things from scratch, and enjoy bringing ideas to life in the
                browser. I absolutely love learning new things and taking on new
                challenges.
              </p>
            </div>

            <div className="mb-8">
              <Divider />
            </div>

            <div className="mb-4">
              <h2 className="font-bold text-2xl">Skills</h2>
              <span className="block h-[4px] w-[40px] bg-orange-600 mb-4" />

              <div className="max-w-[640px]">
                <div className="flex flex-row flex-wrap">{renderSkills()}</div>
              </div>
            </div>

            <div className="mb-8">
              <Divider />
            </div>

            <div className="mb-4">
              <h2 className="font-bold text-2xl mb-2">Experience</h2>
              <span className="block h-[4px] w-[40px] bg-orange-600 mb-4" />

              <div className="flex flex-col sm:flex-row sm:flex-wrap">
                {renderExperience()}
              </div>
            </div>

            <div className="mb-8">
              <Divider />
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-2xl mb-2">Contact</h2>
              <span className="block h-[4px] w-[40px] bg-orange-600 mb-4" />

              <div className="flex flex-row flex-nowrap items-center mb-2">
                <span className="mr-2">
                  <PhoneIcon size={20} />
                </span>
                <span>+91-9482343699</span>
              </div>

              <div className="flex flex-row flex-nowrap items-center">
                <span className="mr-2">
                  <EnvelopeAltIcon size={20} />
                </span>
                <span>naveenakadaba@gmail.com</span>
              </div>
            </div>

            <div className="mb-8">
              <Divider />
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-2xl mb-2">Resume</h2>
              <span className="block h-[4px] w-[40px] bg-orange-600 mb-4" />

              <a
                className="block w-[160px] px-2 py-1 rounded text-center bg-orange-600 text-white"
                href="https://drive.google.com/file/d/1S84O6ylWZGF4MEpCEBQFkLL2Z8LFgb4Z/view?usp=drive_link"
                title="Download"
                rel="noreferrer noopener"
                target="_blank"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
