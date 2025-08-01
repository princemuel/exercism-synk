pub fn nth(n: u32) -> u32 {
    PrimeIter::new().nth(n as usize).expect("There should always be an nth prime")
}

struct PrimeIter {
    primes: Vec<u32>,
    next_candidate: u32,
}

impl PrimeIter {
    fn new() -> Self {
        PrimeIter { primes: Vec::with_capacity(64), next_candidate: 2 }
    }

    fn is_prime(&self, num: u32) -> bool {
        self.primes.iter().take_while(|&&p| p * p <= num).all(|&p| num % p != 0)
    }
}

impl Iterator for PrimeIter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        while !self.is_prime(self.next_candidate) {
            self.next_candidate += 1;
        }

        let prime = self.next_candidate;
        self.primes.push(prime);

        self.next_candidate += 1;
        Some(prime)
    }
}
