// var myEditor;

//     ClassicEditor
//         .create( document.querySelector( '#editor' ) )
//         .then( editor => {
//             console.log( 'Editor was initialized', editor );
//             myEditor = editor;
//         } )
//         .catch( err => {
//             console.error( err.stack );
//         } );
        ClassicEditor
    .create( document.querySelector( '#editor' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );