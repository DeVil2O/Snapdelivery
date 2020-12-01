FROM node:12
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 5000
CMD ng serve --port 5000 --host 0.0.0.0
