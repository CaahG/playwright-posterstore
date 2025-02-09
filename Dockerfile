FROM node:23-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npx playwright install chromium --with-deps

COPY . .
