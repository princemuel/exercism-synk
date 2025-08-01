use ::core::fmt;

#[derive(Debug, PartialEq, Eq)]
pub struct Dna {
	strand: Vec<DnaNucleotide>,
}

impl Dna {
	pub fn new(strand: &str) -> Result<Dna, usize> {
		let mut nucleotides = Vec::with_capacity(strand.len());

		for (i, c) in strand.char_indices() {
			match DnaNucleotide::try_from(c) {
				Ok(n) => nucleotides.push(n),
				Err(_) => return Err(i),
			}
		}

		Ok(Dna { strand: nucleotides })
	}

	pub fn into_rna(&self) -> Rna {
		let nucleotides = self.strand.iter().map(|&n| n.into()).collect();
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
	strand: Vec<RnaNucleotide>,
}

impl Rna {
	pub fn new(strand: &str) -> Result<Rna, usize> {
		let mut nucleotides = Vec::with_capacity(strand.len());

		for (i, c) in strand.char_indices() {
			match RnaNucleotide::try_from(c) {
				Ok(n) => nucleotides.push(n),
				Err(_) => return Err(i),
			}
		}

		Ok(Rna { strand: nucleotides })
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
pub enum DnaNucleotide {
	Adenine,  // A
	Cytosine, // C
	Guanine,  // G
	Thymine,  // T
}
impl TryFrom<char> for DnaNucleotide {
	type Error = ();
	fn try_from(c: char) -> Result<Self, Self::Error> {
		match c {
			'A' => Ok(DnaNucleotide::Adenine),
			'C' => Ok(DnaNucleotide::Cytosine),
			'G' => Ok(DnaNucleotide::Guanine),
			'T' => Ok(DnaNucleotide::Thymine),
			_ => Err(()),
		}
	}
}
impl From<DnaNucleotide> for char {
	fn from(n: DnaNucleotide) -> char {
		match n {
			DnaNucleotide::Adenine => 'A',
			DnaNucleotide::Cytosine => 'C',
			DnaNucleotide::Guanine => 'G',
			DnaNucleotide::Thymine => 'T',
		}
	}
}
// Convert Dna nucleotide to its Rna complement
impl From<DnaNucleotide> for RnaNucleotide {
	fn from(dna: DnaNucleotide) -> Self {
		match dna {
			DnaNucleotide::Guanine => RnaNucleotide::Cytosine,
			DnaNucleotide::Cytosine => RnaNucleotide::Guanine,
			DnaNucleotide::Thymine => RnaNucleotide::Adenine,
			DnaNucleotide::Adenine => RnaNucleotide::Uracil,
		}
	}
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RnaNucleotide {
	Adenine,  // A
	Cytosine, // C
	Guanine,  // G
	Uracil,   // U
}
impl TryFrom<char> for RnaNucleotide {
	type Error = ();

	fn try_from(c: char) -> Result<Self, Self::Error> {
		match c {
			'A' => Ok(RnaNucleotide::Adenine),
			'C' => Ok(RnaNucleotide::Cytosine),
			'G' => Ok(RnaNucleotide::Guanine),
			'U' => Ok(RnaNucleotide::Uracil),
			_ => Err(()),
		}
	}
}
impl From<RnaNucleotide> for char {
	fn from(n: RnaNucleotide) -> char {
		match n {
			RnaNucleotide::Adenine => 'A',
			RnaNucleotide::Cytosine => 'C',
			RnaNucleotide::Guanine => 'G',
			RnaNucleotide::Uracil => 'U',
		}
	}
}
// Convert Rna nucleotide to its Dna complement
impl From<RnaNucleotide> for DnaNucleotide {
	fn from(rna: RnaNucleotide) -> Self {
		match rna {
			RnaNucleotide::Cytosine => DnaNucleotide::Guanine,
			RnaNucleotide::Guanine => DnaNucleotide::Cytosine,
			RnaNucleotide::Adenine => DnaNucleotide::Thymine,
			RnaNucleotide::Uracil => DnaNucleotide::Adenine,
		}
	}
}
