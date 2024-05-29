// File: src/utils/roleTools.js (JavaScript)

// Import necessary modules
const { Client, Intents } = require('discord.js');

// Initialize Discord client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Function to assign a role to a user
const assignRole = (user, role) => {
  try {
    user.roles.add(role);
    console.log(`Role ${role.name} assigned to user ${user.username}`);
  } catch (error) {
    console.error(`Error assigning role: ${error.message}`);
  }
};

// Function to remove a role from a user
const removeRole = (user, role) => {
  try {
    user.roles.remove(role);
    console.log(`Role ${role.name} removed from user ${user.username}`);
  } catch (error) {
    console.error(`Error removing role: ${error.message}`);
  }
};

// Export functions for external use
module.exports = {
  assignRole,
  removeRole
};