const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
<div class='color'><table>
    <tr>
    <th>Ke</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key} === " "</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
</table></div>
    `;
});
