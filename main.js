const _0x474d4a = (function () {
  let _0x26efe4 = true
  return function (_0x42862f, _0x43c31e) {
    const _0x2dcc55 = _0x26efe4
      ? function () {
          if (_0x43c31e) {
            const _0x113743 = _0x43c31e.apply(_0x42862f, arguments)
            return (_0x43c31e = null), _0x113743
          }
        }
      : function () {}
    return (_0x26efe4 = false), _0x2dcc55
  }
})(),
_0x16fa35 = _0x474d4a(this, function () {
  const _0x2f9d42 = function () {
      let _0x1480ee
      try {
        _0x1480ee = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x354243) {
        _0x1480ee = window
      }
      return _0x1480ee
    },
    _0x2cd782 = _0x2f9d42(),
    _0x2ff03b = (_0x2cd782.console = _0x2cd782.console || {}),
    _0x4bb301 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
  for (let _0x3ba98c = 0; _0x3ba98c < _0x4bb301.length; _0x3ba98c++) {
    const _0x183178 = _0x474d4a.constructor.prototype.bind(_0x474d4a),
      _0x38de2f = _0x4bb301[_0x3ba98c],
      _0x147263 = _0x2ff03b[_0x38de2f] || _0x183178
    _0x183178['__proto__'] = _0x474d4a.bind(_0x474d4a)
    _0x183178.toString = _0x147263.toString.bind(_0x147263)
    _0x2ff03b[_0x38de2f] = _0x183178
  }
})
_0x16fa35()
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
function enterKey(_0x5e5333) {
_0x5e5333.keyCode == 181 && document.location.reload(true)
if (pw) {
  let _0x41818e = textarea.value.length
  command.innerHTML = '*'.repeat(_0x41818e)
  textarea.value === password && (pwd = true)
  if (pwd && _0x5e5333.keyCode == 13) {
    loopLines(secret, 'color2 margin', 120)
    command.innerHTML = ''
    textarea.value = ''
    pwd = false
    pw = false
    liner.classList.remove('password')
  } else {
    if (_0x5e5333.keyCode == 13) {
      addLine('Wrong password', 'error', 0)
      command.innerHTML = ''
      textarea.value = ''
      pw = false
      liner.classList.remove('password')
    }
  }
} else {
  if (_0x5e5333.keyCode == 13) {
    commands.push(command.innerHTML)
    git = commands.length
    addLine('console@dev.Matt:~$ ' + command.innerHTML, 'no-animation', 0)
    commander(command.innerHTML.toLowerCase())
    command.innerHTML = ''
    textarea.value = ''
  }
  if (_0x5e5333.keyCode == 38 && git != 0) {
    git -= 1
    textarea.value = commands[git]
    command.innerHTML = textarea.value
  }
  _0x5e5333.keyCode == 40 &&
    git != commands.length &&
    ((git += 1),
    commands[git] === undefined
      ? (textarea.value = '')
      : (textarea.value = commands[git]),
    (command.innerHTML = textarea.value))
}
}
function commander(_0x2bd136) {
switch (_0x2bd136.toLowerCase()) {
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
      terminal.innerHTML = '<a id="before"></a>'
      before = document.getElementById('before')
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
    fetchData();
    break
  case 'activity':
  case 'wyd':
  case 'wud':
    displayActivityInfo(userId)
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
function newTab(_0x227bb4) {
setTimeout(function () {
  window.open(_0x227bb4, '_blank')
}, 500)
}
function addLine(_0x356648, _0x5c4778, _0x4fe9e6) {
var _0xedfbe7 = ''
for (let _0x3c4e65 = 0; _0x3c4e65 < _0x356648.length; _0x3c4e65++) {
  _0x356648.charAt(_0x3c4e65) == ' ' && _0x356648.charAt(_0x3c4e65 + 1) == ' '
    ? ((_0xedfbe7 += '&nbsp;&nbsp;'), _0x3c4e65++)
    : (_0xedfbe7 += _0x356648.charAt(_0x3c4e65))
}
setTimeout(function () {
  var _0x398af9 = document.createElement('p')
  _0x398af9.innerHTML = _0xedfbe7
  _0x398af9.className = _0x5c4778
  before.parentNode.insertBefore(_0x398af9, before)
  window.scrollTo(0, document.body.offsetHeight)
}, _0x4fe9e6)
}

const userId = '611920914606718996';

async function fetchData() {
  try {
      const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=mnnmatt&api_key=fa191ef7e3dbdcaed58cdc0201c52e3d&format=json&limit=1`);
      const data = await response.json();
      if (data && data.recenttracks && data.recenttracks.track && Array.isArray(data.recenttracks.track)) {
          processRecentTrack(data.recenttracks.track);
      } else {
          addLine('No track information available.', 'error', 0);
      }
  } catch (error) {
      addLine(`Error fetching data: ${error}`, 'error', 0);
  }
}

function processRecentTrack(track) {
  try {
      const recentTrack = track[0];
      if (!recentTrack) {
          addLine('No recent track information available.', 'error', 0);
          return;
      }
      
      if (recentTrack['@attr'] && recentTrack['@attr'].nowplaying === 'true') {
          const artist = recentTrack.artist['#text'];
          const song = recentTrack.name;
          const spotifyUrl = getSpotifyUrl(recentTrack);
          const trackUrl = spotifyUrl ? `<a href="${spotifyUrl}" target="_blank">${song}</a>` : song;
          addLine(`Now Playing: ${trackUrl} by ${artist}`, 'mint', 0);
      } else {
          addLine('Music is currently paused.', 'inherit', 0);
      }
  } catch (error) {
      addLine(`Error processing data: ${error}`, 'error', 0);
  }
}

function getSpotifyUrl(track) {
  if (track && track.url && track.url.includes('spotify')) {
      return track.url;
  } else {
      const artist = encodeURIComponent(track.artist['#text']);
      const song = encodeURIComponent(track.name);
      return `https://open.spotify.com/search/${artist}%20${song}`;
  }
}


function loopLines(_0x58c4ea, _0x4903af, _0x19c91a) {
_0x58c4ea.forEach(function (_0x2a45d0, _0x4e2459) {
  addLine(_0x2a45d0, _0x4903af, _0x4e2459 * _0x19c91a)
})
}

function displayActivityInfo(_0x3cdba4) {
  const _0x1a3700 = 'https://api.lanyard.rest/v1/users/' + _0x3cdba4;
  fetch(_0x1a3700)
    .then((_0x2f4b4c) => {
      if (!_0x2f4b4c.ok) {
        throw new Error('HTTP error! Status: ' + _0x2f4b4c.status);
      }
      return _0x2f4b4c.json();
    })
    .then((_0x28a395) => {
      if (_0x28a395.success) {
        const { discord_user: _0x54d82a, activities: _0x279893 } = _0x28a395.data;
        addLine('<span class="command">User: </span> ' + _0x54d82a.username, 'color2 margin', 80);
        const _0x32d9f7 = _0x279893.filter((_0x21efe4) => _0x21efe4.name !== 'Spotify');
        if (_0x32d9f7.length > 0) {
          _0x32d9f7.forEach((_0xc45b6c) => {
            addLine('<span class="command">Using: </span> '+ _0xc45b6c.name, 'color2 margin', 80);
            addLine(' ' + _0xc45b6c.state, 'color2 margin', 80);
            addLine(' ' + _0xc45b6c.details, 'color2 margin', 80);
          });
        } else {
          addLine('No activities at the moment.', 'inherit margin', 80);
        }
      } else {
        addLine('Failed to fetch data.', 'error', 80);
      }
    })
    .catch((_0x2517cb) => {
      addLine('Error fetching data: ' + _0x2517cb.message, 'error', 80);
    });
}
