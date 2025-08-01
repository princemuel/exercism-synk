pub fn egg_count(display_value: u32) -> u32 {
    let mut n = display_value;
    let mut count = 0;
    while n != 0 {
        count += 1;
        n &= n - 1;
    }
    count
}
