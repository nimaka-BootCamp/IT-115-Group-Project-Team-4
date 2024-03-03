// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card'; // Make sure you have this component created
import './App.css'; // Your CSS file for styling

// Array of team members
const teamMembers = [
  { id: 1, name: 'Member 1', role: 'Role 1', image: 'https://cdn.discordapp.com/attachments/1207030108884566037/1207030297515003974/Olena.jpg?ex=65f09e90&is=65de2990&hm=45acbc1a91ace2cbfcad1f6128caa099aa531b7f3ac00ff69267e9cc361c74b9&' },
  { id: 2, name: 'Member 2', role: 'Role 2', image: 'https://cdn.discordapp.com/attachments/1207030108884566037/1207030297774792734/Even.jpg?ex=65f09e90&is=65de2990&hm=3a0d659f2bec0d41531719c65f93394eb4ed087bcb6984aa50bca2e82aee0b0a&' },
  { id: 3, name: 'Member 3', role: 'Role 3', image: 'https://cdn.discordapp.com/attachments/1207030108884566037/1207030298047553556/justin.png?ex=65f09e90&is=65de2990&hm=1a3e88276d34c5a2480ace18eec07c561c31f6c8b3d0754b378647e29dfe48bb&' },
  { id: 4, name: 'Member 4', role: 'Role 4', image: 'https://cdn.discordapp.com/attachments/1207030108884566037/1212222993925939260/IMG_2441.JPG?ex=65f10da3&is=65de98a3&hm=71d05f85d3fdbe7a4d3f77a0985a7e43daccd0a81bc76619373a87e7995d3ee1&' },
  { id: 5, name: 'Member 5', role: 'Role 5', image: 'path_to_profile_5.jpg' },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="team-container">
      {teamMembers.map(member => (
        <motion.img
          key={member.id}
          src={member.image} // Replace with your image paths
          alt={member.name}
          className="profile-pic"
          onClick={() => setSelectedId(member.id)}
          whileHover={{ scale: 1.1 }} // Slight scale animation on hover
          whileTap={{ scale: 0.95 }} // Slight scale animation on click
          layoutId={`container-${member.id}`}
        />
      ))}

      <AnimatePresence>
        {selectedId && (
          <Card
            key="card"
            selectedMember={teamMembers.find(m => m.id === selectedId)}
            handleClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <div className="team-title">Team 4</div>
    </div>
  );
}

export default App;
