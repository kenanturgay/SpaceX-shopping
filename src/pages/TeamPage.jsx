import React from 'react';
import erhanfırat from '../assets/teams/ErhanFırat.jpeg';
import gokhanozdemir from '../assets/teams/GokhanOzdemir.jpeg';
import kenanturgay from '../assets/teams/kenanturgay.jpg';
import bob_brown from '../assets/teams/BobBrown.png';
import charlie_davis from '../assets/teams/CharlieDavis.png';
import ethan_harris from '../assets/teams/EthanHarris.jpg';
import fiona_green from '../assets/teams/FionaGreen.png';



const teamMembers = [
    { id: 1, name: 'Erhan Fırat', position: 'Project Owner', description: 'Responsible for overall vision and strategy.', photo: erhanfırat },
    { id: 2, name: 'Gökhan Özdemir', position: 'Scrum Master', description: 'Leads the technology and engineering teams.', photo: gokhanozdemir },
    { id: 3, name: 'Kenan Turgay', position: 'Full Stack Developer', description: 'Manages the company’s finances.', photo: kenanturgay },
    { id: 4, name: 'Bob Brown', position: 'COO', description: 'Oversees daily operations and logistics.', photo: bob_brown },
  { id: 5, name: 'Charlie Davis', position: 'CMO', description: 'Heads the marketing and sales departments.', photo: charlie_davis },
  { id: 7, name: 'Ethan Harris', position: 'Lead Developer', description: 'Leads the software development team.', photo: ethan_harris },
  { id: 8, name: 'Fiona Green', position: 'Product Manager', description: 'Oversees product development and strategy.', photo: fiona_green },

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
            <div key={member.id} className="rounded-lg  flex flex-col items-center " style={{ width: '240px', height: '423px' }}>
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