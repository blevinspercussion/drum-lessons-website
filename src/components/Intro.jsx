import './components.css';

import purpleDrumlites from './purple-drumlites.jpg';

function Intro () {
    return (
        <div className='content'>
            <div className='text-box'>
                <h1>
                    I'm Adam Blevins, the owner and lead instructor at Blevins Percussion.
                </h1>
                <p>
                    In the last 25 years I have worked with hundreds of student both privately, as well as 
                    with public and private school music programs. I have helped dozens of percussion sections 
                    and drumlines achieve superior ratings at competitions and festivals, and have helped my 
                    private students achieve their goals of attaining spots in honor bands, excelling in their 
                    shool band program, and I have even had some students go on to pursue careers as professional 
                    musicians and music educators.
                </p>

                {/* <p>
                    Not only have a taught others how to perform on drums and percussion, but I have also walked the 
                    walk as a professional musician, playing gigs all over the southeastern United States and beyond, 
                    from Florida to Iowa. I have gained a wealth of knowledge from my time as a working, professional 
                    musician that I bring to all of my students, whether their goal is to play in a band with their friends, study 
                    music at the collegiate level, or work as a touring drummer or percussionist.
                </p>
                <p>
                    While you're here, be sure to read about my qualifications in my bio, or why you should study with 
                    Blevins Percussion. If you would like to inquire about private lessons, book me for a clinic, or 
                    have me come work with your school percussion section or drumline, please see my contact page for 
                    contact info.
                </p> */}
                <h2>Why choose Blevins Percussion?</h2>
                <ul className='list'>
                    <li>
                        As a former top-performing student musician, I know what it takes to prepare for auditions and stay at the head of the class.
                    </li>
                    <li>
                        As a working professional musician, I know what it takes to get and keep gigs.
                    </li>
                    <li>
                        I make lessons fun and engaging while making sure every student gets a good grounding in the fundamentals.
                    </li>
                    <li>
                        No electronic drumsets! I teach all lessons on acoustic drumsets, which helps my students learn proper technique.
                    </li>
                    <li>
                        I can perform and teach a wide variety of musical styles from marching band and orchestra, to country, rock, and funk.
                    </li>
                    <li>
                        I have a vast amount of teaching experience, dating all the way back to 1996.
                    </li>
                </ul>
            </div>

            <div>
                <img className='inline-image' src={purpleDrumlites}></img>
            </div>
        </div>
    )
}

export default Intro;