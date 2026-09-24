import { exec } from "child_process";
import env from "dotenv";
import fs from "fs";
import path from "path";

env.config();

const allureReport: string = `./allure-reports/${process.env.ProjectName}`;

// Execute shell command
function runCommand(command: string): Promise<number> {
  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (stdout) {
        console.log(stdout);
      }
      if (stderr) {
        console.error(stderr);
      }
      const exitCode = error ? Number(error.code) || 1 : 0;
      resolve(exitCode);
    });
  });
}

async function main() {
  // 1. Run Playwright tests
  // globalSetup will clear ./allure-results
  console.log("\nRunning Playwright tests...\n");

  const projectRunnerFile: string | undefined = process.env.FileName;

  const testExitCode = await runCommand(`npx playwright test ${projectRunnerFile} --project=chromium`);
  console.log(`\nPlaywright finished with exit code: ${testExitCode}`);

  // 2. Copy previous report history
  // Previous report → allure-results/history
  console.log("\nPreserving Allure history...");
  const previousHistory = path.resolve(allureReport, "history");
  
  if (fs.existsSync(previousHistory)) {
    const currentAllureResults = path.resolve("./allure-results");
    const currentHistory = path.join(currentAllureResults, "history");
    fs.mkdirSync(currentHistory, { recursive: true });
    fs.cpSync(previousHistory, currentHistory, { recursive: true });
    console.log("Allure history copied successfully.");

    // 3. Generate Allure report
    console.log(`\nGenerating Allure report: ${allureReport}`);
    await runCommand(`allure generate ./allure-results -o ${allureReport} --clean`);
    
    // 4. Open Allure report
    console.log(`\nOpening Allure report: ${allureReport}`);
    await runCommand(`allure open "${allureReport}"`);
    
  } else {
    console.log("Allure report directory does not exist. First run.");

    // 3. Generate Allure report
    console.log(`\nGenerating Allure report: ${allureReport}`);
    await runCommand(`allure generate ./allure-results -o "${allureReport}"`);

    // 4. Open Allure report
    console.log(`\nOpening Allure report: ${allureReport}`);
    await runCommand(`allure open "${allureReport}"`);
  }

  // 6. Preserve Playwright's exit code
  process.exitCode = testExitCode;
}

main();