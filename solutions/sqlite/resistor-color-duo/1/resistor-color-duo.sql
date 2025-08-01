-- Schema: CREATE TABLE "color_code" ("color1" TEXT, "color2" TEXT, "result" INT);
-- Task: update the color_code table and set the result based on the two colors.
WITH colors(name, value) AS (
    VALUES ('black', 0),
        ('brown', 1),
        ('red', 2),
        ('orange', 3),
        ('yellow', 4),
        ('green', 5),
        ('blue', 6),
        ('violet', 7),
        ('grey', 8),
        ('white', 9)
)
UPDATE color_code
SET result = (
        SELECT a.value * 10 + b.value
        FROM colors a,
            colors b
        WHERE a.name = color_code.color1
            AND b.name = color_code.color2
    );
