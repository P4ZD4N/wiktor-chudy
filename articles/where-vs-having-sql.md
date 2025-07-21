---
title: 'WHERE vs. HAVING in SQL'
date: "03-12-2024"
categories:
    - Databases
---

# WHERE vs. HAVING in SQL

![Blog image](/databases/databases-where-vs-having.png)

In SQL both **WHERE** and **HAVING** clauses are used to filter data, but context, in which they are used and their functionalities are different. This topic often make beginner developers confused, so I decided to describe these differences in short and concise way.

## WHERE

**WHERE** clause is definitely easier to understand, because I think, that it is used in more queries than **HAVING**. Remember about WHERE:

- Intended to filter records before grouping is performed (before **GROUP BY**). It operates on data returned by SEL**ECT clause.
- Applies to individual records in a table.
- Can be used with most condition types such as comparisons, logical operators, etc.
- Using aggregation functions is not possible.

### Example

```sql
SELECT *
FROM products
WHERE price > 100;
```

In this example **WHERE** clause retains only these products, whose price is greater than 100.

## HAVING

**HAVING** clause is used in fewer queries, because we use it only to filter groups of records. Remember about **HAVING**:

- Intended to filter groups after grouping has been performed (after **GROUP BY**).
- Used to work with aggregate functions (e.g. **SUM**, **AVG**, **COUNT**) when we would like to limit results returned by groups.
- Does not work directly on single records.
- Using column names, which not occurs after **GROUP BY** clause is not possible.

### Example

```sql
SELECT category, AVG(price) AS average_price
FROM products
GROUP BY category
HAVING AVG(price) > 100;
```

In this example **HAVING** clause retains only these categories, where the average price is greater than 100.

## Combining WHERE and HAVING in a single query

It is of course possible to use both clauses in one query. For example:

```sql
SELECT category, COUNT(*) AS products_count
FROM products
WHERE price > 50
GROUP BY category
HAVING COUNT(*) > 5;
```

In this example **WHERE** clause keeps only products, whose price is greater than 50. Next, data is grouped by category and filtered by **HAVING** clause. It will keep only these categories, where products count is greater than 5.