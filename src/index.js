
function importAll(r) {
    r.keys().forEach(r);
}
require.context('./', true, /\.scss$/);
importAll(require.context('./components/', true, /\.js$/));
require.context('./img/', true, /\.(png|ico)$/);

window.onload = () => {
    alert('window.onload: Документ и все ресурсы загружены');
};

document.addEventListener('DOMContentLoaded', () => {
    alert('DOMContentLoaded: DOM готов');
});

$(() => {
    alert('JQuery: DOMContentLoaded');
});
