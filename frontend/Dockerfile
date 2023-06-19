FROM node:16-alpine AS build

WORKDIR /app

COPY ./web .

RUN npm install

RUN npm run build 

FROM nginx:alpine AS runtime

COPY --from=build /app/dist/web/ /usr/share/nginx/html

EXPOSE 80