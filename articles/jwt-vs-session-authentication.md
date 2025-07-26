---
title: 'JWT vs Session Authentication'
date: "27-08-2024"
categories:
    - Programming
---

# JWT vs Session Authentication

![Blog image](/programming/programming-jwt-session.png)

Hello! If you ever created authentication in your apps, you probably heard about two terms popular methods: **JWT (JSON Web Token)** and **Session-based authentication**. Do you know the difference? And do you know when to use proper method of authentication? Today I will explain It to you in most concise way.

## What is JWT?

Nowadays JWT (JSON Web Token) become **more and more popular**, so each programmer should know what is this and when to use it. JWT is standard, which enables information transmission in JSON format, mainly fullfing role of user or session data medium. It is method for sending data between two systems (for example between client and server) securely. We can compare it to digital ticket, which contains user data like UID or permissions.

JWT **consists of** three parts:

- First part **(Header)** informs about ticket type and method of security (which algorithm is used to generate the signature).
- Second part **(Payload)** contains user or session data.
- Third part **(Signature)** validates the token and verifies the authenticity of created JWT.

Thanks to JWT, server can **easily and securely** check a user's identity without need to store sessions on server.

## What is Session-based authentication

Session-based authentication is **more traditional** approach. When user successfully logs in, server creates session ID, which is unique for this user session. Then, this ID is stored on the server side, where is associated with this user. On the client side session ID is usually stored in cookie. Each time a user makes request to the server, a session ID is automatically attached to this request. Server receives this cookie and checks session ID. Next, it reads user data associated with cookie to fulfill the request in context of authenticated user.

## Differences

### Statefulness

#### JWT

Stateless. Server doesn't store informations about state of user. All data needed to authenticate are contained in token, which is stored on the client side.

#### Session

Stateful. It means, that server stores informations about sessions in memory or database, which means, that it must maintain user state between requests

### Data Storage

#### JWT

All informations are contained in token, which is stored on the client side in local storage or cookie. Token contains encoded data, such as user identity or permissions.

#### Session

Session data are stored on the server side. Client receives only unique session ID, which is stored in cookie.

### Scalability

#### JWT

Because JWT is stateless, It scales more easily.

#### Session

Because sessions are stored on the server side, increasing number of users requires increasing server resources.

### Security

#### JWT

JWT token is vulnerable to theft and is difficult to invalidate until it expires. However, there are methods to improve security such as setting short expiration time and token refresh mechanisms.

#### Session

Sessions are stored on the server side, so we have greater control and possibility to invalidate session at any time. There is risk of session ID theft (session hijacking).

### Data Transmission

#### JWT

JWT is sent in HTTP header (e.g., in the "Authorization: Bearer" header) with each request. The token is self-contained, so the server does not need to query a database.

#### Session

Each request to the server includes session ID contained in cookie, and the server must retrieve session data from memory or database.

### Size of Data Transmitted in Requests

#### JWT

Entire JWT, which can be quite large is sent with each request, potentially increasing the amount of transmitted data.

#### Session

Typically only the session ID is sent in cookie, so additional network traffic is minimal.

### CORS

#### JWT

With JWT, additional configuration of HTTP headers may be necessary to handle CORS, as tokens are sent in headers.

#### Session

Cookies are automatically sent with CORS requests, making it easier to handle authentication across different domains.

## Typical use cases

There is no middle ground or statement, that JWT is worse than Session or vice versa. Choice between JWT and Session depends on applications requirements and you need to determine what fits better for your application by knowing differences and typical use cases. I will describe you some of them below.

### JWT

- **Single Page Applications** - modern web apps with rich client-side interactions.
- **APIs and Microservices** - services needing stateless authentication and easy scaling.
- **Mobile Apps** - apps where tokens are stored on devices and server-side state isn’t practical.
- **Federated Authentication** - systems requiring Single Sign-On (SSO) across different applications and domains.

### Session

- **Traditional Web Apps** - e-commerce sites or CRM systems where user state and quick session invalidation are important.
- **Complex User Workflows** - apps with detailed user permissions and interactions, like enterprise tools.
- **Server-Side Session Storage** - apps needing secure server-side storage of session data, such as financial services.