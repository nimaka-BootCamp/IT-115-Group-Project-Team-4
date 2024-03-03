// src/Card.js
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ selectedMember, handleClose }) => {
  return (
    <motion.div
      layoutId={`card-container-${selectedMember.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      className="card"
    >
      <motion.h2>{selectedMember.name}</motion.h2>
      <motion.h3>{selectedMember.role}</motion.h3>
      {/* ... other content */}
    </motion.div>
  );
};

export default Card;
