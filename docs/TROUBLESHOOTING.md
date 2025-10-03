## Troubleshooting: "The handle is invalid." during `npx @cloudflare/next-on-pages` or `npm run cf-build`

Symptom
-------
During `npm run cf-build` (which uses `npx @cloudflare/next-on-pages`) the build can fail with:

```
SHELLAC COMMAND FAILED!
Executing: npm --version in C:\projects\sobha-nxt\sobha

STDOUT:

The handle is invalid.

STDERR:

```

What's happening
-----------------
The Cloudflare helper uses a dependency called `shellac` which spawns a detached bash subshell and streams stdio from that subprocess. On some Windows environments (PowerShell, certain terminals, or when spawned via other tools) spawning a background bash process and inheriting stdio can lead to invalid/stdio handle errors. `shellac` reports failures with the "SHELLAC COMMAND FAILED!" block above.

Why it appears here
-------------------
- The CLI tries to run `npm --version` inside the subshell to detect environment/tooling.
- On Windows the subshell's stdio handles may not be valid in some terminal configurations, causing `The handle is invalid.` to be printed and the command to fail.

Workarounds and fixes
---------------------
Try these in order until the build proceeds:

1. Run the build under WSL (recommended)
   - Install and enable WSL2 and use a Linux shell (Ubuntu) to run the build. The Cloudflare build tooling is more stable under a Linux-like environment.

2. Try cmd.exe instead of PowerShell
   - Open a regular Command Prompt (cmd.exe) and run:
     cmd /c "npm run cf-build"

3. Use Git Bash or a standard bash shell
   - If you have Git for Windows, try running the build in Git Bash instead of PowerShell.

4. Ensure Node/npm are installed and on PATH
   - Check `where npm` and `node --version`.

5. Avoid `npx` spawn by installing the Vercel CLI globally
   - `npm install -g vercel`
   - Then re-run `npm run cf-build` to see if the CLI picks up the global executable.

6. Reinstall or repair Node.js
   - Run the Node.js installer and choose Repair (Windows) or reinstall if needed.

7. Run the build from an elevated terminal
   - Open PowerShell or cmd.exe as Administrator and re-run the command to rule out permission-related handle issues.

8. Capture debug logs
   - If the failure persists, re-run the failing command and capture the exact output and where it was run (VS Code integrated terminal, CI runner, etc.).

Notes
-----
- This failure is environmental: it doesn't necessarily indicate a bug in your app. It often stems from how child processes are spawned on Windows and which shell is used.
- Running under WSL or a Linux environment is the most reliable workaround for toolchains that expect POSIX-like shells.

If none of the above fixes the issue, paste the full failing output and note whether the command was run inside VS Code, a CI runner, or a remote shell — I can dig deeper from there.
