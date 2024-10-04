// Función para generar el XPath
function getXPath(element) {
    let path = '';
    while (element.nodeType === Node.ELEMENT_NODE) {
        let selector = element.nodeName.toLowerCase();
        if (element.id) {
            selector += `[@id='${element.id}']`;
            path = `/${selector}${path}`;
            break; // Si tiene ID, no necesitamos más información
        } else {
            let sibling = element;
            let index = 1;
            // Contamos los hermanos para el índice
            while ((sibling = sibling.previousElementSibling)) {
                if (sibling.nodeName.toLowerCase() === element.nodeName.toLowerCase()) {
                    index++;
                }
            }
            selector += `[${index}]`;
            path = `/${selector}${path}`;
        }
        element = element.parentNode;
    }
    return path ? path : null;
}

// Función para manejar el clic y mostrar el XPath
function handleClick(event) {
    const target = event.target;
    const xpath = getXPath(target);
    if (xpath) {
        alert(`XPath del elemento clicado: ${xpath}`);
    }
}

// Agregar el listener de clic al documento principal
document.addEventListener('click', handleClick);

// Agregar el listener de clic al iframe cuando se carga
const iframe = document.getElementById('myIframe');
iframe.onload = function() {
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.addEventListener('click', handleClick);
};
