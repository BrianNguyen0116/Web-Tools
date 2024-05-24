function Debounce(func, delay = 750) {
    let time;

    return (...args) => {
        $('img[id="search-icon"]').attr('src', './icons/Loading.svg');
        $('img[id="search-icon"]').addClass('loading');

        clearTimeout(time);
        time = setTimeout(() => {
            $('img[id="search-icon"]').attr('src', './icons/Magnifying.svg');
            $('img[id="search-icon"]').removeClass('loading');

            func.apply(this, args);
        }, delay);
    };
}

// Search Protocol
function Process() {
    $('li').css('display', 'none'); // Reset elements : hidden

    var term = $('input[name="search"]').val().toLowerCase(); // Input element

    if (term != "") {
        $('h2').each(function () {
            if ($(this).text().toLowerCase().includes(term)) {
                $(this).closest('li').css('display', 'inline-block');
            };
        })
    } else {
        $('li').css('display', 'inline-block'); // Reset elements : shown
    }
};  

const Search = Debounce(() => Process());