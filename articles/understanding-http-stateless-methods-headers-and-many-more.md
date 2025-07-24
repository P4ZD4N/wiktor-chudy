---
title: 'Understanding HTTP: statelessness, methods, headers and many more!'
date: "28-10-2024"
categories:
    - Programming
---

# Understanding HTTP: statelessness, methods, headers and many more!

![Blog image](/programming/programming-understanding-http.png)

Hello! In this article I would like to tell you some important information about HTTP protocol, which is really significant thing in topics like computer networks or web development. Let's start!

## What is HTTP?

It is one of many protocols, which belongs to **application layer in TCP/IP model**. It means, that HTTP is protocol used by most applications for providing user services or exchanging application data over the network connections established by lower-level protocol (which belongs to Transport layer, Internet layer etc.).

In other words **HTTP** is using for communication between client and server. With this protocol clients communicate with servers to order files that make up websites and provide the necessary information e.g. content entered in forms. It determines the form of the client's requests for data and the form of the server's response to these requests.

Other important information about HTTP:
- It is **stateless** protocol.
- Port used by HTTP is **80** (**443** by HTTPS).

### What does it mean that HTTP protocol is stateless?

Each request from the client is independent and does not contain information about previous requests. Neither server nor client does not store previous requests details and each request is treated as new. It seems, that for example information about currently authenticated user is not possible to maintain in entire application lifecycle. But nowadays there are solutions for this type of problems. For example, we have cookies in the case with authentication. However, remember, that HTTP itself is **stateless**.

## Types of HTTP connections

### Persistent connection

- Each **HTTP** request causes opening new TCP/IP connection which is closed immediately, after the server response.
- Each resource (e.g. HTML file, image) requires separate connection.
- **HTTP/1.0** uses this approach by default, but there is possibility to enable persistence with specific headers.

### Non-persistent connection

- TCP connection is still opened after the server response, which enables to send next requests and responses with the same connection.
- **HTTP/1.1** uses this approach default with keep-alive mechanism enabled by default.

## Methods

HTTP protocol uses various methods to effectively manage communication between client and server. Each method has specific purpose and determine own way to process request.

- **GET** - Fetching resources like HTML files, images, documents and others from the server. Exists in each HTTP version. GET is idempotent.
- **POST** - Sending data (for example from form) to the server for further processing. Mainly for creating new resource. Exists in each HTTP version from HTTP/1.0. POST is not idempotent.
- **PUT** - Creates a new resource or replaces a representation of the target resource with the request content (update). Exists in each HTTP version from HTTP/1.0. PUT is idempotent and this is difference between POST.
- **DELETE** - Removing resources from the server. Exists in each HTTP version  from HTTP/1.1. DELETE is idempotent.
- **HEAD** - Fetching HTTP headers without resource content. Helps with verification of resource existence or with checking metadata (for example resource length or last modification data). Exists in each HTTP version from HTTP/1.0. HEAD is idempotent.
- **OPTIONS** - Checking, which HTTP methods are supported for a specific resource or the entire server. Helps client with find out what operations are possible without taking specific actions. Exists in each HTTP version from HTTP/1.1. OPTIONS is idempotent.
- **PATCH** - Updating existing resource partially (changing only particular field or parts of resource specified by request). Exists in each HTTP version from HTTP/1.1. PATCH is partially idempotent.
- **TRACE** - Diagnose connections and detect changes in requests along the way between client and server, allowing you to identify errors or modifications made by proxy servers. Exists in each HTTP version from HTTP/1.1. TRACE is idempotent.

## Methods idempotency

What actually means, that method is **idempotent**? It is property, that ensures, that performing the same operation multiple times has the same effect as performing it once. In other words, idempotent operation gives the same result no matter how many times it is repeated.

In context of **HTTP** is means, that sending a couple of identical requests does not change server state and the result compared to previous request is identical.

### Examples

- **GET** - Idempotent method. Sending the same request multiple times does not change server state. It simply fetch the same data every time.
- **POST** - Not idempotent. It is mainly intended for operations, which can change server state every time they are performed. For example POST can create new record in database, so performing it multiple times can lead to create many copies of the same resource.
- **PUT** - Idempotent. Performing it multiple times with identical data will overwrite resource, but the final state of this resource will not change after repeated overwrite attempts.
- **DELETE** - Idempotent. First DELETE request will remove resource, and each next attempt will not change its state, because resource is already removed.
- **HEAD** - Idempotent. As you already know, it works similarly to GET but without response content. It simply fetch the same headers every time.
- **PATCH** - Partially idempotent. Idempotency depends on implementation. It can be idempotent, when you would like to update resource to one particular value each time. For example when always setting price to 100. But can be also non-idempotent, when it works as increase/decrease. For example when always increasing price by 10. Then response will be different each time.

