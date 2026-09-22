import { exec } from "child_process";

const reportBasePath = "./allure-reports/tricent";

function runCommand(command: string): Promise<number> {
    return new Promise(resolve => {
        exec(command, (error, stdout, stderr) => {
            if (stdout) {
                console.log(stdout);
            }
            if (stderr) {
                console.error(stderr);
            }
            const exitCode = error? Number(error.code) || 1 : 0;
            resolve(exitCode);
        });
    });
}

async function main() {
    // 1. Run Playwright tests
    console.log("\nRunning Playwright tests...\n");
    const testExitCode = await runCommand("npx playwright test Day7Reporting.spec.ts --project=chromium");
    console.log(`\nPlaywright finished with exit code: ${testExitCode}`);

    // 2. Find next run number
    const date = new Date().toLocaleString().replace(/[/:, ]/g, '_');
    const reportPath = `${reportBasePath}/${date}`;

    // 3. Generate Allure report
    console.log(`\nGenerating Allure report: ${date}`);
    const allureExitCode = await runCommand(`allure generate ./allure-results -o "${reportPath}"`);
    if (allureExitCode !== 0) { console.error("\nAllure report generation failed."); }
    
    // 4. Open Allure report
    console.log(`\nOpening Allure report: ${date}`);
    await runCommand(`allure open "${reportPath}"`);

    // 5. Preserve Playwright's exit code
    process.exitCode = testExitCode;
}

main();