/* global __dirname console */
const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "../src/interfaces/metroRequire.d.ts");
const dest = path.resolve(__dirname, "../lib/interfaces/metroRequire.d.ts");

fs.copyFile(src, dest, fs.constants.COPYFILE_FICLONE, () =>
    console.log("Copied metroRequire.d.ts successfully!"),
);

const tsDest = path.resolve(__dirname, "../lib/interfaces/metroRequire.ts");

fs.writeFile(tsDest, "export default {};", () =>
    console.log("Created metroRequire.ts successfully!"),
);
