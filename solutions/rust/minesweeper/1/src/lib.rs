pub fn annotate(minefield: &[&str]) -> Vec<String> {
    let height = minefield.len();

    if height == 0 {
        return vec![];
    }

    (0..height)
        .map(|row| {
            let width = minefield[row].len();

            (0..width)
                .map(|col| {
                    if is_mine(minefield, row, col) {
                        '*'
                    } else {
                        let count = count_adjacent_mines(minefield, row, col);

                        if count > 0 {
                            char::from_digit(count, 10).unwrap()
                        } else {
                            ' '
                        }
                    }
                })
                .collect()
        })
        .collect()
}

fn is_mine(minefield: &[&str], row: usize, col: usize) -> bool {
    minefield
        .get(row)
        .and_then(|r| r.as_bytes().get(col))
        .is_some_and(|&c| c == b'*')
}

fn count_adjacent_mines(minefield: &[&str], row: usize, col: usize) -> u32 {
    let adjacent_positions =
        [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)];

    adjacent_positions
        .iter()
        .filter_map(|&(delta_row, delta_col)| {
            let new_row = row as isize + delta_row;
            let new_col = col as isize + delta_col;
            if new_row >= 0 && new_col >= 0 {
                Some((new_row as usize, new_col as usize))
            } else {
                None
            }
        })
        .filter(|&(r, c)| is_mine(minefield, r, c))
        .count() as u32
}
