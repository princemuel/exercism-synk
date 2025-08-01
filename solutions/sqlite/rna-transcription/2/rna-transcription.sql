-- Schema: CREATE TABLE "rna-transcription" ("dna" TEXT, "result" TEXT);
-- Task: update the rna-transcription table and set the result based on the dna field.
UPDATE "rna-transcription"
SET result = REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(dna, 'G', 'C'),
                -- G -> C
                'C',
                'G' -- C -> G
            ),
            'T',
            'A' -- T -> A
        ),
        'A',
        'U' -- A -> U
    );
