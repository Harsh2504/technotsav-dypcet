import React from 'react';
import EventCard from './EventCard';

const Events = () => {
  const eventData = {
    departments: [
      {
        cse: {
          name: 'Computer Science Engineering',
          events: [
            {
              title: 'Code Clash',
              description: 'Competitive coding event for problem solvers.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/cse-codeclash',
              route: '/events/cse/code-clash',
            },
            {
              title: 'Debug Duel',
              description: 'A race to find and fix bugs in real-time.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/cse-debugduel',
              route: '/event/debug-duel',
            },
            {
              title: 'HackMaze',
              description: 'Navigate through logic puzzles and hacking challenges.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/cse-hackmaze',
              route: '/event/hackmaze',
            },
          ],
        },
      },
      {
        aiml: {
          name: 'Artificial Intelligence & Machine Learning',
          events: [
            {
              title: 'AI Quest',
              description: 'Test your knowledge of AI concepts and tools.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/aiml-aiquest',
              route: '/event/ai-quest',
            },
            {
              title: 'Model Madness',
              description: 'Build ML models to solve real-world problems.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/aiml-modelmadness',
              route: '/event/model-madness',
            },
            {
              title: 'Vision Vault',
              description: 'Compete in a computer vision challenge.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/aiml-visionvault',
              route: '/event/vision-vault',
            },
          ],
        },
      },
      {
        mech: {
          name: 'Mechanical Engineering',
          events: [
            {
              title: 'Robo Race',
              description: 'Race your custom-built bots on our technical track.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/mech-roborace',
              route: '/event/robo-race',
            },
            {
              title: 'Robo Clash',
              description: 'Bot battles for mechanical glory.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/mech-roboclash',
              route: '/event/robo-clash',
            },
            
          ],
        },
      },
      {
        civil: {
          name: 'Civil Engineering',
          events: [
            {
              title: 'Bridge Battle',
              description: 'Build the strongest bridge using provided materials.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/civil-bridgebattle',
              route: '/event/bridge-battle',
            },
            {
              title: 'Tower Tussle',
              description: 'Construct the tallest and sturdiest tower.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/civil-towertussle',
              route: '/event/tower-tussle',
            },
            {
              title: 'Survey Sprint',
              description: 'Compete in land surveying and leveling tasks.',
              logo: 'src/assets/react.svg',
              formLink: 'https://example.com/form/civil-surveysprint',
              route: '/event/survey-sprint',
            },
          ],
        },
      },
    ],
  };
  

  return (
    <div>
      <h1 className="text-5xl md:text-7xl mb-5 md:mb-10  md:my-10 px-5 md:px-40 md:h-20  w-screen  text-center spacecrusaders-heading gradient">
        EVENTS
      </h1>
      <p className="text-center text-base md:text-lg text-gray-700 mb-3 md:mb-5 px-5 md:px-40 manrope-paragraph">
      Quickly jump to your department's events by clicking below ..
    </p>

    <div className="flex flex-wrap justify-center items-center gap-4 mb-10 px-5 md:px-40">
      {[
        { id: 'cse', label: 'CSE' },
        { id: 'aiml', label: 'AIML' },
        { id: 'mech', label: 'Mechanical' },
        { id: 'civil', label: 'Civil' },
        { id: 'e&tc', label: 'E&TC' },
        { id: 'arch', label: 'Architecture' },
        { id: 'ecell', label: 'E-Cell' },
      ].map((dept) => (
        <>
        <a
          key={dept.id}
          href={`#${dept.id}`}
          className="  hidden md:block text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] hover:bg-[#30538e]  hover:text-white transition-all duration-100"
        >
          {dept.label}
        </a>
        <a
          key={dept.id}
          href={`#${dept.id}`}
          className=" block md:hidden text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] active:bg-[#30538e]  active:text-white transition-all duration-100"
        >
          {dept.label}
        </a>
        </>
      ))}
    </div>
      {eventData.departments.map((department, index) => {
        const [key, dept] = Object.entries(department)[0];
        return (
          <div
          key={key}
          className={`flex flex-col justify-center items-center py-10 md:py-20 px-5 md:px-40 w-screen min-h-screen ${
            index % 2 === 0
            ? 'bg-gradient-to-b from-[#e3e3e3] via-[#e3e3e3] to-[#ccd8e3]'
            : 'bg-gradient-to-b from-[#ccd8e3] via-[#ccd8e3] to-[#e3e3e3]'
          }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold fustat-heading text-center mb-10">
              {dept.name.split(' ').map((word, i) => (
          <span key={i}>
            <span className="gradient">{word[0]}</span>
            {word.slice(1)}{' '}
          </span>
              ))}
            </h1>

            {/* Render each event card */}
            <div
              className={`grid gap-10 justify-center ${
          dept.events.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
              }`}
            >
              {dept.events.map((event, idx) => (
          <EventCard key={event.title + idx} dept={event} />
              ))}
            </div>

          </div>
        );
      })}

    </div>
  );
};

export default Events;
