FROM node:20-alpine AS builder

WORKDIR /src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /src/app/dist ./dist

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD [ "node", "dist/main.js" ]