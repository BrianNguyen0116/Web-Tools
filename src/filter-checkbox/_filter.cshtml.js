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

    if ($(".chk:checked").length === 0) {
        $('li').removeAttr('display');
    } else {
        $(".chk").each(function() {
            if ($(this).is(":checked")) {
                var filter = $(this).closest('span[class="type"]').text().toLowerCase();

                $('.target').each(function () {
                    if ($(this).text().toLowerCase().includes(filter)) {
                        $(this).closest('li').removeAttr('display');
                    };
                })
            };
        });
    }
}

const Filter = Debounce(() => Process());
