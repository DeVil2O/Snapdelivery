FROM node:15
RUN npm install
EXPOSE 3000
CMD npm start
