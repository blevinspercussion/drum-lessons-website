import './components.css';

function Faq () {
    return (
        <div className='content faq'>
            <div className='text-box'>
            <div className='question'>
                <h2>How much do drum lessons cost?</h2>
            </div>
            <div className='answer'>
                <p>
                    Our drum lessons cost $25 per half hour lesson. You can pay weekly, or by the month. Lessons are held weekly 
                    at the same time. Hour lesson slots are also available for $50 per hour lesson.
                </p>
            </div>
            <div className='question'>
                <h2>What do I need to take lessons?</h2>
            </div>
            <div className='answer'>
                <p>
                    For beginner lessons, all you need is sticks, books, and a practice pad. These items can be purchased from 
                    any music retailer and are relatively inexpensive. For students taking drum set lessons, they will need a 
                    drumset at home to practice on. Thankfully, there are many options for drumsets that are also relatively 
                    inexpensive.
                </p>
            </div>
            <div className='question'>
                <h2>Do I have to sign a contract?</h2>
            </div>
            <div className='answer'>
                <p>
                    No contract! Upon signing up for lessons, I will ask that you sign a list of policies for cancellations, make-up 
                    lessons, etc., but you are free to end your lessons at any time.
                </p>
            </div>
            <div className='question'>
                <h2>Do you have to be a certain age for drum lessons?</h2>
            </div>
                <div className='answer'>
                <p>
                    I typically start beginners as young as six years old, but I have had students as young as 4. The oldest student that 
                    I've had was a 65 year old beginner.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Faq;