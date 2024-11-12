FROM node:18 AS build-stage
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install
COPY . .

RUN pnpm build


FROM node:18 AS runtime
WORKDIR /app

RUN npm install -g pnpm

COPY --from=build-stage /app/dist ./dist

EXPOSE 3000

CMD npx serve -s dist -l 3000