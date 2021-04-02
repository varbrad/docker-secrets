####################
# Shared arguments #
####################

###########################
# Image 1 - Dependencies! #
###########################
FROM node:alpine as deps
ARG ENCODED_ENV
RUN test -n "$ENCODED_ENV"
# See https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
COPY scripts ./scripts
RUN npm ci
RUN npm run generate-env ${ENCODED_ENV}
RUN npm run verify-env

####################################
# Image 2 - Build the application! #
####################################
FROM node:alpine as builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
