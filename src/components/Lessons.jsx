import './components.css';

import lecture2 from './lecture2.jpg';

function Lessons () {
    return (
        <div className='content'>
            <div className='text-box'>
                <h1>Lessons</h1>
            {/* <p>
                    I create lessons plans that are tailor-made to each student and their personal goals, whether that is to play in a band 
                    with their friends, study music in college, embark on a career as a professional musician, or just have fun. In all of my 
                    lessons I stress the fundamentals that are necessary to function as not only a drummer, but as a musician. These fundamentals include: 
                    reading, technique, rudiments, timekeeping, and styles. 
                </p>
                <p>
                    I have an extensive background in a multitude of styles and I am able to teach students of virtually any skill level, from 
                    complete beginner to aspiring professionals. Whether you want to excel in your school's concert or marching band, prepare for 
                    a scholarship audition, or play drumset with a touring band, I can help you achive your goals, because I have done all of 
                    those things successfully, so I can help you to hone the skills necessary for success.
                </p>
                <p>
                    Be sure to use the contact link above to get in touch with me and book private lessons, and while you're here, but sure 
                    to check out some of my free video lessons below!
                </p> */}

                <p>
                    At my home studio, I am equipped to teach drum set (all styles), concert and marching snare, and marching tenors/quads. 
                    I am currently taking students of virtually any skill level. I start all students on snare drum to learn the fundamentals 
                    of reading and technique before moving on to the full drum set. For those students that are interested in marching or concert 
                    percussion, we will continue to delve into more advanced concepts and techniques for snare drum. Be sure to check out the FREE STUFF 
                    section above for some free video lessons!
                </p>
                <h2>What will I learn?</h2>
                <h3>
                    As a drum set student with Blevins Percussion, you will learn:
                </h3>
                <ul className='list'>
                    <li>
                        <strong>Reading</strong>: The fundamentals of reading music for drum set, progressing to intermediate and advanced reading.
                    </li>
                    <li>
                        <strong>Technique</strong>: Proper stroke (single stroke, double stroke, etc.), posture, and control.
                    </li>
                    <li>
                        <strong>Repertoire</strong>: Learn to play your favorite songs, and be introduced to new music you've never heard.
                    </li>
                    <li>
                        <strong>Rudiments</strong>: The basic patterns and techniques necessary to play drums and play them well.
                    </li>
                    <li>
                        <strong>Styles</strong>: Learn a variety of popular styles of music, as well as musical styles from around the world.
                    </li>
                </ul>

                <h3>
                    As a snare drum student, you will learn:
                </h3>
                <ul className='list'>
                    <li>
                        <strong>Advanced Reading</strong>: Advanced rhythm and sticking concepts that will help you excel in your band program.
                    </li>
                    <li>
                        <strong>Advanced Technique</strong>: Including orchestral rolls, triple strokes, and advanced marching snare techniques.
                    </li>
                    <li>
                        <strong>Repertoire</strong>: Beginner to advanced concert and marching snare drum solos, including any music from your school band.
                    </li>

                </ul>
                

            
            </div>
            <div>
                <img className='inline-image' src={lecture2} alt='adam lecturing students at chattanooga high school center for creative arts'></img>
            </div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Zq6Nr6CpD4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sFFSgVe4Dlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ixPXLzff4U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Lessons;