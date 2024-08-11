
function createDecrementSVG(baseFill) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width','10');
    svg.setAttribute('height', '2');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 10 2');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', baseFill);
    path.setAttribute('d', 'M0 .375h10v1.25H0V.375Z');

    svg.appendChild(path);
    svg.classList.add('centered');

    return { svg, path };
}

function createIncrementSVG(baseFill) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width','10');
    svg.setAttribute('height', 10);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 10 10');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', baseFill);
    path.setAttribute('d', 'M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z');

    svg.appendChild(path);
    svg.classList.add('centered');

    return { svg, path };
}

function createRemoveIconSVG(baseFill) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '10');
    svg.setAttribute('height', '10');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 10 10');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', baseFill);
    path.setAttribute('d', 'M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z');

    return { svg, path };
}

export { createDecrementSVG, createIncrementSVG, createRemoveIconSVG };