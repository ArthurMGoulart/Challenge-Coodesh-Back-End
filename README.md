# Challenge-Coodesh-Back-End
Back-end Challenge 🏅 2021 - Space Flight News Node.js
openapi: 3.0.0
info:
  version: 1.0.0
  title: Space Flight CRUD API
  description: A POO Mongoose CRUD API, that implements a Cron Job to populate database with external data. 

servers:
  - url: https://coodesh-space-flight.herokuapp.com/

paths:
  /articles:
    get:
      description: Returns a list of articles 
      #  ----- Added lines  ----------------------------------------
      responses:
        '200':
          description: Successfully returned a list of articles
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  required:
                    - username
                  properties:
                    artist_name:
                      type: string
                    artist_genre:
                      type: string
                    albums_recorded:
                      type: integer
                    username:
                      type: string

        '400':
          description: Invalid request
          content:
            application/json:
              schema:
                type: object
                properties:   
                  message:
                    type: string
      #  ---- /Added lines  ----------------------------------------
