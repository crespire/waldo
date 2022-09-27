# Waldo

So, this is a huge project (potentially) because I am looking to write to separate applications.

I think the Rails API will be fairly easy to write once I get done thinking about how to implement it all. The same goes for the front end application as well.

# Problem statement
Serve an image and allow the user to search for elements inside the picture. The picture should have an ID that corresponds to a `Picture` model in the API.

`Picture` has_many `Goals` and each `Goal` belongs to a picture. `Picture` should have a method to check if an incoming click matches a goal's coordinates.

Each user should probably just be a session with a 30min expiration. Then we can keep the session alive and track the `start` and `complete` times. Then if a user wins, they can "save" the information and we can display a `Leaderboard`. which belongs to Picture, and has many sessions. Session belongs to a Leaderboard.


So, to recap:
`Picture`
  has_many :secrets
  has_one :leaderboard
  has_many :scores through: leaderboard
  identifier: string (uniqID)
  secrets_to_find: number

`Secret`
  belongs_to :picture
  coordinates: string

`Leaderboard`
  has_many :sessions
  has_many :scores through: :sessions
  belongs_to :picture

`Session` (or user)
  has_one :score
  belongs_to :leaderboard
  name: string (optional)
  start: datetime
  end: datetime

`Score`
  belongs_to :session
  belongs_to :leaderboard
  start: datetime
  end: datetime

In terms of domain objects, I think that will probably be okay for now.

In terms of the front end, we'll load the image specified by the user. We'll probably just have them on the client side, and query the API through a shared ID.

So the front end application will send data like this I think:
on client start: `/api/vi/session/new` - this should return a session cookie to the front end.
on picture select: `/api/vi/picture/?id=<id>` - this should return the picture information, and the secrets for the image.

Wondering if I should have the backend check every click, or it I should ship the secret information into the frontend app for validation.

if backend based, on click: `/api/vi/picture/:id/checkSecret/?coord=<coordinates>` and the backend will report hit or miss bas
otherwise, just validate in frontend, based on data sent back from the picture call. (I feel like this is the way to go).

on win (ie all secrets discovered): `/api/v1/session/score?id=<pic_id>`

Not sure. I want to think on this a bit more.


Maybe overthinking it. Perhaps leaderboards don't need to be related to the pictures at all. Just have an image ID, and have many scores. Then as part of session, just have a "save_score" method that creates a score. Then the user is discarded anyway, so the score can just be a record that belongs to a leaderboard, which is "split" by picture.

## Having slept on it
I think we should simplify the API to three endpoints.

GET `/pictures` should return all current images available to play. This endpoint should not be authenticated.

```json
{
  {
    "id": "id",
    "name": "pic_name",
    "secrets": "#_of_secrets",
    "difficulty": "easy"
  },
  {
    "id": "id",
    "name": "pic_name",
    "secrets": "#_of_secrets",
    "difficulty": "easy"
  },
}
```

GET `/pictures/:id/scores` should return the leaderboard for that picture. This endpoint is not authenticated.

POST `/session/new` Creates a session on the backend and should return all the information related to a picture for the front end client with authentication token. This endpoint should not be authenticated.

```json
{
  "token": "session",
  "start_time": "datetime",
  "secrets": {
    "1": {
      "name": "Waldo"
      },
    "2": {
      "name": "Wizard",
      }
  }
}
```

GET `/pictures/:id/secrets/check?x=<x>&y=<y>` should be sent on every click and return information. This end point should be authenticated.

```json
{ // success
  "found": true,
  "name": "Waldo",
  "pin":
    {
      "x": "x",
      ":y": "y"
    }
}

{ // fail
  "found": false
}
```

POST `/pictures/:id/scores/save` should post a completed session to the API to persists in the database. This endpoint is authenticated.

I think, with this endpoint structure in mind, we have this map of object relations:

```ruby
class Picture
  has_many :scores
  has_many :secrets

  name:string
  number_of_secrets:integer
  difficulty:string
end

class Secret
  belongs_to :picture

  x:string
  y:string
  name:string
end

class Score
  belongs_to :picture

  name:string
  start:datetime
  end:datetime
end


# routes.rb
namespace :api do
  namespace :v1 do
    get 'pictures', to: 'pictures#index'
    get 'pictures/:id/new'. to: 'sessions#new'
    get 'pictures/:id/secrets/check', to: 'secrets#check'
    get 'pictures/:id/scores', to: 'scores#index'
    post 'pictures/:id/scores/save', to: 'scores#create'
  end
end
```

I think using a session cookie is the way to go. I think having a user model but not persisting them to database might be helpful in managing the sessions.

I think I'm going to start implementing the front end and will make the backend completely public to start. Maybe I will try to do some authentication after.