/**
 * Headless Univer – Server / Agent Workflows
 * Läuft in Node ohne DOM. Ideal für: Agent generiert Excel, validiert Formeln, exportiert.
 * Nicht im Browser importieren – nur für scripts/ oder server.
 */
// import { LocaleType, Univer } from "@univerjs/core";
// import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
// import { UniverSheetsPlugin } from "@univerjs/sheets";
// import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
//
// const univer = new Univer({ locale: LocaleType.EN_US, locales: {} });
// univer.registerPlugin(UniverSheetsPlugin);
// univer.registerPlugin(UniverFormulaEnginePlugin);
// univer.registerPlugin(UniverSheetsFormulaPlugin);
// const api = FUniver.newAPI(univer);
// api.createWorkbook({ ... });
// api.getWorkbook(0)?.getSheetByName("Sheet1")?.getRange("A1")?.setValue("=SUM(1,2)");
export const headlessNote = "Siehe Kommentare oben – für Node-Skripte aktivieren.";
