const code128Table = [
  {
    Valeur: 0,
    'Table A': 'Espace',
    'Table B': 'Espace',
    'Table C': '00',
    'Code ASCII': '0032 ou 0212',
    Caractère: 'Espace ou Ô',
    Motif: '11011001100'
  },
  {
    Valeur: 1,
    'Table A': '!',
    'Table B': '!',
    'Table C': '01',
    'Code ASCII': '33',
    Caractère: '!',
    Motif: '11001101100'
  },
  {
    Valeur: 2,
    'Table A': '"',
    'Table B': '"',
    'Table C': '02',
    'Code ASCII': '',
    Caractère: '?????',
    Motif: '11001100110'
  },
  {
    Valeur: 3,
    'Table A': '#',
    'Table B': '#',
    'Table C': '03',
    'Code ASCII': '35',
    Caractère: '#',
    Motif: '10010011000'
  },
  {
    Valeur: 4,
    'Table A': '$',
    'Table B': '$',
    'Table C': '04',
    'Code ASCII': '36',
    Caractère: '$',
    Motif: '10010001100'
  },
  {
    Valeur: 5,
    'Table A': '%',
    'Table B': '%',
    'Table C': '05',
    'Code ASCII': '37',
    Caractère: '%',
    Motif: '10001001100'
  },
  {
    Valeur: 6,
    'Table A': '&',
    'Table B': '&',
    'Table C': '06',
    'Code ASCII': '38',
    Caractère: '&',
    Motif: '10011001000'
  },
  {
    Valeur: 7,
    'Table A': "'",
    'Table B': "'",
    'Table C': '07',
    'Code ASCII': '39',
    Caractère: "'",
    Motif: '10011000100'
  },
  {
    Valeur: 8,
    'Table A': '(',
    'Table B': '(',
    'Table C': '08',
    'Code ASCII': '40',
    Caractère: '(',
    Motif: '10001100100'
  },
  {
    Valeur: 9,
    'Table A': ')',
    'Table B': ')',
    'Table C': '09',
    'Code ASCII': '41',
    Caractère: ')',
    Motif: '11001001000'
  },
  {
    Valeur: 10,
    'Table A': '*',
    'Table B': '*',
    'Table C': '10',
    'Code ASCII': '42',
    Caractère: '*',
    Motif: '11001000100'
  },
  {
    Valeur: 11,
    'Table A': '+',
    'Table B': '+',
    'Table C': '11',
    'Code ASCII': '43',
    Caractère: '+',
    Motif: '11000100100'
  },
  {
    Valeur: 12,
    'Table A': ',',
    'Table B': ',',
    'Table C': '12',
    'Code ASCII': '',
    Caractère: '12',
    Caractère: '44',
    Motif: '10110011100'
  },
  {
    Valeur: 13,
    'Table A': '-',
    'Table B': '-',
    'Table C': '13',
    'Code ASCII': '45',
    Caractère: '-',
    Motif: '10011011100'
  },
  {
    Valeur: 14,
    'Table A': '.',
    'Table B': '.',
    'Table C': '14',
    'Code ASCII': '46',
    Caractère: '.',
    Motif: '10011001110'
  },
  {
    Valeur: 15,
    'Table A': '/',
    'Table B': '/',
    'Table C': '15',
    'Code ASCII': '47',
    Caractère: '/',
    Motif: '10111001100'
  },
  {
    Valeur: 16,
    'Table A': '0',
    'Table B': '0',
    'Table C': '16',
    'Code ASCII': '48',
    Caractère: '0',
    Motif: '10011101100'
  },
  {
    Valeur: 17,
    'Table A': '1',
    'Table B': '1',
    'Table C': '17',
    'Code ASCII': '49',
    Caractère: '1',
    Motif: '10011100110'
  },
  {
    Valeur: 18,
    'Table A': '2',
    'Table B': '2',
    'Table C': '18',
    'Code ASCII': '50',
    Caractère: '2',
    Motif: '11001110010'
  },
  {
    Valeur: 19,
    'Table A': '3',
    'Table B': '3',
    'Table C': '19',
    'Code ASCII': '51',
    Caractère: '3',
    Motif: '11001011100'
  },
  {
    Valeur: 20,
    'Table A': '4',
    'Table B': '4',
    'Table C': '20',
    'Code ASCII': '52',
    Caractère: '4',
    Motif: '11001001110'
  },
  {
    Valeur: 21,
    'Table A': '5',
    'Table B': '5',
    'Table C': '21',
    'Code ASCII': '53',
    Caractère: '5',
    Motif: '11011100100'
  },
  {
    Valeur: 22,
    'Table A': '6',
    'Table B': '6',
    'Table C': '22',
    'Code ASCII': '54',
    Caractère: '6',
    Motif: '11001110100'
  },
  {
    Valeur: 23,
    'Table A': '7',
    'Table B': '7',
    'Table C': '23',
    'Code ASCII': '55',
    Caractère: '7',
    Motif: '11101101110'
  },
  {
    Valeur: 24,
    'Table A': '8',
    'Table B': '8',
    'Table C': '24',
    'Code ASCII': '56',
    Caractère: '8',
    Motif: '11101001100'
  },
  {
    Valeur: 25,
    'Table A': '9',
    'Table B': '9',
    'Table C': '25',
    'Code ASCII': '57',
    Caractère: '9',
    Motif: '11100101100'
  },
  {
    Valeur: 26,
    'Table A': ':',
    'Table B': ':',
    'Table C': '26',
    'Code ASCII': '58',
    Caractère: ':',
    Motif: '11100100110'
  },
  {
    Valeur: 27,
    'Table A': ';',
    'Table B': ';',
    'Table C': '27',
    'Code ASCII': '59',
    Caractère: ';',
    Motif: '11101100100'
  },
  {
    Valeur: 28,
    'Table A': '<',
    'Table B': '<',
    'Table C': '28',
    'Code ASCII': '60',
    Caractère: '<',
    Motif: '11100110100'
  },
  {
    Valeur: 29,
    'Table A': '=',
    'Table B': '=',
    'Table C': '29',
    'Code ASCII': '61',
    Caractère: '=',
    Motif: '11100110010'
  },
  {
    Valeur: 30,
    'Table A': '>',
    'Table B': '>',
    'Table C': '30',
    'Code ASCII': '62',
    Caractère: '>',
    Motif: '11011011000'
  },
  {
    Valeur: 31,
    'Table A': '?',
    'Table B': '?',
    'Table C': '31',
    'Code ASCII': '63',
    Caractère: '?',
    Motif: '11011000110'
  },
  {
    Valeur: 32,
    'Table A': '@',
    'Table B': '@',
    'Table C': '32',
    'Code ASCII': '64',
    Caractère: '@',
    Motif: '11000110110'
  },
  {
    Valeur: 33,
    'Table A': 'A',
    'Table B': 'A',
    'Table C': '33',
    'Code ASCII': '65',
    Caractère: 'A',
    Motif: '10100011000'
  },
  {
    Valeur: 34,
    'Table A': 'B',
    'Table B': 'B',
    'Table C': '34',
    'Code ASCII': '66',
    Caractère: 'B',
    Motif: '10001011000'
  },
  {
    Valeur: 35,
    'Table A': 'C',
    'Table B': 'C',
    'Table C': '35',
    'Code ASCII': '67',
    Caractère: 'C',
    Motif: '10001000110'
  },
  {
    Valeur: 36,
    'Table A': 'D',
    'Table B': 'D',
    'Table C': '36',
    'Code ASCII': '68',
    Caractère: 'D',
    Motif: '10110001000'
  },
  {
    Valeur: 37,
    'Table A': 'E',
    'Table B': 'E',
    'Table C': '37',
    'Code ASCII': '69',
    Caractère: 'E',
    Motif: '10001101000'
  },
  {
    Valeur: 38,
    'Table A': 'F',
    'Table B': 'F',
    'Table C': '38',
    'Code ASCII': '70',
    Caractère: 'F',
    Motif: '10001100010'
  },
  {
    Valeur: 39,
    'Table A': 'G',
    'Table B': 'G',
    'Table C': '39',
    'Code ASCII': '71',
    Caractère: 'G',
    Motif: '11010001000'
  },
  {
    Valeur: 40,
    'Table A': 'H',
    'Table B': 'H',
    'Table C': '40',
    'Code ASCII': '72',
    Caractère: 'H',
    Motif: '11000101000'
  },
  {
    Valeur: 41,
    'Table A': 'I',
    'Table B': 'I',
    'Table C': '41',
    'Code ASCII': '73',
    Caractère: 'I',
    Motif: '11000100010'
  },
  {
    Valeur: 42,
    'Table A': 'J',
    'Table B': 'J',
    'Table C': '42',
    'Code ASCII': '74',
    Caractère: 'J',
    Motif: '10110111000'
  },
  {
    Valeur: 43,
    'Table A': 'K',
    'Table B': 'K',
    'Table C': '43',
    'Code ASCII': '75',
    Caractère: 'K',
    Motif: '10110001110'
  },
  {
    Valeur: 44,
    'Table A': 'L',
    'Table B': 'L',
    'Table C': '44',
    'Code ASCII': '76',
    Caractère: 'L',
    Motif: '10001101110'
  },
  {
    Valeur: 45,
    'Table A': 'M',
    'Table B': 'M',
    'Table C': '45',
    'Code ASCII': '77',
    Caractère: 'M',
    Motif: '10111011000'
  },
  {
    Valeur: 46,
    'Table A': 'N',
    'Table B': 'N',
    'Table C': '46',
    'Code ASCII': '78',
    Caractère: 'N',
    Motif: '10111000110'
  },
  {
    Valeur: 47,
    'Table A': 'O',
    'Table B': 'O',
    'Table C': '47',
    'Code ASCII': '79',
    Caractère: 'O',
    Motif: '10001110110'
  },
  {
    Valeur: 48,
    'Table A': 'P',
    'Table B': 'P',
    'Table C': '48',
    'Code ASCII': '80',
    Caractère: 'P',
    Motif: '11101110110'
  },
  {
    Valeur: 49,
    'Table A': 'Q',
    'Table B': 'Q',
    'Table C': '49',
    'Code ASCII': '81',
    Caractère: 'Q',
    Motif: '11010001110'
  },
  {
    Valeur: 50,
    'Table A': 'R',
    'Table B': 'R',
    'Table C': '50',
    'Code ASCII': '82',
    Caractère: 'R',
    Motif: '11000101110'
  },
  {
    Valeur: 51,
    'Table A': 'S',
    'Table B': 'S',
    'Table C': '51',
    'Code ASCII': '83',
    Caractère: 'S',
    Motif: '11011101000'
  },
  {
    Valeur: 52,
    'Table A': 'T',
    'Table B': 'T',
    'Table C': '52',
    'Code ASCII': '84',
    Caractère: 'T',
    Motif: '11011100010'
  },
  {
    Valeur: 53,
    'Table A': 'U',
    'Table B': 'U',
    'Table C': '53',
    'Code ASCII': '85',
    Caractère: 'U',
    Motif: '11011101110'
  },
  {
    Valeur: 54,
    'Table A': 'V',
    'Table B': 'V',
    'Table C': '54',
    'Code ASCII': '86',
    Caractère: 'V',
    Motif: '11101011000'
  },
  {
    Valeur: 55,
    'Table A': 'W',
    'Table B': 'W',
    'Table C': '55',
    'Code ASCII': '87',
    Caractère: 'W',
    Motif: '11101000110'
  },
  {
    Valeur: 56,
    'Table A': 'X',
    'Table B': 'X',
    'Table C': '56',
    'Code ASCII': '88',
    Caractère: 'X',
    Motif: '11100010110'
  },
  {
    Valeur: 57,
    'Table A': 'Y',
    'Table B': 'Y',
    'Table C': '57',
    'Code ASCII': '89',
    Caractère: 'Y',
    Motif: '11101101000'
  },
  {
    Valeur: 58,
    'Table A': 'Z',
    'Table B': 'Z',
    'Table C': '58',
    'Code ASCII': '90',
    Caractère: 'Z',
    Motif: '11101100010'
  },
  {
    Valeur: 59,
    'Table A': '[',
    'Table B': '[',
    'Table C': '59',
    'Code ASCII': '91',
    Caractère: '[',
    Motif: '11100011010'
  },
  {
    Valeur: 60,
    'Table A': '\\',
    'Table B': '\\',
    'Table C': '60',
    'Code ASCII': '92',
    Caractère: '\\',
    Motif: '11101111010'
  },
  {
    Valeur: 61,
    'Table A': ']',
    'Table B': ']',
    'Table C': '61',
    'Code ASCII': '93',
    Caractère: ']',
    Motif: '11001000010'
  },
  {
    Valeur: 62,
    'Table A': '^',
    'Table B': '^',
    'Table C': '62',
    'Code ASCII': '94',
    Caractère: '^',
    Motif: '11110001010'
  },
  {
    Valeur: 63,
    'Table A': '_',
    'Table B': '_',
    'Table C': '63',
    'Code ASCII': '95',
    Caractère: '_',
    Motif: '10100110000'
  },
  {
    Valeur: 64,
    'Table A': 'nul',
    'Table B': '`',
    'Table C': '64',
    'Code ASCII': '96',
    Caractère: '`',
    Motif: '10100001100'
  },
  {
    Valeur: 65,
    'Table A': 'soh',
    'Table B': 'a',
    'Table C': '65',
    'Code ASCII': '97',
    Caractère: 'a',
    Motif: '10010110000'
  },
  {
    Valeur: 66,
    'Table A': 'stx',
    'Table B': 'b',
    'Table C': '66',
    'Code ASCII': '98',
    Caractère: 'b',
    Motif: '10010000110'
  },
  {
    Valeur: 67,
    'Table A': 'etx',
    'Table B': 'c',
    'Table C': '67',
    'Code ASCII': '99',
    Caractère: 'c',
    Motif: '10000101100'
  },
  {
    Valeur: 68,
    'Table A': 'eot',
    'Table B': 'd',
    'Table C': '68',
    'Code ASCII': '100',
    Caractère: 'd',
    Motif: '10000100110'
  },
  {
    Valeur: 69,
    'Table A': 'eno',
    'Table B': 'e',
    'Table C': '69',
    'Code ASCII': '101',
    Caractère: 'e',
    Motif: '10110010000'
  },
  {
    Valeur: 70,
    'Table A': 'ack',
    'Table B': 'f',
    'Table C': '70',
    'Code ASCII': '102',
    Caractère: 'f',
    Motif: '10110000100'
  },
  {
    Valeur: 71,
    'Table A': 'bel',
    'Table B': 'g',
    'Table C': '71',
    'Code ASCII': '103',
    Caractère: 'g',
    Motif: '10011010000'
  },
  {
    Valeur: 72,
    'Table A': 'bs',
    'Table B': 'h',
    'Table C': '72',
    'Code ASCII': '104',
    Caractère: 'h',
    Motif: '10011000010'
  },
  {
    Valeur: 73,
    'Table A': 'ht',
    'Table B': 'i',
    'Table C': '73',
    'Code ASCII': '105',
    Caractère: 'i',
    Motif: '10000110100'
  },
  {
    Valeur: 74,
    'Table A': 'lf',
    'Table B': 'j',
    'Table C': '74',
    'Code ASCII': '106',
    Caractère: 'j',
    Motif: '10000110010'
  },
  {
    Valeur: 75,
    'Table A': 'vt',
    'Table B': 'k',
    'Table C': '75',
    'Code ASCII': '107',
    Caractère: 'k',
    Motif: '11000010010'
  },
  {
    Valeur: 76,
    'Table A': 'ff',
    'Table B': 'l',
    'Table C': '76',
    'Code ASCII': '108',
    Caractère: 'l',
    Motif: '11001010000'
  },
  {
    Valeur: 77,
    'Table A': 'cr',
    'Table B': 'm',
    'Table C': '77',
    'Code ASCII': '109',
    Caractère: 'm',
    Motif: '11110111010'
  },
  {
    Valeur: 78,
    'Table A': 's0',
    'Table B': 'n',
    'Table C': '78',
    'Code ASCII': '110',
    Caractère: 'n',
    Motif: '11000010100'
  },
  {
    Valeur: 79,
    'Table A': 's1',
    'Table B': 'o',
    'Table C': '79',
    'Code ASCII': '111',
    Caractère: 'o',
    Motif: '10001111010'
  },
  {
    Valeur: 80,
    'Table A': 'dle',
    'Table B': 'p',
    'Table C': '80',
    'Code ASCII': '112',
    Caractère: 'p',
    Motif: '10100111100'
  },
  {
    Valeur: 81,
    'Table A': 'dc1',
    'Table B': 'q',
    'Table C': '81',
    'Code ASCII': '113',
    Caractère: 'q',
    Motif: '10010111100'
  },
  {
    Valeur: 82,
    'Table A': 'dc2',
    'Table B': 'r',
    'Table C': '82',
    'Code ASCII': '114',
    Caractère: 'r',
    Motif: '10010011110'
  },
  {
    Valeur: 83,
    'Table A': 'dc3',
    'Table B': 's',
    'Table C': '83',
    'Code ASCII': '115',
    Caractère: 's',
    Motif: '10111100100'
  },
  {
    Valeur: 84,
    'Table A': 'dc4',
    'Table B': 't',
    'Table C': '84',
    'Code ASCII': '116',
    Caractère: 't',
    Motif: '10011110100'
  },
  {
    Valeur: 85,
    'Table A': 'nak',
    'Table B': 'u',
    'Table C': '85',
    'Code ASCII': '117',
    Caractère: 'u',
    Motif: '10011110010'
  },
  {
    Valeur: 86,
    'Table A': 'syn',
    'Table B': 'v',
    'Table C': '86',
    'Code ASCII': '118',
    Caractère: 'v',
    Motif: '11110100100'
  },
  {
    Valeur: 87,
    'Table A': 'etb',
    'Table B': 'w',
    'Table C': '87',
    'Code ASCII': '119',
    Caractère: 'w',
    Motif: '11110010100'
  },
  {
    Valeur: 88,
    'Table A': 'can',
    'Table B': 'x',
    'Table C': '88',
    'Code ASCII': '120',
    Caractère: 'x',
    Motif: '11110010010'
  },
  {
    Valeur: 89,
    'Table A': 'em',
    'Table B': 'y',
    'Table C': '89',
    'Code ASCII': '121',
    Caractère: 'y',
    Motif: '11011011110'
  },
  {
    Valeur: 90,
    'Table A': 'sub',
    'Table B': 'z',
    'Table C': '90',
    'Code ASCII': '122',
    Caractère: 'z',
    Motif: '11011110110'
  },
  {
    Valeur: 91,
    'Table A': 'esc',
    'Table B': '{',
    'Table C': '91',
    'Code ASCII': '123',
    Caractère: '{',
    Motif: '11110110110'
  },
  {
    Valeur: 92,
    'Table A': 'fs',
    'Table B': '|',
    'Table C': '92',
    'Code ASCII': '124',
    Caractère: '|',
    Motif: '10101111000'
  },
  {
    Valeur: 93,
    'Table A': 'gs',
    'Table B': '}',
    'Table C': '93',
    'Code ASCII': '125',
    Caractère: '}',
    Motif: '10100011110'
  },
  {
    Valeur: 94,
    'Table A': 'rs',
    'Table B': '~',
    'Table C': '94',
    'Code ASCII': '126',
    Caractère: '~',
    Motif: '10001011110'
  },
  {
    Valeur: 95,
    'Table A': 'us',
    'Table B': 'del',
    'Table C': '95',
    'Code ASCII': '200',
    Caractère: 'È',
    Motif: '10111101000'
  },
  {
    Valeur: 96,
    'Table A': 'Fnc 3',
    'Table B': 'Fnc 3',
    'Table C': '96',
    'Code ASCII': '201',
    Caractère: 'É',
    Motif: '10111100010'
  },
  {
    Valeur: 97,
    'Table A': 'Fnc 2',
    'Table B': 'Fnc2',
    'Table C': '97',
    'Code ASCII': '202',
    Caractère: 'Ê',
    Motif: '11110101000'
  },
  {
    Valeur: 98,
    'Table A': 'Shift',
    'Table B': 'Shift',
    'Table C': '98',
    'Code ASCII': '203',
    Caractère: 'Ë',
    Motif: '11110100010'
  },
  {
    Valeur: 99,
    'Table A': 'Code C',
    'Table B': 'Code C',
    'Table C': '99',
    'Code ASCII': '204',
    Caractère: 'Ì',
    Motif: '10111011110'
  },
  {
    Valeur: 100,
    'Table A': 'Code B',
    'Table B': 'Fnc 4',
    'Table C': 'Code B',
    'Code ASCII': '205',
    Caractère: 'Í',
    Motif: '10111101110'
  },
  {
    Valeur: 101,
    'Table A': 'Fnc 4',
    'Table B': 'Code A',
    'Table C': 'Code A',
    'Code ASCII': '206',
    Caractère: 'Î',
    Motif: '11101011110'
  },
  {
    Valeur: 102,
    'Table A': 'Fnc 1',
    'Table B': 'Fnc 1',
    'Table C': 'Fnc 1',
    'Code ASCII': '207',
    Caractère: 'Ï',
    Motif: '11110101110'
  },
  {
    Valeur: 103,
    'Table A': 'Start A',
    'Table B': 'Start A',
    'Table C': 'Start A',
    'Code ASCII': '208',
    Caractère: 'Ð',
    Motif: '11010000100'
  },
  {
    Valeur: 104,
    'Table A': 'Start B',
    'Table B': 'Start B',
    'Table C': 'Start B',
    'Code ASCII': '209',
    Caractère: 'Ñ',
    Motif: '11010010000'
  },
  {
    Valeur: 105,
    'Table A': 'Start C',
    'Table B': 'Start C',
    'Table C': 'Start C',
    'Code ASCII': '210',
    Caractère: 'Ò',
    Motif: '11010011100'
  },
  {
    Valeur: 106,
    'Table A': 'Stop',
    'Table B': 'Stop',
    'Table C': 'Stop',
    'Code ASCII': '211',
    Caractère: 'Ó',
    Motif: '1100011101011'
  }
]
export default code128Table;

