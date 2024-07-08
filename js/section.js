/**
 * @param {import(".").ESA[]} esas
 */
export function buildSection(esas) {
 const content = document.getElementById("content");

 for (const esa of esas) {
  const section = document.createElement("section");
  const a = document.createElement("a");
  a.href = `#esa${esa.id}`;
  section.appendChild(a);
  const div = document.createElement("div");
  div.id = `esa${esa.id}`;
  div.classList.add("content");
  div.style.backgroundColor = esa.backgroundColor;
  div.style.padding = "1rem";
  div.style.boxSizing = "border-box";
  section.appendChild(div);
  document.body.appendChild(section);
  content.appendChild(section);
 }
}
