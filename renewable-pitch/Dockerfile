# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy all project files
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
