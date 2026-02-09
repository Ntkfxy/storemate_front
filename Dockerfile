### Multi-stage Dockerfile for building and serving the Vite React app
### Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use npm ci when lockfile present)
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Copy source and build
COPY . .
RUN npm run build

### Production stage (nginx)
FROM nginx:stable-alpine

# Create directory that matches Vite base (/storemate_front/) so assets are served using absolute paths
RUN mkdir -p /usr/share/nginx/html/storemate_front

# Copy built files into the subfolder matching the base
COPY --from=builder /app/dist/ /usr/share/nginx/html/storemate_front/

# Add nginx config for SPA routing on /storemate_front/
COPY ./.nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
