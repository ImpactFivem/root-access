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
    'help': 'Available commands: bio, projects, neofetch, hack, matrix, sudo, clear, status',
    'bio': 'System Architect & HomeLab Enthusiast. Specialized in Proxmox and Cloudflare networking.',
    'projects': () => {
        printLine("Connecting to GitHub...");
        /* Link aangepast naar jouw ImpactFivem account */
        setTimeout(() => { window.open('https://github.com/ImpactFivem', '_blank'); }, 500);
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
    'hack': () => {
        printLine("Initializing brute force attack...", "#00FF41");
        printLine("Bypassing firewall...", "#00FF41", 500);
        printLine("[██████░░░░] 60% Complete", "#00FF41", 1500);
        printLine("[██████████] 100% Complete", "#00FF41", 2500);
        setTimeout(() => printLine("ACCESS DENIED. FBI has been notified of your location.", "#ff5555"), 3000);
        return "";
    },
    'matrix': () => {
            printLine("Entering the Matrix...", "#00FF41");
            setTimeout(() => {
                const canvas = document.createElement('canvas');
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.zIndex = '1000';
                document.body.appendChild(canvas);

                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^";
                const fontSize = 16;
                const columns = canvas.width / fontSize;
                const drops = Array(Math.floor(columns)).fill(1);

                function draw() {
                    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = "#00FF41";
                    ctx.font = fontSize + "px monospace";

                    for (let i = 0; i < drops.length; i++) {
                        const text = letters.charAt(Math.floor(Math.random() * letters.length));
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                        drops[i]++;
                    }
                }

                const matrixInterval = setInterval(draw, 33);
                
                // Verwijder het effect na 5 seconden
                setTimeout(() => {
                    clearInterval(matrixInterval);
                    canvas.remove();
                }, 5000);
            }, 500);
            return "Wake up, Neo...";
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