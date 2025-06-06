/* Getting Started:
Enter "USE {database};" before entering your SQL statements.
Type "--your question" + Enter to try out AI-generated SQL queries
Declare a parameter like "Where id = ${arg}".
*/
SELECT
	`country`,
	COUNT(*) AS `count`
FROM
	fortune500.fortune500_2018_2022
WHERE
	`year` = ${year}
GROUP BY
	`country`
ORDER BY
	`count` DESC;