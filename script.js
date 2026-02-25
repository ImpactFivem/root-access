// script.js
const input = document.getElementById('commandInput');
const terminal = document.getElementById('terminal');

const commands = {
    'help': 'Available commands: bio, projects, stack, clear, fetch-gh',
    'bio': 'Systems enthusiast specializing in Proxmox virtual environments and Cloudflare network security.',
    'stack': 'Virtualization: Proxmox | Edge: Cloudflare | Hosting: CloudPanel',
    'projects': 'Check my GitHub repositories for automated deploy scripts and IaC templates.',
    'flex': 'Uptime: 99.9% | Vulnerabilities: 0 | Coffee: 100%'
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        let response = commands[cmd] || `Command not found: ${cmd}. Type 'help' for options.`;
        
        if (cmd === 'clear') {
            terminal.innerHTML = "";
        } else {
            terminal.innerHTML += `<div><span class="prompt">guest@terminal:~$</span> ${cmd}</div>`;
            terminal.innerHTML += `<div style="color: #adb5bd; margin-bottom: 10px;">${response}</div>`;
        }
        
        input.value = "";
        window.scrollTo(0, document.body.scrollHeight);
    }
});