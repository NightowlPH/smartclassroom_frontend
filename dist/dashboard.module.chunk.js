webpackJsonp(["dashboard.module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipeModule; });
/* unused harmony export Ng2SearchPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    /**
     * Check if a value is a string
     *
     * @param {?} value
     * @return {?}
     */
    OrderPipe.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param {?} object
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var /** @type {?} */ i = 0, /** @type {?} */ n = expression.length; i < n; ++i) {
            var /** @type {?} */ k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param {?} object
     * @param {?} value
     * @param {?} expression
     * @return {?}
     */
    OrderPipe.setValue = function (object, value, expression) {
        var /** @type {?} */ i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    /**
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === 'object') {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var /** @type {?} */ isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe.parseExpression(expression);
        }
        var /** @type {?} */ compareFn;
        if (comparator && typeof comparator === 'function') {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive ? OrderPipe.caseInsensitiveSort : OrderPipe.defaultCompare;
        }
        var /** @type {?} */ array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param {?} value
     * @param {?=} expression
     * @param {?=} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var /** @type {?} */ parsedExpression = OrderPipe.parseExpression(expression);
        var /** @type {?} */ lastPredicate = parsedExpression.pop();
        var /** @type {?} */ oldValue = OrderPipe.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param {?} value
     * @param {?} expressions
     * @param {?} reverse
     * @param {?=} isCaseInsensitive
     * @param {?=} comparator
     * @return {?}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    return OrderPipe;
}());
OrderPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                name: 'orderBy',
                pure: false
            },] },
];
/**
 * @nocollapse
 */
OrderPipe.ctorParameters = function () { return []; };
/**
 * Created by vadimdez on 20/01/2017.
 */
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                declarations: [OrderPipe],
                exports: [OrderPipe],
                providers: [OrderPipe]
            },] },
];
/**
 * @nocollapse
 */
OrderModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-order-pipe.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/rxjs/_esm5/Rx.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export operators */
/* unused harmony export Scheduler */
/* unused harmony export Symbol */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* unused harmony reexport Subject */
/* unused harmony reexport AnonymousSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Observable__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/generate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/if.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/never.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/pairs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/using.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__add_operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__add_operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__add_operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__add_operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__add_operator_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__add_operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__add_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__add_operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__add_operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__add_operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__add_operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__add_operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__add_operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delayWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__add_operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__add_operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__add_operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaust.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__add_operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__add_operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/expand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__add_operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/elementAt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__add_operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__add_operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__add_operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__add_operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__add_operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/isEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__add_operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__add_operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__add_operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__add_operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__add_operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__add_operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__add_operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__add_operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__add_operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__add_operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__add_operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeScan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__add_operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__add_operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/multicast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__add_operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__add_operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__add_operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__add_operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__add_operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__add_operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishBehavior.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__add_operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__add_operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__add_operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__add_operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__add_operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeatWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__add_operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__add_operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sampleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__add_operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__add_operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__add_operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__add_operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__add_operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__add_operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__add_operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/subscribeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__add_operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__add_operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__add_operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__add_operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__add_operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeInterval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__add_operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__add_operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timestamp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__add_operator_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__add_operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__add_operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__add_operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__add_operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__add_operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__add_operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__add_operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zipAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* unused harmony reexport Subscription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* unused harmony reexport Subscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/* unused harmony reexport AsyncSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* unused harmony reexport ReplaySubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* unused harmony reexport BehaviorSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__observable_ConnectableObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ConnectableObservable.js");
/* unused harmony reexport ConnectableObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* unused harmony reexport Notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__util_EmptyError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/EmptyError.js");
/* unused harmony reexport EmptyError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* unused harmony reexport ArgumentOutOfRangeError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__util_ObjectUnsubscribedError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* unused harmony reexport ObjectUnsubscribedError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__util_TimeoutError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/TimeoutError.js");
/* unused harmony reexport TimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__util_UnsubscriptionError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/UnsubscriptionError.js");
/* unused harmony reexport UnsubscriptionError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/* unused harmony reexport TimeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/* unused harmony reexport Timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__testing_TestScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/TestScheduler.js");
/* unused harmony reexport TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/* unused harmony reexport VirtualTimeScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/* unused harmony reexport AjaxResponse */
/* unused harmony reexport AjaxError */
/* unused harmony reexport AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__util_pipe__ = __webpack_require__("./node_modules/rxjs/_esm5/util/pipe.js");
/* unused harmony reexport pipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/animationFrame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/rxSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__symbol_observable__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
/** PURE_IMPORTS_START ._scheduler_asap,._scheduler_async,._scheduler_queue,._scheduler_animationFrame,._symbol_rxSubscriber,._symbol_iterator,._symbol_observable,._operators PURE_IMPORTS_END */

/* tslint:enable:no-unused-variable */


































































































































/* tslint:disable:no-unused-variable */


























var operators = __WEBPACK_IMPORTED_MODULE_156__operators__;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__["a" /* asap */],
    queue: __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__["a" /* queue */],
    animationFrame: __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__["a" /* animationFrame */],
    async: __WEBPACK_IMPORTED_MODULE_150__scheduler_async__["a" /* async */]
};
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__["a" /* rxSubscriber */],
    observable: __WEBPACK_IMPORTED_MODULE_155__symbol_observable__["a" /* observable */],
    iterator: __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__["a" /* iterator */]
};

//# sourceMappingURL=Rx.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__["a" /* bindCallback */];
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindNodeCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindNodeCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindNodeCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__["a" /* bindNodeCallback */];
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].combineLatest = __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].concat = __WEBPACK_IMPORTED_MODULE_1__observable_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/defer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_defer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].defer = __WEBPACK_IMPORTED_MODULE_1__observable_defer__["a" /* defer */];
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/ajax.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_ajax PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].ajax = __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__["a" /* ajax */];
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/webSocket.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_webSocket PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].webSocket = __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__["a" /* webSocket */];
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/empty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_empty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].empty = __WEBPACK_IMPORTED_MODULE_1__observable_empty__["a" /* empty */];
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEvent PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEvent = __WEBPACK_IMPORTED_MODULE_1__observable_fromEvent__["a" /* fromEvent */];
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEventPattern.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEventPattern PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEventPattern = __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__["a" /* fromEventPattern */];
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromPromise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromPromise = __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__["a" /* fromPromise */];
//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/generate.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_generate PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].generate = __WEBPACK_IMPORTED_MODULE_1__observable_generate__["a" /* generate */];
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/if.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_if PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].if = __WEBPACK_IMPORTED_MODULE_1__observable_if__["a" /* _if */];
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/interval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_interval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].interval = __WEBPACK_IMPORTED_MODULE_1__observable_interval__["a" /* interval */];
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/never.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_never PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].never = __WEBPACK_IMPORTED_MODULE_1__observable_never__["a" /* never */];
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/pairs.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_pairs PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].pairs = __WEBPACK_IMPORTED_MODULE_1__observable_pairs__["a" /* pairs */];
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].race = __WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/range.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_range PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].range = __WEBPACK_IMPORTED_MODULE_1__observable_range__["a" /* range */];
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_throw PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].throw = __WEBPACK_IMPORTED_MODULE_1__observable_throw__["a" /* _throw */];
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_timer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].timer = __WEBPACK_IMPORTED_MODULE_1__observable_timer__["a" /* timer */];
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/using.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_using PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].using = __WEBPACK_IMPORTED_MODULE_1__observable_using__["a" /* using */];
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].zip = __WEBPACK_IMPORTED_MODULE_1__observable_zip__["a" /* zip */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/audit.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_audit PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.audit = __WEBPACK_IMPORTED_MODULE_1__operator_audit__["a" /* audit */];
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/auditTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_auditTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.auditTime = __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__["a" /* auditTime */];
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/buffer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_buffer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.buffer = __WEBPACK_IMPORTED_MODULE_1__operator_buffer__["a" /* buffer */];
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferCount = __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__["a" /* bufferCount */];
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferTime = __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__["a" /* bufferTime */];
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferToggle = __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__["a" /* bufferToggle */];
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferWhen = __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__["a" /* bufferWhen */];
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/catch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/catch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_catch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._catch = __WEBPACK_IMPORTED_MODULE_1__operator_catch__["a" /* _catch */];
//# sourceMappingURL=catch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineAll = __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__["a" /* combineAll */];
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineLatest = __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concat = __WEBPACK_IMPORTED_MODULE_1__operator_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatAll = __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__["a" /* concatAll */];
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMap = __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__["a" /* concatMap */];
//# sourceMappingURL=concatMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__["a" /* concatMapTo */];
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/count.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_count PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.count = __WEBPACK_IMPORTED_MODULE_1__operator_count__["a" /* count */];
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounce = __WEBPACK_IMPORTED_MODULE_1__operator_debounce__["a" /* debounce */];
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_defaultIfEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.defaultIfEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__["a" /* defaultIfEmpty */];
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delay = __WEBPACK_IMPORTED_MODULE_1__operator_delay__["a" /* delay */];
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delayWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delayWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delayWhen = __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__["a" /* delayWhen */];
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/dematerialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_dematerialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.dematerialize = __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__["a" /* dematerialize */];
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinct.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinct PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinct = __WEBPACK_IMPORTED_MODULE_1__operator_distinct__["a" /* distinct */];
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilKeyChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilKeyChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */];
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/do.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
//# sourceMappingURL=do.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/elementAt.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_elementAt PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.elementAt = __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__["a" /* elementAt */];
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/every.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/every.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_every PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.every = __WEBPACK_IMPORTED_MODULE_1__operator_every__["a" /* every */];
//# sourceMappingURL=every.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaust.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaust PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaust = __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__["a" /* exhaust */];
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaustMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaustMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaustMap = __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__["a" /* exhaustMap */];
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/expand.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_expand PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.expand = __WEBPACK_IMPORTED_MODULE_1__operator_expand__["a" /* expand */];
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/filter.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_filter PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.filter = __WEBPACK_IMPORTED_MODULE_1__operator_filter__["a" /* filter */];
//# sourceMappingURL=filter.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/finally.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_finally PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/find.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_find PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.find = __WEBPACK_IMPORTED_MODULE_1__operator_find__["a" /* find */];
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/findIndex.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_findIndex PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.findIndex = __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__["a" /* findIndex */];
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.first = __WEBPACK_IMPORTED_MODULE_1__operator_first__["a" /* first */];
//# sourceMappingURL=first.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/groupBy.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_groupBy PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.groupBy = __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__["a" /* groupBy */];
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/ignoreElements.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_ignoreElements PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.ignoreElements = __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__["a" /* ignoreElements */];
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/isEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_isEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.isEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__["a" /* isEmpty */];
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/last.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/last.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_last PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.last = __WEBPACK_IMPORTED_MODULE_1__operator_last__["a" /* last */];
//# sourceMappingURL=last.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/let.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_let PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.let = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.letBind = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
//# sourceMappingURL=let.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/map.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_map PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.map = __WEBPACK_IMPORTED_MODULE_1__operator_map__["a" /* map */];
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__["a" /* mapTo */];
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/materialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_materialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.materialize = __WEBPACK_IMPORTED_MODULE_1__operator_materialize__["a" /* materialize */];
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/max.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_max PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.max = __WEBPACK_IMPORTED_MODULE_1__operator_max__["a" /* max */];
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.merge = __WEBPACK_IMPORTED_MODULE_1__operator_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeAll = __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__["a" /* mergeAll */];
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMap = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMap__["a" /* mergeMap */];
//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeScan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeScan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeScan = __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__["a" /* mergeScan */];
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/min.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_min PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.min = __WEBPACK_IMPORTED_MODULE_1__operator_min__["a" /* min */];
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/multicast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_multicast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.multicast = __WEBPACK_IMPORTED_MODULE_1__operator_multicast__["a" /* multicast */];
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/observeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_observeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.observeOn = __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__["a" /* observeOn */];
//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/pairwise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pairwise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pairwise = __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__["a" /* pairwise */];
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/partition.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_partition PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.partition = __WEBPACK_IMPORTED_MODULE_1__operator_partition__["a" /* partition */];
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/pluck.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pluck PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pluck = __WEBPACK_IMPORTED_MODULE_1__operator_pluck__["a" /* pluck */];
//# sourceMappingURL=pluck.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publish.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publish PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publish = __WEBPACK_IMPORTED_MODULE_1__operator_publish__["a" /* publish */];
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishBehavior.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishBehavior PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishBehavior = __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__["a" /* publishBehavior */];
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishLast = __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__["a" /* publishLast */];
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishReplay = __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__["a" /* publishReplay */];
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.race = __WEBPACK_IMPORTED_MODULE_1__operator_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/reduce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/reduce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_reduce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.reduce = __WEBPACK_IMPORTED_MODULE_1__operator_reduce__["a" /* reduce */];
//# sourceMappingURL=reduce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeat = __WEBPACK_IMPORTED_MODULE_1__operator_repeat__["a" /* repeat */];
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeatWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeatWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeatWhen = __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__["a" /* repeatWhen */];
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retry.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retry PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retry = __WEBPACK_IMPORTED_MODULE_1__operator_retry__["a" /* retry */];
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retryWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retryWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retryWhen = __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__["a" /* retryWhen */];
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sample.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sample PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sample = __WEBPACK_IMPORTED_MODULE_1__operator_sample__["a" /* sample */];
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sampleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sampleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sampleTime = __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__["a" /* sampleTime */];
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/scan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_scan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.scan = __WEBPACK_IMPORTED_MODULE_1__operator_scan__["a" /* scan */];
//# sourceMappingURL=scan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sequenceEqual.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sequenceEqual PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sequenceEqual = __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__["a" /* sequenceEqual */];
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/share.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/share.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_share PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.share = __WEBPACK_IMPORTED_MODULE_1__operator_share__["a" /* share */];
//# sourceMappingURL=share.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/shareReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_shareReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.shareReplay = __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__["a" /* shareReplay */];
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/single.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_single PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.single = __WEBPACK_IMPORTED_MODULE_1__operator_single__["a" /* single */];
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skip = __WEBPACK_IMPORTED_MODULE_1__operator_skip__["a" /* skip */];
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipLast = __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__["a" /* skipLast */];
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipUntil = __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__["a" /* skipUntil */];
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipWhile = __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__["a" /* skipWhile */];
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/startWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_startWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.startWith = __WEBPACK_IMPORTED_MODULE_1__operator_startWith__["a" /* startWith */];
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/subscribeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_subscribeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.subscribeOn = __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__["a" /* subscribeOn */];
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__["a" /* switchMapTo */];
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/take.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_take PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.take = __WEBPACK_IMPORTED_MODULE_1__operator_take__["a" /* take */];
//# sourceMappingURL=take.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeLast = __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__["a" /* takeLast */];
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeUntil = __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__["a" /* takeUntil */];
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeWhile = __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__["a" /* takeWhile */];
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttle = __WEBPACK_IMPORTED_MODULE_1__operator_throttle__["a" /* throttle */];
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttleTime = __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__["a" /* throttleTime */];
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeInterval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeInterval = __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__["a" /* timeInterval */];
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeout.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeout PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeout = __WEBPACK_IMPORTED_MODULE_1__operator_timeout__["a" /* timeout */];
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeoutWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeoutWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeoutWith = __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__["a" /* timeoutWith */];
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timestamp.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timestamp PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timestamp = __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__["a" /* timestamp */];
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toArray.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_toArray PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.toArray = __WEBPACK_IMPORTED_MODULE_1__operator_toArray__["a" /* toArray */];
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/window.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_window PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.window = __WEBPACK_IMPORTED_MODULE_1__operator_window__["a" /* window */];
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowCount = __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__["a" /* windowCount */];
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowTime = __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__["a" /* windowTime */];
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowToggle = __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__["a" /* windowToggle */];
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowWhen = __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__["a" /* windowWhen */];
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/withLatestFrom.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_withLatestFrom PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.withLatestFrom = __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__["a" /* withLatestFrom */];
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zip = __WEBPACK_IMPORTED_MODULE_1__operator_zip__["a" /* zipProto */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zipAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zipAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zipAll = __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__["a" /* zipAll */];
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments it will return an Observable. If function `func`
     * calls its callback with one argument the Observable will emit that value.
     * If on the other hand the callback is called with multiple values the resulting
     * Observable will emit an array with said values as arguments.
     *
     * It is very important to remember that input function `func` is not called
     * when the output function is, but rather when the Observable returned by the output
     * function is subscribed. This means if `func` makes an AJAX request, that request
     * will be made every time someone subscribes to the resulting Observable, but not before.
     *
     * Optionally, a selector function can be passed to `bindObservable`. The selector function
     * takes the same arguments as the callback and returns the value that will be emitted by the Observable.
     * Even though by default multiple arguments passed to callback appear in the stream as an array
     * the selector function will be called with arguments directly, just as the callback would.
     * This means you can imagine the default selector (when one is not provided explicitly)
     * as a function that aggregates all its arguments into an array, or simply returns first argument
     * if there is only one.
     *
     * The last optional parameter - {@link Scheduler} - can be used to control when the call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default, the subscription to  an Observable calls `func`
     * synchronously, but using `Scheduler.async` as the last parameter will defer the call to `func`,
     * just like wrapping the call in `setTimeout` with a timeout of `0` would. If you use the async Scheduler
     * and call `subscribe` on the output Observable all function calls that are currently executing
     * will end before `func` is invoked.
     *
     * By default results passed to the callback are emitted immediately after `func` invokes the callback.
     * In particular, if the callback is called synchronously the subscription of the resulting Observable
     * will call the `next` function synchronously as well.  If you want to defer that call,
     * you may use `Scheduler.async` just as before.  This means that by using `Scheduler.async` you can
     * ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that the Observable created by the output function will always emit a single value
     * and then complete immediately. If `func` calls the callback multiple times, values from subsequent
     * calls will not appear in the stream. If you need to listen for multiple calls,
     *  you probably want to use {@link fromEvent} or {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property) and is not already bound the context of `func`
     * will be the context that the output function has at call time. In particular, if `func`
     * is called as a method of some objec and if `func` is not already bound, in order to preserve the context
     * it is recommended that the context of the output function is set to that object as well.
     *
     * If the input function calls its callback in the "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether the call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions the same as any other and error parameters
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive an array of arguments passed to a callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with a selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on an object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func A function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps them to a value that is emitted on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    /** @deprecated internal use only */ BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                    if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundNodeCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    /** @deprecated internal use only */ BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
        if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/DeferObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * // Results in the following behavior:
     * // If the result of Math.random() is greater than 0.5 it will listen
     * // for clicks anywhere on the "document"; when document is clicked it
     * // will log a MouseEvent object to the console. If the result is less
     * // than 0.5 it will emit ascending numbers, one every second(1000ms).
     *
     * @see {@link create}
     *
     * @param {function(): SubscribableOrPromise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    /** @deprecated internal use only */ DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var DeferSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result));
        }
    };
    return DeferSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=DeferObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    /** @deprecated internal use only */ ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        subscriber.syncErrorThrowable = true;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=ErrorObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/FromEventObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isFunction__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_isFunction,.._util_errorObject,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var toString = Object.prototype.toString;
function isNodeStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isNodeList(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
}
function isHTMLCollection(sourceObj) {
    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
}
function isEventTarget(sourceObj) {
    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventObservable, _super);
    function FromEventObservable(sourceObj, eventName, selector, options) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
        this.options = options;
    }
    /* tslint:enable:max-line-length */
    /**
     * Creates an Observable that emits events of a specific type coming from the
     * given event target.
     *
     * <span class="informal">Creates an Observable from DOM events, or Node.js
     * EventEmitter events or others.</span>
     *
     * <img src="./img/fromEvent.png" width="100%">
     *
     * `fromEvent` accepts as a first argument event target, which is an object with methods
     * for registering event handler functions. As a second argument it takes string that indicates
     * type of event we want to listen for. `fromEvent` supports selected types of event targets,
     * which are described in detail below. If your event target does not match any of the ones listed,
     * you should use {@link fromEventPattern}, which can be used on arbitrary APIs.
     * When it comes to APIs supported by `fromEvent`, their methods for adding and removing event
     * handler functions have different names, but they all accept a string describing event type
     * and function itself, which will be called whenever said event happens.
     *
     * Every time resulting Observable is subscribed, event handler function will be registered
     * to event target on given event type. When that event fires, value
     * passed as a first argument to registered function will be emitted by output Observable.
     * When Observable is unsubscribed, function will be unregistered from event target.
     *
     * Note that if event target calls registered function with more than one argument, second
     * and following arguments will not appear in resulting stream. In order to get access to them,
     * you can pass to `fromEvent` optional project function, which will be called with all arguments
     * passed to event handler. Output Observable will then emit value returned by project function,
     * instead of the usual value.
     *
     * Remember that event targets listed below are checked via duck typing. It means that
     * no matter what kind of object you have and no matter what environment you work in,
     * you can safely use `fromEvent` on that object if it exposes described methods (provided
     * of course they behave as was described above). So for example if Node.js library exposes
     * event target which has the same method names as DOM EventTarget, `fromEvent` is still
     * a good choice.
     *
     * If the API you use is more callback then event handler oriented (subscribed
     * callback function fires only once and thus there is no need to manually
     * unregister it), you should use {@link bindCallback} or {@link bindNodeCallback}
     * instead.
     *
     * `fromEvent` supports following types of event targets:
     *
     * **DOM EventTarget**
     *
     * This is an object with `addEventListener` and `removeEventListener` methods.
     *
     * In the browser, `addEventListener` accepts - apart from event type string and event
     * handler function arguments - optional third parameter, which is either an object or boolean,
     * both used for additional configuration how and when passed function will be called. When
     * `fromEvent` is used with event target of that type, you can provide this values
     * as third parameter as well.
     *
     * **Node.js EventEmitter**
     *
     * An object with `addListener` and `removeListener` methods.
     *
     * **JQuery-style event target**
     *
     * An object with `on` and `off` methods
     *
     * **DOM NodeList**
     *
     * List of DOM Nodes, returned for example by `document.querySelectorAll` or `Node.childNodes`.
     *
     * Although this collection is not event target in itself, `fromEvent` will iterate over all Nodes
     * it contains and install event handler function in every of them. When returned Observable
     * is unsubscribed, function will be removed from all Nodes.
     *
     * **DOM HtmlCollection**
     *
     * Just as in case of NodeList it is a collection of DOM nodes. Here as well event handler function is
     * installed and removed in each of elements.
     *
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * clicks.subscribe(x => console.log(x));
     *
     * // Results in:
     * // MouseEvent object logged to console every time a click
     * // occurs on the document.
     *
     *
     * @example <caption>Use addEventListener with capture option</caption>
     * var clicksInDocument = Rx.Observable.fromEvent(document, 'click', true); // note optional configuration parameter
     *                                                                          // which will be passed to addEventListener
     * var clicksInDiv = Rx.Observable.fromEvent(someDivInDocument, 'click');
     *
     * clicksInDocument.subscribe(() => console.log('document'));
     * clicksInDiv.subscribe(() => console.log('div'));
     *
     * // By default events bubble UP in DOM tree, so normally
     * // when we would click on div in document
     * // "div" would be logged first and then "document".
     * // Since we specified optional `capture` option, document
     * // will catch event when it goes DOWN DOM tree, so console
     * // will log "document" and then "div".
     *
     * @see {@link bindCallback}
     * @see {@link bindNodeCallback}
     * @see {@link fromEventPattern}
     *
     * @param {EventTargetLike} target The DOM EventTarget, Node.js
     * EventEmitter, JQuery-like event target, NodeList or HTMLCollection to attach the event handler to.
     * @param {string} eventName The event name of interest, being emitted by the
     * `target`.
     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
     * @param {SelectorMethodSignature<T>} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEvent
     * @owner Observable
     */
    FromEventObservable.create = function (target, eventName, options, selector) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isFunction__["a" /* isFunction */])(options)) {
            selector = options;
            options = undefined;
        }
        return new FromEventObservable(target, eventName, selector, options);
    };
    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
            for (var i = 0, len = sourceObj.length; i < len; i++) {
                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
            }
        }
        else if (isEventTarget(sourceObj)) {
            var source_1 = sourceObj;
            sourceObj.addEventListener(eventName, handler, options);
            unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
        }
        else if (isJQueryStyleEventEmitter(sourceObj)) {
            var source_2 = sourceObj;
            sourceObj.on(eventName, handler);
            unsubscribe = function () { return source_2.off(eventName, handler); };
        }
        else if (isNodeStyleEventEmitter(sourceObj)) {
            var source_3 = sourceObj;
            sourceObj.addListener(eventName, handler);
            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
        }
        else {
            throw new TypeError('Invalid event target');
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_4__Subscription__["a" /* Subscription */](unsubscribe));
    };
    /** @deprecated internal use only */ FromEventObservable.prototype._subscribe = function (subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var options = this.options;
        var selector = this.selector;
        var handler = selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(void 0, args);
            if (result === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                subscriber.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                subscriber.next(result);
            }
        } : function (e) { return subscriber.next(e); };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
    };
    return FromEventObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventPatternObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isFunction__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._util_isFunction,.._Observable,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
     * removeHandler function will forward it.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    /** @deprecated internal use only */ FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isFunction__["a" /* isFunction */])(removeHandler)) {
            return;
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler, retValue);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            return this.addHandler(handler) || null;
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventPatternObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/GenerateObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    /** @deprecated internal use only */ GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state
            });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=GenerateObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IfObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    /** @deprecated internal use only */ IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var IfSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=IfObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IntervalObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntervalObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._util_isNumeric,.._Observable,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isNumeric__["a" /* isNumeric */])(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) {
            period = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_2__scheduler_async__["a" /* async */];
        }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    /** @deprecated internal use only */ IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=IntervalObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/NeverObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeverObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Observable,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    /** @deprecated internal use only */ NeverObservable.prototype._subscribe = function (subscriber) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return NeverObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=NeverObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/PairsObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    /** @deprecated internal use only */ PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=PairsObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/RangeObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) {
            start = 0;
        }
        if (count === void 0) {
            count = 0;
        }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    /** @deprecated internal use only */ RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=RangeObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeOnObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/** PURE_IMPORTS_START .._Observable,.._scheduler_asap,.._util_isNumeric PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__util_isNumeric__["a" /* isNumeric */])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    /** @deprecated internal use only */ SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=SubscribeOnObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/UsingObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    /** @deprecated internal use only */ UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var UsingSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=UsingObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundCallbackObservable PURE_IMPORTS_END */

var bindCallback = __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__["a" /* BoundCallbackObservable */].create;
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindNodeCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundNodeCallbackObservable PURE_IMPORTS_END */

var bindNodeCallback = __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__["a" /* BoundNodeCallbackObservable */].create;
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._util_isScheduler,.._util_isArray,._ArrayObservable,.._operators_combineLatest PURE_IMPORTS_END */




/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isScheduler__["a" /* isScheduler */])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(observables[0])) {
        observables = observables[0];
    }
    return new __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__["a" /* ArrayObservable */](observables, scheduler).lift(new __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__["a" /* CombineLatestOperator */](project));
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeferObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/DeferObservable.js");
/** PURE_IMPORTS_START ._DeferObservable PURE_IMPORTS_END */

var defer = __WEBPACK_IMPORTED_MODULE_0__DeferObservable__["a" /* DeferObservable */].create;
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ajaxGet */
/* unused harmony export ajaxPost */
/* unused harmony export ajaxDelete */
/* unused harmony export ajaxPut */
/* unused harmony export ajaxPatch */
/* unused harmony export ajaxGetJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxObservable; });
/* unused harmony export AjaxSubscriber */
/* unused harmony export AjaxResponse */
/* unused harmony export AjaxError */
/* unused harmony export AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._.._util_root,.._.._util_tryCatch,.._.._util_errorObject,.._.._Observable,.._.._Subscriber,.._.._operators_map PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function getCORSRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else if (!!__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) {
        headers = null;
    }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
;
var mapResponse = /*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_5__operators_map__["a" /* map */])(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    /** @deprecated internal use only */ AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(__WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && request.body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(createXHR).call(request);
        if (xhr === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async);
            }
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr, body) : Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__Subscriber__["a" /* Subscriber */]));
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                // HACK(benlesh): TypeScript shennanigans
                // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            // HACK(benlesh): TypeScript shennanigans
            // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
//# sourceMappingURL=AjaxObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_assign__ = __webpack_require__("./node_modules/rxjs/_esm5/util/assign.js");
/** PURE_IMPORTS_START .._.._Subject,.._.._Subscriber,.._.._Observable,.._.._Subscription,.._.._util_root,.._.._ReplaySubject,.._.._util_tryCatch,.._.._util_errorObject,.._.._util_assign PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = __WEBPACK_IMPORTED_MODULE_4__util_root__["a" /* root */].WebSocket;
            this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                Object(__WEBPACK_IMPORTED_MODULE_8__util_assign__["a" /* assign */])(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */](function (observer) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(subMsg)();
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(messageFilter)(x);
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(unsubMsg)();
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */](function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = __WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */].create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(_this.resultSelector)(e);
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                observer.next(result);
            }
        };
    };
    /** @deprecated internal use only */ WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */]();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    };
    return WebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* AnonymousSubject */]));
//# sourceMappingURL=WebSocketSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/** PURE_IMPORTS_START ._AjaxObservable PURE_IMPORTS_END */

var ajax = __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__["a" /* AjaxObservable */].create;
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js");
/** PURE_IMPORTS_START ._WebSocketSubject PURE_IMPORTS_END */

var webSocket = __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__["a" /* WebSocketSubject */].create;
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START ._EmptyObservable PURE_IMPORTS_END */

var empty = __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__["a" /* EmptyObservable */].create;
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromEventObservable.js");
/** PURE_IMPORTS_START ._FromEventObservable PURE_IMPORTS_END */

var fromEvent = __WEBPACK_IMPORTED_MODULE_0__FromEventObservable__["a" /* FromEventObservable */].create;
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEventPattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js");
/** PURE_IMPORTS_START ._FromEventPatternObservable PURE_IMPORTS_END */

var fromEventPattern = __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__["a" /* FromEventPatternObservable */].create;
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/GenerateObservable.js");
/** PURE_IMPORTS_START ._GenerateObservable PURE_IMPORTS_END */

var generate = __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__["a" /* GenerateObservable */].create;
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _if; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IfObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IfObservable.js");
/** PURE_IMPORTS_START ._IfObservable PURE_IMPORTS_END */

var _if = __WEBPACK_IMPORTED_MODULE_0__IfObservable__["a" /* IfObservable */].create;
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interval; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IntervalObservable.js");
/** PURE_IMPORTS_START ._IntervalObservable PURE_IMPORTS_END */

var interval = __WEBPACK_IMPORTED_MODULE_0__IntervalObservable__["a" /* IntervalObservable */].create;
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return never; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NeverObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/NeverObservable.js");
/** PURE_IMPORTS_START ._NeverObservable PURE_IMPORTS_END */

var never = __WEBPACK_IMPORTED_MODULE_0__NeverObservable__["a" /* NeverObservable */].create;
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onErrorResumeNext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

var onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["b" /* onErrorResumeNextStatic */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PairsObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/PairsObservable.js");
/** PURE_IMPORTS_START ._PairsObservable PURE_IMPORTS_END */

var pairs = __WEBPACK_IMPORTED_MODULE_0__PairsObservable__["a" /* PairsObservable */].create;
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RangeObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/RangeObservable.js");
/** PURE_IMPORTS_START ._RangeObservable PURE_IMPORTS_END */

var range = __WEBPACK_IMPORTED_MODULE_0__RangeObservable__["a" /* RangeObservable */].create;
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _throw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/** PURE_IMPORTS_START ._ErrorObservable PURE_IMPORTS_END */

var _throw = __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__["a" /* ErrorObservable */].create;
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return using; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsingObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/UsingObservable.js");
/** PURE_IMPORTS_START ._UsingObservable PURE_IMPORTS_END */

var using = __WEBPACK_IMPORTED_MODULE_0__UsingObservable__["a" /* UsingObservable */].create;
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

var zip = __WEBPACK_IMPORTED_MODULE_0__operators_zip__["c" /* zipStatic */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = audit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/audit.js");
/** PURE_IMPORTS_START .._operators_audit PURE_IMPORTS_END */

/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_audit__["a" /* audit */])(durationSelector)(this);
}
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auditTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/auditTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_auditTime PURE_IMPORTS_END */


/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_auditTime__["a" /* auditTime */])(duration, scheduler)(this);
}
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buffer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/buffer.js");
/** PURE_IMPORTS_START .._operators_buffer PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_buffer__["a" /* buffer */])(closingNotifier)(this);
}
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferCount.js");
/** PURE_IMPORTS_START .._operators_bufferCount PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__["a" /* bufferCount */])(bufferSize, startBufferEvery)(this);
}
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isScheduler,.._operators_bufferTime PURE_IMPORTS_END */



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__["a" /* bufferTime */])(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferToggle.js");
/** PURE_IMPORTS_START .._operators_bufferToggle PURE_IMPORTS_END */

/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__["a" /* bufferToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferWhen.js");
/** PURE_IMPORTS_START .._operators_bufferWhen PURE_IMPORTS_END */

/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__["a" /* bufferWhen */])(closingSelector)(this);
}
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineAll.js");
/** PURE_IMPORTS_START .._operators_combineAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_combineAll__["a" /* combineAll */])(project)(this);
}
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["b" /* combineLatest */].apply(void 0, observables)(this);
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/* unused harmony reexport concatStatic */
/** PURE_IMPORTS_START .._operators_concat PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_concat__["a" /* concat */].apply(void 0, observables)(this);
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMapTo.js");
/** PURE_IMPORTS_START .._operators_concatMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__["a" /* concatMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/count.js");
/** PURE_IMPORTS_START .._operators_count PURE_IMPORTS_END */

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_count__["a" /* count */])(predicate)(this);
}
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounce.js");
/** PURE_IMPORTS_START .._operators_debounce PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_debounce__["a" /* debounce */])(durationSelector)(this);
}
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultIfEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._operators_defaultIfEmpty PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__["a" /* defaultIfEmpty */])(defaultValue)(this);
}
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_delay PURE_IMPORTS_END */


/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_delay__["a" /* delay */])(delay, scheduler)(this);
}
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delayWhen.js");
/** PURE_IMPORTS_START .._operators_delayWhen PURE_IMPORTS_END */

/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__["a" /* delayWhen */])(delayDurationSelector, subscriptionDelay)(this);
}
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dematerialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/dematerialize.js");
/** PURE_IMPORTS_START .._operators_dematerialize PURE_IMPORTS_END */

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__["a" /* dematerialize */])()(this);
}
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinct;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinct.js");
/** PURE_IMPORTS_START .._operators_distinct PURE_IMPORTS_END */

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinct__["a" /* distinct */])(keySelector, flushes)(this);
}
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilKeyChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilKeyChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */])(key, compare)(this);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _do;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/** PURE_IMPORTS_START .._operators_tap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_tap__["a" /* tap */])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = elementAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/elementAt.js");
/** PURE_IMPORTS_START .._operators_elementAt PURE_IMPORTS_END */

/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_elementAt__["a" /* elementAt */])(index, defaultValue)(this);
}
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaust;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaust.js");
/** PURE_IMPORTS_START .._operators_exhaust PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaust__["a" /* exhaust */])()(this);
}
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaustMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaustMap.js");
/** PURE_IMPORTS_START .._operators_exhaustMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__["a" /* exhaustMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/expand.js");
/** PURE_IMPORTS_START .._operators_expand PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_expand__["a" /* expand */])(project, concurrent, scheduler)(this);
}
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _finally;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_finalize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/finalize.js");
/** PURE_IMPORTS_START .._operators_finalize PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_finalize__["a" /* finalize */])(callback)(this);
}
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_find__["b" /* find */])(predicate, thisArg)(this);
}
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/findIndex.js");
/** PURE_IMPORTS_START .._operators_findIndex PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_findIndex__["a" /* findIndex */])(predicate, thisArg)(this);
}
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport GroupedObservable */
/** PURE_IMPORTS_START .._operators_groupBy PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_groupBy__["a" /* groupBy */])(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignoreElements;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/ignoreElements.js");
/** PURE_IMPORTS_START .._operators_ignoreElements PURE_IMPORTS_END */

/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__["a" /* ignoreElements */])()(this);
}
;
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/isEmpty.js");
/** PURE_IMPORTS_START .._operators_isEmpty PURE_IMPORTS_END */

/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__["a" /* isEmpty */])()(this);
}
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = letProto;
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function letProto(func) {
    return func(this);
}
//# sourceMappingURL=let.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mapTo.js");
/** PURE_IMPORTS_START .._operators_mapTo PURE_IMPORTS_END */

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mapTo__["a" /* mapTo */])(value)(this);
}
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = materialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/materialize.js");
/** PURE_IMPORTS_START .._operators_materialize PURE_IMPORTS_END */

/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_materialize__["a" /* materialize */])()(this);
}
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/max.js");
/** PURE_IMPORTS_START .._operators_max PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_max__["a" /* max */])(comparer)(this);
}
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* unused harmony reexport mergeStatic */
/** PURE_IMPORTS_START .._operators_merge PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_merge__["a" /* merge */].apply(void 0, observables)(this);
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeMapTo.js");
/** PURE_IMPORTS_START .._operators_mergeMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__["a" /* mergeMapTo */])(innerObservable, resultSelector, concurrent)(this);
}
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeScan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeScan.js");
/** PURE_IMPORTS_START .._operators_mergeScan PURE_IMPORTS_END */

/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__["a" /* mergeScan */])(accumulator, seed, concurrent)(this);
}
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/min.js");
/** PURE_IMPORTS_START .._operators_min PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_min__["a" /* min */])(comparer)(this);
}
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = multicast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._operators_multicast PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_multicast__["a" /* multicast */])(subjectOrSubjectFactory, selector)(this);
}
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/observeOn.js");
/** PURE_IMPORTS_START .._operators_observeOn PURE_IMPORTS_END */

/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_observeOn__["b" /* observeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onErrorResumeNext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["a" /* onErrorResumeNext */].apply(void 0, nextSources)(this);
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pairwise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pairwise.js");
/** PURE_IMPORTS_START .._operators_pairwise PURE_IMPORTS_END */

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_pairwise__["a" /* pairwise */])()(this);
}
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/partition.js");
/** PURE_IMPORTS_START .._operators_partition PURE_IMPORTS_END */

/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_partition__["a" /* partition */])(predicate, thisArg)(this);
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pluck.js");
/** PURE_IMPORTS_START .._operators_pluck PURE_IMPORTS_END */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_pluck__["a" /* pluck */].apply(void 0, properties)(this);
}
//# sourceMappingURL=pluck.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publish;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publish.js");
/** PURE_IMPORTS_START .._operators_publish PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publish__["a" /* publish */])(selector)(this);
}
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishBehavior;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishBehavior.js");
/** PURE_IMPORTS_START .._operators_publishBehavior PURE_IMPORTS_END */

/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__["a" /* publishBehavior */])(value)(this);
}
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishLast.js");
/** PURE_IMPORTS_START .._operators_publishLast PURE_IMPORTS_END */

/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishLast__["a" /* publishLast */])()(this);
}
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishReplay.js");
/** PURE_IMPORTS_START .._operators_publishReplay PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__["a" /* publishReplay */])(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/* unused harmony reexport raceStatic */
/** PURE_IMPORTS_START .._operators_race PURE_IMPORTS_END */

// NOTE: to support backwards compatability with 5.4.* and lower

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_race__["a" /* race */].apply(void 0, observables)(this);
}
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeat.js");
/** PURE_IMPORTS_START .._operators_repeat PURE_IMPORTS_END */

/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeat__["a" /* repeat */])(count)(this);
}
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeatWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeatWhen.js");
/** PURE_IMPORTS_START .._operators_repeatWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__["a" /* repeatWhen */])(notifier)(this);
}
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retry.js");
/** PURE_IMPORTS_START .._operators_retry PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retry__["a" /* retry */])(count)(this);
}
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retryWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retryWhen.js");
/** PURE_IMPORTS_START .._operators_retryWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__["a" /* retryWhen */])(notifier)(this);
}
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sample;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sample.js");
/** PURE_IMPORTS_START .._operators_sample PURE_IMPORTS_END */

/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sample__["a" /* sample */])(notifier)(this);
}
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sampleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sampleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_sampleTime PURE_IMPORTS_END */


/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__["a" /* sampleTime */])(period, scheduler)(this);
}
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/scan.js");
/** PURE_IMPORTS_START .._operators_scan PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator, seed)(this);
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_scan__["a" /* scan */])(accumulator)(this);
}
//# sourceMappingURL=scan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequenceEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sequenceEqual.js");
/** PURE_IMPORTS_START .._operators_sequenceEqual PURE_IMPORTS_END */

