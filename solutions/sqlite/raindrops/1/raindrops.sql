-- Schema: CREATE TABLE "raindrops" ("number" INT, "sound" TEXT);
-- Task: update the raindrops table and set the sound based on the number.
UPDATE raindrops
SET sound = CASE
        WHEN number % 3 != 0
        AND number % 5 != 0
        AND number % 7 != 0 THEN CAST(number AS TEXT)
        ELSE COALESCE(
            NULLIF(
                (
                    CASE
                        WHEN number % 3 = 0 THEN 'Pling'
                        ELSE ''
                    END
                ) || (
                    CASE
                        WHEN number % 5 = 0 THEN 'Plang'
                        ELSE ''
                    END
                ) || (
                    CASE
                        WHEN number % 7 = 0 THEN 'Plong'
                        ELSE ''
                    END
                ),
                ''
            ),
            CAST(number AS TEXT)
        )
    END;
