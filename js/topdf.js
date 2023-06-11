$(document).ready(function() {
    var form = $('#content'),
        cache_width = form.width(),
        a4 = [595.28, 841.89];

    $('#pdfbtn').on('click', function() {
        $('body').scrollTop(0);
        createPDF();
    });

    function createPDF() {
        getCanvas().then(function(canvas) {
            var
                img = canvas.toDataURL("image/png "),
                doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
            doc.addImage(img, 'JPEG', 10, 10);
            doc.save('output.pdf');
            form.width(cache_width);
        });
    }

    function getCanvas() {
        form.width((a4[0] * 1.33333) - 20).css('max-width', 'none');
        return html2canvas(form, {
            imageTimeout: 1000,
            removeContainer: true
        });
    }
});