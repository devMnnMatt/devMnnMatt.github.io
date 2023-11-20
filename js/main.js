var _0x6389ea = (function () {
    var _0x7a51c0 = true
    return function (_0x263a58, _0x2d097b) {
      var _0x5c80df = _0x7a51c0
        ? function () {
            if (_0x2d097b) {
              var _0x24c63c = _0x2d097b.apply(_0x263a58, arguments)
              return (_0x2d097b = null), _0x24c63c
            }
          }
        : function () {}
      return (_0x7a51c0 = false), _0x5c80df
    }
  })(),
  _0xc1dfec = _0x6389ea(this, function () {
    return _0xc1dfec
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xc1dfec)
      .search('(((.+)+)+)+$')
  })
_0xc1dfec()
var _0x2a05f5 = (function () {
    var _0x2ce6d5 = true
    return function (_0x2d2455, _0x1bcb98) {
      var _0x55f1a2 = _0x2ce6d5
        ? function () {
            if (_0x1bcb98) {
              var _0x4c2216 = _0x1bcb98.apply(_0x2d2455, arguments)
              return (_0x1bcb98 = null), _0x4c2216
            }
          }
        : function () {}
      return (_0x2ce6d5 = false), _0x55f1a2
    }
  })(),
  _0x5f0362 = _0x2a05f5(this, function () {
    var _0x4a0736 = function () {
      var _0x43eef9
      try {
        _0x43eef9 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x181071) {
        _0x43eef9 = window
      }
      return _0x43eef9
    }
    var _0x34e4d6 = _0x4a0736()
    var _0x3c1b3b = (_0x34e4d6.console = _0x34e4d6.console || {})
    var _0x43c413 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x4ebe39 = 0; _0x4ebe39 < _0x43c413.length; _0x4ebe39++) {
      var _0x14bf7b = _0x2a05f5.constructor.prototype.bind(_0x2a05f5)
      var _0x3cd9cc = _0x43c413[_0x4ebe39]
      var _0x42152a = _0x3c1b3b[_0x3cd9cc] || _0x14bf7b
      _0x14bf7b['__proto__'] = _0x2a05f5.bind(_0x2a05f5)
      _0x14bf7b.toString = _0x42152a.toString.bind(_0x42152a)
      _0x3c1b3b[_0x3cd9cc] = _0x14bf7b
    }
  })
_0x5f0362()
var before = document.getElementById('before'),
  liner = document.getElementById('liner'),
  command = document.getElementById('typer'),
  textarea = document.getElementById('texter'),
  terminal = document.getElementById('terminal'),
  git = 0,
  pw = false
