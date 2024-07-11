import { animateText } from "/js/animation.js";
import setCursor from "/js/cursor.js";
import { buildSection } from "/js/section.js";
import { toggleSidebar, buildMenu } from "/js/sidebar.js";

document.addEventListener("DOMContentLoaded", async () => {
 const config = await getConfig();
 try {
  setCursor();
  toggleSidebar();
  setValues(config);
  buildMenu(config.esas);
  buildSection(config.esas);
  animateText(
   document.getElementById("introHeadline"),
   "Portfolio für Mediendesign 2"
  );
 } catch (error) {
  console.error(error);
 }
});

async function getConfig() {
 try {
  const response = await fetch("assets/esa.json");
  const config = await response.json();
  console.log({ config });
  return config;
 } catch (error) {
  console.error(error);
  return {};
 }
}

/**
 * @typedef {Object} ESAFile
 * @property {string} matrno - The matriculation number of the student.
 * @property {string} name - The name of the student.
 * @property {ESA[]} esas - An array of ESAs associated with the student.
 */

/**
 * @typedef {Object} ESA
 * @property {string} id - The unique identifier for the ESA.
 * @property {string} title - The title of the ESA.
 * @property {string} description - A brief description of the ESA.
 * @property {Asset[]} assets - A list of assets associated with the ESA.
 */

/**
 * @typedef {Object} Asset
 * @property {string} name - The name of the asset.
 * @property {string} href - The reference or link to the asset.
 * @property {string} alt - The alternative text for the asset.
 * @property {string} description - A brief description of the asset.
 */

/**
 * @param {ESAFile} config
 */
function setValues(config) {
 document.getElementById("name").innerHTML = config.name;
 document.getElementById("matrno").innerHTML = config.matrno;
}
