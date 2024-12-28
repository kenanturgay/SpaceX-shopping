import React from 'react';

const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', description: 'Responsible for overall vision and strategy.', photo: '/images/john_doe.jpg' },
  { id: 2, name: 'Jane Smith', position: 'CTO', description: 'Leads the technology and engineering teams.', photo: '/images/jane_smith.jpg' },
  { id: 3, name: 'Alice Johnson', position: 'CFO', description: 'Manages the company’s finances.', photo: '/images/alice_johnson.jpg' },
  { id: 4, name: 'Bob Brown', position: 'COO', description: 'Oversees daily operations and logistics.', photo: '/images/bob_brown.jpg' },
  { id: 5, name: 'Charlie Davis', position: 'CMO', description: 'Heads the marketing and sales departments.', photo: '/images/charlie_davis.jpg' },
  { id: 6, name: 'Diana Evans', position: 'HR Manager', description: 'Manages human resources and recruitment.', photo: '/images/diana_evans.jpg' },
  { id: 7, name: 'Ethan Harris', position: 'Lead Developer', description: 'Leads the software development team.', photo: '/images/ethan_harris.jpg' },
  { id: 8, name: 'Fiona Green', position: 'Product Manager', description: 'Oversees product development and strategy.', photo: '/images/fiona_green.jpg' },
  { id: 9, name: 'George White', position: 'UX/UI Designer', description: 'Designs user interfaces and experiences.', photo: '/images/george_white.jpg' },
  { id: 10, name: 'Hannah Black', position: 'Customer Support', description: 'Provides customer support and service.', photo: '/images/hannah_black.jpg' },
];

export default function TeamPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center font-montserrat">
      <header className="text-center my-8">
        <h1 className="text-3xl md:text-5xl font-bold">Our Team</h1>
        <p className="text-sm md:text-lg mt-4">Meet the people who make it all happen.</p>
      </header>
      <div >
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {teamMembers.map((member) => (
            <div key={member.id} className="border rounded-lg  flex flex-col items-center " style={{ width: '240px', height: '423px' }}>
              <img src={member.photo} alt={member.name} className="object-cover border-b-0 rounded-t-lg" style={{ width: '240px', height: '320px' }} />
              <div className="flex flex-col items-center justify-center " style={{ width: '240px', height: '100px' }}>
                <h2 className="text-lg md:text-xl font-semibold text-left w-full">{member.name}</h2>
                <p className="text-sm md:text-base font-bold w-full">{member.position}</p>
                
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}