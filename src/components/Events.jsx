import React, { useRef } from 'react'
import EventCard from './EventCard';

const Events = () => {
  const departmentRefs = useRef({});

  const eventData = {
    departments: [
      {
        techl: {
          name: 'Techno Highlights',
          events: [
            {
              title: 'Technical Paper Presentation',
              description: 'Present your innovative research and technical papers across futuristic engineering domains including AI, Robotics, Cybersecurity, and more....',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png', // replace with actual logo path if available
              formLink: 'https://forms.gle/LETfKW8fReEtLX4D8',
              route: '/events/techl/technical-paper-presentation',
            },
            {
              title: 'IPL Auction',
              description: 'Form your Dream11 team by bidding on your favorite players with a ₹100 crore purse in this intense and strategic auction competition, preceded by a thrilling IPL quiz.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfyYVfahF4HxNZc7Zn6KXUch6lsJ4yoabYTJMSvKOSEhrkbsw/viewform?usp=header',
              route: '/events/techl/ipl-auction',
            },
            {
              title: 'Blender Workshop',
              description: 'A hands-on workshop and competition on 3D modeling, texturing, lighting, and animation using Blender. Ideal for beginners & intermediate learners looking to boost their creative portfolio.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2WhpUEoNHftkvDg6wx7bfIZSjg1TKrsoqSmgmr2yZQFtBw/viewform?usp=header',
              route: '/events/techl/blender-workshop',
            },
       
            {
              title: 'Reel Rumble',
              description: 'A solo reel-making contest capturing the essence of Technotsav over two days. Shoot, edit, and submit a 90-second reel to showcase your creativity and content creation skills.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: '', // No separate form link provided, uses coordinator submission
              route: '/events/techl/reel-rumble',
            },
            
          ],
        }
      },

      {
        aiml: {
          name: 'Artificial Intelligence & Machine Learning',
          events: [
            {
              title: 'Launch Pad',
              description: 'Pitch your product or idea to expert judges.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/6KGSfg5h1kAXaknu6',
              route: '/events/aiml/launch-pad'
            },
            {
              title: 'Poster Intelli Quest',
              description: 'Showcase AI ideas through engaging poster presentations.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/yQ5BjzBSBhvN1yz37',
              route: '/events/aiml/poster-intelli-quest'
            },
            {
              title: 'Dare to Battle 1.0',
              description: 'Esports event for BGMI and Free Fire enthusiasts.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeFV3lT4fh_QSWSLjUxoQu47gNMp9KRZtIiTSC_YyBPtDhq0g/viewform?usp=sf_link',
              route: '/events/aiml/dare-to-battle-1-0'
            }
          ]
        }
      },

      {
        chem: {
          name: 'Chemical Engineering',
          events: [
            {
              title: 'Project Competition',
              description: 'Showcase your innovative projects that contribute to chemical, biotech, pharma, or environmental fields for societal betterment.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/wxoMCHkB9nDajgvr5',
              route: '/events/chem/project-competition',
            },
            {
              title: 'Product Development',
              description: 'Bring and present your innovative product with live samples and informative PPTs—aimed at solving real-world problems.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/wxoMCHkB9nDajgvr5',
              route: '/events/chem/product-development',
            },
            {
              title: 'Model Competition',
              description: 'Present experimental setups or working models with a 7-minute explanation and a 3-minute Q&A session.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/wxoMCHkB9nDajgvr5',
              route: '/events/chem/model-competition',
            },
          ],
        },
      },

      {
        civil: {
          name: 'Civil Engineering',
          events: [
            {
              title: 'Setu Bandha Re',
              description: 'Model bridges promote the study and application of engineering and help students develop “hands-on” skills...',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/9SJMFgBoh7bCpcVEA',
              route: '/events/civil/setu-bandha-re',
            },
            {
              title: 'Cube Crush Challenge',
              description: 'Test your understanding of concrete mix design and aim to achieve 40 N/mm² strength in 7 days...',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/9SJMFgBoh7bCpcVEA',
              route: '/events/civil/cube-crush-challenge',
            },
            {
              title: 'The Designer',
              description: 'Showcase your skills in CAD by solving real-world design problems using AutoCAD.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/9SJMFgBoh7bCpcVEA',
              route: '/events/civil/the-designer',
            },
          ],
        },
      },

      {
        cse: {
          name: 'Computer Science Engineering',
          events: [
            {
              title: 'Android App Development Competition',
              description: 'A competitive showcase of innovative Android applications designed and developed by participants.',
              logo: 'https://media.discordapp.net/attachments/1359769171042242570/1360053329438441614/pngegg.png?ex=67f9b7de&is=67f8665e&hm=d06130b1a094e34a278436bcbb8d6b751b82a572a1117f1ae0ded867583767fb&=&format=webp&quality=lossless&width=320&height=320',
              formLink: 'https://forms.gle/ZDk7saKFrxWFt9o5A',
              route: '/events/cse/android-app-development-competition',
            },
            {
              title: 'Infinity Hunt',
              description: 'Treasure hunt style event filled with puzzles, coding challenges, and mystery trails.',
              logo: 'https://media.discordapp.net/attachments/1359769171042242570/1360054631870496798/infinity.png?ex=67f9b914&is=67f86794&hm=e482c63118aab4567cef6823265e65ac6484102bbd4fb941b312429a31b8f3a6&=&format=webp&quality=lossless&width=640&height=640',
              formLink: 'https://forms.gle/rPEdVgzPxxiLNcJ68',
              route: '/events/cse/infinity-hunt',
            },
            {
              title: 'Code Sprint',
              description: 'Relay-style team coding competition involving debugging, problem-solving, and fast-paced challenges.',
              logo: 'https://media.discordapp.net/attachments/1359769171042242570/1360055317706309722/code.png?ex=67f9b9b8&is=67f86838&hm=c0d2fd6237f8aed6db4b020a97c06efc0e2780c06dc3c398fc04b977e20ce857&=&format=webp&quality=lossless&width=640&height=640',
              formLink: 'https://forms.gle/vPCGzVFZdjiAcMAx5',
              route: '/events/cse/code-sprint',
            },
          ],
        },
      },      
         
      {
        "e&tc": {
          name: 'Electronic & Telecommunication Engineering',
          events: [
            {
              title: 'Project Competition',
              description: 'Display and present your electronics and telecom-related projects to win exciting prizes!',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/uGh83F49w3MmtauN9',
              route: '/events/e&tc/project-competition',
            },
            {
              title: 'Robo Soccer',
              description: 'Design and control robots to compete in a soccer match. Goals, tactics, and fun await!',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://forms.gle/uGh83F49w3MmtauN9',
              route: '/events/e&tc/robo-soccer',
            },
            {
              title: 'Drone Competition',
              description: 'Show off your drone piloting and innovation in this aerial challenge aimed at societal impact.',
              logo: 'https://media.discordapp.net/attachments/1359769171042242570/1360056457101574204/drone.png?ex=67f9bac8&is=67f86948&hm=e706c6c67c7245b13e4dd4248b601bf236de1580f42b2195091a7b1263f3aef3&=&format=webp&quality=lossless&width=640&height=640',
              formLink: 'https://forms.gle/uGh83F49w3MmtauN9',
              route: '/events/e&tc/drone-competition',
            },
          ],
        }
      }, 

      {
        mech: {
          name: 'Mechanical Engineering',
          events: [
            {
              title: 'Robo Race',
              description: 'Race your custom-built bots on our technical track.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/robo-race',
            },
            {
              title: 'CAD Clash',
              description: 'National-level design competition for CAD software skills.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/cad-clash',
            },
            {
              title: 'Tech Debate',
              description: 'Technical debate competition on current engineering topics.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/tech-debate',
            },
          ],
        },
      },
    
      {
        arch: {
          name: 'School of Architecture Engineering',
          events: [
            {
              title: 'Unsinkable Designs',
              description: 'Design and build floating structures that redefine liveable spaces on water, testing buoyancy and creativity.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZ-JrXi4hygMN3bkfwH2Vuk7StStZEO8z-CdYXf0NXewkyjQ/viewform',
              route: '/events/arch/unsinkable-designs',
            },
            {
              title: 'Design Relay',
              description: 'A fast-paced design challenge where teams solve creative tasks in a relay format.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZ-JrXi4hygMN3bkfwH2Vuk7StStZEO8z-CdYXf0NXewkyjQ/viewform',
              route: '/events/arch/design-relay',
            },
            {
              title: 'Quiz Battle',
              description: 'A competitive quiz event testing engineering concepts, logical thinking, and teamwork.',
              logo: 'https://cdn.pixabay.com/photo/2022/07/22/12/21/atom-7337993_1280.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZ-JrXi4hygMN3bkfwH2Vuk7StStZEO8z-CdYXf0NXewkyjQ/viewform',
              route: '/events/arch/quiz-battle',
            },
          ],
        },
      },
    ],
  };

  const handleScrollTo = (id) => {
    if (departmentRefs.current[id]) {
      departmentRefs.current[id].scrollIntoView({ behavior: 'smooth' });
    }
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
        { id: 'techl', label: 'Techno Highlights' },
        { id: 'aiml', label: 'AIML' },
        { id: 'chem', label: 'Chemical' },
        { id: 'civil', label: 'Civil' },
        { id: 'cse', label: 'CSE' },
        { id: 'e&tc', label: 'E&TC' },
        { id: 'mech', label: 'Mechanical' },
        { id: 'arch', label: 'Architecture' },
        
      ].map((dept) => (
        <>
        <button
          key={dept.id}
          onClick={() => handleScrollTo(dept.id)}
          className="  hidden md:block text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] hover:bg-[#30538e] active:scale-95 hover:text-white transition-all duration-100"
        >
          {dept.label}
        </button>
        <button
          key={dept.id}
          onClick={() => handleScrollTo(dept.id)}
          className=" block md:hidden text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] active:bg-[#30538e] active:scale-95  active:text-white transition-all duration-100"
        >
          {dept.label}
        </button>
        </>
      ))}
    </div>
    {eventData.departments.map((department, index) => {
        const [key, dept] = Object.entries(department)[0];

        return (
          <div
            key={key}
            ref={(el) => (departmentRefs.current[key] = el)}
            id={key}
            className={`flex flex-col justify-center items-center py-10 md:py-20 px-5 md:px-40 w-screen min-h-screen ${
              index % 2 === 0
                ? 'bg-gradient-to-b from-[#e3e3e3]/0 via-[#e3e3e3]/0 to-[#ccd8e3]/0 '
                : 'bg-gradient-to-b from-[#ccd8e3]/0 via-[#ccd8e3]/0 to-[#e3e3e3]/0 '
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

            <div
              className={`grid gap-10 justify-center ${
                dept.events.length === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
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
