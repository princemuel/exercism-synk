-- Schema: CREATE TABLE "difference-of-squares" ("number" INT", property" TEXT, "result" INT);
-- Task: update the difference-of-squares table and set the result based on the number and property fields.
UPDATE "difference-of-squares"
SET result = CASE
                property
                WHEN 'squareOfSum' THEN CAST(POWER(sum_1_to_n, 2) AS INT)
                WHEN 'sumOfSquares' THEN sum_of_squares
                WHEN 'differenceOfSquares' THEN CAST(POWER(sum_1_to_n, 2) AS INT) - sum_of_squares
                ELSE NULL
        END
FROM (
                SELECT number,
                        (number * (number + 1)) / 2 AS sum_1_to_n,
                        (number * (number + 1) * (2 * number + 1)) / 6 AS sum_of_squares
                FROM "difference-of-squares"
        ) AS precomputed
WHERE "difference-of-squares".number = precomputed.number;
