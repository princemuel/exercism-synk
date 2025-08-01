-- Schema: CREATE TABLE "difference-of-squares" ("number" INT", property" TEXT, "result" INT);
-- Task: update the difference-of-squares table and set the result based on the number and property fields.
UPDATE "difference-of-squares"
SET result = CASE
                property
                WHEN 'squareOfSum' THEN CAST(POWER((number * (number + 1)) / 2, 2) AS INT)
                WHEN 'sumOfSquares' THEN (number * (number + 1) * (2 * number + 1)) / 6
                WHEN 'differenceOfSquares' THEN CAST(POWER((number * (number + 1)) / 2, 2) AS INT) - (number * (number + 1) * (2 * number + 1)) / 6
                ELSE NULL
        END;
