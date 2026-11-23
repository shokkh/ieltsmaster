# IELTS Master

IELTS Master is a static IELTS study site. Run `node serve.js` from the project folder, then open `http://127.0.0.1:8765/ielts-master.html`. The local server supports audio byte ranges required by browser players. Opening the HTML file directly with `file://` can prevent Listening audio from loading.

## Mock tests

- 3 full Academic mock combinations (Listening, Reading, Writing)
- 3 Listening papers, 10 Reading papers, and 7 Writing papers (including the custom university-departments table and essay)
- A three-part Speaking mock with the “Famous person being interviewed” Part 2 cue card
- Timers, answer entry, local progress saving, answer review for Listening and Reading, writing word counts, and optional Speaking recording
- Overview Skill Progress updates from unique submitted mock papers in each skill and is saved on this device
- Performance Over Time and Recent Activity track cumulative active days with at least one submitted mock
- Exam and practice modes

The mock library is practice material, not official IELTS content. Speaking and Writing are not automatically band-scored. Progress is stored in this browser; audio recordings are temporary and are not saved after leaving the page.

## Profile

On the first visit, a setup dialog asks for a name and target band score. The header avatar and mobile-menu Profile button open a local study summary with completed mock and active-day counts; name and target band can be changed there and are saved in this browser.

## English Podcasts

The English Podcasts page links to the ENGLISH PODCASTS Telegram channel, BBC Learning English, and VOA Learning English. Channel episodes and publisher audio open at their original sources; this project does not copy or host those recordings.

## Vocabulary

The Vocabulary Builder includes 92 entries with pronunciation, Uzbek translations, definitions, and example sentences. Search works with English and Uzbek text. The 50 mock-test terms are drawn from the included practice tests; the additional IELTS terms are original material and are not copied from the Essential book.

## Project files

- `ielts-master.html` — application markup and page shell
- `ielts-master.css` — main layout and theme styles
- `ielts-master.js` — navigation, theme, and dashboard behavior
- `vocabulary.js` — additional original IELTS vocabulary entries and rendering
- `mock-tests.css` — mock library, player, and results styles
- `mock-tests.js` — mock library, timers, answer entry, scoring, and Speaking controls
- `mock-bank.js` — imported question bank used by the mock player
- `serve.js` — local static server with audio range support
- `content/` — question-bank data and associated audio/figure assets

Keep these files and the `content/` directory together. No package installation is required. For microphone recording, grant permission when prompted.

## Content attribution

The imported IELTS Studio / Open Lingua question-bank materials and associated assets are distributed under the MIT license. See [IELTS-STUDIO-LICENSE.txt](IELTS-STUDIO-LICENSE.txt). IELTS Master is an independent practice project and is not affiliated with or endorsed by IELTS.
