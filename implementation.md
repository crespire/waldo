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

