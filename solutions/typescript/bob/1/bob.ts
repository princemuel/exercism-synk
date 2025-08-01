export function hey(message: string): string {
    const msg = message.trim()
    if(!msg) return "Fine. Be that way!";

    let is_question = msg.endsWith('?');
    let has_letters = [...msg].some(is_alphabetic);
    let is_yelling = has_letters &&  msg === msg.toLocaleUpperCase();

    switch (true) {
        case is_yelling && is_question:
          return "Calm down, I know what I'm doing!";
        case is_yelling:
          return "Whoa, chill out!";
        case is_question:
          return "Sure.";
        default:
          return "Whatever.";
      }

}

const is_alphabetic = (char: string) => /^\p{L}$/u.test(char);
