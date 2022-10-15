FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g sequelize-cli
RUN npm install -g pg
RUN npm install -g pg-hstore
RUN yarn
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

RUN sed 's/\r$//' startup.sh > startup-cleaned.sh

EXPOSE 4003
ENTRYPOINT [ "sh", "./startup-cleaned.sh" ]