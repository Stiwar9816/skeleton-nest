# Install dependencies only when needed
FROM node:23.6.1-alpine3.20 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock ./
RUN pnpm install --frozen-lockfile


# Build the app with cache dependencies
FROM node:23.6.1-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build


# Production image, copy all the files and run next
FROM node:23.6.1-alpine3.20 AS runner

# Set working directory
WORKDIR /usr/src/app

COPY package.json pnpm-lock ./
RUN pnpm install --prod
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main" ]