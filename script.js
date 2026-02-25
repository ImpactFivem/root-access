const input = document.getElementById('commandInput');
const terminal = document.getElementById('terminal');

function printLine(text, color = "#adb5bd", delay = 0) {
    setTimeout(() => {
        const div = document.createElement('div');
        div.className = "output";
        div.style.color = color;
        div.innerHTML = text;
        terminal.appendChild(div);
        window.scrollTo(0, document.body.scrollHeight);
    }, delay);
}

const commands = {
    'help': 'Available commands: bio, projects, neofetch, sudo, clear, status',
    'bio': 'System Architect & HomeLab Enthusiast. Specialized in Proxmox and Cloudflare networking.',
    'projects': () => {
        printLine("Connecting to GitHub...");
        /* Change YOUR_USERNAME below to your GitHub username. */
        setTimeout(() => { window.open('https://github.com/YOUR_USERNAME', '_blank'); }, 500);
        return "Opening repositories...";
    },
    'status': () => {
        const time = new Date().toLocaleTimeString();
        return `[OK] System Time: ${time} | Nodes: 3 Online | Gateway: Cloudflare Tunnel`;
    },
    'neofetch': () => {
        return `
<span style="color: #00FF41;">          .----.          </span>  <span style="color: #fff;"><b>USER@ROOT-ACCESS</b></span>
<span style="color: #00FF41;">       _.'__    \`.        </span>  ------------------
<span style="color: #00FF41;">   .--(#)(##)---/#\\       </span>  <span style="color: #00FF41;">OS:</span> Proxmox Virtual Environment
<span style="color: #00FF41;"> .' @          /###\\      </span>  <span style="color: #00FF41;">Kernel:</span> 6.5.11-pve
<span style="color: #00FF41;"> :             ,###|_     </span>  <span style="color: #00FF41;">Uptime:</span> 127 days
<span style="color: #00FF41;">  \`-..__..--'  |###|      </span>  <span style="color: #00FF41;">Shell:</span> zsh / terminal-v1
<span style="color: #00FF41;">         \`.    |###|      </span>  <span style="color: #00FF41;">Panel:</span> CloudPanel
<span style="color: #00FF41;">           \`--'----'      </span>  <span style="color: #00FF41;">Network:</span> Cloudflare
        `;
    },
    'sudo': () => {
        printLine("Checking sudoers file...", "#ff5555");
        setTimeout(() => printLine("Incident reported to admin.", "#ff5555"), 800);
        return "";
    }
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        printLine(`<span class="prompt">root@terminal:~$</span> ${cmd}`, "#fff");
        if (commands[cmd]) {
            const response = typeof commands[cmd] === 'function' ? commands[cmd]() : commands[cmd];
            if (response) printLine(response);
        } else if (cmd === 'clear') {
            terminal.innerHTML = "";
        } else if (cmd !== "") {
            printLine(`Command not found: ${cmd}`, "#ff5555");
        }
        input.value = "";
    }
});

document.addEventListener('click', () => { input.focus(); });
window.onload = () => { input.focus(); };