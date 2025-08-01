use std::collections::{BTreeMap, HashSet};
use unicode_segmentation::UnicodeSegmentation;

pub fn anagrams_for<'a>(
    word: &'a str,
    possible_anagrams: &'a [&str],
) -> HashSet<&'a str> {
    let target_key = frequency_map(word);
    let lowercased_word = word.to_lowercase();

    possible_anagrams
        .iter()
        .filter(|&&candidate| {
            candidate.to_lowercase() != lowercased_word
                && frequency_map(candidate) == target_key
        })
        .cloned()
        .collect()
}

fn frequency_map(word: &str) -> BTreeMap<String, usize> {
    let mut freq_map = BTreeMap::new();

    for g in word.to_lowercase().graphemes(true) {
        *freq_map.entry(g.to_string()).or_insert(0) += 1;
    }

    freq_map
}
