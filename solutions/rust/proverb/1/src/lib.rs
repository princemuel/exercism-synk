pub fn build_proverb(list: &[&str]) -> String {
	if list.is_empty() {
		return String::with_capacity(0);
	}

	let mut lines = Vec::with_capacity(list.len());

	for pair in list.windows(2) {
		lines.push(format!("For want of a {} the {} was lost.", pair[0], pair[1]));
	}

	lines.push(format!("And all for the want of a {}.", list[0]));
	lines.join("\n")
}
