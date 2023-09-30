const About = () => {
  return (
    <div>
      <div className="flex  h-3/4 flex-col items-center justify-center gap-2">
        <div>
          <h1 className="text-5xl font-black text-blue-600">Shanmukha</h1>

          <p>Full time developer part time farmer</p>
        </div>

        <div className="flex justify-center items-center flex-col mt-10">
          <h1 className="text-3xl font-semibold text-green-600 my-6">
            Tech Stack
          </h1>
          <div className="w-full flex justify-center gap-10">
            <ul className="list-disc">
              <h2 className="text-lg font-bold underline ">Front end</h2>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>EJS</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul className="list-disc">
              <h2 className="text-lg font-bold underline">Backend</h2>
              <li>Node</li>
              <li>Express</li>
              <li>Springboot</li>
            </ul>

            <ul className="list-disc">
              <h2 className="text-lg font-bold underline">Databases</h2>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
