pub fn reply(message: &str) -> &str {
    let message = message.trim();

    let is_question = message.ends_with('?');
    let has_letters = message.chars().any(|c| c.is_alphabetic());
    let is_yelling = has_letters && message.chars().all(|c| !c.is_lowercase());

    match (message.is_empty(), is_yelling, is_question) {
        (true, _, _) => "Fine. Be that way!",
        (_, true, true) => "Calm down, I know what I'm doing!",
        (_, true, false) => "Whoa, chill out!",
        (_, false, true) => "Sure.",
        _ => "Whatever.",
    }
}