let pwd = false
var commands = []
setTimeout(function () {
  loopLines(restart, '', 80)
  textarea.focus()
}, 100)
window.addEventListener('keyup', enterKey)
console.log(
  '%cYou found the Password!',
  'color: #00FFC8; font-weight: bold; font-size: 24px;'
)
console.log(
  "%cPassword: '" + password + "' - How can you use it?",
  'color: white'
)
console.log(
  "%cWait... There's a new command here but it's a 'secret'. shhh! ",
  'color: white'
)
textarea.value = ''
command.innerHTML = textarea.value
function enterKey(_0x31b2b0) {
  if (_0x31b2b0.keyCode == 181) {
    document.location.reload(true)
  }
  if (pw) {
    let _0x569953 = textarea.value.length
    command.innerHTML = '*'.repeat(_0x569953)
    textarea.value === password && (pwd = true)
    if (pwd && _0x31b2b0.keyCode == 13) {
      loopLines(secret, 'color2 margin', 120),
        (command.innerHTML = ''),
        (textarea.value = ''),
        (pwd = false),
        (pw = false),
        liner.classList.remove('password')
    } else {
      if (_0x31b2b0.keyCode == 13) {
        addLine('Wrong password', 'error', 0)
        command.innerHTML = ''
        textarea.value = ''
        pw = false
        liner.classList.remove('password')
      }
    }
  } else {
    if (_0x31b2b0.keyCode == 13) {
      commands.push(command.innerHTML)
      git = commands.length
      addLine('console@dev.Matt:~$ ' + command.innerHTML, 'no-animation', 0)
      commander(command.innerHTML.toLowerCase())
      command.innerHTML = ''
      textarea.value = ''
    }
    _0x31b2b0.keyCode == 38 &&
      git != 0 &&
      ((git -= 1),
      (textarea.value = commands[git]),
      (command.innerHTML = textarea.value))
    _0x31b2b0.keyCode == 40 &&
      git != commands.length &&
      ((git += 1),
      commands[git] === undefined
        ? (textarea.value = '')
        : (textarea.value = commands[git]),
      (command.innerHTML = textarea.value))
  }
}
function commander(_0x344286) {
  switch (_0x344286.toLowerCase()) {
    case 'help':
      loopLines(help, 'color2 margin', 80)
      break
    case 'commands':
      loopLines(help, 'color2 margin', 80)
      break
    case 'whois':
      loopLines(whois, 'color2 margin', 80)
      break
    case 'whoami':
      loopLines(whoami, 'color2 margin', 80)
      break
    case 'spotify':
      addLine('Opening Spotify...', 'color2', 0), newTab(spotify)
      break
    case 'sudo':
      addLine("Oh no, you're not admin...", 'color2', 80),
        setTimeout(function () {
          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }, 1000)
      break
    case 'social':
      loopLines(social, 'color2 margin', 80)
      break
    case 'secret':
      liner.classList.add('password'), (pw = true)
      break
    case 'password':
      addLine(
        '<span class="inherit">\u26A0︎ Are you really trying to exploit this site?</span>',
        'error',
        100
      ),
        addLine(
          '<span class="inherit">\u21AA First you need to find the hidden password.</span>',
          'error',
          100
        )
      break
    case 'history':
      addLine('<br>', '', 0),
        loopLines(commands, 'color2', 80),
        addLine('<br>', 'command', 80 * commands.length + 50)
      break
    case 'email':
      addLine(
        'Opening mailto: <a href="mailto: mnnmatt@duck.com">mnnmatt@duck.com</a>',
        'color2',
        80
      ),
        newTab(email)
      break
    case 'clear':
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>'
        before = document.getElementById('before')
      }, 1)
      break
    case 'cls':
      setTimeout(function () {
        terminal.innerHTML = '<a id="before"></a>'
        before = document.getElementById('before')
      }, 1)
      break
    case 'restart':
      setTimeout(function () {
        ;(terminal.innerHTML = '<a id="before"></a>'),
          (before = document.getElementById('before'))
      }, 1),
        loopLines(restart, 'color margin', 80)
      break
    case 'echo':
      addLine(
        '<span class="inherit">\u26A0︎ You know that I\'m not a real Terminal... Right?</span>',
        'error',
        100
      )
      break
    case 'pwd':
      addLine('   /home/MattPC/Projects/devMatt-Terminal', 'color2', 0)
      break
    case 'cd':
      addLine(
        '<span class="inherit">\u26A0︎ You don\'t need to do this!</span>',
        'error',
        100
      )
      break
    case 'dir':
      loopLines(dir, 'color2 margin', 80)
      break
    case 'credits':
      loopLines(credits, 'color2 margin', 80)
      break
    case 'instagram':
      addLine('Opening Instagram...', 'color2', 0), newTab(instagram)
      break
    case 'discord':
      addLine('Opening Discord...', 'color2', 0), newTab(instagram)
      break
    case 'github':
      addLine('Opening GitHub...', 'color2', 0), newTab(github)
      break
    case 'redirect':
    case 'redirects':
      loopLines(redirect, 'color2 margin', 80)
      break
    case 'yt':
    case 'youtube':
      addLine(
        'Redirecting to <a href="' +
          youtube +
          '" target="_blank">Youtube' +
          '</a>'
      ),
        newTab(youtube)
      break
    case 'ttv':
    case 'twitch':
      addLine(
        'Redirecting to <a href="' +
          twitch +
          '" target="_blank">Twitch' +
          '</a>'
      ),
        newTab(twitch)
      break
    case 'al':
    case 'anilist':
      addLine(
        'Redirecting to <a href="' +
          anilist +
          '" target="_blank">AniList' +
          '</a>'
      ),
        newTab(anilist)
      break
    case 'netflix':
      addLine(
        'Redirecting to <a href="' +
          netflix +
          '" target="_blank">Netflix' +
          '</a>'
      ),
        newTab(netflix)
      break
    case 'music':
    case 'nowplaying':
    case 'now playing':
    case 'np':
      nowPlaying()
      break
    default:
      addLine(
        '<span class="inherit">\u26A0︎ Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
        'error',
        100
      )
      break
  }
}
function newTab(_0x5adade) {
  setTimeout(function () {
    window.open(_0x5adade, '_blank')
  }, 500)
}
function addLine(_0x3c7844, _0x1a0331, _0x2a456e) {
  var _0x1033bc = ''
  for (let _0x587b22 = 0; _0x587b22 < _0x3c7844.length; _0x587b22++) {
    _0x3c7844.charAt(_0x587b22) == ' ' && _0x3c7844.charAt(_0x587b22 + 1) == ' '
      ? ((_0x1033bc += '&nbsp;&nbsp;'), _0x587b22++)
      : (_0x1033bc += _0x3c7844.charAt(_0x587b22))
  }
  setTimeout(function () {
    var _0x1404d9 = document.createElement('p')
    _0x1404d9.innerHTML = _0x1033bc
    _0x1404d9.className = _0x1a0331
    before.parentNode.insertBefore(_0x1404d9, before)
    window.scrollTo(0, document.body.offsetHeight)
  }, _0x2a456e)
}
function nowPlaying() {
  var _0x2498f2 = 'mnnmatt',
    _0x52bbda = 'd4ba48761fdab63ab7d9300a74a035b1',
    _0x5b487f =
      'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +
      _0x2498f2 +
      '&api_key=' +
      _0x52bbda +
      '&format=json&limit=1',
    _0x590ce9 = new XMLHttpRequest()
  _0x590ce9.open('GET', _0x5b487f, true)
  _0x590ce9.onload = function () {
    if (_0x590ce9.status === 200) {
      var _0x489538 = JSON.parse(_0x590ce9.responseText)
      if (_0x489538.recenttracks && _0x489538.recenttracks.track.length > 0) {
        var _0x23b2e5 = _0x489538.recenttracks.track[0].name,
          _0x417c11 = _0x489538.recenttracks.track[0].artist['#text']
        _0x489538.recenttracks.track[0]['@attr'] &&
        _0x489538.recenttracks.track[0]['@attr'].nowplaying
          ? addLine(
              '<a href="' +
                nowplaying +
                '" target="_blank">Now Playing:' +
                '</a>' +
                ' ' +
                _0x23b2e5 +
                ' by ' +
                _0x417c11,
              0
            )
          : addLine(
              '<a href="' +
                nowplaying +
                '" target="_blank">Currently not playing any music.</a>',
              0
            )
      } else {
        addLine('<a>No recent tracks found.</a>', 0)
      }
    } else {
      addLine('<a>Error fetching music information.</a>', 0)
    }
  }
  _0x590ce9.send()
}
function loopLines(_0x2a668a, _0x2a4483, _0x1dc421) {
  _0x2a668a.forEach(function (_0x4fff48, _0x5c5fe9) {
    addLine(_0x4fff48, _0x2a4483, _0x5c5fe9 * _0x1dc421)
  })
}
