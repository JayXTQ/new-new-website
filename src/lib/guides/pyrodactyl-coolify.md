---
title: Installing Pyrodactyl on Coolify
description: This guide explains how to install Pyrodactyl on Coolify using the docker-compose
date: '2024-10-26'
categories:
  - coolify
  - pyrodactyl
published: true
---

This method is long and convoluted, but it is worth it in the end if you don't want to host on the same server as a node is, like me. I want more CPU, RAM and storage at all times.

To start off with, you will need these essentials. A redis database and a mariadb database, these will be done outside the docker-compose we are setting up, this is just for ease of use. Also make sure both are publicly accessible because it doesn't work otherwise.

Inside the repository for Pyrodactyl, there is a `docker-compose.example.yml` [(located here)](https://github.com/pyrohost/pyrodactyl/blob/main/docker-compose.example.yml), out of the box this doesn't give you much to go on, but I will tell you about it now and what you should really be doing. First off, make your docker-compose look something like this instead

```yaml title="docker-compose.yml"
services:
  panel:
    image: 'ghcr.io/pyrohost/pyrodactyl:main'
    restart: always
    ports:
      - '3000:443'
    volumes:
      - '/srv/pterodactyl/var/:/app/var/'
      - '/srv/pterodactyl/nginx/:/etc/nginx/http.d/'
      - '/srv/pterodactyl/certs/:/etc/letsencrypt/'
      - '/srv/pterodactyl/logs/:/app/storage/logs'
    environment:
      APP_ENV: production
      APP_ENVIRONMENT_ONLY: 'false'
      CACHE_DRIVER: redis
      SESSION_DRIVER: redis
      QUEUE_DRIVER: redis
      REDIS_HOST: 'REDIS IP ADDRESS'
      REDIS_PORT: 'REDIS PORT'
      REDIS_PASSWORD: 'REDIS PASSWORD'
      REDIS_USERNAME:
      DB_HOST: 'DATABASE IP ADDRESS'
      DB_PASSWORD: 'DATABASE PASSWORD'
      DB_PORT: 'DATABASE PORT'
      HASHIDS_LENGTH: 8
      HASHIDS_SALT: '20 CHARACTER RANDOM STRING'
      APP_URL: 'YOUR APP URL'
      APP_TIMEZONE: UTC
      APP_THEME: pterodactyl
      MAIL_DRIVER: smtp # leave all mail settings, unless you want to use mail
      MAIL_ENCRYPTION: true
      MAIL_FROM: noreply@example.com
      MAIL_HOST: mail
      MAIL_PASSWORD:
      MAIL_PORT: 1025
      MAIL_USERNAME:
```

Fill in the relevant information that you see above and save that somewhere safe for later. Then make a new resource under the `Docker Compose Empty` resource. This is where you put your docker compose inside.

From here, it should make a new resource for you, but wait for the initial setup to finish before making these next steps. You should now go to the Panel part of the resource and click `Settings`. Here you should put in the same URL as the one you put in `APP_URL` in the compose.

When you save these changes and click `Restart` in the top right, the app should deploy successfully. Make sure to check the logs on the left hand side actively to check there are no errors which have stopped the app or otherwise. If no errors (hopefully) then load up the app url, and you should be able to see the login page!

Sadly this is not the end of the setup, but this next part is and it's simple! User creation, there is no default user with Pterodactyl or Pyrodactyl so you will need to create one. Go to `Terminal` up at the top and open up the terminal for the panel. Now you will here create a user like you would normally. Run `php artisan p:user:make` and fill out the options and make sure they are admin!

And that's it! You have successfully installed Pyrodactyl on Coolify using the docker-compose method. If you have any issues, please refer to the Pyrodactyl/Pterodactyl documentation or join the relevant Discords they have. Thanks for reading!