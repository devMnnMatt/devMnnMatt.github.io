var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(restart, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

console.log(
  "%cYou found the Password!",
  "color: #00FFC8; font-weight: bold; font-size: 24px;");
console.log("%cPassword: '" + password + "' - How can you use it?", "color: white");
console.log("%cWait... There's a new command here but it's a 'secret'. shhh! ", "color: white");

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("console@dev.Matt:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "commands":
        loopLines(help, "color2 margin", 80);
        break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "spotify":
      addLine("Opening Spotify...", "color2", 0);
      newTab(spotify);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "password":
      addLine("<span class=\"inherit\">⚠︎ Are you really trying to exploit this site?</span>", "error", 100);
      addLine("<span class=\"inherit\">↪ First you need to find the hidden password.</span>", "error", 100);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto: <a href="mailto: dev.mannomatteo@gmail.com">dev.mannomatteo@gmail.com</a>', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "cls":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "restart":
        setTimeout(function() {
          terminal.innerHTML = '<a id="before"></a>';
          before = document.getElementById("before");
        }, 1);
        loopLines(restart, "color margin", 80);
        break;
    case "echo":
        addLine("<span class=\"inherit\">⚠︎ You know that I\'m not a real Terminal... Right?</span>", "error", 100);
          break;
    case "pwd":
        addLine("   /home/MattPC/Projects/devMatt-Terminal", "color2", 0);
        break;
    case "cd":
        addLine("<span class=\"inherit\">⚠︎ You don't need to do this!</span>", "error", 100);
      break;
    case "dir":
        loopLines(dir, "color2 margin", 80);
      break;
    case "credits":
      loopLines(credits, "color2 margin", 80);
    break;

    // socials

    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "discord":
      addLine("Opening Discord...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;

    // redirects
    case "redirect":
    case "redirects":
      loopLines(redirect, "color2 margin", 80);
    break;

    case "yt":
    case "youtube":
      addLine("Redirecting to Youtube...", "color2", 0);
      newTab(youtube);
      break;
    
    case "ttv":
    case "twitch":
        addLine("Redirecting to Twitch...", "color2", 0);
        newTab(twitch);
        break;

    case "al":    
    case "anilist":
        addLine("Redirecting to Anilist...", "color2", 0);
        newTab(anilist);
        break;

    case "netflix":    
        addLine("Redirecting to Netflix...", "color2", 0);
        newTab(netflix);
        break;


    default:
      addLine("<span class=\"inherit\">⚠︎ Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
