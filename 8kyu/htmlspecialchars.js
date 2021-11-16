function htmlspecialchars(formData) {
  return formData
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

console.log(
  htmlspecialchars("<h2>Hello World</h2>"),
  "&lt;h2&gt;Hello World&lt;/h2&gt;"
);

/* 
< : "&lt";
> : "&gt";
" : "&quot";
& : "&amp;
*/
