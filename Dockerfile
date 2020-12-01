FROM node:12
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 5000
CMD ng serve --port 5000 --host 0.0.0.0
