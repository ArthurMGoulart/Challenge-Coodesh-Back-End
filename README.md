# Challenge-Coodesh-Back-End
Back-end Challenge 🏅 2021 - Space Flight News Node.js
openapi: 3.0.0
info:
  version: 1.0.0
  title: Simple API
  description: A simple API to illustrate OpenAPI concepts

servers:
  - url: https://example.io/v1

components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
security:
  - BasicAuth: []

paths:
  /artists:
    get:
      description: Returns a list of artists 
      #  ----- Added lines  ----------------------------------------
      responses:
        '200':
          description: Successfully returned a list of artists
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
