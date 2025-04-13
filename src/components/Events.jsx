import React, { useRef } from 'react'
import EventCard from './EventCard';
import poster from "/images/poster.jpg";
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744451119/presentation_ugx3d7.png', // replace with actual logo path if available
              formLink: 'https://forms.gle/LETfKW8fReEtLX4D8',
              route: '/events/techl/technical-paper-presentation',
            },
            {
              title: 'IPL Auction',
              description: 'Form your Dream11 team by bidding on your favorite players with a ₹100 crore purse in this intense and strategic auction competition, preceded by a thrilling IPL quiz.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744452010/auction_qibld4.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfyYVfahF4HxNZc7Zn6KXUch6lsJ4yoabYTJMSvKOSEhrkbsw/viewform?usp=header',
              route: '/events/techl/ipl-auction',
            },
            {
              title: 'Blender 3d Modelling Workshop',
              description: 'A hands-on workshop and competition on 3D modeling, texturing, lighting, and animation using Blender. Ideal for beginners & intermediate learners looking to boost their creative portfolio.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744452324/blender-1_utioj7.svg',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2WhpUEoNHftkvDg6wx7bfIZSjg1TKrsoqSmgmr2yZQFtBOw/viewform?usp=header',
              route: '/events/techl/blender-3d-modelling-workshop',
            },
       
            {
              title: 'Reel Rumble',
              description: 'A solo reel-making contest capturing the essence of Technotsav over two days. Shoot, edit, and submit a 90-second reel to showcase your creativity and content creation skills.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744454061/reel_lzxlsl.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf3T2hrqSvEhGkFUhoCeXo3DYO6KvfncZOSUS4OS_aldHDWBQ/viewform?usp=sharing', // No separate form link provided, uses coordinator submission
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744453075/idea_zqzqjf.png',
              formLink: 'https://forms.gle/6KGSfg5h1kAXaknu6',
              route: '/events/aiml/launch-pad'
            },
            {
              title: 'Poster Intelli Quest',
              description: 'Showcase AI ideas through engaging poster presentations.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744453706/poster_1_ohvwx6.png',
              formLink: 'https://forms.gle/yQ5BjzBSBhvN1yz37',
              route: '/events/aiml/poster-intelli-quest'
            },
            {
              title: 'Dare to Battle 1.0',
              description: 'Esports event for BGMI and Free Fire enthusiasts.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744453946/gamepad_chaeis.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeFV3lT4fh_QSWSLjUxoQu47gNMp9KRZtIiTSC_YyBPtDhq0g/viewform?usp=sf_link',
              route: '/events/aiml/dare-to-battle'
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744456071/biotechnology_rvjzwn.png',
              formLink: 'https://forms.gle/wxoMCHkB9nDajgvr5',
              route: '/events/chem/project-competition',
            },
            {
              title: 'Product Development',
              description: 'Bring and present your innovative product with live samples and informative PPTs—aimed at solving real-world problems.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744456189/problem-solving_z0jpco.png',
              formLink: 'https://forms.gle/wxoMCHkB9nDajgvr5',
              route: '/events/chem/product-development',
            },
            {
              title: 'Model Competition',
              description: 'Present experimental setups or working models with a 7-minute explanation and a 3-minute Q&A session.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744456441/catalyst_yrvmkk.png',
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744454184/bridge_wfim6b.png',
              formLink: 'https://forms.gle/9SJMFgBoh7bCpcVEA',
              route: '/events/civil/setu-bandha-re',
            },
            {
              title: 'Cube Crush Challenge',
              description: 'Test your understanding of concrete mix design and aim to achieve 40 N/mm² strength in 7 days...',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744454508/wall_gruepw.png',
              formLink: 'https://forms.gle/9SJMFgBoh7bCpcVEA',
              route: '/events/civil/cube-crush-challenge',
            },
            {
              title: 'The Designer',
              description: 'Showcase your skills in CAD by solving real-world design problems using AutoCAD.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744454705/technical-drawing_goc8xn.png',
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744450173/79c0def4-2d23-434e-ad60-acbde22f65de.png',
              formLink: 'https://forms.gle/ZDk7saKFrxWFt9o5A',
              route: '/events/cse/android-app-development-competition',
            },
            {
              title: 'Infinity Hunt',
              description: 'Treasure hunt style event filled with puzzles, coding challenges, and mystery trails.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744450240/438b75e7-d25b-481f-acd9-18bf88df4c19.png',
              formLink: 'https://forms.gle/rPEdVgzPxxiLNcJ68',
              route: '/events/cse/infinity-hunt',
            },
            {
              title: 'Code Sprint',
              description: 'Relay-style team coding competition involving debugging, problem-solving, and fast-paced challenges.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744450255/5247065c-0cd0-4100-8038-47034cba2695.png',
              formLink: 'https://forms.gle/vPCGzVFZdjiAcMAx5',
              route: '/events/cse/code-sprint',
            },
          ],
        },
      },      
         
      {
        "e&tc": {
          name: 'Electronics and Telecommunication Engineering',
          events: [
            {
              title: 'Project Competition',
              description: 'Display and present your electronics and telecom-related projects to win exciting prizes!',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744456573/circuit-board_xiti02.png',
              formLink: 'https://forms.gle/uGh83F49w3MmtauN9',
              route: '/events/e&tc/project-competition',
            },
            {
              title: 'Robo Soccer',
              description: 'Design and control robots to compete in a soccer match. Goals, tactics, and fun await!',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744454905/ball_ft1seg.png',
              formLink: 'https://forms.gle/uGh83F49w3MmtauN9',
              route: '/events/e&tc/robo-soccer',
            },
            {
              title: 'Drone Competition',
              description: 'Show off your drone piloting and innovation in this aerial challenge aimed at societal impact.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744450346/9912a00c-6cc8-400c-96c3-7720898c0763.png',
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
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455191/race-track_oko1q1.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/robo-race',
            },
            {
              title: 'CAD Clash',
              description: 'National-level design competition for CAD software skills.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455366/lightning_pntnlg.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/cad-clash',
            },
            {
              title: 'Tech Debate',
              description: 'Technical debate competition on current engineering topics.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455494/debate_tvl1wr.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSd_rZd84hAqKXISQynoi3ncQ3XSwo8-cVeeymwln7mrp3Q6Sw/viewform?usp=header',
              route: '/events/mech/tech-debate',
            },
          ],
        },
      },
    
      {
        arch: {
          name: 'School of Architecture',
          events: [
            {
              title: 'Unsinkable Designs',
              description: 'Design and build floating structures that redefine liveable spaces on water, testing buoyancy and creativity.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455645/floating_cxnbrk.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZ-JrXi4hygMN3bkfwH2Vuk7StStZEO8z-CdYXf0NXewkyjQ/viewform',
              route: '/events/arch/unsinkable-designs',
            },
            {
              title: 'Design Relay',
              description: 'A fast-paced design challenge where teams solve creative tasks in a relay format.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455741/teamwork_n8ypvh.png',
              formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZ-JrXi4hygMN3bkfwH2Vuk7StStZEO8z-CdYXf0NXewkyjQ/viewform',
              route: '/events/arch/design-relay',
            },
            {
              title: 'Quiz Battle',
              description: 'A competitive quiz event testing engineering concepts, logical thinking, and teamwork.',
              logo: 'https://res.cloudinary.com/dan454ywo/image/upload/v1744455892/battle_ttidpu.png',
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
  const handleDownloadRuleBook = () => {
    const link = document.createElement("a");
    link.href = poster;
    link.download = "Technotsav2K25_Poster.jpg";
    link.click();
  };

  return (
    <div className=' '>
      <h1 className="element-fade text-5xl md:text-7xl mb-5 md:mb-10  md:my-10 px-5 md:px-40 md:h-20  w-screen  text-center spacecrusaders-heading gradient">
        EVENTS
      </h1>
      {/* <div className="my-10  flex gap-3 flex-col items-center justify-center">
          <button
            onClick={handleDownloadRuleBook}
            className="text-[#30538e] font-bold active:text-white w-50 active:bg-gradient-to-b from-[#30538e] to-[#5c89ff] border-[#365b9e] transition-all duration-300 ease-in-out border-2  active:border-[#365b9e] rounded-xl px-4 py-3 active:scale-95"
          >
            Download RuleBook
          </button>
        </div> */}
      <p className="text-center element-fade text-base md:text-lg text-gray-700 mb-3 md:mb-5 px-5 md:px-40 manrope-paragraph">
      Quickly jump to your department's events by clicking below ..
    </p>

    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10 px-5 md:px-40 element-fade">
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
          className="  hidden md:block text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] active:scale-95 hover:text-white transition-all duration-100"
        >
          {dept.label}
        </button>
        <button
          key={dept.id}
          onClick={() => handleScrollTo(dept.id)}
          className=" block md:hidden text-sm md:text-base font-medium fustat-heading px-4 py-2 rounded-full border-2 border-[#30538e] text-[#30538e] active:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] active:scale-95  active:text-white transition-all duration-100"
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
          ? 'bg-gradient-to-b from-[#e3e3e3] via-[#e3e3e3] to-[#ccd8e3] '
          : 'bg-gradient-to-b from-[#ccd8e3] via-[#ccd8e3] to-[#e3e3e3] '
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold fustat-heading text-center mb-10 element-fade">
              {dept.name.split(' ').map((word, i) => (
          <span key={i}>
            <span className="gradient">{word[0]}</span>
            {word.slice(1)}{' '}
          </span>
              ))}
            </h1>

            <div
              className={`grid gap-10 justify-center  ${
          dept.name === 'Techno Highlights'
            ? 'grid-cols-1 md:grid-cols-2'
            : dept.events.length === 2
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
