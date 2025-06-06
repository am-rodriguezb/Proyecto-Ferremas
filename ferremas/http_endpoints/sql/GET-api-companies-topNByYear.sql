/* Getting Started:
Enter "USE {database};" before entering your SQL statements.
Type "--your question" + Enter to try out AI-generated SQL queries
Declare a parameter like "Where id = ${arg}".
*/
SELECT
	`company_name`,
	`rank`
FROM
	fortune500.fortune500_2018_2022
WHERE
	`year` = ${year}
ORDER BY
	`rank` ASC
LIMIT ${N};