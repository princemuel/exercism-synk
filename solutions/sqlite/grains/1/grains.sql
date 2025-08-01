-- Schema: CREATE TABLE "grains" ("task" TEXT, "square" INT, "result" INT);
-- Task: update the grains table and set the result based on the task (and square fields).
UPDATE grains
SET result = CASE
        WHEN task = 'single-square' THEN CASE
            WHEN square BETWEEN 1 AND 64 THEN (1 << (square - 1))
            ELSE NULL -- Invalid square number
        END
        WHEN task = 'total' THEN (1 << 64) - 1 -- 2^64 - 1
        ELSE NULL -- Unknown task
    END;
