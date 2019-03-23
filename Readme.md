# Best Self


## Code Organization

+  Rest Api
    +  The backend / api of our application.
    +  Stack: NodeJs, ExpressJS (Using es6), Postgres
+  www
    +  The public web facing portal of our website. Based in React
    +  Stack: ExpressJS, React
+  Reverse Proxy
    +  This is the reverse proxy which will be the first server to handle requests and then forward those requests to the relevant server. This could also be setup later to handle load balancing of any of our API's.
    +  Stack: NodeJs, ExpressJS