///<reference path="../../_app.ts" />
'use strict';

interface SelectOption {
    value: string;
    content: string;
}

interface SelectScope extends ng.IScope {
    // Placeholder as defined by includer.
    placeholder: string;

    // Value binding.
    value: string;

    // If the control is disabled.
    disabled: boolean;

    // List of options.
    options: SelectOption[];

    // If we are currently expanded.
    expanded: boolean;

    // The text currently in the element.
    placeholderText: string;

    // Control functions
    toggle: () => void;
    select: (SelectOption) => void;
}

export class SelectCtrl {
    static $inject = ["$scope"];
    scope: SelectScope;

    constructor($scope: ng.IScope) {
        this.scope = $scope as SelectScope;

        this.scope.options = this.scope.options || [];
        this.scope.expanded = false;
        this.scope.placeholderText = this.scope.placeholder;
        
        if (this.scope.value) {
            this.scope.placeholderText = this.scope.options.filter(x => x.value === this.scope.value)[0].content;
        }

        let selected: SelectOption;
        this.scope.toggle = () => {
            if (this.scope.disabled) return;

            this.scope.placeholderText = this.scope.expanded && selected ? selected.content : this.scope.placeholder;
            this.scope.expanded = !this.scope.expanded;
        };

        this.scope.select = (option: SelectOption) => {
            selected = option;

            this.scope.value = option.value;
            this.scope.placeholderText = option.content;
            this.scope.expanded = false;
        };
    }
}

function link(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any, transclude: ng.ITranscludeFunction) {
    const children = [].slice.call(transclude()).filter(x => x.nodeName === "OPTION") as HTMLOptionElement[];

    children.forEach(option => {
        scope.options.push({
            value: option.value,
            content: option.innerText
        });
    });
}

export const directive: ng.IDirectiveFactory = () => ({
    transclude: true,
    restrict: "E",
    template: require("./selectView.html"),
    controller: "selectCtrl",
    scope: { "value": "=", "placeholder": "@", "disabled": "=", "options": "=" },
    link: link
});