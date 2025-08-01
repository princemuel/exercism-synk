pub fn egg_count(n: u32) -> usize {
    // let binary = format!("{:b}", n);
    decimal_to_binary(n).chars().filter(|c| *c == '1').count()
}

pub fn decimal_to_binary(n: u32) -> String {
    (0..32)
        .rev()
        .map(|i| (n >> i) & 1)
        .skip_while(|&bit| bit == 0)
        .map(|bit| if bit == 1 { '1' } else { '0' })
        .collect()
}