/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__["a" /* sequenceEqual */])(compareTo, comparor)(this);
}
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shareReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/shareReplay.js");
/** PURE_IMPORTS_START .._operators_shareReplay PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__["a" /* shareReplay */])(bufferSize, windowTime, scheduler)(this);
}
;
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = single;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/single.js");
/** PURE_IMPORTS_START .._operators_single PURE_IMPORTS_END */

/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_single__["a" /* single */])(predicate)(this);
}
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skip.js");
/** PURE_IMPORTS_START .._operators_skip PURE_IMPORTS_END */

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skip__["a" /* skip */])(count)(this);
}
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipLast.js");
/** PURE_IMPORTS_START .._operators_skipLast PURE_IMPORTS_END */

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipLast__["a" /* skipLast */])(count)(this);
}
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipUntil.js");
/** PURE_IMPORTS_START .._operators_skipUntil PURE_IMPORTS_END */

/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__["a" /* skipUntil */])(notifier)(this);
}
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipWhile.js");
/** PURE_IMPORTS_START .._operators_skipWhile PURE_IMPORTS_END */

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__["a" /* skipWhile */])(predicate)(this);
}
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/** PURE_IMPORTS_START .._operators_startWith PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_startWith__["a" /* startWith */].apply(void 0, array)(this);
}
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/subscribeOn.js");
/** PURE_IMPORTS_START .._operators_subscribeOn PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__["a" /* subscribeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _switch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchAll.js");
/** PURE_IMPORTS_START .._operators_switchAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchAll__["a" /* switchAll */])()(this);
}
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/** PURE_IMPORTS_START .._operators_switchMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMap__["a" /* switchMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMapTo.js");
/** PURE_IMPORTS_START .._operators_switchMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__["a" /* switchMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
/** PURE_IMPORTS_START .._operators_take PURE_IMPORTS_END */

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_take__["a" /* take */])(count)(this);
}
//# sourceMappingURL=take.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeLast.js");
/** PURE_IMPORTS_START .._operators_takeLast PURE_IMPORTS_END */

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeLast__["a" /* takeLast */])(count)(this);
}
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/** PURE_IMPORTS_START .._operators_takeUntil PURE_IMPORTS_END */

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__["a" /* takeUntil */])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
/** PURE_IMPORTS_START .._operators_takeWhile PURE_IMPORTS_END */

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__["a" /* takeWhile */])(predicate)(this);
}
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._operators_throttle PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_0__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_throttle__["b" /* throttle */])(durationSelector, config)(this);
}
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_throttle,.._operators_throttleTime PURE_IMPORTS_END */



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_1__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__["a" /* throttleTime */])(duration, scheduler, config)(this);
}
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeInterval.js");
/* unused harmony reexport TimeInterval */
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeInterval PURE_IMPORTS_END */



/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__["a" /* timeInterval */])(scheduler)(this);
}
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeout.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeout PURE_IMPORTS_END */


/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeout__["a" /* timeout */])(due, scheduler)(this);
}
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeoutWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeoutWith.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeoutWith PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__["a" /* timeoutWith */])(due, withObservable, scheduler)(this);
}
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timestamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timestamp PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timestamp__["a" /* timestamp */])(scheduler)(this);
}
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/toArray.js");
/** PURE_IMPORTS_START .._operators_toArray PURE_IMPORTS_END */

/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_toArray__["a" /* toArray */])()(this);
}
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = window;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/window.js");
/** PURE_IMPORTS_START .._operators_window PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_window__["a" /* window */])(windowBoundaries)(this);
}
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowCount.js");
/** PURE_IMPORTS_START .._operators_windowCount PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowCount__["a" /* windowCount */])(windowSize, startWindowEvery)(this);
}
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isNumeric,.._util_isScheduler,.._operators_windowTime PURE_IMPORTS_END */




function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__operators_windowTime__["a" /* windowTime */])(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowToggle.js");
/** PURE_IMPORTS_START .._operators_windowToggle PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__["a" /* windowToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowWhen.js");
/** PURE_IMPORTS_START .._operators_windowWhen PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__["a" /* windowWhen */])(closingSelector)(this);
}
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withLatestFrom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/withLatestFrom.js");
/** PURE_IMPORTS_START .._operators_withLatestFrom PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__["a" /* withLatestFrom */].apply(void 0, args)(this);
}
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipProto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_zip__["b" /* zip */].apply(void 0, observables)(this);
}
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zipAll.js");
/** PURE_IMPORTS_START .._operators_zipAll PURE_IMPORTS_END */

/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_zipAll__["a" /* zipAll */])(project)(this);
}
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js");
/** PURE_IMPORTS_START .._observable_SubscribeOnObservable PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__["a" /* SubscribeOnObservable */](source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/util/AnimationFrame.js");
/** PURE_IMPORTS_START ._AsyncAction,.._util_AnimationFrame PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AnimationFrameScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Immediate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/Immediate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START .._util_Immediate,._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsapScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var VirtualTimeScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/animationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START ._AnimationFrameAction,._AnimationFrameScheduler PURE_IMPORTS_END */


/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
var animationFrame = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__["a" /* AnimationFrameScheduler */](__WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__["a" /* AnimationFrameAction */]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/asap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsapAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START ._AsapAction,._AsapScheduler PURE_IMPORTS_END */


/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
var asap = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__["a" /* AsapScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsapAction__["a" /* AsapAction */]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/ColdObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColdObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Observable,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(ColdObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=ColdObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/HotObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    /** @deprecated internal use only */ HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(HotObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=HotObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLog; });
var SubscriptionLog = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
            unsubscribedFrame = Number.POSITIVE_INFINITY;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
//# sourceMappingURL=SubscriptionLog.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLoggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/** PURE_IMPORTS_START ._SubscriptionLog PURE_IMPORTS_END */

var SubscriptionLoggable = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
//# sourceMappingURL=SubscriptionLoggable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/TestScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColdObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/ColdObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HotObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/HotObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._Notification,._ColdObservable,._HotObservable,._SubscriptionLog,.._scheduler_VirtualTimeScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var defaultMaxFrame = 750;
var TestScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["a" /* VirtualAction */], defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */](messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new __WEBPACK_IMPORTED_MODULE_3__HotObservable__["a" /* HotObservable */](messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) {
            unsubscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof __WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) {
            materializeInnerObservables = false;
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */]) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(errorValue || 'error');
                    break;
                default:
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(__WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["b" /* VirtualTimeScheduler */]));
//# sourceMappingURL=TestScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/AnimationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestAnimationFrameDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var RequestAnimationFrameDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
var AnimationFrame = /*@__PURE__*/ new RequestAnimationFrameDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=AnimationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/Immediate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImmediateDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immediate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var ImmediateDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
var Immediate = /*@__PURE__*/ new ImmediateDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/applyMixins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMixins;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/assign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export assignImpl */
/* unused harmony export getAssign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
var assign = /*@__PURE__*/ getAssign(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=assign.js.map


/***/ }),

/***/ "./src/app/dashboard/admin/appLogs/app-logs.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n        <div class=\"col2-sm-6\">\n            <div class=\"input-group-btn\">\n           <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n           <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n           <ul id=\"selectList\" class=\"dropdown-menu\">\n               <li><a (click)=manageRow(10)>10</a></li>\n               <li><a (click)=manageRow(50)>50</a></li>\n               <li><a (click)=manageRow(100)>100</a></li>\n               <li><a (click)=manageRow(200)>Show all</a></li>                 \n           </ul>\n       </div>\n        </div>\n        <div class=\"col2-sm-6\">\n            <div class=\"col2-sm-7\"></div>\n            <div class=\"col2-sm-5\">                 \n                <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">               \n            </div>\n        </div>\n    </div>                   \n</div>\n<table class=\"table table-striped table-bordered table-hover\">\n    <thead>\n        <tr>                \n            <th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n                ID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n            </th>               \n            <th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n                Username<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n            </th>\n            <th (click)=\"sort('time_login',2)\" class=\"{{class[1][2]}}\">\n                Time Login<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n            </th>\n            <th (click)=\"sort('token_expired',3)\" class=\"{{class[1][3]}}\">\n                Last Request Time<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n            </th>\n            <th>Status</th>\n            <th style=\"width: 40px\" align=\"center\">Delete</th>                              \n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor = \"let user of activeUsers | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">              \n            <td>{{user.id}}</td>\n            <td>{{user.username}}</td>\n            <td>{{user.time_login}}</td>\n            <td>{{user.last_request_time}}</td>\n            <td>{{user.status}}</td>\n            <td align=\"center\">                                                                     \n              <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"delActiveUser(user.id)\">\n                <span class=\"glyphicon glyphicon-trash\"></span>\n              </button>\n            </td>                                                            \n        </tr>\n    </tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button> "

/***/ }),

