// users-services.js - User authentication business logic

import { validateCredentials } from './users-data.js';

// Validate user credentials
async function validateUser(username, password) {
    return await validateCredentials(username, password);
}

export { validateUser };
