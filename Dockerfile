# Use Node.js Alpine image for building
FROM node:20-alpine as build
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies and build the React app
RUN npm ci
# Copy React App source code
COPY . .
RUN npm run build


# Production stage
FROM nginx:alpine
# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]