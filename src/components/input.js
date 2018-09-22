import { property as tooltipProperty } from './tooltip';
import {
    dataUrlProperty, nameProperty, valueProperty, onchangeProperty, maxlengthProperty,
    placeholderProperty, typeProperty, readonlyProperty, requiredProperty
} from './properties';

const baseProperties = [
    nameProperty,
    tooltipProperty,
    readonlyProperty,
    requiredProperty
];

const commonProperties = [
    ...baseProperties,
    valueProperty,
    onchangeProperty,
    maxlengthProperty,
    placeholderProperty,
];

const textinputProperties = [
    ...commonProperties,
    typeProperty

];

const datetimeinputProperties = [
    ...commonProperties
];

const fileinputProperties = [...baseProperties, dataUrlProperty];

export {
    commonProperties, textinputProperties, fileinputProperties, datetimeinputProperties
};