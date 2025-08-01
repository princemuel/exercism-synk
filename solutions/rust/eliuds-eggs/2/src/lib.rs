pub fn egg_count(display_value: u32) -> u32 {
    let mut count = 0;
    let mut n = display_value;

    while n > 0 {
        count += n % 2;
        n /= 2;
    }

    count
}
