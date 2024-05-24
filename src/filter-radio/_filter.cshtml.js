// RADIO
function Debounce(callback, delay = 750) {
    let time;

    return (...args) {
        clearTimeout(time);
        time = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

// Filter Protocol
function Process() {
    $('li').css('display', 'none'); // Reset elements : hidden

    $('.rb').each(function() {
        var filter = $(this).find("option:selected").text().toLowerCase();

        if (filter == "all") {
            $('li').removeAttr('display');
        } else {
            $('.target').each(function() {
                if ($(this).text().toLowerCase().includes(filter)) {
                    $(this).closest('li').removeAttr('display');
                }
            })
        }
    })
}

const Filter = Debounce(() => Process());
