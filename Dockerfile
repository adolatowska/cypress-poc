FROM cypress/base:10
#Create a new directory to run our app.
RUN mkdir -p /usr/src/app
#Set the new directory as our working directory
WORKDIR /usr/src/app
#install cypress
RUN npm install cypress --save-dev
# copy cypress files and folders
COPY cypress /usr/src/app/cypress
COPY cypress.json /usr/src/app/cypress.json
# confirm the cypress install
RUN ./node_modules/.bin/cypress verify
