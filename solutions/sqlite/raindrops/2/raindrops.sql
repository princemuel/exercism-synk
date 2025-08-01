-- Schema: CREATE TABLE "raindrops" ("number" INT, "sound" TEXT);
-- Task: update the raindrops table and set the sound based on the number.
UPDATE raindrops
SET sound = IIF(number % 3, '', 'Pling') || IIF(number % 5, '', 'Plang') || IIF(number % 7, '', 'Plong');
UPDATE raindrops
SET sound = number
WHERE sound = '';
