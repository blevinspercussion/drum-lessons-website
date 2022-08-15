import './components.css';

import lecture2 from './lecture2.jpg';

function Lessons () {
    return (
        <div className='content'>
            <div className='text-box'>
            <p>
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
                </p>
                

            
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