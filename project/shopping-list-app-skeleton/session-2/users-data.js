// users-data.js - Mock user data and validation

// Mock users - in production, this would come from a database
const users = [
    { id: 1, username: 'alice', password: 'password123' },
    { id: 2, username: 'bob', password: 'secret456' },
    { id: 3, username: 'charlie', password: 'test789' }
];

// Helper function to remove password from user object
function removePassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

// Validate user credentials
// Returns user WITHOUT password on success, rejects on failure
async function validateCredentials(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        return Promise.resolve(removePassword(user));
    } else {
        return Promise.reject(new Error('Invalid credentials'));
    }
}

export { validateCredentials };
