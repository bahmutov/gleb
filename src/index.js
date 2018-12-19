#! /usr/bin/env node

const boxen = require('boxen')
const { bold, blue } = require('chalk').default

const lines = [
  bold('Gleb Bahmutov, PhD'),
  'JavaScript ninja, image processing expert, software quality fanatic.',
  '',
  bold('       Web: ') + blue('https://glebbahmutov.com'),
  bold('      Blog: ') + blue('https://glebbahmutov.com/blog'),
  bold('      Work: ') + blue('https://www.cypress.io'),
  bold('    Slides: ') + blue('https://slides.com/bahmutov'),
  bold('    GitHub: ') + blue('https://github.com/bahmutov'),
  bold('   Twitter: ') + blue('https://twitter.com/bahmutov'),
  bold('  LinkedIn: ') + blue('https://linkedin.com/in/bahmutov'),
  '',
  'Go on, give ' +
    bold(blue('https://github.com/cypress-io/cypress')) +
    ' a ⭐️'
]

const message = lines.join('\n')

const box = boxen(message, {
  borderColor: 'blue',
  borderStyle: 'round',
  margin: 1,
  padding: 1
})

process.stdout.write(box + '\n')
