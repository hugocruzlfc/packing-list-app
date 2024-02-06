# FROM node:hydrogen-alpine3.18

# WORKDIR /app

# COPY package*.json .

# RUN npm ci

# COPY . .

# EXPOSE 3500

# CMD ["npm", "run", "dev"]


# Stage 1: Build the image
FROM node:hydrogen-alpine3.18 as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build


# Stage 2: Run the image
FROM nginx:alpine

ADD ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /var/www/app/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]