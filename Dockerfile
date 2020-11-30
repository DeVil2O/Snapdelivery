FROM node:12
WORKDIR /app
ADD ./app
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 5000
CMD ng serve --port 5000
