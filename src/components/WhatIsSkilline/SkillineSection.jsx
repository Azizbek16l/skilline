import './SkillineSection.css'

function SkillineSection() {
  return (
    <section  id='whatisskilline'>
     <div className="container">
         <div className='whatis-header'>
           <h2 id='whatis-title'>What is <span>Skilline?</span></h2>
          <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
         </div>
          <div className='whatis-cards'>
            <div className='whatis-card'>
              <h3>FOR INSTRUCTORS</h3>
              <button>Start a class today</button>
            </div>
            <div>
              <h3>FOR STUDENTS</h3>
              <button>Enter access code</button>
            </div>
          </div>
          <div className='whatis-info'>
            <div className='whatis-info-left'>
              <h2>Everything you can do in a physical classroom, you can do with Skilline</h2>
              <p>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>

            </div>
            <img src="https://www.datocms-assets.com/112519/1711372310-1a-classroom-interactive-main-image.jpeg" />
          </div>
        </div>
    </section>
  )
}

export default SkillineSection