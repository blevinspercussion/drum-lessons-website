import './components.css';
import greendrumlites from './green_drumlites.jpg';

function About () {
    return (
        <div className='content'>
            <div className='text-box'>
                <h1>Adam Blevins, Drum and Percussion Instructor</h1>
                <p>
                    Adam began studying snare drum and drum set at the Chip Hancock School of Percussive Arts 
                    in 1988. For the next 8 years, he would study privately with Chip in the areas of concert 
                    and rudimental snare drum, marching percussion, drum set, timpani, and concert mallet 
                    percussion. Chip introduced Adam to such diverse drum set styles as rock, funk, jazz, 
                    Latin and Afro-Cuban. It was under Chip's instruction that Adam attained such accolades as 
                    six-time participant in the District 7 Honor band, as well as the Georgia All-State band 
                    and Georgia Governor's Honors Program in the area of instrumental percussion.
                </p>
                <p>
                    In 1997, Adam began studying with Dr. Monte Coulter through the Cadek Conservatory of Music 
                    at the Univerty of Tennessee at Chattanooga. During this time, Adam continued to hone his 
                    concert percussion skills on snare drum, timpani, and four-mallet marimba. While in Chattanooga, 
                    Adam taught private lessons both independently, as well as through the Cadek Conservatory. He 
                    also worked as a drumline instructor with nearly a dozen different schools in the Chattanooga and 
                    North Georgia areas between 1999 and 2011.
                </p>
                <p>After leaving Chattanooga in 2006, Adam studied under Tom Knight and Creig Harber at the 
                    Atlanta Institute of Music (now the Atlanta Instutitue of Music and Media, AIMM). While in 
                    Atlanta, Adam served as tenor tech with the Chattahoochee High School Indoor Drumline in 
                    Alpharetta. Adam later returned to Chattanooga where he continued to play with local bands.
                </p>
                <p>
                    In 2010, Adam left Chattanooga again to tour with San Diego based rock band, After the Crash. 
                    After the Crash eventually settled in Birmingham, Alabama and continued to gig on the southeastern 
                    cover band circuit, as Adam began teaching private lessons at Birmingham School of Music and served 
                    as head of percussion at Clay-Chalkville High School.
                </p>
                <p>
                    While in Birmingham, Adam has made a name for himself as a top-call live drummer with a reputation 
                    for punctuality, consintency, preparedness, and professionalism. Since moving to Birmingham, Adam has 
                    performed with bands and artists including: Matt Bennett, Spencer Maige and the Reckless, Trey Lewis, Sam Rife, 
                    Anna Grace Beatty, Rebel (Music Garden Entertainment), Deputy 5, More Cowbell, and many, many others. 
                    He has also worked as a private and group teacher at Clay-Chalkville High School, Clay-Chalkville Middle 
                    School, Pleasant Grove High School, Helena Middle School, Birmingham School of Music, and Mason Music. 
                </p>
                <p>
                    In September of 2022, Adam once again returned to the Chattanooga area to open his own private home 
                    studio, Blevins Percussion, teaching private lessons in drums and percussion. In addition to running his 
                    own private lessons practice, Adam continues to teach virtual lessons through Mason Music as well as working 
                    with local school band programs and gigging whenever his schedule allows.
                </p>
                    
                </div>
            <div>
                <img className='inline-image' src={greendrumlites} alt="adam playing drums on stage at skybar in auburn alabama" />
            </div>

        </div>
    )
}

export default About;