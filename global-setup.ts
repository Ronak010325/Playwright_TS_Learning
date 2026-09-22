import { rimraf } from "rimraf";

async function globalSetup(): Promise<void> {
    await rimraf("./allure-results");
}
export default globalSetup;