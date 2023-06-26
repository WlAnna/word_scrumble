function generatePDF() {
    const element = document.getElementById('container-content');
    var opt = {
        margin: 1,
        filename: 'wordscramble.pdf',
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: 'in',
            format: 'letter',
            orientation: 'portrait'
        }
    };
    // Choose the element that our form is rendered in.
    html2pdf().set(opt).from(element).save();
}