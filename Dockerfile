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
COPY . .
RUN npm ci
RUN npm run generate-env ${ENCODED_ENV}
RUN npm run verify-env
RUN npm run build

####################################
# Image 2 - Build the application! #
####################################
FROM node:alpine as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=deps /app/.env.production ./
COPY --from=deps /app/next.config.js ./
COPY --from=deps /app/public ./public
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]