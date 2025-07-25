---
title: 'Basic concepts of Relational Databases'
date: "10-10-2024"
categories:
    - Databases
---

# Basic concepts of Relational Databases

![Blog image](/databases/databases-basic-concepts.png)

Hello! Today I will describe to you some basic definitions and concepts, which are key, if you want to get to know **relational databases** better. Consider this post only as an **introduction**. I didn't include **literally all** the definitions and concepts, that you should know here. But if you want to know more, then subscribe my blog! In next posts I will expand topics related to relational databases.

## Really basic definitions

- **Data** - Values, which can be processed. This is something, what we save and record in any form.
- **Information** - Data with its semantics - the key to its interpretation. The inability to correctly interpret the data makes it useless.  
- **Redundancy** - Case when the data has too detailed, unnecessary properties.
- **Data model** - Data storage structure, that allows predicting where and in what form data is saved. Popular data models are hierarchical model, network model, relational model or object-oriented model.
- **Primary key** - One or more columns, which clearly identify entire row. Value of primary key can't be empty and must be unique.
- **Foreign key** - One or more columns, which clearly identify row in second table. Value of foreign key is value of primary key in this second table.
- **Alternate / Candidate key** - One or more columns, which clearly identify entire row. Value of candidate key can't be empty and must be unique. Can be used as alternative of primary key. Table can have many candidate keys. For example in Student table, primary key is ID and candidate key is email address (because is unique too).
- **Associative table** - Additional table, which combines two different tables in many-to-many relation.
- **Entity** - Object or thing recognized and described in database. For example it can be person, course or event, which have specified properties (attributes). So Person can be entity and its attributes are first name, last name or age.
- **Attribute** - Property of entity, which is represented with certain value (for example first name with text or age with integer).
- **Entity relationship diagram** - Schema, which visually presents relations between entities in database, usually created with CASE tools.
- **CASE tools** - Special software, which deliver tools with graphical user interface, which allows to draw diagrams and easily design database schema.
- **Record (Row)** - Single entry in the table, which represents one particular object for example one student in Students table.

## Most important relational model concepts

- Data is saved in **tables**.
- Tables have **rows** and **columns**.
- Each column is associated with its **name** and **domain**, defining the set of values ​​that may appear in the column.
- At the intersection of each row and column there is **atomic value** belonging to the domain of the column.
- **Row** represents one record of data for example person.
- In relational model order of rows and columns is **unimportant**.

## Relations

In relational model relations are key element and fulfills a coupe of important functions. They enable to **link data** between tables using keys, which allows to organise and easily combine data from different tables. Thanks to this data are **more organized** and **avoids redundancy**.

### One-To-One

One-To-One relation means, that one record in first table corresponds to exactly one record in second table and vice versa. It is used, when each record in first table have unique counterpart in second.

#### Examples

Each employee has exactly one address and each address belongs to exactly one employee.

![Blog image](/databases/utils/basiccon-1.png)

Each person has exactly one ID and each ID belongs to exactly one person.

![Blog image](/databases/utils/basiccon-2.png)

### One-To-Many

One-To-Many relation means, that one record in first table can correspond to many records in second table, but each record in second table corresponds to only one record in first table.

#### Examples

One teacher can teach many classes, but each class is associated with one teacher.

![Blog image](/databases/utils/basiccon-3.png)

Customer can have multiple orders, but each order is associated with one specific customer.

![Blog image](/databases/utils/basiccon-4.png)

### Many-To-Many

Many-To-Many relation means, that one record in first table can correspond to many records in second table and each record in second table can correspond to many records in first table simultaneously. To achieve this relation, you need to create additional table called **associative table**.

#### Examples

One student can be enrolled to many courses and each course can have many students.

![Blog image](/databases/utils/basiccon-5.png)

One actor can act in many movies and each movie can have many actors.

![Blog image](/databases/utils/basiccon-6.png)

## NULL

NULL is special **object (so-called pseudovalue)**, which means no value. We can insert NULL at the intersection of row and column, if value is not known yet or if we know, that value does not exist. 

### Examples

- At the time of entering the department's data into the table, the department's head is still unknown,
- Student does not have a middle name,
- Student does not have a PESEL number because he is a foreigner.

NULL is something different than zero or zero-length string. In practice it stands as next logical value between TRUE and FALSE. It is not allowed in a primary key column, but is allowed in a unique and foreign keys, unless NOT NULL constraints are imposed on them.

## Constraints

One of the elements, that is defined at the stage of preparing data model is determination of **constraints**, which are set of rules that guarantee the correctness of data in tables.

### Entity contraints

- **Primary key constraints** - Column or set of columns becomes a unique row identifier. Primary key values ​​cannot be repeated and there cannot be NULL pseudovalues ​​in any column of the key.
- **Unique key constraints** – Unique key values ​​cannot be repeated.
- **NOT NULL constraints** – There cannot be NULL pseudovalues ​​in a given column.
- **CHECK constraints** – Certain condition is imposed on the values ​​in a given row.

### Referential constraints

- Referential constraints are also referred as **referential constraints** or **foreign key constraints** which state that: the value of a foreign key can either be NULL or must appear as the value of its associated primary (or unique) key.

## Indexes

**Indexes** are structures, which speeds up searching data in tables with creating additional indicators on columns. Thanks to indexes, queries to database can be realized faster. Cost of index is increase of time and resources needed to insert, update and remove data operations.

### Example 

Imagine, that you have really huge telephone book with millions of phone numbers. If you want to call to your friend, without a table of contents you would have to go through page by page, so it would be really difficult. But if telephone book has an alphabetical list of contacts, you can quickly go to the appropriate section and find you friend's number. Index works similarly. When you create index on a column in table, database creates a table of contents for that column, so you can find data you are interested in more quickly. Thanks to this, queries, that search for information in this column run much faster because the database does not have to search all records one by one.

## Transactions

**Transaction** is set of operations, that are performed as a single unit to ensure data consistency and integrity. Each transaction can include operations like insert, update, remove or select. Main purpose of transaction is to **ensure, that all of these operations are performed in full or none of them is performed**. Transactions allows you to maintain data integrity in cases like system failure, interruption of operations or other conflicts. Transactions are based on four basic properties known as **ACID**

### (A) Atomicity

Ensures, that all operations of transaction are performed in full or none of them is performed in the case of error.

#### Example

Transaction involving the transfer of money between two accounts must involve both a debit to one account and a credit to the other. If one of these operations fails, the entire transaction should be canceled.

### (C) Consistency 

Guarantee, that transaction changes data from one consistent state to another consistent state. This means, that when the transaction completes, database must be in a state, that is logically correct.

#### Example

If a bank account has a minimum balance, the transaction will fail if the withdrawal makes the balance drop below that limit.

### (I) Isolation 

Parallel transactions should not affect each other. Transactions executed simultaneously should be trated as if they were executed sequentially.

#### Example

If one transaction updates data and the other reads the same data, isolation ensures that the read is based on the state before or after the update is completed, rather than on a partially changed state.

### (D) Durabiity 

Ensures, that after transaction completed and commited, changes will be permanently saved.

#### Example

After the transaction to transfer money between accounts has been approved, regardless of the failure, money will be transferred correctly and saved in the database.