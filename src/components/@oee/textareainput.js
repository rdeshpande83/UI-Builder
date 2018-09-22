import { TextInput, NumberInput, ToggleInput } from '../../inputs/inputs';
import { dataComponentId, inputBlockClass } from '../common';
import { textareaid } from './ids';
import input from './input';
import { property as tooltipProperty } from '../tooltip';
import _ from 'lodash';

const textareainput = _.extend({}, input, {
    nodes: [`textarea`],
    name: "Textarea",
    image: "icons/text_area.svg",
    html: `<div class="${inputBlockClass}">
            <textarea class="form-control" ${dataComponentId}="${textareaid}"></textarea>
           </div>`,
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: new TextInput()
    }, {
        name: 'Onchange',
        key: 'onchange',
        htmlAttr: 'onchange',
        inputtype: new TextInput()
    }, {
        name: 'Maxlength',
        key: 'maxlength',
        htmlAttr: 'maxlength',
        inputtype: new NumberInput()
    }, tooltipProperty, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: new TextInput()
    }, {
        name: 'Name',
        key: 'name',
        htmlAttr: 'name',
        inputtype: new TextInput()
    }, {
        name: "Readonly",
        key: "readonly",
        htmlAttr: 'readonly',
        validValues: ["readonly"],
        noValueAttr: true,
        inputtype: new ToggleInput(),
        data: {
            on: 'readonly',
            off: ''
        }
    }, {
        name: "Required",
        key: "required",
        htmlAttr: 'required',
        validValues: ["required"],
        noValueAttr: true,
        inputtype: new ToggleInput(),
        data: {
            on: 'required',
            off: ''
        }
    }]
});

export default textareainput;