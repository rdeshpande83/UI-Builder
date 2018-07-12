import Input from './Input';

const SelectInput = $.extend({}, Input, {

    events: [
        ["change", "onChange", "select"],
    ],


    setValue: function (value) {
        $('select', this.element).val(value);
    },

    init: function (data) {
        return this.render("select", data);
    },

}
);

export default SelectInput;