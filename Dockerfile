# Create a layer from the Node Alpine Docker image
FROM node:10.15.3-alpine

# Install dockerize
RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Create the app directory inside the Docker image
RUN mkdir -p /usr/src/group-communication-survey-api
WORKDIR /usr/src/group-communication-survey-api

# Copy package.json & yarn.lock into the root of the directory created above
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --no-cache --frozen-lockfile

# Bundle app source inside Docker image
COPY . .

# Expose port
EXPOSE 4000

# Run migrations and then run app once database is ready
CMD dockerize -wait tcp://mongodb:27017 -timeout 60m yarn start
