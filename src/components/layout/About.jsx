import { forwardRef } from "react";
import { ButtonLink } from "../ui/Button";

export const About = ({ aboutRef }) => {
  console.log(aboutRef);
  return (
    <div
      ref={aboutRef}
      className="sm:py-24 sm:px-20 py-16 px-4  flex flex-col  gap-12  bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex justify-center ">
        <ButtonLink Button={"About Me"}></ButtonLink>
        {/* <button
          className=" py-1 px-5 text-black rounded-xl bg-gray-200
        "
        >
          About Me
        </button> */}
      </div>

      <div className="w-full sm:grid grid-cols-2  flex flex-col gap-12 py-8">
        <div className="w-ful">
          <img
            className=" border-8 border-white sm:size-96 flex flex-col justify-center sm:justify-start size-72"
            src="/avatar.png"
            alt=""
          />
        </div>
        <div>
          <h2 className="sm:text-3xl text-2xl font-semibold  dark:text-gray-50">
            Curious about me? Here you have it:
          </h2>

          <div className=" w-full flex flex-col *:text-base *:text-justify *:text-gray-600  *:dark:text-gray-300 mt-6 gap-4 selection:underline-offset-8 ">
            <p>
              I'm a passionate, <em> self-proclaimed designer</em> who
              specializes in full stack development (React.js & Node.js). I am
              very enthusiastic about bringing the technical and visual aspects
              of digital products to life. User experience, pixel perfect
              design, and writing clear, readable, highly performant code
              matters to me.
            </p>

            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="list-disc grid grid-cols-2  ml-4">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
