# Waldo

My implementation of a fullstack Where's Waldo clicker game using a frontend React application with a Rails API. This application is deployed via vercel for the front end and dokku for the backend with CORS set up to allow interaction between the two applications.

You can find the live application in the repository's about section!

# Key Learning
This app was very fun to write, but it was a little intimidating doing both the frontend and backend application. In the end, it was an excellent learning opportunity.
* Monorepos are a good option for smaller projects. I had considered doing two different repositories, but decided to stick everything together. It made the deployment less plug and play, but I was able to figure it out.
* Seeing a frontend application come alive as you implement the backend was very exciting.
* Learned how to deploy a Rails app via render.com - my previous large project(Railsbook) was deployed via Heroku, but since their offering is changing, I may move it.
* Learned how to execute a pretty cool custom Tailwind animation.

# Future Opportunities
I had a things I wanted to include in this project, but I was starting to lose motivation over feeling stuck trying to figure them out, so there are definitely lots of future opportunities here.
* First and foremost, I think that testing is an important element of any application, and this application is missing tests, both on the frontend side and the backend side.
  * Rspec request specs should be easy to add, so those are a high priority for me
  * React testing was getting extremely frustrating for me, because I was using Jest and jsdom when I was trying to e2e test, which requires a browser based test runner. By the time this concept was clear to me, I was already feeling stuck, so I moved to building out the API.
* Authentication between the two applications. This was something I was investigating from the start. An authenticated API would have been good to prevent access to the backend except via the frontend, but it was not something that ultimately felt worth the effort in this context. There are no users, and it's a simple leaderboard name and time.