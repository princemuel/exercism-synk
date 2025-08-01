-- Schema: CREATE TABLE "gigasecond" ("moment" TEXT, "result" TEXT);
-- Task: update the gigasecond table and set the result based on the moment.
-- The result should be the moment plus 1 billion seconds.
UPDATE gigasecond
SET result = (
        SELECT strftime(
                '%Y-%m-%dT%H:%M:%S',
                datetime(m.moment, '+1000000000 seconds')
            )
        FROM gigasecond m
        WHERE m.moment = gigasecond.moment
    )
WHERE moment IS NOT NULL;
