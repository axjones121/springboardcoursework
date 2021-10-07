### Conceptual Exercise

Answer the following questions below:

1. What is PostgreSQL?
   
- Postgres is a free and open-source relational database management system for SQL

2. What is the difference between SQL and PostgreSQL?

-  PostgreSQL is a more advanced version of SQL which can support dynamic actions such as select statements that make database tasks more easy.

3. In `psql`, how do you connect to a database?
   
- \c DB_NAME 

4. What is the difference between `HAVING` and `WHERE`?

-  HAVING cannot be used without 'GROUP BY'. Unlike WHERE, HAVING implements in column operation and can have aggregate functions. HAVING can only be used with a 'SELECT' statement. HAVING is also used after a GROUP BY; WHERE is used before a GROUP BY.

5. What is the difference between an `INNER` and `OUTER` join?

-  An inner join matches the condition of both tables. Outer join, joins tables that do not overlap each other.

6. What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?

-  Left join takes all the rows from the first table and combines it with the matching rows from the second table. Right joins takes matching rows from the first table, and combines it with the all the rows from the second table.

7. What is an ORM? What do they do?

-   ORM is object relational mapping. It is a technique that lets you query and manipulate data from a database using an object-oriented program like with Python.

8. What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?

-  HTTP request with AJAX is done through the browser with JavaScript. Server side libraries like "requests" are generally used to make it easier to store data. 

9. What is CSRF? What is the purpose of the CSRF token?

-  CSRF is Cross-Site Request Forgery. The CSRF token protects websites from being hacked from someone trying to access your websites forms functionality. 

10. What is the purpose of `form.hidden_tag()`?

-  The form.hidden_tag() argument generates a hidden field that includes a token that is used to protext the form against CSRF attacks. 