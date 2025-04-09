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
      <h1 className="text-6xl px-10 md:px-40 my-10 w-screen h-[40px] text-center spacecrusaders-heading">
        EVENTS
      </h1>

      {eventData.departments.map((department, index) => {
        const [key, dept] = Object.entries(department)[0];
        return (
          <div
            key={key}
            className={`flex flex-col justify-start items-center py-10 md:py-20 px-10 md:px-40 w-screen min-h-screen ${
              index % 2 === 0 ? 'bg-[#d7d7d7]' : ''
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold fustat-heading text-center mb-10">
              {dept.name}
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
