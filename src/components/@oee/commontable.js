import { dataComponentId } from '../common';
import { table } from './table';
import { commontableid } from './ids';

const commontable = $.extend({}, table, {
    name: "Common ag-Grid",
    html: `<div ${dataComponentId}="${commontableid}" style="width: 500px; height: 200px;" class="resize-drag draggable ag-theme-blue horizontal-stripes"></div>`
});

export default commontable;