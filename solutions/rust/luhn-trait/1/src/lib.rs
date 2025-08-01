use ::core::fmt::Display;

pub trait Luhn {
	fn valid_luhn(&self) -> bool;
}

// Blanket implementation for any type that implements Display
impl<T> Luhn for T
where
	T: Display,
{
	fn valid_luhn(&self) -> bool {
		let buf = format!("{}", self);

		// Parse digits, filtering out spaces and detecting invalid chars
		let mut digits = Vec::with_capacity(buf.len());
		for byte in buf.bytes() {
			match byte {
				b'0'..=b'9' => digits.push(byte - b'0'),
				b' ' => continue,
				_ => return false,
			}
		}

		if digits.len() < 2 {
			return false;
		}

		let len = digits.len();
		let parity = len % 2;

		let sum: u32 = digits
			.iter()
			.take(len - 1)
			.enumerate()
			.map(|(i, &d)| {
				let value = if i % 2 != parity {
					d
				} else {
					let doubled = d * 2;
					doubled - (doubled > 9) as u8 * 9
				};

				value as u32
			})
			.sum();

		let actual_check = digits[len - 1];
		let expected_check = (10 - (sum % 10)) % 10;

		u32::from(actual_check) == expected_check
	}
}
