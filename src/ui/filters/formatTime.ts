///<reference path="../_app.ts" />
'use strict';

// Formats a Date instance into
// 20:04, 07:38, 23:59.
export default function(value: Date) {
    return `00${value.getHours()}`.substr(-2, 2) + ":" + `00${value.getMinutes()}`.substr(-2, 2);
}