-- Schema: CREATE TABLE "rna-transcription" ("dna" TEXT, "result" TEXT);
-- Task: update the rna-transcription table and set the result based on the dna field.
UPDATE "rna-transcription"
SET result = REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(dna, 'G', '1'),
                                -- G -> temp
                                'C',
                                '2' -- C -> temp
                            ),
                            'T',
                            '3' -- T -> temp
                        ),
                        'A',
                        '4' -- A -> temp
                    ),
                    '1',
                    'C' -- temp -> C (G->C)
                ),
                '2',
                'G' -- temp -> G (C->G)
            ),
            '3',
            'A' -- temp -> A (T->A)
        ),
        '4',
        'U' -- temp -> U (A->U)
    );
