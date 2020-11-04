// Replace with select2 when the HTTP status of ajax request is a success.
// (by pure jquery)
$(document).ajaxSuccess(function () {
    replaceSelect2()
});
// Replace with select2 when the HTTP status of data-remote request is a success.
// (by rails-ujs)
$(document).on('ajax:success', function () {
    replaceSelect2()
});

$(function () {
    // Replace with select2 when loading page.
    setTimeout(() => {
        replaceSelect2();
    }, 500);
    //replaceSelect2();

    // Fix Select2 search broken inside jQuery UI modal Dialog( https://github.com/select2/select2/issues/1246 )
    if ($.ui && $.ui.dialog && $.ui.dialog.prototype._allowInteraction) {
        let ui_dialog_interaction = $.ui.dialog.prototype._allowInteraction;
        $.ui.dialog.prototype._allowInteraction = function (e) {
            if ($(e.target).closest('.select2-dropdown').length) {
                return true;
            }
            return ui_dialog_interaction.apply(this, arguments);
        };
    }

    // Supports change of select box by filter function
    if ($('#query_form_with_buttons').length || $('form#query-form').length || $('form#query_form').length) {
        let oldAddFilter = window.addFilter;
        window.addFilter = function (field, operator, values) {
            oldAddFilter(field, operator, values);
            $('#filters-table select:not([multiple]):not(.select2-hidden-accessible)').select2();
            $('#select2-add_filter_select-container.select2-selection__rendered').text('');
        };

        let oldToggleMultiSelect = window.toggleMultiSelect;
        window.toggleMultiSelect = function (el) {
            oldToggleMultiSelect(el);
            if (el.attr('multiple')) {
                el.select2('destroy');
            } else {
                el.select2();
            }
        }
    }
});

function replaceSelect2() {
    // TODO: Need to support replace of select according to the click event.
    // Do not replace it with select2 until it corresponds.
    if ($('body').hasClass('controller-workflows')) {
        return;
    } else {
        let selectInTabular = $('.tabular select:not([multiple]):not(.select2-hidden-accessible)');
        if (selectInTabular.length) {
            $(selectInTabular).select2({width: '85%'}).on('select2:select', function () {
            });
        }
    }

    let other = $('select:not([multiple]):not(.select2-hidden-accessible):not(.select2-ignore)');
    if (other.length) {
        $(other).select2().on('select2:select', function () {
        });
    }
}