import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const authenticate = (req, res, next) => {
    try {
        // Get the authorization header
        const  authorization  = req.headers.authorization;
        
        // Check if authorization header exists
        if (!authorization) {
            return res.status(401).json({ error: 'Authorization header is required' });
        }
        
        // Split the authorization header by space to get the token
        const tokenParts = authorization.split(" ");
        
        // Extract the token from the parts
        const token = tokenParts[1];
        
        // Verify if token is a string
        if (typeof token !== 'string') {
            return res.status(401).json({ error: 'Token must be a string' });
        }
        
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.TOKEN);
        
        // Extract name and id from decoded token
        const { name, id } = decoded;
        
        // Attach name and id to the request object
        req.name = name;
        req.id = id;
        
        // Call next to pass control to the next middleware/route handler
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ error: 'Authentication failed' });
    }
};
