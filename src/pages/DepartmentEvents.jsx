import React from 'react';
import { useParams } from 'react-router-dom';
import EventCard from '../components/EventCard'; // assuming you have this component
import dypcet_logo from "/images/DYPCET_white.png";
import bg from "/images/bg.jpg";
import { useRef } from 'react';
import { HiChevronLeft } from "react-icons/hi";
import mouseScroll from "/images/mouseScroll.png";
const DepartmentEvents = () => {
    const { dept } = useParams();
    const imageRef = useRef(null);
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30; // Adjust multiplier for intensity
        const y = (e.clientY / innerHeight - 0.5) * 30;

        if (imageRef.current) {
            imageRef.current.style.transform = `translate(${x}px, ${y}px) `; // Optional: slight zoom
        }
    };
    const resetTransform = () => {
        if (imageRef.current) {
            imageRef.current.style.transform = `translate(0, 0) scale(1)`;
        }
    };
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

    const department = eventData.departments.find(dep => Object.keys(dep)[0].toLowerCase() === dept.toLowerCase());

    if (!department) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{dept.toUpperCase()} Department Events</h1>
                <p>No events available for this department.</p>
            </div>
        );
    }

    const [key, deptData] = Object.entries(department)[0];

    return (
        <div>
            <button 
                    onClick={() => window.location.href="/"} 
                    className=" fixed hidden top-5 left-5 border-2 md:flex justify-center items-center gap-1 text-[#365b9e] duration-200 cursor-pointer border-[#365b9e] transition-all ease-in-out hover:bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-xl hover:text-white px-4 py-2 font-black md:font-bold fustat-heading active:scale-95 "
                  >
                    <HiChevronLeft className="text-2xl " />
                    Back
                  </button>
                    <button 
                    onClick={() => window.location.href="/"} 
                    className="absolute  md:hidden top-5 left-5 border-2 flex justify-center items-center gap-1 text-base text-white duration-200 cursor-pointer border-[#365b9e] transition-all ease-in-out bg-[linear-gradient(to_bottom,_#30538e,_#5c89ff)] rounded-xl  px-2 py-2  font-medium fustat-heading active:scale-95 "
                  >
                    <HiChevronLeft className="text-xl" />
                   Back
                  </button>
            {/* <div>
                <img
                    src={dypcet_logo}
                    alt="Dypcet Logo"
                    className="w-60 md:w-80 object-cover absolute top-40 md:top-30  left-1/2  transform -translate-x-1/2 z-10 fade-up"
                />

                <div className="absolute bottom-10  left-1/2  transform -translate-x-1/2 flex flex-col items-center justify-center opacity-70">  
             
        
                </div>
                <div
                className="absolute inset-0 bg-fixed bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bg})`,
                  transform: "translateZ(-1px) scale(2)",
                  zIndex: "-1",
                }}
              ></div>
                <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTransform}
                >
                    <img

                        src={bg}
                        alt="Background"
                        className="absolute block md:hidden inset-0 w-full h-full object-cover transition-transform duration-200 ease-out scale-105  pointer-events-none"
                    />
                    <img
                        ref={imageRef}
                        src={bg}
                        alt="Background"
                        className="absolute hidden md:block inset-0 w-full h-full object-cover transition-transform duration-200 ease-out scale-105  pointer-events-none"
                    />
                    {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

                    {/* <div
                        className="absolute inset-0 bg-fixed bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${bg})`,
                            transform: "translateZ(-1px) scale(2)",
                            zIndex: "-1",
                        }}
                    ></div>
                    <p className="absolute top-70 md:top-71 text-center md:left-42 text-2xl md:text-4xl font-bold text-white/50 fustat-heading fade-up">
                        DYPCET
                    </p>
                    <h1 className="title absolute text-3xl top-76 md:top-75 md:text-9xl font-bold text-transparent opacity-90 bg-clip-text bg-gradient-to-r from-[#cccee9] via-[#92adfa] to-[#99fffd] spacecrusaders-heading text-center fade-up">
                        {deptData.name.split(' ').map((word, i) => (
                            <span key={i}>
                                <span className="gradient">{word[0]}</span>
                                {word.slice(1)}{' '}
                            </span>
                        ))}
                    </h1>
                    <p className="absolute top-102 md:top-106 text-center md:right-42 text-xl md:text-2xl font-bold text-white/80 fustat-heading fade-up">
                        24th & 25th April
                    </p> */}

                    {/* Buttons */}

                    {/* <div className="absolute bottom-10  left-1/2  transform -translate-x-1/2 flex flex-col items-center justify-center opacity-70 ">
                        <img
                            src={mouseScroll}
                            alt="Mouse Scroll"
                            className="animate-bounce  w-15 h-15 object-cover fade-up"
                        />
                        <p className="text-white text-base md:text-xl fustat-heading fade-up">Scroll for More</p>
                    </div> */}
                    {/* Modal */}

                {/* </div>

            </div>  */}
            <div
                className={`flex flex-col justify-center items-center py-20 md:py-20 px-5 md:px-40 w-screen min-h-screen bg-gradient-to-b from-[#e3e3e3] via-[#e3e3e3] to-[#ccd8e3]`}
            >
                <h1 className="text-4xl md:text-6xl font-bold fustat-heading text-center mb-10 element-fade">
                    {deptData.name.split(' ').map((word, i) => (
                        <span key={i}>
                            <span className="gradient">{word[0]}</span>
                            {word.slice(1)}{' '}
                        </span>
                    ))}
                </h1>

                <div
                    className={`grid gap-10 justify-center element-fade ${deptData.name === 'Techno Highlights'
                        ? 'grid-cols-1 md:grid-cols-2'
                        : deptData.events.length === 2
                            ? 'grid-cols-1 md:grid-cols-2'
                            : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                        }`}
                >
                    {deptData.events.map((event, idx) => (
                        <EventCard key={event.title + idx} dept={event} animToggle={false}/>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default DepartmentEvents;
