// const insert = document.getElementById("insert");

// window.addEventListener("keydown", (e) => {
//   insert.innerHTML = `
// <div class='color'><table>
//     <tr>
//     <th>Ke</th>
//     <th>KeyCode</th>
//     <th>Code</th>
//     </tr>
//     <tr>
//     <td>${e.key} === " "</td>
//     <td>${e.keyCode}</td>
//     <td>${e.code}</td>
//     </tr>
// </table></div>
//     `;
// });

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  `;
});
