// auth-middleware.js - HTTP Basic Authentication middleware

import { validateUser } from './users-services.js';

async function basicAuthMiddleware(req, res, next) {
    const authHeader = req.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).set('WWW-Authenticate', 'Basic realm="Shopping List"').render('error', {
            message: 'Authentication required',
            status: 401
        });
    }
    
    try {
        // Decode Base64 credentials
        const base64Credentials = authHeader.slice(6);
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
        const [username, password] = credentials.split(':');
        
        // Validate credentials
        const user = await validateUser(username, password);
        
        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).set('WWW-Authenticate', 'Basic realm="Shopping List"').render('error', {
            message: 'Invalid credentials',
            status: 401
        });
    }
}

export { basicAuthMiddleware };
