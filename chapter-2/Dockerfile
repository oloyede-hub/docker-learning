FROM node:22-alpine
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package*.json  pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --prod
COPY server.js ./
EXPOSE 8000
CMD ["node", "server"]
