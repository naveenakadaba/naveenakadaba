import { useState } from "react";
import Container from "src/components/Container";
import Divider from "src/components/Divider";
import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Phone as PhoneIcon,
  EnvelopeAt as EnvelopeAltIcon,
} from "react-bootstrap-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import monokai from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";
import photo from "src/photo.jpeg";

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
      logo: "src/logos/ushur.png",
      designation: "Lead UI Developer",
      experience: "Less than a year",
      url: "https://ushur.com",
    },
    {
      name: "Tesco",
      logo: "src/logos/tesco.png",
      designation: "SDE2",
      experience: "3.5+ years",
      url: "https://tesco.com",
    },
    {
      name: "Swiggy",
      logo: "src/logos/swiggy.jpeg",
      designation: "UI Engineer 2",
      experience: "1.5+ years",
      url: "https://swiggy.com",
    },
    {
      name: "Coviam",
      logo: "src/logos/coviam.png",
      designation: "Lead Engineer",
      experience: "Less than a year",
      url: "https://coviam.com",
    },
    {
      name: "Mapplinks",
      logo: "src/logos/mapplinks.jpeg",
      designation: "Senior Web Developer",
      experience: "1.5+ years",
      url: "https://mapplinks.com",
    },
  ]);

  const renderSkills = () => {
    return skills.map((skill) => (
      <div key={skill} className="mr-4 mb-4">
        <span className="block w-[120px] py-1 rounded text-center font-medium border border-solid">
          {skill}
        </span>
      </div>
    ));
  };

  const renderExperience = () => {
    return orgs.map((org) => (
      <div key={org.name} className="mr-4 mb-4 text-center">
        <div className="w-[120px] border border-dotted border-solid mb-2">
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
    <Container width="1024px">
      <div className="mx-8">
        <div className="mb-4 mt-8">
          <div className="flex flex-row items-center">
            <div className="w-[240px] rounded-full overflow-hidden shadow-2xl mr-4 mb-4">
              <img className="h-auto w-100" alt="photo" src={photo} />
            </div>

            <div className="mb-4">
              <h1 className="font-bold text-3xl mb-4">Naveena Kadaba</h1>

              <div className="flex flex-row flex-nowrap">
                <span className="mr-4">
                  <a
                    href="https://www.linkedin.com/in/naveenakadaba/"
                    title="LinkedIn"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <LinkedinIcon size={28} />
                  </a>
                </span>

                <a
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

        <div className="mb-8">
          <Divider />
        </div>

        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-2">About me</h2>
          <p>
            I live in Bangalore, India working full time as a JavaScript
            developer. I've been building stuff on the web for the last 10
            years, working with multiple organizations. I like to code things
            from scratch, and enjoy bringing ideas to life in the browser. I
            absolutely love learning new things and taking on new challenges. I
            believe in quality not in quantity.
          </p>
        </div>

        <div className="mb-8">
          <Divider />
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-2">Skills</h2>
          <div className="max-w-[640px]">
            <div className="flex flex-row flex-wrap">{renderSkills()}</div>
          </div>
        </div>

        <div className="mb-8">
          <Divider />
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-2">Experience</h2>
          <div className="max-w-[640px]">
            <div className="flex flex-row flex-wrap">{renderExperience()}</div>
          </div>
        </div>

        <div className="mb-8">
          <Divider />
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-2xl mb-2">Portfolio</h2>
          <p className="mb-2">
            Built a NodeJS framework on top of Express which takes advantage of
            TypeScript decorators.
          </p>

          <div className="pb-4">
            <SyntaxHighlighter language="javascript" style={monokai}>
              {`@Controller("/users")
class UserController extends BaseController {
  public constructor(private userService = new UserService()) {
    super();
  }

  @BasicAuth()
  @Post("/")
  public async create(
    @Body() createUserDto: CreateUserDto,
    requestContext: RequestContext
  ): Promise<Response> {
    const responseBuilder = new ResponseBuilder();
    responseBuilder.setStatus(201);
    responseBuilder.setBody(
      JsonMapper.mapDto(
        await this.userService.create(
          createUserDto,
          requestContext.getAttribute("provider") as string
        )
      )
    );
    return responseBuilder.build();
  }`}
            </SyntaxHighlighter>
          </div>

          <div className="pb-4">
            <SyntaxHighlighter language="javascript" style={monokai}>
              {`@Service()
class UserService extends BaseService {
  constructor(
    private userRepository = new UserRepository(),
    private roleRepository = new RoleRepository()
  ) {
    super();
  }

  public async create(
    @ValidationSchema(createUserSchema) createUserDto: CreateUserDto,
    provider: string
  ): Promise<UserResponseDto> {
    if (await this.userRepository.findByEmail(createUserDto.getEmail())) {
      const errorCode = errorCodes.ERR_EMAIL_EXISTS;
      throw new ClientError(409, errorCode, errorMessages[errorCode]);
    }`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="mb-8">
          <Divider />
        </div>

        <div className="mb-8">
          <h2 className="font-bold text-2xl mb-2">Contact</h2>

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
          <a
            className="block w-[160px] px-2 py-1 rounded text-center bg-orange-600 text-white"
            href="https://drive.google.com/file/d/1EKA6qff2KltcKJwnYKGKLig6Z9hhxW0P/view?usp=sharing"
            title="Download"
            rel="noreferrer noopener"
            target="_blank"
          >
            Download
          </a>
        </div>
      </div>
    </Container>
  );
};

export default App;
