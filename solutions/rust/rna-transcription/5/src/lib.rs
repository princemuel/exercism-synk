use ::core::fmt;

#[derive(Debug, PartialEq, Eq)]
pub struct Dna {
	strand: Vec<Nucleotide>,
}

impl Dna {
	pub fn new(strand: &str) -> Result<Dna, usize> {
		let mut nucleotides = Vec::with_capacity(strand.len());

		for (i, c) in strand.char_indices() {
			match Nucleotide::try_from(c) {
				Ok(n) if n.is_dna() => nucleotides.push(n),
				_ => return Err(i),
			}
		}

		Ok(Dna { strand: nucleotides })
	}

	pub fn into_rna(&self) -> Rna {
		let nucleotides =
			self.strand.iter().map(|&n| n.to_rna_complement().unwrap()).collect();
		Rna { strand: nucleotides }
	}
}

impl fmt::Display for Dna {
	fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
		for nucleotide in &self.strand {
			write!(f, "{}", char::from(*nucleotide))?;
		}
		Ok(())
	}
}

#[derive(Debug, PartialEq, Eq)]
pub struct Rna {
	strand: Vec<Nucleotide>,
}

impl Rna {
	pub fn new(strand: &str) -> Result<Rna, usize> {
		let mut nucleotides = Vec::with_capacity(strand.len());

		for (i, c) in strand.char_indices() {
			match Nucleotide::try_from(c) {
				Ok(n) if n.is_rna() => nucleotides.push(n),
				_ => return Err(i),
			}
		}

		Ok(Rna { strand: nucleotides })
	}

	pub fn into_dna(&self) -> Dna {
		let nucleotides =
			self.strand.iter().map(|&n| n.to_dna_complement().unwrap()).collect();
		Dna { strand: nucleotides }
	}
}

impl fmt::Display for Rna {
	fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
		for nucleotide in &self.strand {
			write!(f, "{}", char::from(*nucleotide))?;
		}
		Ok(())
	}
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Nucleotide {
	Adenine,  // A
	Cytosine, // C
	Guanine,  // G
	Thymine,  // T
	Uracil,   // U
}

impl TryFrom<char> for Nucleotide {
	type Error = ();
	fn try_from(c: char) -> Result<Self, Self::Error> {
		match c {
			'A' => Ok(Nucleotide::Adenine),
			'C' => Ok(Nucleotide::Cytosine),
			'G' => Ok(Nucleotide::Guanine),
			'T' => Ok(Nucleotide::Thymine),
			'U' => Ok(Nucleotide::Uracil),
			_ => Err(()),
		}
	}
}

impl From<Nucleotide> for char {
	fn from(n: Nucleotide) -> char {
		match n {
			Nucleotide::Adenine => 'A',
			Nucleotide::Cytosine => 'C',
			Nucleotide::Guanine => 'G',
			Nucleotide::Thymine => 'T',
			Nucleotide::Uracil => 'U',
		}
	}
}

impl Nucleotide {
	pub fn is_dna(self) -> bool {
		matches!(
			self,
			Nucleotide::Adenine
				| Nucleotide::Cytosine
				| Nucleotide::Guanine
				| Nucleotide::Thymine
		)
	}

	pub fn is_rna(self) -> bool {
		matches!(
			self,
			Nucleotide::Adenine
				| Nucleotide::Cytosine
				| Nucleotide::Guanine
				| Nucleotide::Uracil
		)
	}

	pub fn to_rna_complement(self) -> Option<Nucleotide> {
		match self {
			Nucleotide::Guanine => Some(Nucleotide::Cytosine),
			Nucleotide::Cytosine => Some(Nucleotide::Guanine),
			Nucleotide::Thymine => Some(Nucleotide::Adenine),
			Nucleotide::Adenine => Some(Nucleotide::Uracil),
			Nucleotide::Uracil => None, // Not valid input for DNA→RNA
		}
	}

	pub fn to_dna_complement(self) -> Option<Nucleotide> {
		match self {
			Nucleotide::Guanine => Some(Nucleotide::Cytosine),
			Nucleotide::Cytosine => Some(Nucleotide::Guanine),
			Nucleotide::Uracil => Some(Nucleotide::Adenine),
			Nucleotide::Adenine => Some(Nucleotide::Thymine),
			Nucleotide::Thymine => None, // Not valid input for RNA→DNA
		}
	}
}
