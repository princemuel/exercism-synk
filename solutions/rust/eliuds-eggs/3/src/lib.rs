pub fn egg_count(display_value: u32) -> u32 {
    let mut count = 0;
    let mut n = display_value;

    while n > 0 {
        count += n & 1;
        n >>= 1;
    }

    count
}
