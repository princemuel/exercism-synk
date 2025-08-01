// Take a `factor` from `factors`
// Find all  the multiples of that factor less than the `limit`
// Combine the `factors` sets and remove duplicates
// Calculate the sum of all the numbers left in the set
#[must_use]
pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    factors
        .iter()
        .filter(|&&f| f != 0) // Avoid division by zero
        .flat_map(|&f| (f..limit).step_by(f as usize))
        .collect::<std::collections::HashSet<_>>()
        .into_iter()
        .sum()
}