/***/ "./src/app/dashboard/admin/appLogs/app-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAppLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_logs_service__ = __webpack_require__("./src/app/dashboard/admin/appLogs/app-logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAppLogsComponent = /** @class */ (function () {
    function AdminAppLogsComponent(appLogsService, errorHandlerService) {
        this.appLogsService = appLogsService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = true;
        this.row = 10;
        this.p = 1;
    }
    AdminAppLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appLogsService.GetActiveUsers()
            .subscribe(function (data) {
            _this.activeUsers = data['users'];
            _this.totalUsr = _this.activeUsers.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminAppLogsComponent.prototype.delActiveUser = function (id) {
        var _this = this;
        this.appLogsService.DelActiveUsers(id)
            .subscribe(function (data) {
            console.log(data['token']);
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminAppLogsComponent.prototype.refresh = function () {
        this.ngOnInit();
    };
    AdminAppLogsComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminAppLogsComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    AdminAppLogsComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminAppLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-status-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/appLogs/app-logs.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_logs_service__["a" /* AdminAppLogsService */],
            __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AdminAppLogsComponent);
    return AdminAppLogsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/appLogs/app-logs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAppLogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAppLogsService = /** @class */ (function () {
    function AdminAppLogsService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminAppLogsService.prototype.GetActiveUsers = function () {
        return this.http.get(this.baseUrl + "/activeUsers", {
            headers: this.Headers()
        });
    };
    AdminAppLogsService.prototype.DelActiveUsers = function (id) {
        return this.http.delete(this.baseUrl + "/activeUser/" + id, {
            headers: this.Headers()
        });
    };
    AdminAppLogsService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminAppLogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminAppLogsService);
    return AdminAppLogsService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"input-group-btn\">\n               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t               </ul>\n       \t\t</div>\n\t\t</div>\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t</div>\n\t\t</div>\n    </div>                   \n</div>    \n\t<table class=\"table table-striped table-bordered table-hover \">\n\t<thead>\n\t\t<tr>\t\t\t\n\t\t\t<th style=\"width: 40px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('Fname',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\tFirst Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\n\t\t\t<th (click)=\"sort('username',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('cardID',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('permission',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\tPermission<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('room',5)\" class=\"{{class[1][5]}}\">\n\t\t\t\tRoom<span class=\"fa fa-sort{{class[0][5]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('timestamp',6)\" class=\"{{class[1][6]}}\">\n\t\t\t\tTimestamp<span class=\"fa fa-sort{{class[0][6]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('action',7)\" class=\"{{class[1][7]}}\" style=\"width: 70px\">\n\t\t\t\taction<span class=\"fa fa-sort{{class[0][7]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of auditTrail | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<td>{{data.id}}</td>\n\t\t\t<td>{{data.Fname}}</td>\n\t\t\t<td>{{data.username}}</td>\n\t\t\t<td>{{data.cardID}}</td>\n\t\t\t<td>{{data.permission}}</td>\n\t\t\t<td>{{data.room}}</td>\t\n\t\t\t<td>{{data.timestamp}}</td>\t\n\t\t\t<td>{{data.action}}</td>\t\t\t\t\t\n\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteUser(data.id)\">\n                \t<span class=\"glyphicon glyphicon-trash\"></span>\n                </button>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div><br><br>\t\n <button type=\"submit\" class=\"btn btn-w-m btn-danger btn-sm\" (click) = \"delete_all()\">Delete all</button>\n <button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuditTrailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audit_trail_service__ = __webpack_require__("./src/app/dashboard/admin/auditTrail/audit-trail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuditTrailComponent = /** @class */ (function () {
    function AdminAuditTrailComponent(auditTrailService, errorHandlerService) {
        this.auditTrailService = auditTrailService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""]];
        this.key = 'id';
        this.reverse = true;
        this.row = 10;
        this.p = 1;
    }
    AdminAuditTrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auditTrailService.GetAuditTrails()
            .subscribe(function (data) {
            _this.auditTrail = data['auditTrail'];
            _this.totalUsr = _this.auditTrail.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminAuditTrailComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.auditTrailService.DeleteAuditTrail(id)
            .subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminAuditTrailComponent.prototype.delete_all = function () {
        var _this = this;
        this.auditTrailService.DelAllAuditTrail()
            .subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminAuditTrailComponent.prototype.refresh = function () {
        this.ngOnInit();
    };
    AdminAuditTrailComponent.prototype.sort = function (key, id) {
        console.log(key, id);
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
        console.log(this.class);
    };
    AdminAuditTrailComponent.prototype.manageRow = function (length) {
        this.row = length;
        this.selecTag();
    };
    AdminAuditTrailComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminAuditTrailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'audit-trail-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/auditTrail/audit-trail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__audit_trail_service__["a" /* AdminAuditTrailService */],
            __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AdminAuditTrailComponent);
    return AdminAuditTrailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuditTrailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAuditTrailService = /** @class */ (function () {
    function AdminAuditTrailService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminAuditTrailService.prototype.GetAuditTrails = function () {
        return this.http.get(this.baseUrl + "/auditTrail", {
            headers: this.Headers()
        });
    };
    AdminAuditTrailService.prototype.DeleteAuditTrail = function (id) {
        return this.http.delete(this.baseUrl + "/auditTrail/" + id, {
            headers: this.Headers()
        });
    };
    AdminAuditTrailService.prototype.DelAllAuditTrail = function () {
        return this.http.delete(this.baseUrl + "/auditTrail/all", {
            headers: this.Headers()
        });
    };
    AdminAuditTrailService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminAuditTrailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminAuditTrailService);
    return AdminAuditTrailService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>     \n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n        <th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n          Remote Design<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n        </th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let device of devices | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td>{{device.id}}</td>\n\t\t\t\t<td>{{device.name}}</td>\n\t\t\t\t<td>{{device.description}}</td>\n        <td>{{device.remote_design}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n            <button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(device.id)\" data-toggle=\"modal\" href=\"#modal-devices\">\n            \t<span class=\"glyphicon glyphicon-pencil\"></span>\n            </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n            <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteDevice(device.id)\">\n            \t<span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-devices\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-devices\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-body\">\n          \t<p></p>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">\n\n                      <div class=\"form-horizontal\"> \n                       <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Name:</label>\n                          <div class=\"col-lg-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Description:</label>                          \n                          <div class=\"col-lg-10\">\n                            <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n                          </div>\n                        </div>\n                         <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Remote Design:</label>                          \n                          <div class=\"col-lg-10\">\n                            <select class=\"chosen-select-ws form-control\" tabindex=\"2\" id=\"remote_design\">                                        \n                              <option *ngFor = \"let data of remote_design \" value=\"{{data.id}}\">{{data.name}}&emsp;&emsp;</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>                                                                               \n\n                      <div *ngIf = \"add == 'addDevice' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addDevice()\" >Add</button>\n                      </div> \n\n                      <div *ngIf = \"add == 'addDevice' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\">Add</button>\n                      </div>\n                                       \n\n                      <div *ngIf = \"update == 'updateDevice'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updateDevice()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_service__ = __webpack_require__("./src/app/dashboard/admin/devices/devices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(deviceService, formBuilder, errorHandlerService) {
        this.deviceService = deviceService;
        this.formBuilder = formBuilder;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
        this.createForm();
    }
    DevicesComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService
            .getAll()
            .subscribe(function (data) {
            _this.devices = data['devices'];
            _this.totalUsr = _this.devices.length;
            $(document).ready(function () {
                $('.chosen-select-ws').chosen({ width: "80%" });
            });
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
        this.deviceService.getRemoteDesign()
            .subscribe(function (data) {
            _this.remote_design = data['remote_design'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    DevicesComponent.prototype.getData = function () {
        this.update = "";
        this.add = "addDevice";
        this.modalAnimation = "flipInY";
        this.modalForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.initializeSelect('destroy');
        this.initializeSelect({ width: '80%' });
    };
    DevicesComponent.prototype.addDevice = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            var data = this.modalForm.value;
            data['remote_design_id'] = document.getElementById('remote_design')['value'];
            this.deviceService.AddDevice(data, "devices").subscribe(function (response) {
                _this.message = "";
                _this.ngOnInit();
                if (response['message'] == "already exist") {
                    _this.message = "Device already exist";
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    DevicesComponent.prototype.deleteDevice = function (id) {
        var _this = this;
        this.deviceService.deleteDevice(id).subscribe(function (Device) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    DevicesComponent.prototype.getUpdateData = function (id) {
        var _this = this;
        this.add = "";
        this.deviceService.routeID = id;
        this.modalAnimation = "fadeInDown";
        this.deviceService.GetDevice("device").subscribe(function (data) {
            _this.mapData(data['data']);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    DevicesComponent.prototype.updateDevice = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            console.log(document.getElementById('remote_design'));
            var data = this.modalForm.value;
            data['remote_design_id'] = document.getElementById('remote_design')['value'];
            console.log(data);
            this.deviceService.UpdateDevice(data, "device")
                .subscribe(function (data) {
                if (data == null) {
                    _this.message = "";
                    _this.ngOnInit();
                }
                if (data['message']) {
                    console.log("yes");
                    _this.message = data['message'];
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    DevicesComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    DevicesComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    DevicesComponent.prototype.mapData = function (data) {
        this.set_select(data['remote_design_id'], data['remote_design']);
        this.modalForm = this.formBuilder.group({
            name: [data["name"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: [data["description"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.update = "updateDevice";
    };
    DevicesComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    DevicesComponent.prototype.initializeSelect = function (parameter) {
        $(document).ready(function () {
            $('.chosen-select-ws').chosen(parameter);
        });
    };
    DevicesComponent.prototype.set_select = function (id, name) {
        document.getElementById("remote_design")['value'] = id;
        document.getElementsByName("chosen")[0]['textContent'] = name;
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'devices-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/devices/devices.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__devices_service__["a" /* DevicesService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DevicesService = /** @class */ (function () {
    function DevicesService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    DevicesService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/devices", {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.getRemoteDesign = function () {
        return this.http.get(this.baseUrl + "/remoteDesign", {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.deleteDevice = function (id) {
        return this.http.delete(this.baseUrl + "/device/" + id, {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.AddDevice = function (body, extensUrl) {
        return this.http.post(this.baseUrl + "/" + extensUrl, body, {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.GetDevice = function (extensUrl) {
        return this.http.get(this.baseUrl + "/" + extensUrl + "/" + this.routeID, {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.UpdateDevice = function (body, extensUrl) {
        return this.http.put(this.baseUrl + "/" + extensUrl + "/" + this.routeID, body, {
            headers: this.Headers()
        });
    };
    DevicesService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.router.navigate(['/login']);
        }
    };
    DevicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<!-- <div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let group of groups | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"grow\">\n\t\t\t\t\t<div class=\"contact-box\">                       \n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{group.name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">group: {{group.id}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<dir class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">  \n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteGroup(group.id)\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span></button>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(group.id)\" data-toggle=\"modal\" href=\"#modal-groups\"><span class=\"glyphicon glyphicon-pencil\"></span></button> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</dir> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a (click)=showMember(group.id)>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">                    \n\t\t\t\t\t\t\t\t\t<h3><strong>{{group.name}}</strong></h3>                    \n\t\t\t\t\t\t\t\t\t<strong>Description:</strong><br>\n\t\t\t\t\t\t\t\t\t<p>{{group.description}}</p>                         \n\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"group.description.length <= 25\"><br></ng-container>\n\t\t\t\t\t\t\t\t\t<strong>Permission:</strong><br>\n\t\t\t\t\t\t\t\t\t<p>{{group.permission_name}}</p>\n\t\t\t\t\t\t\t\t\t<strong>Number of members:</strong>&nbsp;{{group.members}}                                    \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>    \n\t\t</div>\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div> -->\n\t<div class=\"form-horizontal2\">\n\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>                   \n\t</div>\n\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tMembers<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let group of groups | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td (click)=showMember(group.id)>{{group.id}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.name}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.description}}</td>\n\t\t\t\t<td style=\"width: 90px\" (click)=GroupAccess(group.id)>{{group.members}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(group.id)\" data-toggle=\"modal\" href=\"#modal-groups\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deletegroup(group.id)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-groups\" (click) = \"getData()\">Add</button>\n\n\t<!-- <div class=\"footer fixed\">\n\t\t<div class=\"pull-right\">\n\t\t\t<div class=\"form-group form-horizontal\">\n\t\t\t\t<label class=\"col-lg-2 control-label\">Search:</label>\n\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>   \n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-groups\" (click) = \"getData()\">Add</button>\n\t\t</div>\n\t</div> -->\n\n\t<div id=\"modal-groups\" class=\"modal fade\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content animated {{modalAnimation}}\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-11\">              \n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t</div>               \n\t\t\t\t\t\t\t<form [formGroup]=\"modalForm\"  novalidate>        \n\t\t\t\t\t\t\t\t<div class=\"col-sm-11\">\n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' || update == 'updateGroup'\" class=\"form-horizontal\"> \n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Description:</label>                          \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">                            \n\t\t\t\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary btn-table dropdown-toggle\" type=\"button\" (click)=\"selecTag2()\">{{permission}}&emsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"selectList2\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let permission of permissions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a (click)=\"choosePermission(permission.id,permission.name)\">{{permission.name}}</a></li> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>                               \n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                          \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' && modalForm. status == 'VALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addGroup()\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div>  \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' && modalForm. status == 'INVALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div>                 \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"update == 'updateGroup'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updateGroup()\" >Save</button>                      \n\t\t\t\t\t\t\t\t\t</div>                      \n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_service__ = __webpack_require__("./src/app/dashboard/admin/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminGroupComponent = /** @class */ (function () {
    function AdminGroupComponent(groupService, errorHandlerService, formBuilder, router) {
        this.groupService = groupService;
        this.errorHandlerService = errorHandlerService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
        this.createForm();
    }
    AdminGroupComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({});
    };
    AdminGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups()
            .subscribe(function (data) {
            _this.groups = data['groups'];
            _this.totalUsr = _this.groups.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminGroupComponent.prototype.getUpdateData = function (id) {
        var _this = this;
        this.add = "";
        this.groupService.routeID = id;
        this.modalAnimation = "fadeInDown";
        this.groupService.GetPermissions()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
        this.groupService.GetGroup("group").subscribe(function (data) {
            _this.permission = data['data'].permission_name;
            _this.choosenPermission = { permission_id: data['data'].permission_id };
            _this.mapData(data['data']);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminGroupComponent.prototype.updateGroup = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            var data;
            data = Object.assign(this.modalForm.value, this.choosenPermission);
            this.groupService.UpdateGroup(data, "group")
                .subscribe(function (data) {
                if (data['message']) {
                    _this.message = data['message'];
                }
                else {
                    _this.message = "";
                    _this.ngOnInit();
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminGroupComponent.prototype.deleteGroup = function (id) {
        var _this = this;
        this.groupService.DeleteGroup(id)
            .subscribe(function (group) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminGroupComponent.prototype.getData = function () {
        var _this = this;
        this.permission = "Permission";
        this.update = "";
        this.add = "addGroup";
        this.modalAnimation = "fadeInDown";
        this.modalForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.groupService.GetPermissions()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminGroupComponent.prototype.addGroup = function () {
        var _this = this;
        if (this.modalForm.status == "VALID" && this.permission != "Permission") {
            var data;
            data = Object.assign(this.modalForm.value, this.choosenPermission);
            this.groupService.AddGroup(data, "groups").subscribe(function (response) {
                _this.message = "";
                _this.ngOnInit();
                if (response['message'] == "already exist") {
                    _this.message = "group already exist";
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
        else if (this.permission == "Permission") {
            this.message = "Error Permission is missing! Please choose permission type when adding group";
        }
    };
    AdminGroupComponent.prototype.choosePermission = function (permission_id, permission_name) {
        this.choosenPermission = { permission_id: permission_id };
        this.permission = permission_name;
        this.selecTag2();
    };
    AdminGroupComponent.prototype.showMember = function (id) {
        this.router.navigate(['/home/admin/groupMember', id]);
    };
    AdminGroupComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    AdminGroupComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminGroupComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminGroupComponent.prototype.selecTag2 = function () {
        var class_name = document.getElementById("selectList2").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList2").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList2").className = "dropdown-menu";
        }
    };
    AdminGroupComponent.prototype.mapData = function (data) {
        this.modalForm = this.formBuilder.group({
            name: [data["name"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: [data["description"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.update = "updateGroup";
    };
    AdminGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'group-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/group/group.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__group_service__["a" /* AdminGroupService */], __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminGroupComponent);
    return AdminGroupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/group/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminGroupService = /** @class */ (function () {
    function AdminGroupService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminGroupService.prototype.getGroups = function () {
        return this.http.get(this.baseUrl + "/groups", {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.DeleteGroup = function (id) {
        return this.http.delete(this.baseUrl + "/group/" + id, {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.AddGroup = function (body, extensUrl) {
        return this.http.post(this.baseUrl + "/" + extensUrl, body, {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.GetGroup = function (extensUrl) {
        return this.http.get(this.baseUrl + "/" + extensUrl + "/" + this.routeID, {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.UpdateGroup = function (body, extensUrl) {
        return this.http.put(this.baseUrl + "/" + extensUrl + "/" + this.routeID, body, {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.GetPermissions = function () {
        return this.http.get(this.baseUrl + "/getAllPermission", {
            headers: this.Headers()
        });
    };
    AdminGroupService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminGroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminGroupService);
    return AdminGroupService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let member of groupMember | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">\t\t\t\t\n\t\t\t\t<td>{{member.id}}</td>\n\t\t\t\t<td>{{member.username}}</td>\n\t\t\t\t<td>{{member.Lname}}</td>\n\t\t\t\t<td>{{member.Fname}}</td>\n\t\t\t\t<td>{{member.cardID}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n          <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteMember(member.id)\">\n          \t<span class=\"glyphicon glyphicon-trash\"></span>\n          </button>\n\t\t\t\t</td>\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\" id = \"first\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-members\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n\n<div id=\"modal-members\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n              <br>           \n              <div class=\"form-horizontal2\">\n                <div class=\"form-group2 col2-sm-12\">\n                  <div class=\"col2-sm-6\">\n                    <div class=\"input-group-btn\">\n                      <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag2()\">&emsp;{{row2}}&emsp;</button>\n                      <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag2()\"><span class=\"caret\"></span></button>\n                      <ul id=\"selectList2\" class=\"dropdown-menu\">\n                        <li><a (click)=manageRow2(8)>8</a></li>\n                        <li><a (click)=manageRow2(50)>50</a></li>\n                        <li><a (click)=manageRow2(100)>100</a></li>\n                        <li><a (click)=manageRow2(200)>Show all</a></li>                 \n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col2-sm-6\">\n                    <div class=\"col2-sm-5\"></div>\n                    <div class=\"col2-sm-7\">         \n                      <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter2\">        \n                    </div>\n                  </div>\n                </div>                   \n              </div>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th (click)=\"sort2('Username',1)\" class=\"{{class2[1][0]}}\">\n                        Username<span class=\"fa fa-sort{{class2[0][0]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('Lname',2)\" class=\"{{class2[1][1]}}\">\n                        Lname<span class=\"fa fa-sort{{class2[0][1]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('Fname',3)\" class=\"{{class2[1][2]}}\">\n                        Fname<span class=\"fa fa-sort{{class2[0][2]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('CardID',4)\" class=\"{{class2[1][3]}}\">\n                        CardID<span class=\"fa fa-sort{{class2[0][3]}} pull-right\"></span>\n                      </th>\n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                              \n                    <tr *ngFor = \"let user of notMember | orderBy: key2 : reverse2 | filter:filter2 | paginate: { itemsPerPage: row2, currentPage: p2, id: 'second' };\">                                  \n                      <td style=\"width: 169px\">{{user.username}}</td>\n                      <td style=\"width: 98px\">{{user.Lname}}</td>\n                      <td style=\"width: 98px\">{{user.Fname}}</td>\n                      <td style=\"width: 101px\">{{user.cardID}}</td>\n                      <td><input type=\"checkbox\"  name=\"a{{user.id}}\" ngModel></td>\n                    </tr>                                \n                  </tbody>\n                </table>\n                <p>Showing 1 to {{row2}} of {{totalUsr2}}</p>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p2 = $event\" id = \"second\"></pagination-controls>\n                </div><br><br>\n              </div>\n              <div>\n                <div class=\"col-sm-7\"></div>                        \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addMember(input)\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/admin/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_service__ = __webpack_require__("./src/app/dashboard/admin/member/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminMemberComponent = /** @class */ (function () {
    function AdminMemberComponent(route, membersService, router, errorHandlerService) {
        this.route = route;
        this.membersService = membersService;
        this.router = router;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", "", ""], ["", "", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
        this.class2 = [["", "", "", "", ""], ["", "", "", "", ""]];
        this.key2 = 'id';
        this.reverse2 = false;
        this.row2 = 8;
        this.p2 = 1;
    }
    AdminMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.membersService.getAllMem(id)
            .subscribe(function (data) {
            _this.groupMember = data['members'];
            _this.totalUsr = _this.groupMember.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminMemberComponent.prototype.getData = function () {
        var _this = this;
        this.membersService.getAllNotMem(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (data) {
            _this.notMember = data['members'];
            _this.totalUsr2 = _this.notMember.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminMemberComponent.prototype.deleteMember = function (id) {
        var _this = this;
        var group_id = this.route.snapshot.paramMap.get('id');
        this.membersService.DeleteMember(group_id, id).subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminMemberComponent.prototype.addMember = function (input) {
        var _this = this;
        var body = [];
        this.notMember.forEach(function (user) {
            if (input.value["a" + user['id']] == true) {
                // body.id.unshift(user['id'].toString())
                body.push(user['id']);
            }
        });
        console.log(body);
        this.membersService.AddMember(body, "groupMember", this.route.snapshot.paramMap.get('id'))
            .subscribe(function (response) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminMemberComponent.prototype.back = function () {
        this.router.navigate(['home/admin/groups']);
    };
    AdminMemberComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminMemberComponent.prototype.sort2 = function (key, id) {
        this.key2 = key;
        this.reverse2 = !this.reverse2;
        if (this.class2[0][id] == "" || this.class2[0][id] == "-asc") {
            this.class2[0][id] = "-desc";
        }
        else if (this.class2[0][id] == "-desc") {
            this.class2[0][id] = "-asc";
        }
        this.class2[1][this.tempID] = "";
        this.class2[1][id] = "active";
        this.tempID2 = id;
    };
    AdminMemberComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    AdminMemberComponent.prototype.manageRow2 = function (length) {
        this.row2 = length;
        if (length == 200) {
            this.row2 = this.totalUsr2;
        }
        this.selecTag2();
    };
    AdminMemberComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminMemberComponent.prototype.selecTag2 = function () {
        var class_name = document.getElementById("selectList2").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList2").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList2").className = "dropdown-menu";
        }
    };
    AdminMemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'member-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/member/member.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__member_service__["a" /* AdminMembersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AdminMemberComponent);
    return AdminMemberComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/member/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMembersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminMembersService = /** @class */ (function () {
    function AdminMembersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminMembersService.prototype.getAllMem = function (id) {
        return this.http.get(this.baseUrl + "/groupMember/" + id, {
            headers: this.Headers()
        });
    };
    AdminMembersService.prototype.DeleteMember = function (group_id, user_id) {
        return this.http.delete(this.baseUrl + "/deleteMember/" + group_id + "/" + user_id, {
            headers: this.Headers()
        });
    };
    AdminMembersService.prototype.getAllNotMem = function (id) {
        return this.http.get(this.baseUrl + "/shwNotMem/" + id, {
            headers: this.Headers()
        });
    };
    AdminMembersService.prototype.AddMember = function (body, extensUrl, id) {
        return this.http.post(this.baseUrl + "/" + extensUrl + "/" + id, body, {
            headers: this.Headers()
        });
    };
    AdminMembersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminMembersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminMembersService);
    return AdminMembersService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n    <p>Showing 1 to {{row}} of {{totalUsr}}</p>\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let permission of permissions | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td>{{permission.id}}</td>\n\t\t\t\t<td>{{permission.name}}</td>\n\t\t\t\t<td>{{permission.description}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n                    <button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(permission.id)\" data-toggle=\"modal\" href=\"#modal-permissions\">\n                    \t<span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deletePermission(permission.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-permissions\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-permissions\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-body\">\n          \t<p></p>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">\n\n                      <div *ngIf = \"add == 'addPermission' || update == 'updatePermission'\n                       || add == 'addGroup' || update == 'updateGroup'\" class=\"form-horizontal\"> \n                       <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Name:</label>\n                          <div class=\"col-lg-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Description:</label>                          \n                          <div class=\"col-lg-10\">\n                            <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n                          </div>\n                        </div>\n                      </div>                                          \n\n                      <div *ngIf = \"add == 'addPermission' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addPermission()\" >Add</button>\n                      </div> \n\n                      <div *ngIf = \"add == 'addPermission' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\">Add</button>\n                      </div>                 \n\n                      <div *ngIf = \"update == 'updatePermission'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updatePermission()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__permission_service__ = __webpack_require__("./src/app/dashboard/admin/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPermissionComponent = /** @class */ (function () {
    function AdminPermissionComponent(permissionService, formBuilder, route, errorHandlerService) {
        this.permissionService = permissionService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", ""], ["", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
        this.createForm();
    }
    AdminPermissionComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({});
    };
    AdminPermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissionService
            .getAll()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
            _this.totalUsr = _this.permissions.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminPermissionComponent.prototype.getData = function () {
        this.update = "";
        this.add = "addPermission";
        this.modalAnimation = "flipInY";
        this.modalForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    AdminPermissionComponent.prototype.addPermission = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.permissionService.AddPermission(this.modalForm.value, "permissions").subscribe(function (response) {
                _this.message = "";
                _this.ngOnInit();
                if (response['message'] == "already exist") {
                    _this.message = "permission already exist";
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminPermissionComponent.prototype.deletePermission = function (id) {
        var _this = this;
        this.permissionService.deletePermission(id).subscribe(function (permission) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminPermissionComponent.prototype.getUpdateData = function (id) {
        var _this = this;
        this.add = "";
        this.permissionService.routeID = id;
        this.modalAnimation = "fadeInDown";
        this.permissionService.GetPermission("permission").subscribe(function (data) {
            _this.mapData(data['data']);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminPermissionComponent.prototype.updatePermission = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.permissionService.UpdatePermission(this.modalForm.value, "permission")
                .subscribe(function (data) {
                console.log(data);
                if (data['message']) {
                    _this.message = data['message'];
                }
                else {
                    _this.message = "";
                    _this.ngOnInit();
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminPermissionComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminPermissionComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    AdminPermissionComponent.prototype.mapData = function (data) {
        this.modalForm = this.formBuilder.group({
            name: [data["name"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            description: [data["description"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.update = "updatePermission";
    };
    AdminPermissionComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminPermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'permission-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/permission/permission.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__permission_service__["a" /* AdminPermissionService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AdminPermissionComponent);
    return AdminPermissionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPermissionService = /** @class */ (function () {
    function AdminPermissionService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminPermissionService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/permissions", {
            headers: this.Headers()
        });
    };
    AdminPermissionService.prototype.deletePermission = function (id) {
        return this.http.delete(this.baseUrl + "/permission/" + id, {
            headers: this.Headers()
        });
    };
    AdminPermissionService.prototype.AddPermission = function (body, extensUrl) {
        return this.http.post(this.baseUrl + "/" + extensUrl, body, {
            headers: this.Headers()
        });
    };
    AdminPermissionService.prototype.GetPermission = function (extensUrl) {
        return this.http.get(this.baseUrl + "/" + extensUrl + "/" + this.routeID, {
            headers: this.Headers()
        });
    };
    AdminPermissionService.prototype.UpdatePermission = function (body, extensUrl) {
        return this.http.put(this.baseUrl + "/" + extensUrl + "/" + this.routeID, body, {
            headers: this.Headers()
        });
    };
    AdminPermissionService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminPermissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminPermissionService);
    return AdminPermissionService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"tabs-container\"> -->\n\t<!-- <ul class=\"nav nav-tabs\">\n\t\t<li id=\"room_list_tab\" class=\"active\"><a (click)=\"change_view('room_list')\">Table view</a></li>\n\t\t<li id=\"room_card_tab\" class=\"\"><a (click)=\"change_view('room_card')\">Card view</a></li>\n\t</ul> -->\n\t<!-- <div class=\"tab-content\"> -->\n\t<!-- \t<div id=\"room_list\" class=\"tab-pane active\">\n\t\t\t<div class=\"panel-body\"> -->\n\t\t\t\t<div class=\"form-horizontal2\">\n\t\t\t\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>                   \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\t\t\t\t\n\t\t\t\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\t\t\t\tGroups<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let room of rooms | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.id}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.name}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.description}}</td>\n\t\t\t\t\t\t\t<td style=\"width: 80px\" (click)=GroupAccess(room.id)>{{room.groups}}</td>\n\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(room.id)\" data-toggle=\"modal\" href=\"#modal-rooms\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoom(room.id)\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t</div><br><br>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-rooms\" (click) = \"getData()\">Add</button>\n\t<!-- \t\t</div>\n\t\t</div> -->\n\t\t<!-- <div id=\"room_card\" class=\"tab-pane\">\n\t\t\t<div>\n\t\t\t\t<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n\t\t\t\t<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div *ngFor = \"let room of rooms  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div class=\"grow\">\n\t\t\t\t\t\t\t\t\t<div class=\"contact-box\">                       \n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.name[0]}}.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<dir class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoom(room.id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span></button>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(room.id)\" data-toggle=\"modal\" href=\"#modal-rooms\"><span class=\"glyphicon glyphicon-pencil\"></span></button> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t</dir> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=GroupAccess(room.id)>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">                    \n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><strong>{{room.name}}</strong></h3>                    \n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Description</strong><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{room.description}}</p><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.description.length <= 25\"><br></ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Number of groups:</strong>&nbsp;{{room.groups}}<br>\t\t\t                                    \n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t\t</div>            \n\n\t\t\t\t\t<div class=\"footer fixed\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<div class=\"form-group form-horizontal\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Search:</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>   \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-rooms\" (click) = \"getData()\">Add</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t<!-- </div> -->\n\n\n\t<!-- </div> -->\n\n\t<div id=\"modal-rooms\" class=\"modal fade\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content animated {{modalAnimation}}\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-11\">              \n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t</div>               \n\t\t\t\t\t\t\t<form [formGroup]=\"modalForm\"  novalidate>        \n\t\t\t\t\t\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' || update == 'updateRoom'\" class=\"form-horizontal\"> \n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Description:</label>                          \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                          \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' && modalForm.status == 'VALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addRoom()\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' && modalForm.status == 'INVALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\">Add</button>\n\t\t\t\t\t\t\t\t\t</div>                \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"update == 'updateRoom'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updateRoom()\" >Save</button>                      \n\t\t\t\t\t\t\t\t\t</div>                      \n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__("./src/app/dashboard/admin/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRoomComponent = /** @class */ (function () {
    function AdminRoomComponent(roomService, router, errorHandlerService, formBuilder) {
        this.roomService = roomService;
        this.router = router;
        this.errorHandlerService = errorHandlerService;
        this.formBuilder = formBuilder;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
        this.createForm();
    }
    AdminRoomComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({});
    };
    AdminRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (data) {
            _this.rooms = data['rooms'];
            _this.totalUsr = _this.rooms.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomComponent.prototype.getData = function () {
        this.update = "";
        this.add = "addRoom";
        this.modalAnimation = "fadeInDown";
        this.modalForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
    };
    AdminRoomComponent.prototype.addRoom = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.roomService.AddRoom(this.modalForm.value, "rooms").subscribe(function (response) {
                _this.message = "";
                _this.ngOnInit();
                if (response['message'] == "already exist") {
                    _this.message = "room already exist";
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminRoomComponent.prototype.deleteRoom = function (id) {
        var _this = this;
        this.roomService.DeleteRoom(id)
            .subscribe(function (room) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomComponent.prototype.getUpdateData = function (id) {
        var _this = this;
        this.roomService.roomID = id;
        this.add = "";
        this.modalAnimation = "fadeInDown";
        this.roomService.GetRoom("room").subscribe(function (data) {
            _this.mapData(data['data']);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomComponent.prototype.updateRoom = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.roomService.UpdateRoom(this.modalForm.value, "room")
                .subscribe(function (data) {
                if (data['message']) {
                    _this.message = data['message'];
                }
                else {
                    _this.message = "";
                    _this.ngOnInit();
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminRoomComponent.prototype.GroupAccess = function (id) {
        this.router.navigate(['/home/admin/roomAccess', id]);
    };
    AdminRoomComponent.prototype.change_view = function (view) {
        if (view == 'room_list') {
            console.log(document.getElementById("room_list").style);
            document.getElementById("room_list").className = 'tab-panel active';
            document.getElementById("room_card").className = 'tab-panel';
            document.getElementById("room_list").style.display = 'block';
            document.getElementById("room_card").style.display = 'none';
            document.getElementById("room_list_tab").className = 'active';
            document.getElementById("room_card_tab").className = '';
        }
        if (view == 'room_card') {
            document.getElementById("room_list").className = 'tab-panel';
            document.getElementById("room_card").className = 'tab-panel active';
            document.getElementById("room_list").style.display = 'none';
            document.getElementById("room_card").style.display = 'block';
            document.getElementById("room_list_tab").className = '';
            document.getElementById("room_card_tab").className = 'active';
        }
    };
    AdminRoomComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    AdminRoomComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminRoomComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminRoomComponent.prototype.mapData = function (data) {
        console.log("====>", data);
        this.modalForm = this.formBuilder.group({
            name: [data["name"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            description: [data["description"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.update = "updateRoom";
    };
    AdminRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/room/room.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* AdminRoomService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AdminRoomComponent);
    return AdminRoomComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/room/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRoomService = /** @class */ (function () {
    function AdminRoomService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminRoomService.prototype.getRooms = function () {
        return this.http.get(this.baseUrl + "/rooms", {
            headers: this.Headers()
        });
    };
    AdminRoomService.prototype.DeleteRoom = function (id) {
        return this.http.delete(this.baseUrl + "/room/" + id, {
            headers: this.Headers()
        });
    };
    AdminRoomService.prototype.AddRoom = function (body, extensUrl) {
        return this.http.post(this.baseUrl + "/" + extensUrl, body, {
            headers: this.Headers()
        });
    };
    AdminRoomService.prototype.GetRoom = function (extensUrl) {
        return this.http.get(this.baseUrl + "/" + extensUrl + "/" + this.roomID, {
            headers: this.Headers()
        });
    };
    AdminRoomService.prototype.UpdateRoom = function (body, extensUrl) {
        console.log("====>", this.roomID);
        return this.http.put(this.baseUrl + "/" + extensUrl + "/" + this.roomID, body, {
            headers: this.Headers()
        });
    };
    AdminRoomService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminRoomService);
    return AdminRoomService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.component.html":
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">ID</th>\n\t\t\t\t<th>Group Name</th>\n\t\t\t\t<th >Permission Name</th>\n\t\t\t\t<th style=\"width: 40px\">Users</th>\t\t\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let access of groupAccess\">\t\t\t\t\n\t\t\t\t<td>{{access.id}}</td>\n\t\t\t\t<td>{{access.groupName}}</td>\n\t\t\t\t<td>{{access.permissionName}}</td>\n\t\t\t\t<td align=\"center\">{{access.users}}</td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"delGroupAccess(access.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-grpAccess\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-grpAccess\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n                <br>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th style=\"width: 266px\">Group Name</th>\n                      <th style=\"width: 200px\">Permission Name</th> \n                      <th>Members</th>                     \n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                                                           \n                    <tr *ngFor = \"let group of unregistered_group\">                                  \n                      <td style=\"width: 266px\" >{{group.name}}</td>\n                      <td style=\"width: 200px\" >\n                        <div class=\"input-group-btn\">\n                          <button data-toggle=\"dropdown\" class=\"btn btn-primary btn-table dropdown-toggle\" type=\"button\" (click)=\"selecTag(group.id)\">{{CB_Status['a'+group.id]}} <span class=\"caret\"></span></button>\n                           <ul id=\"selectList\" class=\"dropdown-menu\">\n                              <ng-container *ngFor = \"let permission of permissions\">\n                                <li><a (click)=\"addPermission(group.id,permission.id,permission.name)\">{{permission.name}}</a></li> \n                              </ng-container>                               \n                           </ul>\n                        </div>                      \n                      </td> \n                      <td align=\"center\">{{group.members}}</td>                   \n                      <ng-container *ngIf = \"CB_Status['a'+group.id] == 'Permission'\">\n                        <input type=\"checkbox\" name=\"\" disabled=\"\">\n                      </ng-container>\n                      <ng-container *ngIf = \"CB_Status['a'+group.id] != 'Permission'\">\n                        <input type=\"checkbox\" name=\"\" checked=\"\" (click) = \"unCheck_CB(group.id)\">\n                      </ng-container>\n                    </tr>                                \n                  </tbody>\n                </table>\n              </div>\n              <div class=\"pull-right\">            \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addGrpAccess()\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_access_service__ = __webpack_require__("./src/app/dashboard/admin/roomAccess/room-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminRoomAccessComponent = /** @class */ (function () {
    function AdminRoomAccessComponent(roomAccessService, errorHandlerService, route, router) {
        this.roomAccessService = roomAccessService;
        this.errorHandlerService = errorHandlerService;
        this.route = route;
        this.router = router;
        this.CB_Status = {};
        this.addAccess = [[], []];
    }
    AdminRoomAccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.roomAccessService.getGroupAccess(id)
            .subscribe(function (data) {
            _this.groupAccess = data['group'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomAccessComponent.prototype.getData = function () {
        var _this = this;
        this.addAccess = [[], []];
        this.roomAccessService.getNtGrpAccess(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (data) {
            _this.unregistered_group = data['group'];
            _this.unregistered_group.forEach(function (data) {
                var id = 'a' + data['id'];
                var obj = {};
                obj[id] = "Permission";
                _this.CB_Status = Object.assign(_this.CB_Status, obj);
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        });
        this.roomAccessService.getPermissions()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomAccessComponent.prototype.addGrpAccess = function () {
        var _this = this;
        var all_data = [];
        var counter = 0;
        this.addAccess[0].forEach(function (data) {
            all_data.push(_this.addAccess[1][counter]);
            counter++;
        });
        this.roomAccessService.AddGroupAccess(this.route.snapshot.paramMap.get('id'), all_data)
            .subscribe(function (response) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomAccessComponent.prototype.addPermission = function (groupID, permissionID, permissionName) {
        this.addAccess[0].push('a' + this.group_id);
        this.addAccess[1].push({ group_id: this.group_id, permission_id: permissionID });
        this.CB_Status['a' + this.group_id] = permissionName;
        this.selecTag(null);
    };
    AdminRoomAccessComponent.prototype.unCheck_CB = function (groupID) {
        this.CB_Status['a' + groupID] = "Permission";
        this.addAccess[0].splice(this.addAccess[0].indexOf('a' + groupID), 1);
        this.addAccess[1].splice(this.addAccess[0].indexOf('a' + groupID), 1);
    };
    AdminRoomAccessComponent.prototype.delGroupAccess = function (id) {
        var _this = this;
        this.roomAccessService.DeleteGroupAccess(id)
            .subscribe(function (response) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomAccessComponent.prototype.back = function () {
        this.router.navigate(['home/admin/rooms']);
    };
    AdminRoomAccessComponent.prototype.selecTag = function (group_id) {
        this.group_id = group_id;
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminRoomAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-access-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/roomAccess/room-access.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__room_access_service__["a" /* AdminRoomAccessService */], __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminRoomAccessComponent);
    return AdminRoomAccessComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomAccessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRoomAccessService = /** @class */ (function () {
    function AdminRoomAccessService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminRoomAccessService.prototype.getGroupAccess = function (id) {
        return this.http.get(this.baseUrl + "/groupAccess/" + id, {
            headers: this.Headers()
        });
    };
    AdminRoomAccessService.prototype.AddGroupAccess = function (id, body) {
        return this.http.post(this.baseUrl + "/groupAccess/" + id, body, {
            headers: this.Headers()
        });
    };
    AdminRoomAccessService.prototype.DeleteGroupAccess = function (id) {
        return this.http.delete(this.baseUrl + "/deleteGrpAccess/" + id, {
            headers: this.Headers()
        });
    };
    AdminRoomAccessService.prototype.getNtGrpAccess = function (routeID) {
        return this.http.get(this.baseUrl + "/shwNotGrpAccess/" + routeID, {
            headers: this.Headers()
        });
    };
    AdminRoomAccessService.prototype.getPermissions = function () {
        return this.http.get(this.baseUrl + "/permissions", {
            headers: this.Headers()
        });
    };
    AdminRoomAccessService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomAccessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminRoomAccessService);
    return AdminRoomAccessService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let room of room_status  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"room-status col-lg-3\">\n\t\t\t\t<div class=\"grow\">\n          <div class=\"ibox-title\">             \n              <h5>ID-{{room.room_id}} - {{room.room_name}}</h5>\n          </div>\n\t\t\t\t\t<div class=\"contact-box\" style=\"height: 220px\">\n\t\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\t\t                    \n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.room_name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.room_id}}</div><br>\n\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.add_device\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<div class=\"\">\t\t\t\t\t\t\t\t                  \t\t\t                 \n\t\t\t\t\t\t\t\t<strong>Devices:</strong><br><br>\n\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t<tbody class=\"room-status\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let device of room.devices\" >\n                      <ng-container *ngIf = \"device.remote_design != 'Temperature Slider'\">\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 40px; padding-right: 20px; padding-left: 5px\">                         \n  \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch{{device.class_name}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'True' || device.device_status == 'true'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" checked (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'False' || device.device_status == 'false'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t                                    \n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" for=\"{{device.room_status_id}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t</td>\n                        <td></td>                        \t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n  \t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoomDevice(device.room_status_id)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t</button>\n  \t\t\t\t\t\t\t\t\t\t\t</td>\n                      </ng-container>                     \n                      <ng-container *ngIf = \"device.remote_design == 'Temperature Slider'\">\n                        <td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n                        <td style=\"width: 1000px\"><input type=\"text\" id=\"{{device.room_status_id}}\"></td>\n                        <td style=\"width: 100px\"></td>\n                        <td align=\"center\">                                                      \n                          <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoomDevice(device.room_status_id)\">\n                            <span class=\"glyphicon glyphicon-trash\"></span>\n                          </button>\n                        </td>\n                      </ng-container>                    \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>                \t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n            <div class=\"footer-ibox text-right\">\n              <ng-container *ngIf = \"room.add_device\">\n                <button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n            </ng-container>\n            </div>       \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</ng-container>\n\t</div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n  <div class=\"footer fixed\">\n    <div class=\"pull-right\">\n      <div class=\"form-group form-horizontal\">\n        <label class=\"col-lg-2 control-label\">Search:</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\" style=\"height: 30px\">\n        </div>\n      </div>   \n    </div>    \n  </div>\n\n<div id=\"modal-add-devies\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n                <br>           \n                <div class=\"form-horizontal2\">\n                  <div class=\"form-group2 col2-sm-12\">\n                    <div class=\"col2-sm-6\">\n                      <div class=\"input-group-btn\">\n                        <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row2}}&emsp;</button>\n                        <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n                        <ul id=\"rt-selectList\" class=\"dropdown-menu\">\n                          <li><a (click)=manageRow2(8)>8</a></li>\n                          <li><a (click)=manageRow2(50)>50</a></li>\n                          <li><a (click)=manageRow2(100)>100</a></li>\n                          <li><a (click)=manageRow2(200)>Show all</a></li>                 \n                        </ul>\n                      </div>\n                    </div>\n                    <div class=\"col2-sm-6\">\n                      <div class=\"col2-sm-5\"></div>\n                      <div class=\"col2-sm-7\">         \n                        <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter2\">        \n                      </div>\n                    </div>\n                  </div>                   \n                </div>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th (click)=\"sort('id',1)\" class=\"{{class[1][0]}}\">\n                        ID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort('Lname',2)\" class=\"{{class[1][1]}}\">\n                        Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort('Fname',3)\" class=\"{{class[1][2]}}\">\n                        Description<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n                      </th>                      \n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                              \n                    <tr *ngFor = \"let device of devices | orderBy: key2 : reverse2 | filter:filter2 | paginate: { itemsPerPage: row2, currentPage: p2, id: 'second' };\">                                  \n                      <td style=\"width: 25px\">{{device.id}}</td>\n                      <td style=\"width: 98px\">{{device.name}}</td>\n                      <td style=\"width: 98px\">{{device.description}}</td>                      \n                      <td><input type=\"checkbox\"  name=\"a{{device.id}}\" ngModel></td>\n                    </tr>                                \n                  </tbody>\n                </table>\n                <p>Showing 1 to {{row2}} of {{totalUsr}}</p>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p2 = $event\" id = \"first\"></pagination-controls>\n                </div><br><br>                \n              </div>\n              <div>\n                <div class=\"col-sm-7\"></div>                        \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addRoomDevice(input)\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_status_service__ = __webpack_require__("./src/app/dashboard/admin/roomStatus/room-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var temp_change = false;
var room_status_id;
var temperature;
var AdminRoomStatusComponent = /** @class */ (function () {
    function AdminRoomStatusComponent(adminRoomStatusService, errorHandlerService) {
        var _this = this;
        this.adminRoomStatusService = adminRoomStatusService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", ""], ["", "", ""]];
        this.key2 = 'id';
        this.reverse2 = false;
        this.row2 = 10;
        this.p2 = 1;
        this.row = 9;
        this.p = 1;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].interval(4000).subscribe(function (x) {
            _this.adminRoomStatusService.CheckRoomControlData()
                .subscribe(function (data) {
                console.log(data);
                if (data['room_control_updated'] == false) {
                    console.log("UPDATE");
                    _this.ngOnInit();
                }
            });
        });
    }
    AdminRoomStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminRoomStatusService.GetRoomStatus()
            .subscribe(function (data) {
            _this.room_status = data['room_status'];
            _this.room_status.forEach(function (room) {
                room['devices'].forEach(function (device) {
                    if (device['remote_design'] == "Temperature Slider") {
                        $(document).ready(function () {
                            $("#" + device['room_status_id']).ionRangeSlider({
                                min: device['min'],
                                max: device['max'],
                                from: device['device_status'],
                                postfix: device['postfix'],
                                prettify: device['prettify'],
                                hasGrid: device['hasGrid'],
                                disable: device['disable'],
                                onFinish: function (data) {
                                    var room_status_id1 = data['input'][0]['id'];
                                    var temperature1 = data['fromNumber'];
                                    console.log(temperature1);
                                    temperature = temperature1;
                                    room_status_id = room_status_id1;
                                    temp_change = true;
                                }
                            });
                        });
                    }
                });
            });
        });
    };
    AdminRoomStatusComponent.prototype.getRoomDevice = function (room_id) {
        var _this = this;
        this.adminRoomStatusService.room_id = room_id;
        this.adminRoomStatusService.GetAllDevice()
            .subscribe(function (data) {
            // this.sessionService.updateToken(data['token'])
            _this.devices = data['devices'];
            console.log("devices", _this.devices);
            _this.totalUsr = _this.devices.length;
            console.log(_this.totalUsr);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomStatusComponent.prototype.addRoomDevice = function (input) {
        var _this = this;
        var data = [];
        this.devices.forEach(function (device) {
            if (input.value["a" + device['id']] == true) {
                data.push(device['id']);
            }
        });
        console.log(data);
        if (data.length != 0) {
            this.adminRoomStatusService.AddRoomDevice(data)
                .subscribe(function (data) {
                _this.ngOnInit();
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminRoomStatusComponent.prototype.deleteRoomDevice = function (id) {
        var _this = this;
        this.adminRoomStatusService.deleteRoomDevice(id)
            .subscribe(function (data) {
            _this.ngOnInit();
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminRoomStatusComponent.prototype.valuechange = function (value) {
        var room_status_id = value['target']['id'];
        var data = { value: value['target']['checked'] };
        this.adminRoomStatusService.ControlDevice(data, room_status_id)
            .subscribe(function (data) {
        });
    };
    AdminRoomStatusComponent.prototype.sort = function (key, id) {
        this.key2 = key;
        this.reverse2 = !this.reverse2;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID2] = "";
        this.class[1][id] = "active";
        this.tempID2 = id;
    };
    AdminRoomStatusComponent.prototype.manageRow2 = function (length) {
        this.row2 = length;
        if (length == 200) {
            this.row2 = this.totalUsr;
        }
        this.selecTag();
    };
    AdminRoomStatusComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("rt-selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("rt-selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("rt-selectList").className = "dropdown-menu";
        }
    };
    AdminRoomStatusComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (temp_change == true) {
            var data = { value: temperature };
            console.log(data);
            this.adminRoomStatusService.ControlDevice(data, room_status_id)
                .subscribe(function (data) {
                _this.ngOnInit();
            });
            temp_change = false;
        }
    };
    AdminRoomStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-status-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/roomStatus/room-status.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__room_status_service__["a" /* AdminRoomStatusService */], __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AdminRoomStatusComponent);
    return AdminRoomStatusComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoomStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRoomStatusService = /** @class */ (function () {
    function AdminRoomStatusService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminRoomStatusService.prototype.GetRoomStatus = function () {
        return this.http.get(this.baseUrl + "/RoomStatus", {
            headers: this.Headers()
        });
    };
    AdminRoomStatusService.prototype.GetAllDevice = function () {
        return this.http.get(this.baseUrl + "/getDeviceToAdd/" + this.room_id, {
            headers: this.Headers()
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    AdminRoomStatusService.prototype.AddRoomDevice = function (data) {
        return this.http.post(this.baseUrl + "/addRoomDevice/" + this.room_id, data, {
            headers: this.Headers()
        });
    };
    AdminRoomStatusService.prototype.ControlDevice = function (data, room_status_id) {
        return this.http.put(this.baseUrl + "/roomStatusByID/" + room_status_id, data, {
            headers: this.Headers()
        });
    };
    AdminRoomStatusService.prototype.deleteRoomDevice = function (id) {
        return this.http.delete(this.baseUrl + "/roomStatusByID/" + id, {
            headers: this.Headers()
        });
    };
    AdminRoomStatusService.prototype.CheckRoomControlData = function () {
        return this.http.get(this.baseUrl + "/checkRoomControl", {
            headers: this.Headers()
        });
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    AdminRoomStatusService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminRoomStatusService);
    return AdminRoomStatusService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n    <div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t\t               </ul>\n           \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>    \n \t<table class=\"table table-striped table-bordered table-hover \">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th style=\"width: 30px\"></th>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('Username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLastname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFirstname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of users | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t\t<td align=\"center\" ><input type=\"checkbox\"  name=\"a{{user.id}}\" ngModel></td>\n\t\t\t\t<td>{{user.id}}</td>\n\t\t\t\t<td>{{user.username}}</td>\n\t\t\t\t<td>{{user.Lname}}</td>\n\t\t\t\t<td>{{user.Fname}}</td>\n\t\t\t\t<td>{{user.cardID }}</td>\t\t\t\t\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n                    <button class=\"btn btn-primary btn-xs\" (click) = \"update_user(user.id)\" data-toggle=\"modal\" href=\"#modal-userss\">\n                    \t<span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteUser(input,user.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-userss\" (click) = \"add_user()\">Add</button>\n\t <button type=\"submit\" class=\"btn btn-w-m btn-danger btn-sm\" (click) = \"deleteUser(input,'none')\">Delete</button>   \n </form>\n\n\n<div id=\"modal-userss\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-body\">\n          \t<p></p>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">               \n                      <div *ngIf = \"add == 'addUser' || update == 'updateUser'\" class=\"form-horizontal\">                                                                      \n                         <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Lastname:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"Lname\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Firstname:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"Fname\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Username:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\n                            </div>\n                        </div>\n                        <div *ngIf = \"add == 'addUser'\" class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Password:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"userpassword\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">CardID:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"cardID\" formControlName=\"cardID\">\n                            </div>\n                        </div>\n                      </div>                    \n\n                      <div *ngIf = \"add == 'addUser' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addUser()\" >Add</button>\n                      </div>   \n\n                      <div *ngIf = \"add == 'addUser' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\">Add</button>\n                      </div>                 \n\n                      <div *ngIf = \"update == 'updateUser'\">\n                        <div class=\"col-sm-6\"></div>                \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updateUser()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__("./src/app/dashboard/admin/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(usersService, formBuilder, errorHandlerService, route) {
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.errorHandlerService = errorHandlerService;
        this.route = route;
        this.class = [["", "", "", "", ""], ["", "", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.counter = false;
        this.coutner2 = false;
        this.p = 1;
        this.createForm();
    }
    AdminUsersComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({});
    };
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = "";
        this.usersService
            .getAll()
            .subscribe(function (data) {
            _this.users = data['users'];
            _this.totalUsr = _this.users.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminUsersComponent.prototype.deleteUser = function (input, id) {
        var _this = this;
        // console.log(input.value,this.users)	
        if (id == "none") {
            this.users.forEach(function (user) {
                //console.log("-------------------",user.username)					
                if (input.value["a" + user['id']] == true) {
                    _this.usersService.deleteUser(user["id"])
                        .subscribe(function (data) {
                        _this.ngOnInit();
                        if (data['message']) {
                            _this.message = data['message'];
                        }
                    }, function (error) {
                        _this.errorHandlerService.handleError(error);
                    });
                }
            });
        }
        else {
            this.usersService.deleteUser(id).subscribe(function (data) {
                _this.ngOnInit();
                if (data['message']) {
                    _this.message = data['message'];
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminUsersComponent.prototype.add_user = function () {
        this.modalForm = this.formBuilder.group({
            Lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            Fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            userpassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cardID: ''
        });
        this.update = "";
        this.add = "addUser";
        this.modalAnimation = "flipInY";
    };
    AdminUsersComponent.prototype.addUser = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.message = "";
            this.addDetails = this.modalForm.value;
            this.usersService.AddUser(this.addDetails, "users").subscribe(function (response) {
                if (response['message'] == "success") {
                    if (_this.counter == false) {
                        _this.sort('id', 0);
                        _this.counter = true;
                    }
                    _this.ngOnInit();
                }
                else {
                    _this.message = response['message'];
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminUsersComponent.prototype.update_user = function (id) {
        var _this = this;
        this.add = "";
        this.modalAnimation = "fadeInDown";
        this.usersService.routeID = id;
        this.usersService.GetUser().subscribe(function (data) {
            _this.mapData(data['data']);
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminUsersComponent.prototype.updateUser = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('Fname', this.modalForm.value['Fname']);
        formData.append('Lname', this.modalForm.value['Lname']);
        formData.append('username', this.modalForm.value['username']);
        formData.append('cardID', this.modalForm.value['cardID']);
        this.usersService.UpdateUser(formData)
            .subscribe(function (data) {
            if (data['message']) {
                _this.message = data['message'];
            }
            else {
                _this.message = "";
                _this.ngOnInit();
            }
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminUsersComponent.prototype.mapData = function (data) {
        this.modalForm = this.formBuilder.group({
            Lname: [data['Lname'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            Fname: [data['Fname'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            username: [data['username'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cardID: data['cardID']
        });
        this.update = "updateUser";
    };
    AdminUsersComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    AdminUsersComponent.prototype.manageRow = function (length) {
        this.row = length;
        this.selecTag();
    };
    AdminUsersComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        console.log(class_name);
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AdminUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'users-cmp',
            template: __webpack_require__("./src/app/dashboard/admin/users/users.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* AdminUsersService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUsersService = /** @class */ (function () {
    function AdminUsersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AdminUsersService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/users", {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.AddUser = function (body, extensUrl) {
        return this.http.post(this.baseUrl + "/" + extensUrl, body, {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + "/user/" + id, {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.GetUser = function () {
        return this.http.get(this.baseUrl + "/user/" + this.routeID, {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.UpdateUser = function (body) {
        return this.http.put(this.baseUrl + "/user/" + this.routeID, body, {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.EditProfile = function () {
        return this.http.get(this.baseUrl + "/editProfile", {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.ChangePassword = function (body) {
        return this.http.post(this.baseUrl + "/changeUserPassword", body, {
            headers: this.Headers()
        });
    };
    AdminUsersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    AdminUsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminUsersService);
    return AdminUsersService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n\t<div class=\"sidebar-collapse\">\n\t\t<ul class=\"nav\" id=\"side-menu\">\n\t\t\t<sidebar-header-cmp></sidebar-header-cmp>\n\t\t\t<sidebar-cmp></sidebar-cmp>\n\t\t</ul>\n\t</div>\n</nav>\n<div id=\"page-wrapper\" class=\"gray-bg\">\n\t<div class=\"row border-bottom\">\n\t\t<nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n\t\t\t<content-header-cmp></content-header-cmp>\n\t\t</nav>\n\t</div>\n\t<navbar-cmp></navbar-cmp>\n\t<div class=\"{{class}}\">\n   <div class=\"row\">\n    <div class=\"col-lg-12\">\n     <div class=\"ibox float-e-margins\">\n      <table-header-cmp></table-header-cmp>\n      <div class = \"{{class3}}\">\t\t\t\t  \t\t\t\t    \t\t\n       <router-outlet></router-outlet>\t\t    \t\t\n     </div>\n   </div>\n </div>\n</div>\n</div>\n<footer-cmp></footer-cmp>             \n</div>\n\n<div id=\"modal-users\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated {{modalAnimation}}\">\n      <div class=\"modal-body\">\n        <p></p>\n        <div class=\"row\">\n          <div class=\"col-sm-11\">              \n            <div class=\"col-sm-1\">\n            </div>               \n            <form #heroForm=\"ngForm\">\n              <div class=\"col-sm-11\">               \n                <div  class=\"form-horizontal\">\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-4 control-label\" style=\"margin-top: 15%\">Profile picture: &emsp;</label>\n                    <div class=\"col-lg-8\">\n                      <div class=\"row\">\n                        <div class=\"profile-image upload-btn-wrapper\">\n                          <img id=\"user_photo_modal\" [src]=\"image_path\" class=\"img-circle circle-border2\" alt=\"profile\">\n                          <h5 class=\"text-center\">Edit</h5>\n                          <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">                  \n                        </div>\n                        <div style=\"margin-top: 15%\" class=\"upload-btn-wrapper\">\n                          <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n                          \n                        </div>\n                      </div>\n                    </div>       \n                  </div>                                                               \n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Last name:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"profile.Fname\" name = \"Fname\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">First name:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"profile.Lname\" name = \"Lname\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Username:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"profile.username\" name = \"username\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Card ID:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"cardID\" [(ngModel)]=\"profile.cardID\" name = \"cardID\">\n                    </div>\n                  </div>\n                </div>                            \n\n                <div>\n                  <div class=\"col-sm-6\"></div>                \n                  <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                  <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"editProfile()\" >Save</button>                      \n                </div>                      \n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-users2\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated {{modalAnimation}}\">\n      <div class=\"modal-body\">\n        <div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n        <div class=\"row\">\n          <div class=\"col-sm-11\">              \n            <div class=\"col-sm-1\">\n            </div>               \n            <form [formGroup]=\"modalForm\"  novalidate> \n              <div class=\"col-sm-11\">               \n                <div  class=\"form-horizontal\">                                                                      \n                 <div class=\"form-group\">\n                  <label class=\"col-lg-2 control-label\">Current Password:</label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\" formControlName=\"current_password\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-lg-2 control-label\">New Password:</label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"new_password\">\n                  </div>\n                </div>                                            \n              </div>                            \n\n              <div>\n                <div class=\"col-sm-6\"></div>                \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"changePassword()\" >Save</button>                      \n              </div>                      \n\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_sidebar_header_sidebar_header_component__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, formBuilder, errorHandlerService, sidebarHeaderComponent) {
        this.dashboardService = dashboardService;
        this.formBuilder = formBuilder;
        this.errorHandlerService = errorHandlerService;
        this.sidebarHeaderComponent = sidebarHeaderComponent;
        this.profile = { Fname: '', Lname: '', username: '', cardID: '' };
        this.modalAnimation = "fadeInLeftBig";
        this.image_path = "../assets/img/logo.png";
        this.imageToUpload = null;
        this.doCheck = true;
        this.createForm();
    }
    DashboardComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({
            current_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            new_password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = "";
        this.dashboardService.EditProfile()
            .subscribe(function (data) {
            _this.profile.Fname = data['Fname'];
            _this.profile.Lname = data['Lname'];
            _this.profile.username = data['username'];
            _this.profile.cardID = data['cardID'];
            _this.user_id = data['id'];
        });
        this.dashboardService.Get_user_photo()
            .subscribe(function (data) {
            if (data['type'] == 'image/jpg') {
                _this.createImageFromBlob(data);
            }
            else {
                document.getElementById("user_photo_modal")['src'] = "../assets/img/logo.png";
            }
        });
        if (location.hash.slice(1, location.hash.length) == "/home/roomStatus" || location.hash.slice(1, location.hash.length) == "/home/admin/roomStatus") {
            console.log("MINI");
            var body_class_name = document.getElementById("index-body").className;
            if (body_class_name.indexOf("mini-navbar") == -1) {
                document.getElementById("index-body").className = "mini-navbar body-small";
            }
        }
    };
    DashboardComponent.prototype.ngDoCheck = function () {
        if (this.doCheck) {
            if (location.hash.slice(1, location.hash.length) == "/home/roomStatus" || location.hash.slice(1, location.hash.length) == "/home/appLogs" || location.hash.slice(1, location.hash.length) == "/home/admin/roomStatus") {
                this.class = "";
                this.class3 = "";
                console.log("PASS");
            }
            else {
                this.class = "wrapper wrapper-content animated fadeInRight";
                this.class3 = "ibox-content";
            }
            this.doCheck = false;
            this.url = location.hash.slice(1, location.hash.length);
        }
        else if (this.url != location.hash.slice(1, location.hash.length)) {
            this.doCheck = true;
            if (location.hash.slice(1, location.hash.length) == "/home/roomStatus" || location.hash.slice(1, location.hash.length) == "/home/admin/roomStatus") {
                console.log("MINI");
                var body_class_name = document.getElementById("index-body").className;
                if (body_class_name.indexOf("mini-navbar") == -1) {
                    document.getElementById("index-body").className = "mini-navbar body-small";
                }
            }
            else if (location.hash.slice(1, location.hash.length) != "/home/roomStatus" || location.hash.slice(1, location.hash.length) != "/home/admin/roomStatus") {
                var body_class_name = document.getElementById("index-body").className;
                if (body_class_name.indexOf("mini-navbar") == 0) {
                    console.log("YES");
                    document.getElementById("index-body").className = "body-small";
                }
            }
        }
    };
    DashboardComponent.prototype.updateUser = function () {
        var _this = this;
        var usrFrmData = this.modalForm.value;
        this.dashboardService.UpdateUser(usrFrmData)
            .subscribe(function (data) {
            if (data['message']) {
                _this.message = data['message'];
            }
            else {
                _this.message = "";
                _this.ngOnInit();
            }
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    DashboardComponent.prototype.editProfile = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('Fname', this.profile['Fname']);
        formData.append('Lname', this.profile['Lname']);
        formData.append('username', this.profile['username']);
        formData.append('cardID', this.profile['cardID']);
        if (this.imageToUpload != null) {
            formData.append('Image', this.imageToUpload);
        }
        this.dashboardService.routeID = this.user_id;
        this.dashboardService.UpdateUser(formData)
            .subscribe(function (data) {
            if (data == null) {
                _this.message = "";
                _this.ngOnInit();
                _this.sidebarHeaderComponent.ngOnInit();
            }
            else if (data['message']) {
                _this.message = data['message'];
            }
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    DashboardComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.imageToUpload = file.item(0);
        //Show image preview
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.image_path = event.target.result;
        };
        reader.readAsDataURL(this.imageToUpload);
    };
    DashboardComponent.prototype.createImageFromBlob = function (image) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            document.getElementById("user_photo_modal")['src'] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    DashboardComponent.prototype.changePassword = function () {
        var _this = this;
        this.dashboardService.ChangePassword(this.modalForm.value)
            .subscribe(function (data) {
            if (data['message'] != 'your password is successfully change') {
                _this.message = data['message'];
            }
            else {
                _this.message = "";
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dashboard-cmp',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_4__share_sidebar_header_sidebar_header_component__["a" /* SidebarHeaderComponent */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_users_users_component__ = __webpack_require__("./src/app/dashboard/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_permission_permission_component__ = __webpack_require__("./src/app/dashboard/admin/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_group_group_component__ = __webpack_require__("./src/app/dashboard/admin/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_member_member_component__ = __webpack_require__("./src/app/dashboard/admin/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_room_room_component__ = __webpack_require__("./src/app/dashboard/admin/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_roomAccess_room_access_component__ = __webpack_require__("./src/app/dashboard/admin/roomAccess/room-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_auditTrail_audit_trail_component__ = __webpack_require__("./src/app/dashboard/admin/auditTrail/audit-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_roomStatus_room_status_component__ = __webpack_require__("./src/app/dashboard/admin/roomStatus/room-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_appLogs_app_logs_component__ = __webpack_require__("./src/app/dashboard/admin/appLogs/app-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_users_users_component__ = __webpack_require__("./src/app/dashboard/user/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_permission_permission_component__ = __webpack_require__("./src/app/dashboard/user/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_group_group_component__ = __webpack_require__("./src/app/dashboard/user/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_member_member_component__ = __webpack_require__("./src/app/dashboard/user/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_room_room_component__ = __webpack_require__("./src/app/dashboard/user/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_roomAccess_room_access_component__ = __webpack_require__("./src/app/dashboard/user/roomAccess/room-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_auditTrail_audit_trail_component__ = __webpack_require__("./src/app/dashboard/user/auditTrail/audit-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_roomStatus_room_status_component__ = __webpack_require__("./src/app/dashboard/user/roomStatus/room-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_devices_devices_component__ = __webpack_require__("./src/app/dashboard/admin/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_routes__ = __webpack_require__("./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__share_sidebar_header_sidebar_header_module__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__share_content_header_content_header_module__ = __webpack_require__("./src/app/share/content-header/content-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__share_navbar_navbar_module__ = __webpack_require__("./src/app/share/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__share_table_header_table_header_module__ = __webpack_require__("./src/app/share/table-header/table-header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__share_footer_footer_module__ = __webpack_require__("./src/app/share/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__sidebar_sidebar_module__ = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tokenRegistration_service__ = __webpack_require__("./src/app/tokenRegistration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //importing the module
 //importing the module
 // <-- import the module




























var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__dashboard_routes__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_27__share_sidebar_header_sidebar_header_module__["a" /* SidebarHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_28__share_content_header_content_header_module__["a" /* ContentHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_29__share_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_30__share_table_header_table_header_module__["a" /* TableHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_31__share_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_32__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_33__tokenRegistration_service__["a" /* TokenRegistrationService */], multi: true },
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__admin_users_users_component__["a" /* AdminUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__admin_permission_permission_component__["a" /* AdminPermissionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_group_group_component__["a" /* AdminGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_member_member_component__["a" /* AdminMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_room_room_component__["a" /* AdminRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_12__admin_roomAccess_room_access_component__["a" /* AdminRoomAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_auditTrail_audit_trail_component__["a" /* AdminAuditTrailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_roomStatus_room_status_component__["a" /* AdminRoomStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_appLogs_app_logs_component__["a" /* AdminAppLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__user_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_permission_permission_component__["a" /* PermissionComponent */],
                __WEBPACK_IMPORTED_MODULE_18__user_group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__user_member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_20__user_room_room_component__["a" /* RoomComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_roomAccess_room_access_component__["a" /* RoomAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_22__user_auditTrail_audit_trail_component__["a" /* AuditTrailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_roomStatus_room_status_component__["a" /* RoomStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_24__admin_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dashboard_component__["a" /* DashboardComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_users_users_component__ = __webpack_require__("./src/app/dashboard/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_permission_permission_component__ = __webpack_require__("./src/app/dashboard/admin/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_group_group_component__ = __webpack_require__("./src/app/dashboard/admin/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_member_member_component__ = __webpack_require__("./src/app/dashboard/admin/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_room_room_component__ = __webpack_require__("./src/app/dashboard/admin/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_roomAccess_room_access_component__ = __webpack_require__("./src/app/dashboard/admin/roomAccess/room-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_auditTrail_audit_trail_component__ = __webpack_require__("./src/app/dashboard/admin/auditTrail/audit-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_roomStatus_room_status_component__ = __webpack_require__("./src/app/dashboard/admin/roomStatus/room-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_appLogs_app_logs_component__ = __webpack_require__("./src/app/dashboard/admin/appLogs/app-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_users_users_component__ = __webpack_require__("./src/app/dashboard/user/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_permission_permission_component__ = __webpack_require__("./src/app/dashboard/user/permission/permission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_group_group_component__ = __webpack_require__("./src/app/dashboard/user/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_member_member_component__ = __webpack_require__("./src/app/dashboard/user/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_room_room_component__ = __webpack_require__("./src/app/dashboard/user/room/room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_roomAccess_room_access_component__ = __webpack_require__("./src/app/dashboard/user/roomAccess/room-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_auditTrail_audit_trail_component__ = __webpack_require__("./src/app/dashboard/user/auditTrail/audit-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_roomStatus_room_status_component__ = __webpack_require__("./src/app/dashboard/user/roomStatus/room-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_devices_devices_component__ = __webpack_require__("./src/app/dashboard/admin/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__route_guard__ = __webpack_require__("./src/app/route-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_users_users_service__ = __webpack_require__("./src/app/dashboard/admin/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_permission_permission_service__ = __webpack_require__("./src/app/dashboard/admin/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_group_group_service__ = __webpack_require__("./src/app/dashboard/admin/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__admin_member_member_service__ = __webpack_require__("./src/app/dashboard/admin/member/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__admin_room_room_service__ = __webpack_require__("./src/app/dashboard/admin/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admin_roomAccess_room_access_service__ = __webpack_require__("./src/app/dashboard/admin/roomAccess/room-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_devices_devices_service__ = __webpack_require__("./src/app/dashboard/admin/devices/devices.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__admin_roomStatus_room_status_service__ = __webpack_require__("./src/app/dashboard/admin/roomStatus/room-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_auditTrail_audit_trail_service__ = __webpack_require__("./src/app/dashboard/admin/auditTrail/audit-trail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_appLogs_app_logs_service__ = __webpack_require__("./src/app/dashboard/admin/appLogs/app-logs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_users_users_service__ = __webpack_require__("./src/app/dashboard/user/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__user_permission_permission_service__ = __webpack_require__("./src/app/dashboard/user/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__user_group_group_service__ = __webpack_require__("./src/app/dashboard/user/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__user_member_member_service__ = __webpack_require__("./src/app/dashboard/user/member/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__user_room_room_service__ = __webpack_require__("./src/app/dashboard/user/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__user_roomAccess_room_access_service__ = __webpack_require__("./src/app/dashboard/user/roomAccess/room-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__user_auditTrail_audit_trail_service__ = __webpack_require__("./src/app/dashboard/user/auditTrail/audit-trail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__user_roomStatus_room_status_service__ = __webpack_require__("./src/app/dashboard/user/roomStatus/room-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__session_service__ = __webpack_require__("./src/app/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dashboard_service__ = __webpack_require__("./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__share_sidebar_header_sidebar_header_component__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__route_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'admin/users', component: __WEBPACK_IMPORTED_MODULE_2__admin_users_users_component__["a" /* AdminUsersComponent */] },
            { path: 'admin/permissions', component: __WEBPACK_IMPORTED_MODULE_3__admin_permission_permission_component__["a" /* AdminPermissionComponent */] },
            { path: 'admin/groups', component: __WEBPACK_IMPORTED_MODULE_4__admin_group_group_component__["a" /* AdminGroupComponent */] },
            { path: 'admin/groupMember/:id', component: __WEBPACK_IMPORTED_MODULE_5__admin_member_member_component__["a" /* AdminMemberComponent */] },
            { path: 'admin/rooms', component: __WEBPACK_IMPORTED_MODULE_6__admin_room_room_component__["a" /* AdminRoomComponent */] },
            { path: 'admin/roomAccess/:id', component: __WEBPACK_IMPORTED_MODULE_7__admin_roomAccess_room_access_component__["a" /* AdminRoomAccessComponent */] },
            { path: 'admin/auditTrials', component: __WEBPACK_IMPORTED_MODULE_8__admin_auditTrail_audit_trail_component__["a" /* AdminAuditTrailComponent */] },
            { path: 'admin/devices', component: __WEBPACK_IMPORTED_MODULE_20__admin_devices_devices_component__["a" /* DevicesComponent */] },
            { path: 'admin/roomStatus', component: __WEBPACK_IMPORTED_MODULE_9__admin_roomStatus_room_status_component__["a" /* AdminRoomStatusComponent */] },
            { path: 'admin/appLogs', component: __WEBPACK_IMPORTED_MODULE_10__admin_appLogs_app_logs_component__["a" /* AdminAppLogsComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_11__user_users_users_component__["a" /* UsersComponent */] },
            { path: 'permissions', component: __WEBPACK_IMPORTED_MODULE_12__user_permission_permission_component__["a" /* PermissionComponent */] },
            { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_13__user_group_group_component__["a" /* GroupComponent */] },
            { path: 'groupMember/:id', component: __WEBPACK_IMPORTED_MODULE_14__user_member_member_component__["a" /* MemberComponent */] },
            { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_15__user_room_room_component__["a" /* RoomComponent */] },
            { path: 'roomAccess/:id', component: __WEBPACK_IMPORTED_MODULE_16__user_roomAccess_room_access_component__["a" /* RoomAccessComponent */] },
            { path: 'auditTrials', component: __WEBPACK_IMPORTED_MODULE_17__user_auditTrail_audit_trail_component__["a" /* AuditTrailComponent */] },
            { path: 'roomStatus', component: __WEBPACK_IMPORTED_MODULE_18__user_roomStatus_room_status_component__["a" /* RoomStatusComponent */] },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__route_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__admin_users_users_service__["a" /* AdminUsersService */],
                __WEBPACK_IMPORTED_MODULE_23__admin_permission_permission_service__["a" /* AdminPermissionService */],
                __WEBPACK_IMPORTED_MODULE_24__admin_group_group_service__["a" /* AdminGroupService */],
                __WEBPACK_IMPORTED_MODULE_25__admin_member_member_service__["a" /* AdminMembersService */],
                __WEBPACK_IMPORTED_MODULE_26__admin_room_room_service__["a" /* AdminRoomService */],
                __WEBPACK_IMPORTED_MODULE_27__admin_roomAccess_room_access_service__["a" /* AdminRoomAccessService */],
                __WEBPACK_IMPORTED_MODULE_28__admin_devices_devices_service__["a" /* DevicesService */],
                __WEBPACK_IMPORTED_MODULE_29__admin_roomStatus_room_status_service__["a" /* AdminRoomStatusService */],
                __WEBPACK_IMPORTED_MODULE_30__admin_auditTrail_audit_trail_service__["a" /* AdminAuditTrailService */],
                __WEBPACK_IMPORTED_MODULE_31__admin_appLogs_app_logs_service__["a" /* AdminAppLogsService */],
                __WEBPACK_IMPORTED_MODULE_32__user_users_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_33__user_permission_permission_service__["a" /* PermissionService */],
                __WEBPACK_IMPORTED_MODULE_34__user_group_group_service__["a" /* GroupService */],
                __WEBPACK_IMPORTED_MODULE_35__user_member_member_service__["a" /* MembersService */],
                __WEBPACK_IMPORTED_MODULE_36__user_room_room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_37__user_roomAccess_room_access_service__["a" /* RoomAccessService */],
                __WEBPACK_IMPORTED_MODULE_38__user_auditTrail_audit_trail_service__["a" /* AuditTrailService */],
                __WEBPACK_IMPORTED_MODULE_39__user_roomStatus_room_status_service__["a" /* RoomStatusService */],
                __WEBPACK_IMPORTED_MODULE_40__session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_41__error_handler_service__["a" /* ErrorHandlerService */],
                __WEBPACK_IMPORTED_MODULE_42__dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_43__share_sidebar_header_sidebar_header_component__["a" /* SidebarHeaderComponent */]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardService = /** @class */ (function () {
    function DashboardService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    DashboardService.prototype.UpdateUser = function (body) {
        return this.http.put(this.baseUrl + "/user/" + this.routeID, body, {
            headers: this.Headers()
        });
    };
    DashboardService.prototype.EditProfile = function () {
        return this.http.get(this.baseUrl + "/editProfile", {
            headers: this.Headers()
        });
    };
    DashboardService.prototype.ChangePassword = function (body) {
        return this.http.post(this.baseUrl + "/changeUserPassword", body, {
            headers: this.Headers()
        });
    };
    DashboardService.prototype.Get_user_photo = function () {
        return this.http.put(this.baseUrl + "/account/photo", { data: null }, {
            headers: this.Headers(),
            responseType: 'blob'
        });
    };
    DashboardService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"input-group-btn\">\n               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row}}&emsp;</button>\n               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\" ><span class=\"caret\"></span></button>\n\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t               </ul>\n       \t\t</div>\n\t\t</div>\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t</div>\n\t\t</div>\n    </div>                   \n</div>    \n\t<table class=\"table table-striped table-bordered table-hover \">\n\t<thead>\n\t\t<tr>\t\t\t\n\t\t\t<th style=\"width: 40px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('Fname',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\tFirst Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\n\t\t\t<th (click)=\"sort('username',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('cardID',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('permission',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\tPermission<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('room',5)\" class=\"{{class[1][5]}}\">\n\t\t\t\tRoom<span class=\"fa fa-sort{{class[0][5]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('timestamp',6)\" class=\"{{class[1][6]}}\">\n\t\t\t\tTimestamp<span class=\"fa fa-sort{{class[0][6]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('action',7)\" class=\"{{class[1][7]}}\" style=\"width: 70px\">\n\t\t\t\taction<span class=\"fa fa-sort{{class[0][7]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\t\t\t\t\t\t\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of auditTrail | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<td>{{data.id}}</td>\n\t\t\t<td>{{data.Fname}}</td>\n\t\t\t<td>{{data.username}}</td>\n\t\t\t<td>{{data.cardID}}</td>\n\t\t\t<td>{{data.permission}}</td>\n\t\t\t<td>{{data.room}}</td>\t\n\t\t\t<td>{{data.timestamp}}</td>\t\n\t\t\t<td>{{data.action}}</td>\t\t\t\t\t\t\t\t\n\t\t</tr>\n\t</tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div><br><br>\t\n <button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTrailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__audit_trail_service__ = __webpack_require__("./src/app/dashboard/user/auditTrail/audit-trail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuditTrailComponent = /** @class */ (function () {
    function AuditTrailComponent(auditTrailService, errorHandlerService) {
        this.auditTrailService = auditTrailService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", ""]];
        this.key = 'id';
        this.reverse = true;
        this.row = 10;
        this.p = 1;
    }
    AuditTrailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auditTrailService.GetAuditTrails()
            .subscribe(function (data) {
            _this.auditTrail = data['auditTrail'];
            _this.totalUsr = _this.auditTrail.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AuditTrailComponent.prototype.refresh = function () {
        this.ngOnInit();
    };
    AuditTrailComponent.prototype.sort = function (key, id) {
        console.log(key, id);
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
        console.log(this.class);
    };
    AuditTrailComponent.prototype.manageRow = function (length) {
        this.row = length;
        this.selecTag();
    };
    AuditTrailComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    AuditTrailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'audit-trail-cmp',
            template: __webpack_require__("./src/app/dashboard/user/auditTrail/audit-trail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__audit_trail_service__["a" /* AuditTrailService */],
            __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], AuditTrailComponent);
    return AuditTrailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTrailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuditTrailService = /** @class */ (function () {
    function AuditTrailService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AuditTrailService.prototype.GetAuditTrails = function () {
        return this.http.get(this.baseUrl + "/auditTrail", {
            headers: this.Headers()
        });
    };
    AuditTrailService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AuditTrailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuditTrailService);
    return AuditTrailService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let group of groups\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t    <div class=\"grow\">\n\t\t\t        <div class=\"contact-box\">                       \n\t\t\t            <div class=\"col-lg-4\">\n\t\t\t                <div class=\"text-center\">\n\t\t\t                    <img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{group.name[0]}}.png\">                          \n\t\t\t                    <div class=\"m-t-xs font-bold\">Room: {{group.id}}</div>\n\t\t\t                </div>\t\t\t             \n\t\t\t            </div>\n\t\t\t            <a (click)=showMember(group.id)>\n\t\t\t                <div class=\"col-sm-8\">                    \n\t\t\t                    <h3><strong>{{group.name}}</strong></h3>                    \n\t\t\t                    <strong>Description:</strong><br>\n                          <p>{{group.description}}</p>\n                          <strong>Permission:</strong><br>\n                          <p>{{group.permission_name}}</p>\n                          <strong>Number of members:</strong>&nbsp;{{group.members}}                                    \n\t\t\t                </div>\n\t\t\t                <div class=\"clearfix\"></div>\n\t\t\t            </a>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>    \n    </div>\n</div> -->\n\n<div class=\"form-horizontal2\">\n\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>                   \n\t</div>\n\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tMembers<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let group of groups | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\" (click)=showMember(group.id)>{{group.id}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.name}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.description}}</td>\n\t\t\t\t<td class=\"text-center\" style=\"width: 90px\" (click)=GroupAccess(group.id)>{{group.members}}</td>\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n "

/***/ }),

/***/ "./src/app/dashboard/user/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_service__ = __webpack_require__("./src/app/dashboard/user/group/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupComponent = /** @class */ (function () {
    function GroupComponent(groupService, errorHandlerService, router) {
        this.groupService = groupService;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 9;
        this.p = 1;
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups()
            .subscribe(function (data) {
            _this.groups = data['groups'];
            _this.totalUsr = _this.groups.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    GroupComponent.prototype.showMember = function (id) {
        this.router.navigate(['/home/groupMember', id]);
    };
    GroupComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    GroupComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    GroupComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'group-cmp',
            template: __webpack_require__("./src/app/dashboard/user/group/group.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__group_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/group/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupService = /** @class */ (function () {
    function GroupService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    GroupService.prototype.getGroups = function () {
        return this.http.get(this.baseUrl + "/groups", {
            headers: this.Headers()
        });
    };
    GroupService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let member of groupMember | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">\t\t\t\t\n\t\t\t\t<td>{{member.id}}</td>\n\t\t\t\t<td>{{member.username}}</td>\n\t\t\t\t<td>{{member.Lname}}</td>\n\t\t\t\t<td>{{member.Fname}}</td>\n\t\t\t\t<td>{{member.cardID}}</td>\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\" id = \"first\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\t\n </form>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_service__ = __webpack_require__("./src/app/dashboard/user/member/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberComponent = /** @class */ (function () {
    function MemberComponent(route, membersService, errorHandlerService, router) {
        this.route = route;
        this.membersService = membersService;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.class = [["", "", "", "", ""], ["", "", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.membersService.getAllMem(id)
            .subscribe(function (data) {
            _this.groupMember = data['members'];
            _this.totalUsr = _this.groupMember.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    MemberComponent.prototype.back = function () {
        this.router.navigate(['home/groups']);
    };
    MemberComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    MemberComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    MemberComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'member-cmp',
            template: __webpack_require__("./src/app/dashboard/user/member/member.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__member_service__["a" /* MembersService */],
            __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/member/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MembersService = /** @class */ (function () {
    function MembersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    MembersService.prototype.getAllMem = function (id) {
        return this.http.get(this.baseUrl + "/groupMember/" + id, {
            headers: this.Headers()
        });
    };
    MembersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    MembersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MembersService);
    return MembersService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n    <p>Showing 1 to {{row}} of {{totalUsr}}</p>\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let permission of permissions | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\">{{permission.id}}</td>\n\t\t\t\t<td>{{permission.name}}</td>\n\t\t\t\t<td>{{permission.description}}</td>\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\t\n </form>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__permission_service__ = __webpack_require__("./src/app/dashboard/user/permission/permission.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(permissionService, errorHandlerService) {
        this.permissionService = permissionService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", ""], ["", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
    }
    PermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissionService
            .getAll()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
            _this.totalUsr = _this.permissions.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    PermissionComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    PermissionComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    PermissionComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    PermissionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'permission-cmp',
            template: __webpack_require__("./src/app/dashboard/user/permission/permission.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__permission_service__["a" /* PermissionService */],
            __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionService = /** @class */ (function () {
    function PermissionService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    PermissionService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/permissions", {
            headers: this.Headers()
        });
    };
    PermissionService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    PermissionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let room of rooms\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t    <div class=\"grow\">\n\t\t\t        <div class=\"contact-box\">                       \n\t\t\t            <div class=\"col-lg-4\">\n\t\t\t                <div class=\"text-center\">\n\t\t\t                    <img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.name[0]}}.png\">\n\t\t\t                    <div class=\"m-t-xs font-bold\">Room: {{room.id}}</div>\n\t\t\t                </div>\t\t\t               \n\t\t\t            </div>\n\t\t\t            <a (click)=GroupAccess(room.id)>\n\t\t\t                <div class=\"col-sm-8\">                    \n\t\t\t                    <h3><strong>{{room.name}}</strong></h3>                    \n\t\t\t                    <strong>Description</strong><br>\n\t\t\t                     <h5>{{room.description}}</h5><br>\n\t\t\t                    <strong>Number of groups:</strong>&nbsp;{{room.groups}}<br>\t\t\t                                    \n\t\t\t                </div>\n\t\t\t                <div class=\"clearfix\"></div>\n\t\t\t            </a>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>\n\n    </div>\n</div>            \n -->\n\n <div class=\"form-horizontal2\">\n\t\t\t\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>                   \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\t\t\t\t\n\t\t\t\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\t\t\t\tGroups<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let room of rooms | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t\t\t\t<td class=\"text-center\" style=\"padding: 7px 0\" (click)=GroupAccess(room.id)>{{room.id}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.name}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.description}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\" style=\"width: 80px\" (click)=GroupAccess(room.id)>{{room.groups}}</td>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t</div><br><br>\n \n\n"

/***/ }),

/***/ "./src/app/dashboard/user/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_service__ = __webpack_require__("./src/app/dashboard/user/room/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomComponent = /** @class */ (function () {
    function RoomComponent(roomService, router, errorHandlerService) {
        this.roomService = roomService;
        this.router = router;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", ""], ["", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 9;
        this.p = 1;
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.getRooms()
            .subscribe(function (data) {
            _this.rooms = data['rooms'];
            _this.totalUsr = _this.rooms.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    RoomComponent.prototype.GroupAccess = function (id) {
        this.router.navigate(['/home/roomAccess', id]);
    };
    RoomComponent.prototype.manageRow = function (length) {
        this.row = length;
        if (length == 200) {
            this.row = this.totalUsr;
        }
        this.selecTag();
    };
    RoomComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    RoomComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    RoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-cmp',
            template: __webpack_require__("./src/app/dashboard/user/room/room.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/room/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomService = /** @class */ (function () {
    function RoomService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get(this.baseUrl + "/rooms", {
            headers: this.Headers()
        });
    };
    RoomService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.component.html":
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">ID</th>\n\t\t\t\t<th>Group Name</th>\n\t\t\t\t<th >Permission Name</th>\n\t\t\t\t<th style=\"width: 40px\">Users</th>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let access of groupAccess\">\t\t\t\t\n\t\t\t\t<td>{{access.id}}</td>\n\t\t\t\t<td>{{access.groupName}}</td>\n\t\t\t\t<td>{{access.permissionName}}</td>\n\t\t\t\t<td align=\"center\">{{access.users}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\n </form>\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_access_service__ = __webpack_require__("./src/app/dashboard/user/roomAccess/room-access.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomAccessComponent = /** @class */ (function () {
    function RoomAccessComponent(roomAccessService, errorHandlerService, route, router) {
        this.roomAccessService = roomAccessService;
        this.errorHandlerService = errorHandlerService;
        this.route = route;
        this.router = router;
        this.CB_Status = {};
        this.addAccess = [[], []];
    }
    RoomAccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.roomAccessService.getGroupAccess(id)
            .subscribe(function (data) {
            _this.groupAccess = data['group'];
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    RoomAccessComponent.prototype.back = function () {
        this.router.navigate(['home/rooms']);
    };
    RoomAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-access-cmp',
            template: __webpack_require__("./src/app/dashboard/user/roomAccess/room-access.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__room_access_service__["a" /* RoomAccessService */], __WEBPACK_IMPORTED_MODULE_3__error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RoomAccessComponent);
    return RoomAccessComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAccessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomAccessService = /** @class */ (function () {
    function RoomAccessService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    RoomAccessService.prototype.getGroupAccess = function (id) {
        return this.http.get(this.baseUrl + "/groupAccess/" + id, {
            headers: this.Headers()
        });
    };
    RoomAccessService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomAccessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RoomAccessService);
    return RoomAccessService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let room of room_status  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"room-status col-lg-3\">\n\t\t\t\t<div class=\"grow\">\n          <div class=\"ibox-title\">             \n              <h5>ID-{{room.room_id}} - {{room.room_name}}</h5>\n          </div>\n\t\t\t\t\t<div class=\"contact-box\" style=\"height: 220px\">\n\t\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\t\t                    \n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.room_name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.room_id}}</div><br>\n\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.add_device\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<div class=\"\">\t\t\t\t\t\t\t\t                  \t\t\t                 \n\t\t\t\t\t\t\t\t<strong>Devices:</strong><br><br>\n\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t<tbody class=\"room-status\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let device of room.devices\" >\n                      <ng-container *ngIf = \"device.remote_design != 'Temperature Slider'\">\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 40px; padding-right: 20px; padding-left: 5px\">                         \n  \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch{{device.class_name}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'True' || device.device_status == 'true'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" checked (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'False' || device.device_status == 'false'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t                                    \n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" for=\"{{device.room_status_id}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t</td>                        \n                      </ng-container>                     \n                      <ng-container *ngIf = \"device.remote_design == 'Temperature Slider'\">\n                        <td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n                        <td style=\"width: 1000px\"><input type=\"text\" id=\"{{device.room_status_id}}\"></td>\n                        <td style=\"width: 100px\"></td>                        \n                      </ng-container>                    \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>                \t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>            \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</ng-container>\n\t</div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n  <div class=\"footer fixed\">\n    <div class=\"pull-right\">\n      <div class=\"form-group form-horizontal\">\n        <label class=\"col-lg-2 control-label\">Search:</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\" style=\"height: 30px\">\n        </div>\n      </div>   \n    </div>    \n  </div>"

/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_status_service__ = __webpack_require__("./src/app/dashboard/user/roomStatus/room-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var temp_change = false;
var room_status_id;
var temperature;
var RoomStatusComponent = /** @class */ (function () {
    function RoomStatusComponent(roomStatusService) {
        this.roomStatusService = roomStatusService;
        this.row = 9;
        this.p = 1;
    }
    RoomStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomStatusService.GetRoomStatus()
            .subscribe(function (data) {
            _this.room_status = data['room_status'];
            _this.room_status.forEach(function (room) {
                room['devices'].forEach(function (device) {
                    if (device['remote_design'] == "Temperature Slider") {
                        $(document).ready(function () {
                            $("#" + device['room_status_id']).ionRangeSlider({
                                min: device['min'],
                                max: device['max'],
                                from: device['device_status'],
                                postfix: device['postfix'],
                                prettify: device['prettify'],
                                hasGrid: device['hasGrid'],
                                disable: device['disable'],
                                onFinish: function (data) {
                                    var room_status_id1 = data['input'][0]['id'];
                                    var temperature1 = data['fromNumber'];
                                    console.log(temperature1);
                                    temperature = temperature1;
                                    room_status_id = room_status_id1;
                                    temp_change = true;
                                }
                            });
                        });
                    }
                });
            });
        });
    };
    RoomStatusComponent.prototype.valuechange = function (value) {
        var _this = this;
        var room_status_id = value['target']['id'];
        console.log(value);
        var data = { value: value['target']['checked'] };
        this.roomStatusService.ControlDevice(data, room_status_id)
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    RoomStatusComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (temp_change == true) {
            var data = { value: temperature };
            console.log(data);
            this.roomStatusService.ControlDevice(data, room_status_id)
                .subscribe(function (data) {
                _this.ngOnInit();
            });
            temp_change = false;
        }
    };
    RoomStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'room-status-cmp',
            template: __webpack_require__("./src/app/dashboard/user/roomStatus/room-status.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__room_status_service__["a" /* RoomStatusService */]])
    ], RoomStatusComponent);
    return RoomStatusComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomStatusService = /** @class */ (function () {
    function RoomStatusService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    RoomStatusService.prototype.GetRoomStatus = function () {
        return this.http.get(this.baseUrl + "/RoomStatus", {
            headers: this.Headers()
        });
    };
    RoomStatusService.prototype.ControlDevice = function (data, room_status_id) {
        return this.http.put(this.baseUrl + "/roomStatusByID/" + room_status_id, data, {
            headers: this.Headers()
        });
    };
    RoomStatusService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RoomStatusService);
    return RoomStatusService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n    <div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t               <ul  id=\"selectList\" class=\"dropdown-menu\">\n\t\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t\t               </ul>\n           \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>    \n \t<table class=\"table table-striped table-bordered table-hover \">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('Username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLastname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFirtname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of users | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\">{{user.id}}</td>\n\t\t\t\t<td>{{user.username}}</td>\n\t\t\t\t<td>{{user.Lname}}</td>\n\t\t\t\t<td>{{user.Fname}}</td>\n\t\t\t\t<td>{{user.cardID}}</td>\t\t\t\n        <td hidden=\"hidden\">                                                       \n          <button type=\"submit\" class=\"btn btn-danger btn-xs\">\n            <span class=\"glyphicon glyphicon-trash\"></span>\n          </button>\n        </td>\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\n </form>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/dashboard/user/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_handler_service__ = __webpack_require__("./src/app/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, errorHandlerService) {
        this.usersService = usersService;
        this.errorHandlerService = errorHandlerService;
        this.class = [["", "", "", "", ""], ["", "", "", "", ""]];
        this.key = 'id';
        this.reverse = false;
        this.row = 10;
        this.p = 1;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = "";
        this.usersService
            .getAll()
            .subscribe(function (data) {
            _this.users = data['users'];
            _this.totalUsr = _this.users.length;
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    UsersComponent.prototype.sort = function (key, id) {
        this.key = key;
        this.reverse = !this.reverse;
        if (this.class[0][id] == "" || this.class[0][id] == "-asc") {
            this.class[0][id] = "-desc";
        }
        else if (this.class[0][id] == "-desc") {
            this.class[0][id] = "-asc";
        }
        this.class[1][this.tempID] = "";
        this.class[1][id] = "active";
        this.tempID = id;
    };
    UsersComponent.prototype.manageRow = function (length) {
        this.row = length;
        this.selecTag();
    };
    UsersComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList").className;
        if (class_name == "dropdown-menu") {
            document.getElementById("selectList").className += " show";
        }
        if (class_name == "dropdown-menu show") {
            document.getElementById("selectList").className = "dropdown-menu";
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'users-cmp',
            template: __webpack_require__("./src/app/dashboard/user/users/users.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_2__error_handler_service__["a" /* ErrorHandlerService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = /** @class */ (function () {
    function UsersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    UsersService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/users", {
            headers: this.Headers()
        });
    };
    UsersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(route) {
        this.route = route;
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        if (error['error'].message == "your token has been expired" && error['status'] == 500) {
            this.route.navigate(['/login']);
        }
        else if (error['status'] == 500 && error['error'].message == "Internal Server Error") {
            this.route.navigate(['/InternalServerError']);
        }
        else if (error['status'] == 404) {
            this.route.navigate(['/PageNotFound']);
        }
    };
    ErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/route-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginSevice, router, cookieService, http) {
        this.loginSevice = loginSevice;
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.cookieService.check("token")) {
            return true;
        }
        else {
            this.loginSevice.redirectUrl = url;
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n\t<a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" (click)=\"manage_sidebar()\"><i class=\"fa fa-bars\"></i></a>\n</div>\n<ul class=\"nav navbar-top-links navbar-right\">\n    <li>\n        <span class=\"m-r-sm text-muted welcome-message\">Welcome to Nightowl Class Room Control.</span>\n    </li>\n    <li class=\"dropdown\">\n    <li>\n        <a (click) = \"Logout()\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n        \n    </li>\n    <li>\n        &emsp;&emsp;\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/share/content-header/content-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_header_service__ = __webpack_require__("./src/app/share/content-header/content-header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentHeaderComponent = /** @class */ (function () {
    function ContentHeaderComponent(router, contentHeaderService, sessionService) {
        this.router = router;
        this.contentHeaderService = contentHeaderService;
        this.sessionService = sessionService;
    }
    ContentHeaderComponent.prototype.Logout = function () {
        var _this = this;
        var data;
        this.contentHeaderService.logout(data)
            .subscribe(function () {
            _this.sessionService.deleteToken();
            _this.router.navigate(['/login']);
        });
    };
    ContentHeaderComponent.prototype.manage_sidebar = function () {
        var body_class_name = document.getElementById("index-body").className;
        if (body_class_name.indexOf("mini-navbar") == -1) {
            document.getElementById("index-body").className = "mini-navbar body-small";
        }
        if (body_class_name.indexOf("mini-navbar") == 0) {
            console.log("YES");
            document.getElementById("index-body").className = "body-small";
        }
    };
    ContentHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'content-header-cmp',
            template: __webpack_require__("./src/app/share/content-header/content-header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__content_header_service__["a" /* ContentHeaderService */], __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */]])
    ], ContentHeaderComponent);
    return ContentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_header_service__ = __webpack_require__("./src/app/share/content-header/content-header.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_header_component__ = __webpack_require__("./src/app/share/content-header/content-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("./src/app/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContentHeaderModule = /** @class */ (function () {
    function ContentHeaderModule() {
    }
    ContentHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__content_header_component__["a" /* ContentHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__content_header_component__["a" /* ContentHeaderComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__content_header_service__["a" /* ContentHeaderService */], __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]]
        })
    ], ContentHeaderModule);
    return ContentHeaderModule;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentHeaderService = /** @class */ (function () {
    function ContentHeaderService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    ContentHeaderService.prototype.logout = function (data) {
        return this.http.post(this.baseUrl + "/logout", data, {
            headers: this.Headers()
        });
    };
    ContentHeaderService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    ContentHeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ContentHeaderService);
    return ContentHeaderService;
}());



/***/ }),

/***/ "./src/app/share/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"footer\">   \n    <div>\n        <strong>Copyright</strong> Nightowl Company &copy; 2017-2018\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/share/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-cmp',
            template: __webpack_require__("./src/app/share/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/share/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("./src/app/share/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-10\">\n        <h2>{{title}}</h2>\n        <ol class=\"breadcrumb\">\n            <li *ngFor=\"let data of breadcrumb\" >\n                <a (click) = \"navigate(data['path'])\" >{{data['name']}}</a>\n            </li>           \n        </ol>\n    </div>\n    <div class=\"col-lg-2\">\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/share/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_service__ = __webpack_require__("./src/app/share/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route, cookieService, router, navbarService) {
        this.route = route;
        this.cookieService = cookieService;
        this.router = router;
        this.navbarService = navbarService;
        this.breadcrumb = [];
        this.path = '';
    }
    NavbarComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.path == '') {
            var url = location.hash;
            if (url.indexOf('home/admin') != -1) {
                this.breadcrumb = [{ 'name': 'Home', path: 'admin/users' }];
            }
            else {
                this.breadcrumb = [{ 'name': 'Home', path: 'users' }];
            }
            if (url.indexOf('groupMember') != -1) {
                if (url.indexOf('home/admin') != -1) {
                    this.navbarService.GetGroupDetail(url.slice(26, url.length))
                        .subscribe(function (data) {
                        console.log(data);
                        _this.breadcrumb.push({ 'name': 'Groups', 'path': 'admin/groups' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetGroupDetail(url.slice(19, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Groups', 'path': 'groups' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
            }
            else if (url.indexOf('roomAccess') != -1) {
                if (url.indexOf('home/admin') != -1) {
                    this.navbarService.GetRoomDetail(url.slice(23, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'admin/rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetRoomDetail(url.slice(23, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
            }
            else {
                if (url.indexOf('home/admin') != -1) {
                    this.breadcrumb.push({ 'name': url.slice(13, url.length)[0].toUpperCase() + url.slice(14, url.length), 'path': url.slice(7, url.length) });
                    this.title = url.slice(13, url.length)[0].toUpperCase() + url.slice(14, url.length);
                }
                else {
                    this.breadcrumb.push({ 'name': url.slice(7, url.length)[0].toUpperCase() + url.slice(8, url.length), 'path': url.slice(7, url.length) });
                    this.title = url.slice(7, url.length)[0].toUpperCase() + url.slice(8, url.length);
                }
            }
            this.path = location.hash;
        }
        else if (this.path != location.hash) {
            var url = location.hash;
            if (url.indexOf('home/admin') != -1) {
                this.breadcrumb = [{ 'name': 'Home', path: 'admin/users' }];
            }
            else {
                this.breadcrumb = [{ 'name': 'Home', path: 'users' }];
            }
            var id = this.route.snapshot.paramMap.get('id');
            if (url.indexOf('groupMember') != -1) {
                if (url.indexOf('home/admin') != -1) {
                    this.navbarService.GetGroupDetail(url.slice(25, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Groups', 'path': 'admin/groups' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetGroupDetail(url.slice(19, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Groups', 'path': 'groups' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
            }
            else if (url.indexOf('roomAccess') != -1) {
                if (url.indexOf('home/admin') != -1) {
                    this.navbarService.GetRoomDetail(url.slice(23, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'admin/rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetRoomDetail(url.slice(17, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
            }
            else {
                if (url.indexOf('home/admin') != -1) {
                    this.breadcrumb.push({ 'name': url.slice(13, url.length)[0].toUpperCase() + url.slice(14, url.length), 'path': url.slice(7, url.length) });
                    this.title = url.slice(13, url.length)[0].toUpperCase() + url.slice(14, url.length);
                }
                else {
                    this.breadcrumb.push({ 'name': url.slice(7, url.length)[0].toUpperCase() + url.slice(8, url.length), 'path': url.slice(7, url.length) });
                    this.title = url.slice(7, url.length)[0].toUpperCase() + url.slice(8, url.length);
                }
            }
            this.path = location.hash;
        }
    };
    NavbarComponent.prototype.navigate = function (path) {
        if (path != '' || path != null) {
            this.router.navigate(['home/' + path]);
        }
    };
    NavbarComponent.prototype.handleError = function (error) {
        if (error['error'].message == "your token has been expired" && error['status'] == 500) {
            this.router.navigate(['/login']);
        }
        else if (error['status'] == 500 && error['error'].message == "Internal Server Error") {
            this.router.navigate(['/InternalServerError']);
        }
        else if (error['status'] == 404) {
            this.router.navigate(['/PageNotFound']);
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navbar-cmp',
            template: __webpack_require__("./src/app/share/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__navbar_service__["a" /* NavBarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("./src/app/share/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_service__ = __webpack_require__("./src/app/share/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__navbar_service__["a" /* NavBarService */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarService = /** @class */ (function () {
    function NavBarService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    NavBarService.prototype.GetGroupDetail = function (id) {
        return this.http.get(this.baseUrl + "/groupDetails/" + id, {
            headers: this.Headers()
        });
    };
    NavBarService.prototype.GetRoomDetail = function (id) {
        return this.http.get(this.baseUrl + "/roomDetails/" + id, {
            headers: this.Headers()
        });
    };
    NavBarService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    NavBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavBarService);
    return NavBarService;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-header\">\n    <div class=\"dropdown profile-element\"> \n        <span>\n            <img alt=\"image\" class=\"img-circle sidebar-header\" id=\"user_photo\" />\n        </span>\n        <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" (click)=\"selecTag()\">\n            <span class=\"clear\"> \n                <span class=\"block m-t-xs\">\n                    <strong id = \"user_name\" class=\"font-bold\"></strong>                   \n                </span> \n                <span class=\"text-muted text-xs block\">\n                    Profile <b class=\"caret\"></b>\n                </span> \n            </span> \n        </a>\n        <ul id=\"selectList-sd\" class=\"dropdown-menu animated fadeInRight m-t-xs\">\n            <li>\n                <a data-toggle=\"modal\" href=\"#modal-users\" (click)=\"selecTag()\">Edit Profile</a>\n            </li>\n            <li>\n                <a data-toggle=\"modal\" href=\"#modal-users2\" (click)=\"selecTag()\">Change Password</a>\n            </li>          \n        </ul>\n    </div>\n    <div class=\"logo-element\">\n    N.S.\n    </div>\n</li>\n"

/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_header_service__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarHeaderComponent = /** @class */ (function () {
    function SidebarHeaderComponent(sidebarHeadersService, formBuilder) {
        this.sidebarHeadersService = sidebarHeadersService;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    SidebarHeaderComponent.prototype.createForm = function () {
        this.modalForm = this.formBuilder.group({});
    };
    SidebarHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarHeadersService.get_user_info()
            .subscribe(function (data) {
            _this.group_name = data['group_name'];
            document.getElementById('user_name')['textContent'] = data['Fname'] + " " + data['Lname'];
        });
        this.sidebarHeadersService.Get_user_photo()
            .subscribe(function (data) {
            if (data['type'] == 'image/jpg') {
                _this.createImageFromBlob(data);
            }
            else {
                document.getElementById("user_photo")['src'] = "../assets/img/logo.png";
            }
        });
    };
    SidebarHeaderComponent.prototype.selecTag = function () {
        var class_name = document.getElementById("selectList-sd").className;
        if (class_name == "dropdown-menu animated fadeInRight m-t-xs") {
            document.getElementById("selectList-sd").className += " show";
        }
        if (class_name == "dropdown-menu animated fadeInRight m-t-xs show") {
            document.getElementById("selectList-sd").className = "dropdown-menu animated fadeInRight m-t-xs";
        }
    };
    SidebarHeaderComponent.prototype.createImageFromBlob = function (image) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            document.getElementById("user_photo")['src'] = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    SidebarHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-header-cmp',
            template: __webpack_require__("./src/app/share/sidebar-header/sidebar-header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sidebar_header_service__["a" /* SidebarHeadersService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SidebarHeaderComponent);
    return SidebarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_header_component__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_header_service__ = __webpack_require__("./src/app/share/sidebar-header/sidebar-header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SidebarHeaderModule = /** @class */ (function () {
    function SidebarHeaderModule() {
    }
    SidebarHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__sidebar_header_component__["a" /* SidebarHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__sidebar_header_component__["a" /* SidebarHeaderComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__sidebar_header_service__["a" /* SidebarHeadersService */]]
        })
    ], SidebarHeaderModule);
    return SidebarHeaderModule;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarHeadersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarHeadersService = /** @class */ (function () {
    function SidebarHeadersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    SidebarHeadersService.prototype.get_user_info = function () {
        return this.http.get(this.baseUrl + "/getUserProfile", {
            headers: this.Headers()
        });
    };
    SidebarHeadersService.prototype.Get_user_photo = function () {
        return this.http.put(this.baseUrl + "/account/photo", { data: null }, {
            headers: this.Headers(),
            responseType: 'blob'
        });
    };
    SidebarHeadersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    SidebarHeadersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidebarHeadersService);
    return SidebarHeadersService;
}());



/***/ }),

/***/ "./src/app/share/table-header/table-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ibox-title fullscreen\"> -->\n    <!-- <h5>Basic Data Tables example with responsive plugin</h5> -->\n    <!-- <div class=\"ibox-tools\"> -->\n       <!--  <a class=\"collapse-link\">\n            <i class=\"fa fa-chevron-up\"></i>\n        </a>\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            <i class=\"fa fa-wrench\"></i>\n        </a>\n        <ul class=\"dropdown-menu dropdown-user\">\n            <li><a href=\"#\">Config option 1</a>\n            </li>\n            <li><a href=\"#\">Config option 2</a>\n            </li>\n        </ul>\n        <a class=\"fullscreen-link\">\n            <i class=\"fa fa-expand\"></i>\n        </a>\n        <a class=\"close-link\">\n            <i class=\"fa fa-times\"></i>\n        </a> -->\n    <!-- </div> -->\n<!-- </div>  -->"

/***/ }),

/***/ "./src/app/share/table-header/table-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent() {
    }
    TableHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'table-header-cmp',
            template: __webpack_require__("./src/app/share/table-header/table-header.component.html")
        })
    ], TableHeaderComponent);
    return TableHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/table-header/table-header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_header_component__ = __webpack_require__("./src/app/share/table-header/table-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TableHeaderModule = /** @class */ (function () {
    function TableHeaderModule() {
    }
    TableHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__table_header_component__["a" /* TableHeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__table_header_component__["a" /* TableHeaderComponent */]]
        })
    ], TableHeaderModule);
    return TableHeaderModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-routers.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTE; });
var ROUTES = [
    { path: 'home/users', icon: 'fa fa-user', class: 'nav-label', title: 'Users', status: '' },
    { path: 'home/permissions', icon: 'fa fa-unlock-alt', class: 'nav-label', title: 'Permissions', status: '' },
    { path: 'home/groups', icon: 'fa fa-group', class: 'nav-label', title: 'Groups', status: '' },
    { path: 'home/rooms', icon: 'fa fa-bank', class: 'nav-label', title: 'Rooms', status: '' },
    { path: 'home/auditTrials', icon: 'fa fa-table', class: 'nav-label', title: 'Audit Trails', status: '' },
    { path: 'home/roomStatus', icon: 'fa fa-sliders', class: 'nav-label', title: 'Room Status', status: '' },
];
var ROUTE = [
    { path: 'home/admin/users', icon: 'fa fa-user', class: 'nav-label', title: 'Users', status: '' },
    { path: 'home/admin/permissions', icon: 'fa fa-unlock-alt', class: 'nav-label', title: 'Permissions', status: '' },
    { path: 'home/admin/groups', icon: 'fa fa-group', class: 'nav-label', title: 'Groups', status: '' },
    { path: 'home/admin/rooms', icon: 'fa fa-bank', class: 'nav-label', title: 'Rooms', status: '' },
    { path: 'home/admin/devices', icon: 'fa fa-th-list', class: 'nav-label', title: "Devices", status: '' },
    { path: 'home/admin/roomStatus', icon: 'fa fa-sliders', class: 'nav-label', title: 'Room Control', status: '' },
    { path: 'home/admin/auditTrials', icon: 'fa fa-table', class: 'nav-label', title: 'Audit Trails', status: '' },
    { path: 'home/admin/appLogs', icon: 'fa fa-tasks', class: 'nav-label', title: 'App Logs', status: '' }
];


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let menuItem of menuItems\" class=\"nav\">\n<li class=\"{{menuItem.status}}\">\n\t<a (click)=navigateTo(menuItem.path)>\n\t\t<i class=\"{{menuItem.icon}}\"></i> \n\t\t<span class=\"nav-label\">{{menuItem.title}}</span>\n\t</a>\n</li>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_routers_config__ = __webpack_require__("./src/app/sidebar/sidebar-routers.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_service__ = __webpack_require__("./src/app/sidebar/sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(location, router, sidebarService, cookieService) {
        this.location = location;
        this.router = router;
        this.sidebarService = sidebarService;
        this.cookieService = cookieService;
        this.status = "active";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebarService.GetAccess()
            .subscribe(function (response) {
            if (response['access'] == "Admin") {
                _this.menuItems = __WEBPACK_IMPORTED_MODULE_4__sidebar_routers_config__["a" /* ROUTE */].filter(function (menuItems) { return menuItems; });
            }
            else if (response['access'] == "User") {
                _this.menuItems = __WEBPACK_IMPORTED_MODULE_4__sidebar_routers_config__["b" /* ROUTES */].filter(function (menuItems) { return menuItems; });
            }
            else {
                _this.cookieService.delete("token");
                _this.cookieService.delete('username');
                _this.cookieService.delete('userType');
                _this.router.navigate(['/login']);
            }
            _this.menuItems.forEach(function (sidebar) {
                if ("#/" + sidebar.path == location.hash) {
                    sidebar.status = "active";
                }
                else {
                    sidebar.status = "";
                }
            });
        }, function (error) {
            if (error['error'].message == "your token has been expired" && error['status'] == 500 || error['status'] == 401) {
                _this.cookieService.deleteAll();
                _this.router.navigate(['/login']);
            }
        });
    };
    SidebarComponent.prototype.navigateTo = function (path) {
        this.router.navigate([path]);
        this.menuItems.forEach(function (sidebar) {
            if (sidebar.path == path) {
                sidebar.status = "active";
            }
            else {
                sidebar.status = "";
            }
        });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-cmp',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__sidebar_service__["a" /* SidebarService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_service__ = __webpack_require__("./src/app/sidebar/sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__sidebar_service__["a" /* SidebarService */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarService = /** @class */ (function () {
    function SidebarService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backend_uri;
    }
    SidebarService.prototype.GetAccess = function () {
        return this.http.get(this.baseUrl + "/routeGuard", {
            headers: this.Headers()
        });
    };
    SidebarService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    SidebarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidebarService);
    return SidebarService;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map