## Headers

**Headers** are key element of HTTP protocol, which enable to send many additional information between client and server. Headers contains request's or response's metadata such as information about data type, authentication, encoding, session duration, cache settings and much more. Each header consist of key-value pair and is sending before request or response content.

```
Header: value
```

Nowadays, in the newest versions of protocol there are **over 80 headers available**, but I would like to list you a couple of the most important ones. We can divide them into following categories.

### General Headers 

Can occur both in request and in response. They are referring to the general qualities of communication.

- **Connection** - Specifies whether connection will be closed or maintained after the requests completes. Example values are keep-alive or close.
- **Cache-Control** - Specifies policy for resource caching by browsers or proxy servers. Can contain values such as no-cache, no-store or max-age=3600.
- **Date** - Indicates date and time of request creation.

### Request Headers 

Used by client to deliver additional information about request and preferences.

- **Host** - Contains domain name and port of server, to which request is sending.
- **User-Agent** - Identify client, who sends request. If client is web browser, value usually will contain browser name, version and operating system.
- **Accept** - Inform server, which type of data client is able to accept. Value can be for example text/html or application/json.
- **Authorization** - Used to sending authentication data. Value can be for example Basic dXNlcjpwYXNzd29yZA==, where data is encoded with Base64 algorithm.
- **Content-Type** - Specifies type of content, which is sending in request. For example application/json.

### Response Headers 

Deliver information about server and response to the client.

- **Content-Type** - Specifies type of content, which is sending in response. For example text/html; charset=UTF-8.
- **Content-Length** - Informs about length of entire content of response in bytes. For example Content-Length: 348
- Server - Identify server's software and operating system. For example Apache/2.4.1 (Unix)
- **Set-Cookie** - Sends to the browser  information about cookies, which should be saved. Example value can be sessionId=abc123, HttpOnly; Secure

### Security Headers 

Helps with application protection against typical hacker's attacks like XSS or CSRF.

- **Strict-Transport-Security** - Forces browser to always connect with usage of HTTPS. Value can be for example max-age=31536000
- **X-Content-Type-Options** - Protects against interpretation of content as other type than specified in Content-Type header.

### Headers related to caching and session control 

- **Expires** - Date, after which resource is recognized as deprecated.
- **Last-Modified** - Date, which indicates, when resource was last modified.

## Response status codes

**Response status codes** are actually **three-digit numbers**, which informs about result of processing particular request sent by client to the server. Enables to find out whether request was successful or if there was a problem. These codes are divided into five main categories:

- **1XX** - Information codes, which indicates, that request was received and processing is in progress.
- **2XX** - Success codes, which means, that request has been successfully processed and the response is correct.
- **3XX** - Redirection codes, which indicates that the resource has been moved or requires further action from the client.
- **4XX** - Client error codes, which means, that the error occurred on the client side.
- **5XX** - Server error codes, which means, that the error occurred on the server side.

## Cookies

**Cookie** is a small piece of data, which server sends to a user's web browser to store information about state, session, preferences and user's actions. They are saved on the device in special browser's file and automatically sending back to the server during next requests. Typically they are used for **authentication purposes** and to **store user's preferences**.

When you visit the website, the server may send a cookie using the **Set-Cookie** header in the response. An example header looks like this:

```
Set-cookie: sessionId=abc123; Expires=Wed, 09 Jun 2024 10:18:14 GMT; Path=/; Secure; HttpOnly
```

- Name and value, where sessionId is the name of cookie and abc123 is the value,
- Date of expiration, which is determined by the Expires attribute,
- Path, for which cookie is available, which is determined by the Path attribute
- Cookie will be send only with HTTPS, which is determined by the Secure attribute,
- Cookie is not available for JavaScript, which is determined by the HttpOnly attribute (increases security and protects against XSS attacks).

When the client is sending request, browser can automatically add cookie to it with the Cookie header. Example:

```
Cookie: sessionId=abc123
```

Thanks to this server can "recognize" user and for example, keep his login or preferences.

## HTTPS

**HTTPS** is HTTP protocol with security. Protection with **TLS (Transport Layer Security**) protocol is intended to prevent interception of communication between client and server (man in the middle attack) or even modification of transmitted data before it reaches its destination.

Unlike HTTP, which listens on port **80**, HTTPS servers listen on port **443**. URLs starts with https://, while HTTP addresses start with http://.