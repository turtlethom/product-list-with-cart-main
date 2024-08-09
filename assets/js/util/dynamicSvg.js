
function createDecrementSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width','10');
    svg.setAttribute('height', '2');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 10 2');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', '#fff');
    path.setAttribute('d', 'M0 .375h10v1.25H0V.375Z');

    svg.appendChild(path);
    return svg;
}