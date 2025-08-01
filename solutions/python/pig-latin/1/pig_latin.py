def translate(text: str) -> str:
    """Translate English text to Pig Latin."""
    words = text.split()
    result = []

    for word in words:
        # Rule 1: Starts with vowel or "xr" or "yt"
        if word[0].lower() in "aeiou" or word.lower().startswith(("xr", "yt")):
            result.append(word + "ay")
            continue

        # Rule 3: Check for "qu" after consonants
        qu_pos = word.lower().find("qu")
        if qu_pos >= 0 and not any(word[i].lower() in "aeiou" for i in range(qu_pos)):
            result.append(word[qu_pos + 2 :] + word[: qu_pos + 2] + "ay")
            continue

        # Find first vowel or 'y' as non-initial
        for i in range(len(word)):
            # Rule 4: 'y' as vowel (when not first letter)
            if word[i].lower() == "y" and i > 0:
                result.append(word[i:] + word[:i] + "ay")
                break

            # Regular vowel found, apply Rule 2
            if word[i].lower() in "aeiou":
                result.append(word[i:] + word[:i] + "ay")
                break
        else:
            # No vowels found, just add 'ay'
            result.append(word + "ay")

    return " ".join(result)
