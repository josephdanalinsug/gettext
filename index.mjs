import { writeFileSync } from 'node:fs';
import { faker } from '@faker-js/faker';

const gettext = [
  `msgstr ""
"Language: en\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"Project-Id-Version: \n"
`];


for (let i = 0; i < 400; i++) {
  const sentence =  faker.lorem.sentence(80);

  gettext.push([
    `msgid "${sentence}"`,
    `msgstr "${sentence}"`,
  ].join('\n'));
}

writeFileSync('en.po', gettext.join(`\n\n`));
