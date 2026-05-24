# The Bat Family — Batman Golden Age (Earth 2)

> A dark, cinematic fan website exploring the Golden Age Bat Family of Earth-2 DC Comics.  
> Discover the characters. Take the personality quiz. Find out which member of the Bat Family you truly are.



## Overview

This is a fully responsive, multi-page fan project built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, no build tools. The design is intentionally cinematic: deep Gotham blacks, gold accents, Cinzel typography, animated bat silhouettes, and glassmorphism character cards.

The project currently covers the **Batman Golden Age (Earth-2)** era. Future parts will expand to:

- Silver and Bronze Ages (Earth-One)
- Post-Crisis (New Earth)
- New 52 and Rebirth (Prime Earth)




## Pages

### `index.html` — Landing Page
The entry point. Full-screen hero section with an atmospheric Gotham backdrop, floating animated bat silhouettes, a procedural skyline silhouette, and staggered fade-in animations. Links to the character roster and the personality quiz.

### `golden-age.html` — The Bat Family
A grid of character cards for every member of the Golden Age Bat Family. Each card includes a character image, role title, name, and a truncated description with a **Read More / Read Less** toggle. Cards animate in on load and glow on hover.

**Characters included:**
- Batman (Bruce Wayne)
- Dick Grayson (Robin / Nightwing)
- Alfred Beagle
- Helena Wayne (The Huntress)
- Kathy Kane (Batwoman)
- Bette Kane (Bat-Girl)
- Catwoman (Selina Kyle)

### `quiz.html` — Personality Quiz
A 15-question multiple-choice personality quiz. Each question presents four options, each mapped to one of the seven characters. Answers accumulate silently across all questions and the character with the highest score is revealed on a styled result screen with a glowing card, character image, and full personality description.


## How the Quiz Works

Each of the 15 questions has 4 answer options. Every option is mapped to one of the 7 characters. When the user selects an answer and proceeds, that character's score increments by 1. After the final question, the character with the highest total score is revealed as the user's result.

No reloads, no routing — the quiz and result screens are toggled in place with JavaScript class switches and CSS transitions.
User selects option → character score +1 → next question rendered (15 times)
Final question answered → tally scores → reveal highest-scoring character


If a user somehow ties (equal top scores), the first character in the sorted result wins — in practice the 15 questions are weighted to make ties rare.


## Roadmap

- [x] Batman Golden Age (Earth-2) — characters + quiz
- [ ] Silver and Bronze Ages (Earth-One)
- [ ] Post-Crisis (New Earth)
- [ ] New 52 and Rebirth (Prime Earth)


## Credits

All character descriptions, story content, and lore are based on DC Comics source material. This is a fan project created for educational and entertainment purposes only. All DC characters, names, and related elements are trademarks of DC Comics / Warner Bros. Discovery. No copyright infringement intended.


## License

This project is open source and available under the [MIT License](LICENSE).
