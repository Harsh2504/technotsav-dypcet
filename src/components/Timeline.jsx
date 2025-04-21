import React,{useState,useEffect} from 'react'

export default function Timeline() {

     const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen width is mobile
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Define 768px as the breakpoint for mobile
    };

    // Check screen width on load and on resize
    checkScreenWidth();
    console.log('Mobile:', window.innerWidth <= 768);

    window.addEventListener('resize', checkScreenWidth);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  console.log('Is mobile:', isMobile); // Check the value of isMobile
      
return (
    <>
    <h1 className=' element-fade text-5xl md:text-7xl mb-5 md:mb-10 my-5 md:my-10 w-screen text-center spacecrusaders-heading gradient'>Timeline</h1>
    <div className='px-10 md:px-50 py-10'>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                    <div className="timeline-middle ">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#5480eb"
                            className="h-6 w-6 ">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-5 md:mb-10  md:text-end manrope-paragraph text-black/70 element-fade-in-left hidden md:block">
                    <time className="font-mono italic text-black">11th April, 2025</time>

                    <div className="text-lg font-black fustat-heading text-black"><b>R</b>egistration <b>S</b>tarts</div>
                    Registration for <b className="gradient">Technotsav 2025</b> is now open! Explore <b className="gradient">exciting tech events</b> and register for the ones you love. Join us at <b className="gradient">D.Y. Patil College of Engineering & Technology, Kolhapur</b> and be part of the ultimate tech fest experience. <b className="gradient">Welcome aboard!</b>

                    </div>
                    <div className="timeline-start mb-5 md:mb-10  md:text-end manrope-paragraph text-black/70 element-fade-in-right blocked md:hidden">
                    <time className="font-mono italic text-black">11th April, 2025</time>

                    <div className="text-lg font-black fustat-heading text-black"><b>R</b>egistration <b>S</b>tarts</div>
                    Registration for <b className="gradient">Technotsav 2025</b> is now open! Explore <b className="gradient">exciting tech events</b> and register for the ones you love. Join us at <b className="gradient">D.Y. Patil College of Engineering & Technology, Kolhapur</b> and be part of the ultimate tech fest experience. <b className="gradient">Welcome aboard!</b>

                    </div>
                            <hr  className='bg-black/20 element-fade-down' />
            </li>
            <li>
                            <hr  className='bg-black/20 element-fade' />
                    <div className="timeline-middle">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#5480eb"
                            className="h-6 w-6 ">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-end mb-5 md:mb-10 manrope-paragraph text-black/70 element-fade-in-right">
                    <time className="font-mono italic text-black">23th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black">Registration Ends</div>
                    Registrations will officially close on <b className="gradient">23rd April, 2025</b>! Don’t miss your chance to be a part of <b className="gradient">Technotsav 2025</b>.

                    Grab your spot, <b className="gradient">compete for exciting prizes</b>, and experience the <b className="gradient">thrill of innovation</b>. Register now—or you might just regret missing out!


                    </div>
                            <hr  className='bg-black/20 element-fade-down' />
            </li>
            <li>
                            <hr  className='bg-black/20 element-fade' />
                    <div className="timeline-middle">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#5480eb"
                            className="h-6 w-6 ">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-start mb-5 md:mb-10  md:text-end manrope-paragraph text-black/70 element-fade-in-left hidden md:block">
                    <time className="font-mono italic text-black">24th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black">Technotsav <b>D</b>ay 1 </div>
                    <b className="gradient">Vola!</b> Day 1 is here — <b className="gradient">24th April, Thursday</b>! Buckle up and join us at <b className="gradient">DYPCET</b> for a day full of <b className="gradient">energy, innovation, and competition</b>. Come compete, learn, and create across thrilling events.

                    Some events span both days, giving you even <b className="gradient">more to experience!</b>

                   <br /><br />
                    <div className="text-sm text-start md:text-end">
                    <span className="font-extrabold text-lg text-black "><b>E</b>vents:</span>
                    <ol className=" list-inside space-y-1">
                            <li><b className='text-base gradient'>Dare to Battle 1.0 </b></li>
                            <li><b className='text-base gradient'>Unsinkable Designs</b></li>
                            <li><b className='text-base gradient'>Poster Intelli Quest</b></li>
                            <li><b className='text-base gradient'>Design Relay</b></li>
                            <li><b className='text-base gradient'>Quiz Battle</b></li>
                            <li><b className='text-base gradient'>Project Competition(Chemical)</b></li>
                            <li><b className='text-base gradient'>Product Development</b></li>
                            <li><b className='text-base gradient'>Setu Bandha Re</b></li>
                            <li><b className='text-base gradient'>Cube Crush Challenge</b></li>
                            <li><b className='text-base gradient'>The Designer</b></li>
                            <li><b className='text-base gradient'>Android App Development</b></li>
                            <li><b className='text-base gradient'>Infinity Hunt</b></li>
                            <li><b className='text-base gradient'>CAD Clash</b></li>
                            <li><b className='text-base gradient'>Tech Debate</b></li>
                            <li><b className='text-base gradient'>Project Competition (E&TC)</b></li>
                            <li><b className='text-base gradient'>Robo Race(Day 1/2)</b> </li>
                            <li><b className='text-base gradient'>Blender  Workshop (Day 1/2)</b> </li>
                            <li><b className='text-base gradient'>Reel Rumble (Day 1/2)</b> </li>
                    </ol>
                    </div>
                    </div>
                    <div className="timeline-start mb-5 md:mb-10  md:text-end manrope-paragraph text-black/70 element-fade-in-right blocked md:hidden">
                    <time className="font-mono italic text-black">24th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black">Technotsav <b>D</b>ay 1 </div>
                    <b className="gradient">Vola!</b> Day 1 is here — <b className="gradient">24th April, Thursday</b>! Buckle up and join us at <b className="gradient">DYPCET</b> for a day full of <b className="gradient">energy, innovation, and competition</b>. Come compete, learn, and create across thrilling events.

                    Some events span both days, giving you even <b className="gradient">more to experience!</b>

                   <br /><br />
                    <div className="text-sm text-start md:text-end">
                    <span className="font-extrabold text-lg text-black "><b>E</b>vents:</span>
                    <ol className=" list-inside space-y-1">
                            <li><b className='text-base gradient'>Dare to Battle 1.0 </b></li>
                            <li><b className='text-base gradient'>Unsinkable Designs</b></li>
                            <li><b className='text-base gradient'>Poster Intelli Quest</b></li>
                            <li><b className='text-base gradient'>Design Relay</b></li>
                            <li><b className='text-base gradient'>Quiz Battle</b></li>
                            <li><b className='text-base gradient'>Project Competition(Chemical)</b></li>
                            <li><b className='text-base gradient'>Product Development</b></li>
                            <li><b className='text-base gradient'>Setu Bandha Re</b></li>
                            <li><b className='text-base gradient'>Cube Crush Challenge</b></li>
                            <li><b className='text-base gradient'>The Designer</b></li>
                            <li><b className='text-base gradient'>Android App Development</b></li>
                            <li><b className='text-base gradient'>Infinity Hunt</b></li>
                            <li><b className='text-base gradient'>CAD Clash</b></li>
                            <li><b className='text-base gradient'>Tech Debate</b></li>
                            <li><b className='text-base gradient'>Project Competition (E&TC)</b></li>
                            <li><b className='text-base gradient'>Robo Race(Day 1/2)</b> </li>
                            <li><b className='text-base gradient'>Blender  Workshop (Day 1/2)</b> </li>
                            <li><b className='text-base gradient'>Reel Rumble (Day 1/2)</b> </li>
                    </ol>
                    </div>
                    </div>
                            <hr  className='bg-black/20 element-fade-down' />
            </li>
            <li>
                            <hr  className='bg-black/20 element-fade' />
                    <div className="timeline-middle">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#5480eb"
                            className="h-6 w-6 ">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="timeline-end mb-5 md:mb-10  manrope-paragraph text-black/70 element-fade-in-right">
                    <time className="font-mono italic text-black">25th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black"><b>T</b>echnotsav <b>D</b>ay 2</div>
                      
                    Here we go — it’s the grand finale! <b className="gradient">Technotsav Day 2</b> is packed with <b className="gradient">high-energy competitions</b>, <b className="gradient">innovative showcases</b>, and <b className="gradient">thrilling moments</b>. Step in with your best ideas, sharpest skills, and unmatched enthusiasm. Whether you're<b className="gradient"> presenting</b>, <b className="gradient">competing</b>, or <b className="gradient">cheering</b> on your peers — make this final day unforgettable. Let’s wrap up <b className='gradient'> Technotsav</b> with a bang at <b className="gradient">DYPCET</b>!

                        <br/><br/>
                        <span className="font-extrabold text-lg text-black "><b>E</b>vents:</span>
                        <ol className="list-inside space-y-1">
                        <li><b className='text-base gradient'>Launch Pad</b></li>
                        <li><b className='text-base gradient'>Model Competition</b></li>
                        <li><b className='text-base gradient'>Code Sprint</b></li>
                        <li><b className='text-base gradient'>Drone Competition</b></li>
                        <li><b className='text-base gradient'>IPL Auction</b></li>
                        <li><b className='text-base gradient'>Technical Paper Presentation</b></li>
                        <li><b className='text-base gradient'>Robo Race (Day 2/2)</b></li>
                        <li><b className='text-base gradient'>Blender 3D Modelling Workshop (Day 2/2)</b></li>
                        <li><b className='text-base gradient'>Reel Rumble (Day 2/2)</b></li>
                        </ol>
                    </div>
                            <hr  className='bg-black/20 element-fade-down' />
            </li>
            <li>
                            <hr  className='bg-black/20 element-fade' />
                    <div className="timeline-middle">
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#5480eb"
                            className="h-6 w-6 ">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                    </div>
                    <div
                        className="timeline-start mb-5 md:mb-10 md:text-end manrope-paragraph text-black/70 element-fade-in-left hidden md:block"
                        >
                    <time className="font-mono italic text-black">24th & 25th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black">Prize Distribution & Felicitation</div>
                    The most awaited and exciting part of Technotsav — the <b className="gradient">Prize Distribution & Felicitation</b> — will take place on both days! For prize distribution will happen on the <b className="gradient">final day</b>. Celebrate <b className="gradient">talent</b>, <b className="gradient">dedication</b>, and <b className="gradient">creativity</b> as we honor the <b className="gradient">champions </b> of Technotsav!

                    </div>
                    <div
                        className="timeline-start mb-5 md:mb-10 md:text-end manrope-paragraph text-black/70 element-fade-in-right blocked md:hidden"
                        >
                    <time className="font-mono italic text-black">24th & 25th April, 2025</time>
                    <div className="text-lg font-black fustat-heading text-black">Prize Distribution & Felicitation</div>
                    The most awaited and exciting part of Technotsav — the <b className="gradient">Prize Distribution & Felicitation</b> — will take place on both days! For prize distribution will happen on the <b className="gradient">final day</b>. Celebrate <b className="gradient">talent</b>, <b className="gradient">dedication</b>, and <b className="gradient">creativity</b> as we honor the <b className="gradient">champions </b> of Technotsav!

                    </div>
            </li>
            </ul>
    </div>
    </>
)
}
