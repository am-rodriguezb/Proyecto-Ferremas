/* Getting Started:
Enter "USE {database};" before entering your SQL statements.
Type "--your question" + Enter to try out AI-generated SQL queries
Declare a parameter like "Where id = ${arg}".
*/
SELECT
	*
FROM
	fortune500.fortune500_2018_2022
WHERE
	`company_name` = ${companyName}
ORDER BY
	`year`;