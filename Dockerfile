FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod

FROM nginx:alpine
COPY nginx.conf /usr/share/nginx/config/
COPY --from=node /app/dist/premium /usr/share/nginx/html
