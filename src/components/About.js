import React from 'react' 

const About = () => {
  
  
  return (
    <div className='container my-5'>
       <h2 className="text-center mb-4">About iNotebook</h2>
      <div className="card p-4 shadow-sm border-0">
         <p>
          <strong>iNotebook</strong> is a simple, fast, and secure note-taking
          app that helps you stay organized. Whether you're tracking ideas,
          reminders, or tasks — iNotebook keeps everything at your fingertips.
        </p>
        <h4 className="mt-4"> Features</h4>
        <ul>
          <li>Create, update, and delete notes with ease</li>
          <li>Tag your notes for better organization</li>
          <li>Secure login system using JWT authentication</li>
          <li>Fully responsive and user-friendly interface</li>
        </ul>

        <h4 className="mt-4">👩‍💻 Developer</h4>
        <p>
          Built by <strong>Vaishnavi Pandey</strong> as a learning project and productivity tool.
        </p>

      </div>
    </div>
  )
}

export default About
