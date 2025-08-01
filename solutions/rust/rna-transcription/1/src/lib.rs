#[derive(Debug, PartialEq, Eq)]
pub struct DNA(String);

#[derive(Debug, PartialEq, Eq)]
pub struct RNA(String);

impl DNA {
	pub fn new(strand: &str) -> Result<DNA, usize> {
		for (idx, nucleotide) in strand.char_indices() {
			match nucleotide {
				'A' | 'C' | 'G' | 'T' => continue,
				_ => return Err(idx),
			}
		}

		Ok(DNA(strand.to_string()))
	}

	pub fn into_rna(self) -> RNA {
		let sequence = self
			.0
			.chars()
			.map(|nucleotide| match nucleotide {
				'A' => 'U',
				'C' => 'G',
				'G' => 'C',
				'T' => 'A',
				_ => unreachable!(),
			})
			.collect();
		RNA(sequence)
	}
}

impl RNA {
	pub fn new(strand: &str) -> Result<RNA, usize> {
		for (idx, nucleotide) in strand.char_indices() {
			match nucleotide {
				'A' | 'C' | 'G' | 'U' => continue,
				_ => return Err(idx),
			}
		}

		Ok(RNA(strand.to_string()))
	}
}
