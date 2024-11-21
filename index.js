

const container = $('.grid-container');

function applyStyle(property, value) {
    container.css(property, value);
}

$('#columns').change(function (e) { 
    var getValue = $(e.target).val();
    applyStyle('grid-template-columns', `repeat(${getValue}, 1fr)`)
});
$('#rows').change(function (e) { 
    var getValue = $(e.target).val();
    applyStyle('grid-template-rows', `repeat(${getValue}, 1fr)`)
});
$('#gap').change(function (e) { 
    var getValue = $(e.target).val() + 'px';
    applyStyle('gap', `${getValue}`)
});

$('#justify').change(function (e) { 
    var getValue = $(e.target).val();
    applyStyle('justify-items', `${getValue}`)
});

$('#align').change(function (e) { 
    var getValue = $(e.target).val();
    applyStyle('align-items', `${getValue}`)
});


let itemSelectElement = $('#select-item');

let selectedItem = $('#select-item').val();
let previousSelectedItem = selectedItem;

function resetItemToDefault(item) {
    $(`.${item}`).css({
        'grid-column-start': 'auto',
        'grid-column-end': 'auto',
        'grid-row-start': 'auto',
        'grid-row-end': 'auto',
        'justify-self': 'stretch',
        'align-self': 'stretch',
        'background-color': '#cfd170'
    });
    $('#item-column-start').val('auto');
    $('#item-column-start-output').val('auto');
    $('#item-column-end').val('auto');
    $('#item-column-end-output').val('auto');
    $('#item-row-start').val('auto');
    $('#item-row-start-output').val('auto');
    $('#item-row-end').val('auto');
    $('#item-row-end-output').val('auto');
    $('#justify-self').val('stretch');
    $('#align-self').val('stretch');
};

itemSelectElement.change(function (e) {
    if (previousSelectedItem) {
        resetItemToDefault(previousSelectedItem);
    }
    selectedItem = $(e.target).val();
    console.log(selectedItem);
    previousSelectedItem = selectedItem;
    // resetItemToDefault(selectedItem);
});


function applyStyleGridItem(property, value) {
    $(`.${selectedItem}`).css({
        [property]: value,
        backgroundColor: 'rgb(228, 238, 88)'
    });
    console.log($(`.${selectedItem}`).css(property));
}

$('#item-column-start').change(function (e) {
    applyStyleGridItem('grid-column-start', $(e.target).val());
});

$('#item-column-end').change(function (e) {
    applyStyleGridItem('grid-column-end', $(e.target).val());
});

$('#item-row-start').change(function (e) {
    applyStyleGridItem('grid-row-start', $(e.target).val());
});

$('#item-row-end').change(function (e) {
    applyStyleGridItem('grid-row-end', $(e.target).val());
});

$('#justify-self').change(function (e) {
    applyStyleGridItem('justify-self', $(e.target).val());
});

$('#align-self').change(function (e) {
    applyStyleGridItem('align-self', $(e.target).val());
});


