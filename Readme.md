# SelfWoke

http://selfwoke.co

## Code Organization
The code is well written, organized, and easy to follow. If we were to expand and continue working on this product we wouldn't need any code refactors. We wrote our own REST Api, our own Auth Service, and have 3 servers all running on a Digital Ocean Server. We are fully deployed & live with a prototype and we designs to follow up on in the future to move past prototyping and to an MVP.

+  Rest Api
    +  The backend / api of our application. 
        + The only 3rd party service used is Twilio
        + We wrote authentication & all of our data is stored in a database stored on our own server.
    +  Stack: NodeJs, ExpressJS (Using es6/babel), Postgres
+  www
    +  The public web facing portal of our website. Based in React & using React-Bootstrap Components
    +  Stack: ExpressJS, React, Bootstrap
+  Reverse Proxy
    +  This is the reverse proxy which will be the first server to handle requests and then forward those requests to the relevant server. This could also be setup later to handle load balancing of any of our API's.
    +  Stack: NodeJs, ExpressJS