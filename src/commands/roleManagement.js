// File: roleManagement.js (JavaScript)

// Import necessary modules and files
const discordAPI = require('../interactions/discordAPI');
const database = require('../data/database');
const errorHandling = require('../errorHandling/errorHandling');

// Define the role management functions
const roleManagement = {
  // Function to assign a role to a user
  assignRole: (userId, roleId) => {
    try {
      // Check if the user and role exist
      if (!discordAPI.isUser(userId) || !discordAPI.isRole(roleId)) {
        throw new Error('Invalid user or role');
      }

      // Assign the role to the user
      discordAPI.assignUserRole(userId, roleId);

      // Log the role assignment
      database.logRoleAssignment(userId, roleId);

      return 'Role assigned successfully';
    } catch (error) {
      errorHandling.handleError(error);
    }
  },

  // Function to remove a role from a user
  removeRole: (userId, roleId) => {
    try {
      // Check if the user and role exist
      if (!discordAPI.isUser(userId) || !discordAPI.isRole(roleId)) {
        throw new Error('Invalid user or role');
      }

      // Remove the role from the user
      discordAPI.removeUserRole(userId, roleId);

      // Log the role removal
      database.logRoleRemoval(userId, roleId);

      return 'Role removed successfully';
    } catch (error) {
      errorHandling.handleError(error);
    }
  }
};

module.exports = roleManagement;