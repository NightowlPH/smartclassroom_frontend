(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
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

/***/ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js ***!
  \*************************************************************/
/*! exports provided: OrderModule, OrderPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPipe", function() { return OrderPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OrderPipe = /** @class */ (function () {
    function OrderPipe() {
    }
    OrderPipe_1 = OrderPipe;
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === "string" || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param a
     * @param b
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
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
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
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe_1.caseInsensitiveSort
                : OrderPipe_1.defaultCompare;
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    var OrderPipe_1;
    OrderPipe = OrderPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "orderBy",
            pure: false
        })
    ], OrderPipe);
    return OrderPipe;
}());

var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [OrderPipe],
            exports: [OrderPipe],
            providers: [OrderPipe]
        })
    ], OrderModule);
    return OrderModule;
}());


//# sourceMappingURL=ngx-order-pipe.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
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
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId();
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
    PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
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
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
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
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
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
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
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

/***/ "./src/app/dashboard/admin/appLogs/app-logs.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/admin/appLogs/app-logs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n        <div class=\"col2-sm-6\">\n            <div class=\"input-group-btn\">\n           <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n           <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n           <ul id=\"selectList\" class=\"dropdown-menu\">\n               <li><a (click)=manageRow(10)>10</a></li>\n               <li><a (click)=manageRow(50)>50</a></li>\n               <li><a (click)=manageRow(100)>100</a></li>\n               <li><a (click)=manageRow(200)>Show all</a></li>                 \n           </ul>\n       </div>\n        </div>\n        <div class=\"col2-sm-6\">\n            <div class=\"col2-sm-7\"></div>\n            <div class=\"col2-sm-5\">                 \n                <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">               \n            </div>\n        </div>\n    </div>                   \n</div>\n<table class=\"table table-striped table-bordered table-hover\">\n    <thead>\n        <tr>                \n            <th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n                ID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n            </th>               \n            <th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n                Username<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n            </th>\n            <th (click)=\"sort('time_login',2)\" class=\"{{class[1][2]}}\">\n                Time Login<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n            </th>\n            <th (click)=\"sort('token_expired',3)\" class=\"{{class[1][3]}}\">\n                Last Request Time<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n            </th>\n            <th>Status</th>\n            <th style=\"width: 40px\" align=\"center\">Delete</th>                              \n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor = \"let user of activeUsers | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">              \n            <td>{{user.id}}</td>\n            <td>{{user.username}}</td>\n            <td>{{user.time_login}}</td>\n            <td>{{user.last_request_time}}</td>\n            <td>{{user.status}}</td>\n            <td align=\"center\">                                                                     \n              <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"delActiveUser(user.id)\">\n                <span class=\"glyphicon glyphicon-trash\"></span>\n              </button>\n            </td>                                                            \n        </tr>\n    </tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n<button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button> "

/***/ }),

/***/ "./src/app/dashboard/admin/appLogs/app-logs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/admin/appLogs/app-logs.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminAppLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAppLogsComponent", function() { return AdminAppLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_logs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-logs.service */ "./src/app/dashboard/admin/appLogs/app-logs.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");




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
    AdminAppLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-status-cmp',
            template: __webpack_require__(/*! ./app-logs.component.html */ "./src/app/dashboard/admin/appLogs/app-logs.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_logs_service__WEBPACK_IMPORTED_MODULE_2__["AdminAppLogsService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], AdminAppLogsComponent);
    return AdminAppLogsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/appLogs/app-logs.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/admin/appLogs/app-logs.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminAppLogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAppLogsService", function() { return AdminAppLogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminAppLogsService = /** @class */ (function () {
    function AdminAppLogsService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminAppLogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminAppLogsService);
    return AdminAppLogsService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/admin/auditTrail/audit-trail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"input-group-btn\">\n               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t               </ul>\n       \t\t</div>\n\t\t</div>\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t</div>\n\t\t</div>\n    </div>                   \n</div>    \n\t<table class=\"table table-striped table-bordered table-hover \">\n\t<thead>\n\t\t<tr>\t\t\t\n\t\t\t<th style=\"width: 40px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('Fname',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\tFirst Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\n\t\t\t<th (click)=\"sort('username',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('cardID',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('permission',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\tPermission<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('room',5)\" class=\"{{class[1][5]}}\">\n\t\t\t\tRoom<span class=\"fa fa-sort{{class[0][5]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('timestamp',6)\" class=\"{{class[1][6]}}\">\n\t\t\t\tTimestamp<span class=\"fa fa-sort{{class[0][6]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('action',7)\" class=\"{{class[1][7]}}\" style=\"width: 70px\">\n\t\t\t\taction<span class=\"fa fa-sort{{class[0][7]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of auditTrail | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<td>{{data.id}}</td>\n\t\t\t<td>{{data.Fname}}</td>\n\t\t\t<td>{{data.username}}</td>\n\t\t\t<td>{{data.cardID}}</td>\n\t\t\t<td>{{data.permission}}</td>\n\t\t\t<td>{{data.room}}</td>\t\n\t\t\t<td>{{data.timestamp}}</td>\t\n\t\t\t<td>{{data.action}}</td>\t\t\t\t\t\n\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteUser(data.id)\">\n                \t<span class=\"glyphicon glyphicon-trash\"></span>\n                </button>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div><br><br>\t\n <button type=\"submit\" class=\"btn btn-w-m btn-danger btn-sm\" (click) = \"delete_all()\">Delete all</button>\n <button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/admin/auditTrail/audit-trail.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminAuditTrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuditTrailComponent", function() { return AdminAuditTrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audit_trail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-trail.service */ "./src/app/dashboard/admin/auditTrail/audit-trail.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");




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
            if (data != undefined) {
                _this.auditTrail = data['auditTrail'];
                _this.totalUsr = _this.auditTrail.length;
            }
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
        var class_name = $("#selectList").attr('class');
        if (class_name == "dropdown-menu") {
            $("#selectList").addClass("show");
        }
        if (class_name == "dropdown-menu show") {
            $("#selectList").attr({ 'class': "dropdown-menu" });
        }
    };
    AdminAuditTrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'audit-trail-cmp',
            template: __webpack_require__(/*! ./audit-trail.component.html */ "./src/app/dashboard/admin/auditTrail/audit-trail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_audit_trail_service__WEBPACK_IMPORTED_MODULE_2__["AdminAuditTrailService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], AdminAuditTrailComponent);
    return AdminAuditTrailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/auditTrail/audit-trail.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/admin/auditTrail/audit-trail.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdminAuditTrailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuditTrailService", function() { return AdminAuditTrailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminAuditTrailService = /** @class */ (function () {
    function AdminAuditTrailService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminAuditTrailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminAuditTrailService);
    return AdminAuditTrailService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/admin/devices/devices.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>     \n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n        <th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n          Remote Design<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n        </th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let device of devices | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td>{{device.id}}</td>\n\t\t\t\t<td>{{device.name}}</td>\n\t\t\t\t<td>{{device.description}}</td>\n        <td>{{device.remote_design}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n            <button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(device.id)\" data-toggle=\"modal\" href=\"#modal-devices\">\n            \t<span class=\"glyphicon glyphicon-pencil\"></span>\n            </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n            <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteDevice(device.id)\">\n            \t<span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-devices\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-devices\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-body\">\n          \t<p></p>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">\n\n                      <div class=\"form-horizontal\"> \n                       <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Name:</label>\n                          <div class=\"col-lg-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Description:</label>                          \n                          <div class=\"col-lg-10\">\n                            <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n                          </div>\n                        </div>\n                         <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Remote Design:</label>                          \n                          <div class=\"col-lg-10\">\n                            <select class=\"chosen-select-ws form-control\" tabindex=\"2\" id=\"remote_design\">                                        \n                              <option *ngFor = \"let data of remote_design \" value=\"{{data.id}}\">{{data.name}}&emsp;&emsp;</option>\n                            </select>\n                          </div>\n                        </div>\n                      </div>                                                                               \n\n                      <div *ngIf = \"add == 'addDevice' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addDevice()\" >Add</button>\n                      </div> \n\n                      <div *ngIf = \"add == 'addDevice' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" disabled=\"\">Add</button>\n                      </div>\n                                       \n\n                      <div *ngIf = \"update == 'updateDevice'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"updateDevice()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/admin/devices/devices.component.ts ***!
  \**************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./devices.service */ "./src/app/dashboard/admin/devices/devices.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
            name: [data["name"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [data["description"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
    DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'devices-cmp',
            template: __webpack_require__(/*! ./devices.component.html */ "./src/app/dashboard/admin/devices/devices.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_devices_service__WEBPACK_IMPORTED_MODULE_3__["DevicesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/devices/devices.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/admin/devices/devices.service.ts ***!
  \************************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var DevicesService = /** @class */ (function () {
    function DevicesService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.router.navigate(['/login']);
        }
    };
    DevicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/group/group.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/admin/group/group.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<!-- <div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let group of groups | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"grow\">\n\t\t\t\t\t<div class=\"contact-box\">                       \n\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{group.name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">group: {{group.id}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<dir class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">  \n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteGroup(group.id)\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span></button>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(group.id)\" data-toggle=\"modal\" href=\"#modal-groups\"><span class=\"glyphicon glyphicon-pencil\"></span></button> \n\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t</dir> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a (click)=showMember(group.id)>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">                    \n\t\t\t\t\t\t\t\t\t<h3><strong>{{group.name}}</strong></h3>                    \n\t\t\t\t\t\t\t\t\t<strong>Description:</strong><br>\n\t\t\t\t\t\t\t\t\t<p>{{group.description}}</p>                         \n\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"group.description.length <= 25\"><br></ng-container>\n\t\t\t\t\t\t\t\t\t<strong>Permission:</strong><br>\n\t\t\t\t\t\t\t\t\t<p>{{group.permission_name}}</p>\n\t\t\t\t\t\t\t\t\t<strong>Number of members:</strong>&nbsp;{{group.members}}                                    \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>    \n\t\t</div>\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div> -->\n\t<div class=\"form-horizontal2\">\n\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>                   \n\t</div>\n\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tMembers<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let group of groups | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td (click)=showMember(group.id)>{{group.id}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.name}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.description}}</td>\n\t\t\t\t<td style=\"width: 90px\" (click)=GroupAccess(group.id)>{{group.members}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(group.id)\" data-toggle=\"modal\" href=\"#modal-groups\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteGroup(group.id)\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-groups\" (click) = \"getData()\">Add</button>\n\n\t<!-- <div class=\"footer fixed\">\n\t\t<div class=\"pull-right\">\n\t\t\t<div class=\"form-group form-horizontal\">\n\t\t\t\t<label class=\"col-lg-2 control-label\">Search:</label>\n\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>   \n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-groups\" (click) = \"getData()\">Add</button>\n\t\t</div>\n\t</div> -->\n\n\t<div id=\"modal-groups\" class=\"modal fade\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content animated {{modalAnimation}}\">\n\t\t\t\t<div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-6\"><p style=\"color: red\">{{message}}</p></div>\n            <div class=\"col-sm-3\"></div>\n          <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-11\">              \n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t</div>               \n\t\t\t\t\t\t\t<form [formGroup]=\"modalForm\"  novalidate>        \n\t\t\t\t\t\t\t\t<div class=\"col-sm-11\">\n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' || update == 'updateGroup'\" class=\"form-horizontal\"> \n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Description:</label>                          \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\"> \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">                            \n\t\t\t\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary btn-table dropdown-toggle\" type=\"button\" (click)=\"selecTag2()\">{{permission}}&emsp;<span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"selectList2\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let permission of permissions\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li><a (click)=\"choosePermission(permission.id,permission.name)\">{{permission.name}}</a></li> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>                               \n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                          \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' && modalForm. status == 'VALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click) = \"addGroup()\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div>  \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addGroup' && modalForm. status == 'INVALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" disabled=\"\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div>                 \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"update == 'updateGroup'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click) = \"updateGroup()\" >Save</button>                      \n\t\t\t\t\t\t\t\t\t</div>                      \n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/group/group.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/admin/group/group.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGroupComponent", function() { return AdminGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group.service */ "./src/app/dashboard/admin/group/group.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");






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
            _this.message = error.error.message;
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
            _this.message = error.error.message;
            _this.errorHandlerService.handleError(error);
        });
        this.groupService.GetGroup("group").subscribe(function (data) {
            _this.permission = data['data'].permission_name;
            _this.choosenPermission = { permission_id: data['data'].permission_id };
            _this.mapData(data['data']);
        }, function (error) {
            _this.message = error.error.message;
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
                _this.message = "";
                $("#modal-groups").modal('hide');
                _this.ngOnInit();
            }, function (error) {
                _this.message = error.error.message;
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
            _this.message = error.error.message;
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
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.groupService.GetPermissions()
            .subscribe(function (data) {
            _this.permissions = data['permissions'];
        }, function (error) {
            _this.message = error.error.message;
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
                $("#modal-groups").modal('hide');
                _this.ngOnInit();
            }, function (error) {
                _this.message = error.error.message;
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
            name: [data["name"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [data["description"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.update = "updateGroup";
    };
    AdminGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'group-cmp',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/dashboard/admin/group/group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_group_service__WEBPACK_IMPORTED_MODULE_4__["AdminGroupService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminGroupComponent);
    return AdminGroupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/group/group.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/admin/group/group.service.ts ***!
  \********************************************************/
/*! exports provided: AdminGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGroupService", function() { return AdminGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminGroupService = /** @class */ (function () {
    function AdminGroupService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminGroupService);
    return AdminGroupService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/member/member.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/admin/member/member.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let member of groupMember | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">\t\t\t\t\n\t\t\t\t<td>{{member.id}}</td>\n\t\t\t\t<td>{{member.username}}</td>\n\t\t\t\t<td>{{member.Lname}}</td>\n\t\t\t\t<td>{{member.Fname}}</td>\n\t\t\t\t<td>{{member.cardID}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n          <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteMember(member.id)\">\n          \t<span class=\"glyphicon glyphicon-trash\"></span>\n          </button>\n\t\t\t\t</td>\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\" id = \"first\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-members\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n\n<div id=\"modal-members\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n              <br>           \n              <div class=\"form-horizontal2\">\n                <div class=\"form-group2 col2-sm-12\">\n                  <div class=\"col2-sm-6\">\n                    <div class=\"input-group-btn\">\n                      <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag2()\">&emsp;{{row2}}&emsp;</button>\n                      <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag2()\"><span class=\"caret\"></span></button>\n                      <ul id=\"selectList2\" class=\"dropdown-menu\">\n                        <li><a (click)=manageRow2(8)>8</a></li>\n                        <li><a (click)=manageRow2(50)>50</a></li>\n                        <li><a (click)=manageRow2(100)>100</a></li>\n                        <li><a (click)=manageRow2(200)>Show all</a></li>                 \n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"col2-sm-6\">\n                    <div class=\"col2-sm-5\"></div>\n                    <div class=\"col2-sm-7\">         \n                      <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter2\">        \n                    </div>\n                  </div>\n                </div>                   \n              </div>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th (click)=\"sort2('Username',1)\" class=\"{{class2[1][0]}}\">\n                        Username<span class=\"fa fa-sort{{class2[0][0]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('Lname',2)\" class=\"{{class2[1][1]}}\">\n                        Lname<span class=\"fa fa-sort{{class2[0][1]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('Fname',3)\" class=\"{{class2[1][2]}}\">\n                        Fname<span class=\"fa fa-sort{{class2[0][2]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort2('CardID',4)\" class=\"{{class2[1][3]}}\">\n                        CardID<span class=\"fa fa-sort{{class2[0][3]}} pull-right\"></span>\n                      </th>\n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                              \n                    <tr *ngFor = \"let user of notMember | orderBy: key2 : reverse2 | filter:filter2 | paginate: { itemsPerPage: row2, currentPage: p2, id: 'second' };\">                                  \n                      <td style=\"width: 169px\">{{user.username}}</td>\n                      <td style=\"width: 98px\">{{user.Lname}}</td>\n                      <td style=\"width: 98px\">{{user.Fname}}</td>\n                      <td style=\"width: 101px\">{{user.cardID}}</td>\n                      <td><input type=\"checkbox\"  name=\"a{{user.id}}\" ngModel></td>\n                    </tr>                                \n                  </tbody>\n                </table>\n                <p>Showing 1 to {{row2}} of {{totalUsr2}}</p>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p2 = $event\" id = \"second\"></pagination-controls>\n                </div><br><br>\n              </div>\n              <div>\n                <div class=\"col-sm-7\"></div>                        \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addMember(input)\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/admin/member/member.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/admin/member/member.component.ts ***!
  \************************************************************/
/*! exports provided: AdminMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMemberComponent", function() { return AdminMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.service */ "./src/app/dashboard/admin/member/member.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    AdminMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'member-cmp',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/dashboard/admin/member/member.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _member_service__WEBPACK_IMPORTED_MODULE_3__["AdminMembersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], AdminMemberComponent);
    return AdminMemberComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/member/member.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/admin/member/member.service.ts ***!
  \**********************************************************/
/*! exports provided: AdminMembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMembersService", function() { return AdminMembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminMembersService = /** @class */ (function () {
    function AdminMembersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminMembersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminMembersService);
    return AdminMembersService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/admin/permission/permission.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n    <p>Showing 1 to {{row}} of {{totalUsr}}</p>\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let permission of permissions | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td>{{permission.id}}</td>\n\t\t\t\t<td>{{permission.name}}</td>\n\t\t\t\t<td>{{permission.description}}</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n                    <button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(permission.id)\" data-toggle=\"modal\" href=\"#modal-permissions\">\n                    \t<span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deletePermission(permission.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-permissions\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-permissions\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-3\"></div>\n                <div class=\"col-sm-6\"><p style=\"color: red\">{{message}}</p></div>\n                <div class=\"col-sm-3\"></div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">\n\n                      <div *ngIf = \"add == 'addPermission' || update == 'updatePermission'\n                       || add == 'addGroup' || update == 'updateGroup'\" class=\"form-horizontal\"> \n                       <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Name:</label>\n                          <div class=\"col-lg-10\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Description:</label>                          \n                          <div class=\"col-lg-10\">\n                            <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n                          </div>\n                        </div>\n                      </div>                                          \n\n                      <div *ngIf = \"add == 'addPermission' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" (click) = \"addPermission()\" >Add</button>\n                      </div> \n\n                      <div *ngIf = \"add == 'addPermission' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\"  disabled=\"\">Add</button>\n                      </div>                 \n\n                      <div *ngIf = \"update == 'updatePermission'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" (click) = \"updatePermission()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/admin/permission/permission.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPermissionComponent", function() { return AdminPermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permission.service */ "./src/app/dashboard/admin/permission/permission.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");






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
            _this.message = error.error.message;
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminPermissionComponent.prototype.getData = function () {
        this.update = "";
        this.add = "addPermission";
        this.modalAnimation = "flipInY";
        this.modalForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    AdminPermissionComponent.prototype.addPermission = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.permissionService.AddPermission(this.modalForm.value, "permissions").subscribe(function (response) {
                _this.message = "";
                $("#modal-permissions").modal('hide');
                _this.ngOnInit();
            }, function (error) {
                _this.message = error.error.message;
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminPermissionComponent.prototype.deletePermission = function (id) {
        var _this = this;
        this.permissionService.deletePermission(id).subscribe(function (permission) {
            _this.ngOnInit();
        }, function (error) {
            _this.message = error.error.message;
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
            _this.message = error.error.message;
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminPermissionComponent.prototype.updatePermission = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.permissionService.UpdatePermission(this.modalForm.value, "permission")
                .subscribe(function (data) {
                $("#modal-permissions").modal('hide');
                _this.message = "";
                _this.ngOnInit();
            }, function (error) {
                _this.message = error.error.message;
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
            name: [data["name"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [data["description"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
    AdminPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'permission-cmp',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/dashboard/admin/permission/permission.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_permission_service__WEBPACK_IMPORTED_MODULE_4__["AdminPermissionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"]])
    ], AdminPermissionComponent);
    return AdminPermissionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/permission/permission.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/admin/permission/permission.service.ts ***!
  \******************************************************************/
/*! exports provided: AdminPermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPermissionService", function() { return AdminPermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminPermissionService = /** @class */ (function () {
    function AdminPermissionService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminPermissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminPermissionService);
    return AdminPermissionService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/room/room.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/admin/room/room.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"tabs-container\"> -->\n\t<!-- <ul class=\"nav nav-tabs\">\n\t\t<li id=\"room_list_tab\" class=\"active\"><a (click)=\"change_view('room_list')\">Table view</a></li>\n\t\t<li id=\"room_card_tab\" class=\"\"><a (click)=\"change_view('room_card')\">Card view</a></li>\n\t</ul> -->\n\t<!-- <div class=\"tab-content\"> -->\n\t<!-- \t<div id=\"room_list\" class=\"tab-pane active\">\n\t\t\t<div class=\"panel-body\"> -->\n\t\t\t\t<div class=\"form-horizontal2\">\n\t\t\t\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>                   \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\t\t\t\t\n\t\t\t\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\t\t\t\tGroups<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let room of rooms | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.id}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.name}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.description}}</td>\n\t\t\t\t\t\t\t<td style=\"width: 80px\" (click)=GroupAccess(room.id)>{{room.groups}}</td>\n\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(room.id)\" data-toggle=\"modal\" href=\"#modal-rooms\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoom(room.id)\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t</div><br><br>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-rooms\" (click) = \"getData()\">Add</button>\n\t<!-- \t\t</div>\n\t\t</div> -->\n\t\t<!-- <div id=\"room_card\" class=\"tab-pane\">\n\t\t\t<div>\n\t\t\t\t<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n\t\t\t\t<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div *ngFor = \"let room of rooms  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t<div class=\"grow\">\n\t\t\t\t\t\t\t\t\t<div class=\"contact-box\">                       \n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.name[0]}}.png\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.id}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<dir class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">  \n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoom(room.id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span></button>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" (click) = \"getUpdateData(room.id)\" data-toggle=\"modal\" href=\"#modal-rooms\"><span class=\"glyphicon glyphicon-pencil\"></span></button> \n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t\t\t\t\t</dir> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=GroupAccess(room.id)>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">                    \n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3><strong>{{room.name}}</strong></h3>                    \n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Description</strong><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{room.description}}</p><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.description.length <= 25\"><br></ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Number of groups:</strong>&nbsp;{{room.groups}}<br>\t\t\t                                    \n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t\t</div>            \n\n\t\t\t\t\t<div class=\"footer fixed\">\n\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t<div class=\"form-group form-horizontal\">\n\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Search:</label>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>   \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-rooms\" (click) = \"getData()\">Add</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t<!-- </div> -->\n\n\n\t<!-- </div> -->\n\n\t<div id=\"modal-rooms\" class=\"modal fade\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content animated {{modalAnimation}}\">\n\t\t\t\t<div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-6\"><p style=\"color: red\">{{message}}</p></div>\n            <div class=\"col-sm-3\"></div>\n          </div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-11\">              \n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t</div>               \n\t\t\t\t\t\t\t<form [formGroup]=\"modalForm\"  novalidate>        \n\t\t\t\t\t\t\t\t<div class=\"col-sm-11\">\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' || update == 'updateRoom'\" class=\"form-horizontal\"> \n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"name\" >\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 control-label\">Description:</label>                          \n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Enter description ...\" ></textarea>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>                                          \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' && modalForm.status == 'VALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click) = \"addRoom()\" >Add</button>\n\t\t\t\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"add == 'addRoom' && modalForm.status == 'INVALID'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" disabled=\"\">Add</button>\n\t\t\t\t\t\t\t\t\t</div>                \n\n\t\t\t\t\t\t\t\t\t<div *ngIf = \"update == 'updateRoom'\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\"></div>                        \n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" (click) = \"updateRoom()\" >Save</button>                      \n\t\t\t\t\t\t\t\t\t</div>                      \n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/room/room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/admin/room/room.component.ts ***!
  \********************************************************/
/*! exports provided: AdminRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomComponent", function() { return AdminRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room.service */ "./src/app/dashboard/admin/room/room.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");






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
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    AdminRoomComponent.prototype.addRoom = function () {
        var _this = this;
        if (this.modalForm.status == "VALID") {
            this.roomService.AddRoom(this.modalForm.value, "rooms").subscribe(function (response) {
                _this.message = "";
                _this.ngOnInit();
                $("#modal-rooms").modal('hide');
            }, function (error) {
                _this.message = error.error.message;
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
                _this.message = "";
                $("#modal-rooms").modal('hide');
                _this.ngOnInit();
            }, function (error) {
                console.error(error);
                _this.message = error.error.message;
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
            name: [data["name"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [data["description"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.update = "updateRoom";
    };
    AdminRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-cmp',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/dashboard/admin/room/room.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_service__WEBPACK_IMPORTED_MODULE_4__["AdminRoomService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AdminRoomComponent);
    return AdminRoomComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/room/room.service.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/admin/room/room.service.ts ***!
  \******************************************************/
/*! exports provided: AdminRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomService", function() { return AdminRoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminRoomService = /** @class */ (function () {
    function AdminRoomService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminRoomService);
    return AdminRoomService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/admin/roomAccess/room-access.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">ID</th>\n\t\t\t\t<th>Group Name</th>\n\t\t\t\t<th >Permission Name</th>\n\t\t\t\t<th style=\"width: 40px\">Users</th>\t\t\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let access of groupAccess\">\t\t\t\t\n\t\t\t\t<td>{{access.id}}</td>\n\t\t\t\t<td>{{access.groupName}}</td>\n\t\t\t\t<td>{{access.permissionName}}</td>\n\t\t\t\t<td align=\"center\">{{access.users}}</td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"delGroupAccess(access.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-grpAccess\" (click) = \"getData()\">Add</button>\t\n </form>\n\n\n<div id=\"modal-grpAccess\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n                <br>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th style=\"width: 266px\">Group Name</th>\n                      <th style=\"width: 200px\">Permission Name</th> \n                      <th>Members</th>                     \n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                                                           \n                    <tr *ngFor = \"let group of unregistered_group\">                                  \n                      <td style=\"width: 266px\" >{{group.name}}</td>\n                      <td style=\"width: 200px\" >\n                        <div class=\"input-group-btn\">\n                          <button data-toggle=\"dropdown\" class=\"btn btn-primary btn-table dropdown-toggle\" type=\"button\" (click)=\"selecTag(group.id)\">{{CB_Status['a'+group.id]}} <span class=\"caret\"></span></button>\n                           <ul id=\"selectList\" class=\"dropdown-menu\">\n                              <ng-container *ngFor = \"let permission of permissions\">\n                                <li><a (click)=\"addPermission(group.id,permission.id,permission.name)\">{{permission.name}}</a></li> \n                              </ng-container>                               \n                           </ul>\n                        </div>                      \n                      </td> \n                      <td align=\"center\">{{group.members}}</td>                   \n                      <ng-container *ngIf = \"CB_Status['a'+group.id] == 'Permission'\">\n                        <input type=\"checkbox\" name=\"\" disabled=\"\">\n                      </ng-container>\n                      <ng-container *ngIf = \"CB_Status['a'+group.id] != 'Permission'\">\n                        <input type=\"checkbox\" name=\"\" checked=\"\" (click) = \"unCheck_CB(group.id)\">\n                      </ng-container>\n                    </tr>                                \n                  </tbody>\n                </table>\n              </div>\n              <div class=\"pull-right\">            \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addGrpAccess()\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/admin/roomAccess/room-access.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminRoomAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomAccessComponent", function() { return AdminRoomAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _room_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-access.service */ "./src/app/dashboard/admin/roomAccess/room-access.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    AdminRoomAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-access-cmp',
            template: __webpack_require__(/*! ./room-access.component.html */ "./src/app/dashboard/admin/roomAccess/room-access.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_access_service__WEBPACK_IMPORTED_MODULE_3__["AdminRoomAccessService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminRoomAccessComponent);
    return AdminRoomAccessComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomAccess/room-access.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/admin/roomAccess/room-access.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdminRoomAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomAccessService", function() { return AdminRoomAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminRoomAccessService = /** @class */ (function () {
    function AdminRoomAccessService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomAccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminRoomAccessService);
    return AdminRoomAccessService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/admin/roomStatus/room-status.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".room-status .grow{\n  min-height: 280px;\n  margin-bottom: 10px;\n}\n.room-status .contact-box{\n  min-height: 250px;\n  margin-bottom: 0px;\n}\n.row.searchbar{\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2FkbWluL3Jvb21TdGF0dXMvcm9vbS1zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9hZG1pbi9yb29tU3RhdHVzL3Jvb20tc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbS1zdGF0dXMgLmdyb3d7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJvb20tc3RhdHVzIC5jb250YWN0LWJveHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnJvdy5zZWFyY2hiYXJ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/admin/roomStatus/room-status.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n  <div class=\"row searchbar\">\n    <div class=\"pull-right\">\n      <div class=\"form-group form-horizontal\">\n        <label class=\"col-lg-3 control-label\">Search:</label>\n        <div class=\"col-lg-11\">\n          <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\" style=\"height: 29px\">\n        </div>\n      </div>   \n    </div>    \n  </div>\n\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let room of room_status  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"room-status col-lg-3\">\n\t\t\t\t<div class=\"grow\">\n          <div class=\"ibox-title\">             \n              <h5>ID-{{room.room_id}} - {{room.room_name}}</h5>\n          </div>\n\t\t\t\t\t<div class=\"contact-box\">\n\t\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\t\t                    \n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.room_name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.room_id}}</div><br>\n\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.add_device\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<div class=\"\">\t\t\t\t\t\t\t\t                  \t\t\t                 \n\t\t\t\t\t\t\t\t<strong>Devices:</strong><br><br>\n\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t<tbody class=\"room-status\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let device of room.devices\" >\n                      <ng-container *ngIf = \"device.remote_design != 'Temperature Slider'\">\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 40px; padding-right: 20px; padding-left: 5px\">                         \n  \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch{{device.class_name}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'True' || device.device_status == 'true'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" checked (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'False' || device.device_status == 'false'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t                                    \n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" for=\"{{device.room_status_id}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t</td>\n                        <td></td>                        \t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n  \t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoomDevice(device.room_status_id)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t</button>\n  \t\t\t\t\t\t\t\t\t\t\t</td>\n                      </ng-container>                     \n                      <ng-container *ngIf = \"device.remote_design == 'Temperature Slider'\">\n                        <td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n                        <td style=\"width: 1000px\"><input type=\"text\" id=\"{{device.room_status_id}}\"></td>\n                        <td style=\"width: 100px\"></td>\n                        <td align=\"center\">                                                      \n                          <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteRoomDevice(device.room_status_id)\">\n                            <span class=\"glyphicon glyphicon-trash\"></span>\n                          </button>\n                        </td>\n                      </ng-container>                    \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>                \t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n            <div class=\"footer-ibox text-right\">\n              <ng-container *ngIf = \"room.add_device\">\n                <button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n            </ng-container>\n            </div>       \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</ng-container>\n\t</div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n<div id=\"modal-add-devies\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated bounceInRight\">    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <form #input=\"ngForm\">                \n              <div class=\"col-sm-2\"></div>                     \n              <div class=\"col-sm-12\">\n                <br>           \n                <div class=\"form-horizontal2\">\n                  <div class=\"form-group2 col2-sm-12\">\n                    <div class=\"col2-sm-6\">\n                      <div class=\"input-group-btn\">\n                        <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row2}}&emsp;</button>\n                        <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n                        <ul id=\"rt-selectList\" class=\"dropdown-menu\">\n                          <li><a (click)=manageRow2(8)>8</a></li>\n                          <li><a (click)=manageRow2(50)>50</a></li>\n                          <li><a (click)=manageRow2(100)>100</a></li>\n                          <li><a (click)=manageRow2(200)>Show all</a></li>                 \n                        </ul>\n                      </div>\n                    </div>\n                    <div class=\"col2-sm-6\">\n                      <div class=\"col2-sm-5\"></div>\n                      <div class=\"col2-sm-7\">         \n                        <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter2\">        \n                      </div>\n                    </div>\n                  </div>                   \n                </div>\n                <table class=\"table table-fixed table-striped table-hover \">\n                  <thead>\n                    <tr>                                 \n                      <th (click)=\"sort('id',1)\" class=\"{{class[1][0]}}\">\n                        ID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort('Lname',2)\" class=\"{{class[1][1]}}\">\n                        Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n                      </th>\n                      <th (click)=\"sort('Fname',3)\" class=\"{{class[1][2]}}\">\n                        Description<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n                      </th>                      \n                      <th style=\"width: 25px\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>                              \n                    <tr *ngFor = \"let device of devices | orderBy: key2 : reverse2 | filter:filter2 | paginate: { itemsPerPage: row2, currentPage: p2, id: 'second' };\">                                  \n                      <td style=\"width: 25px\">{{device.id}}</td>\n                      <td style=\"width: 98px\">{{device.name}}</td>\n                      <td style=\"width: 98px\">{{device.description}}</td>                      \n                      <td><input type=\"checkbox\"  name=\"a{{device.id}}\" ngModel></td>\n                    </tr>                                \n                  </tbody>\n                </table>\n                <p>Showing 1 to {{row2}} of {{totalUsr}}</p>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p2 = $event\" id = \"first\"></pagination-controls>\n                </div><br><br>                \n              </div>\n              <div>\n                <div class=\"col-sm-7\"></div>                        \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" data-dismiss = \"modal\" (click) = \"addRoomDevice(input)\" >Add</button>                      \n              </div> \n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/admin/roomStatus/room-status.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminRoomStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomStatusComponent", function() { return AdminRoomStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");
/* harmony import */ var _room_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-status.service */ "./src/app/dashboard/admin/roomStatus/room-status.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







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
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.p2 = 1;
        this.row = 9;
        this.p = 1;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(4000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe))
            .subscribe(function (x) {
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
    AdminRoomStatusComponent.prototype.ngOnDestroy = function () {
        console.debug("Destroying");
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
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
    AdminRoomStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-status-cmp',
            template: __webpack_require__(/*! ./room-status.component.html */ "./src/app/dashboard/admin/roomStatus/room-status.component.html"),
            styles: [__webpack_require__(/*! ./room-status.component.css */ "./src/app/dashboard/admin/roomStatus/room-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_status_service__WEBPACK_IMPORTED_MODULE_4__["AdminRoomStatusService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], AdminRoomStatusComponent);
    return AdminRoomStatusComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/roomStatus/room-status.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/admin/roomStatus/room-status.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdminRoomStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoomStatusService", function() { return AdminRoomStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminRoomStatusService = /** @class */ (function () {
    function AdminRoomStatusService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AdminRoomStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminRoomStatusService);
    return AdminRoomStatusService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/users/users.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/admin/users/users.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n    <div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t\t               </ul>\n           \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>    \n \t<table class=\"table table-striped table-bordered table-hover \">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th style=\"width: 30px\"></th>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('Username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLastname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFirstname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">Edit</th>\n\t\t\t\t<th style=\"width: 40px\">Delete</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of users | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t\t<td align=\"center\" ><input type=\"checkbox\"  name=\"a{{user.id}}\" ngModel></td>\n\t\t\t\t<td>{{user.id}}</td>\n\t\t\t\t<td>{{user.username}}</td>\n\t\t\t\t<td>{{user.Lname}}</td>\n\t\t\t\t<td>{{user.Fname}}</td>\n\t\t\t\t<td>{{user.cardID }}</td>\t\t\t\t\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t\t                \n                    <button class=\"btn btn-primary btn-xs\" (click) = \"update_user(user.id)\" data-toggle=\"modal\" href=\"#modal-userss\">\n                    \t<span class=\"glyphicon glyphicon-pencil\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t\t<td align=\"center\">\t\t\t\t\t\t\t\t                                        \n                    <button type=\"submit\" class=\"btn btn-danger btn-xs\" (click)=\"deleteUser(input,user.id)\">\n                    \t<span class=\"glyphicon glyphicon-trash\"></span>\n                    </button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\n\t<button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" href=\"#modal-userss\" (click) = \"add_user()\">Add</button>\n\t <button type=\"submit\" class=\"btn btn-w-m btn-danger btn-sm\" (click) = \"deleteUser(input,'none')\">Delete</button>   \n </form>\n\n\n<div id=\"modal-userss\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content animated {{modalAnimation}}\">\n          <div class=\"modal-header\">\n            <div class=\"col-sm-12\"><p style=\"text-align:center;color: red\">{{message}}</p></div>\n          </div>\n          <div class=\"modal-body\">\n          \t<p></p>\n              <div class=\"row\">\n                <div class=\"col-sm-11\">              \n                  <div class=\"col-sm-1\">\n                  </div>               \n                  <form [formGroup]=\"modalForm\"  novalidate>        \n                    <div class=\"col-sm-11\">               \n                      <div *ngIf = \"add == 'addUser' || update == 'updateUser'\" class=\"form-horizontal\">                                                                      \n                         <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Lastname:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"Lname\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Firstname:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"Fname\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Username:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\n                            </div>\n                        </div>\n                        <div *ngIf = \"add == 'addUser'\" class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">Password:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"userpassword\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <label class=\"col-lg-2 control-label\">CardID:</label>\n                            <div class=\"col-lg-10\">\n                              <input type=\"text\" class=\"form-control\" placeholder=\"cardID\" formControlName=\"cardID\">\n                            </div>\n                        </div>\n                      </div>                    \n\n                      <div *ngIf = \"add == 'addUser' && modalForm.status == 'VALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" (click) = \"addUser()\" >Add</button>\n                      </div>   \n\n                      <div *ngIf = \"add == 'addUser' && modalForm.status == 'INVALID'\">\n                        <div class=\"col-sm-6\"></div>                        \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" disabled=\"\">Add</button>\n                      </div>                 \n\n                      <div *ngIf = \"update == 'updateUser'\">\n                        <div class=\"col-sm-6\"></div>                \n                        <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                        <button class=\"btn btn-primary btn-sm\" (click) = \"updateUser()\" >Save</button>                      \n                      </div>                      \n\n                      </div>\n                    </form>\n                </div>\n          </div>\n      </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/admin/users/users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/admin/users/users.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/dashboard/admin/users/users.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");






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
                if (data != null && data['message']) {
                    _this.message = data['message'];
                }
            }, function (error) {
                _this.errorHandlerService.handleError(error);
            });
        }
    };
    AdminUsersComponent.prototype.add_user = function () {
        this.modalForm = this.formBuilder.group({
            Lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
                console.log("Reponse", response);
                if (response['message'] == "success") {
                    console.log("Added user successfully");
                    if (_this.counter == false) // SHOW THE LATEST ADDED USER
                     {
                        _this.sort('id', 0);
                        _this.counter = true;
                    }
                    console.log("Hiding user modal");
                    $("#modal-userss").modal('hide');
                    _this.ngOnInit();
                }
                else {
                    _this.message = response['message'];
                }
            }, function (error) {
                _this.message = error.error["message"];
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
            console.error("Error occured", error);
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
            if (data != null && data['message']) {
                _this.message = data['message'];
            }
            else {
                $("#modal-userss").modal('hide');
                _this.message = "";
                _this.ngOnInit();
            }
        }, function (error) {
            _this.errorHandlerService.handleError(error);
        });
    };
    AdminUsersComponent.prototype.mapData = function (data) {
        this.modalForm = this.formBuilder.group({
            Lname: [data['Lname'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Fname: [data['Fname'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: [data['username'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users-cmp',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/dashboard/admin/users/users.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["AdminUsersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _error_handler_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/admin/users/users.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/admin/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: AdminUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersService", function() { return AdminUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AdminUsersService = /** @class */ (function () {
    function AdminUsersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    AdminUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminUsersService);
    return AdminUsersService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar{\n  display: none;\n}\n#sidebar.active{\n  display: block;\n}\n#page-wrapper.nomenu{\n  margin-left: 0px;\n}\n.body-small #page-wrapper{\n  margin-left: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFye1xuICBkaXNwbGF5OiBub25lO1xufVxuI3NpZGViYXIuYWN0aXZle1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3BhZ2Utd3JhcHBlci5ub21lbnV7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5ib2R5LXNtYWxsICNwYWdlLXdyYXBwZXJ7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" class=\"active navbar-default navbar-static-side\" role=\"navigation\">\n\t<div class=\"sidebar-collapse\">\n\t\t<ul class=\"nav\" id=\"side-menu\">\n\t\t\t<sidebar-header-cmp></sidebar-header-cmp>\n\t\t\t<sidebar-cmp></sidebar-cmp>\n\t\t</ul>\n\t</div>\n</nav>\n<div id=\"page-wrapper\" class=\"gray-bg\">\n\t<div class=\"row border-bottom\">\n\t\t<nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n\t\t\t<content-header-cmp></content-header-cmp>\n\t\t</nav>\n\t</div>\n\t<navbar-cmp></navbar-cmp>\n\t<div class=\"{{class}}\">\n   <div class=\"row\">\n    <div class=\"col-lg-12\">\n     <div class=\"ibox float-e-margins\">\n      <table-header-cmp></table-header-cmp>\n      <div class = \"{{class3}}\">\t\t\t\t  \t\t\t\t    \t\t\n       <router-outlet></router-outlet>\t\t    \t\t\n     </div>\n   </div>\n </div>\n</div>\n</div>\n<footer-cmp></footer-cmp>             \n</div>\n\n<div id=\"modal-users\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated {{modalAnimation}}\">\n      <div class=\"modal-body\">\n        <div class=\"col-sm-12\"><p style=\"text-align: center;color: red\">{{message}}</p></div>\n        <p></p>\n        <div class=\"row\">\n          <div class=\"col-sm-11\">              \n            <div class=\"col-sm-1\">\n            </div>               \n            <form #heroForm=\"ngForm\">\n              <div class=\"col-sm-11\">               \n                <div  class=\"form-horizontal\">\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-4 control-label\" style=\"margin-top: 15%\">Profile picture: &emsp;</label>\n                    <div class=\"col-lg-8\">\n                      <div class=\"row\">\n                        <div class=\"profile-image upload-btn-wrapper\">\n                          <img id=\"user_photo_modal\" [src]=\"image_path\" class=\"img-circle circle-border2\" alt=\"profile\">\n                          <h5 class=\"text-center\">Edit</h5>\n                          <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">                  \n                        </div>\n                        <div style=\"margin-top: 15%\" class=\"upload-btn-wrapper\">\n                          <input type=\"file\" #Image accept=\"image/*\" (change)=\"handleFileInput($event.target.files)\">\n                          \n                        </div>\n                      </div>\n                    </div>       \n                  </div>                                                               \n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Last name:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"profile.Fname\" name = \"Fname\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">First name:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"profile.Lname\" name = \"Lname\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Username:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"profile.username\" name = \"username\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Card ID:</label>\n                    <div class=\"col-lg-9\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"cardID\" [(ngModel)]=\"profile.cardID\" name = \"cardID\">\n                    </div>\n                  </div>\n                </div>                            \n\n                <div>\n                  <div class=\"col-sm-6\"></div>                \n                  <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                  <button class=\"btn btn-primary btn-sm\" (click) = \"editProfile()\" >Save</button>                      \n                </div>                      \n\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"modal-users2\" class=\"modal fade\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content animated {{modalAnimation}}\">\n      <div class=\"modal-body\">\n        <div class=\"col-sm-12\"><p style=\"text-align: center;color: red\">{{message}}</p></div>\n        <div class=\"row\">\n          <div class=\"col-sm-11\">              \n            <div class=\"col-sm-1\">\n            </div>               \n            <form [formGroup]=\"modalForm\"  novalidate> \n              <div class=\"col-sm-11\">               \n                <div  class=\"form-horizontal\">                                                                      \n                 <div class=\"form-group\">\n                  <label class=\"col-lg-2 control-label\">Current Password:</label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\" formControlName=\"current_password\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-lg-2 control-label\">New Password:</label>\n                  <div class=\"col-lg-10\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"new_password\">\n                  </div>\n                </div>                                            \n              </div>                            \n\n              <div>\n                <div class=\"col-sm-6\"></div>                \n                <button type=\"button\" class=\"btn btn-warning btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button class=\"btn btn-primary btn-sm\" (click) = \"changePassword()\" >Save</button>                      \n              </div>                      \n\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../error-handler.service */ "./src/app/error-handler.service.ts");
/* harmony import */ var _share_sidebar_header_sidebar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/sidebar-header/sidebar-header.component */ "./src/app/share/sidebar-header/sidebar-header.component.ts");






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
            current_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
                $("user_photo_modal")['src'] = "../assets/img/logo.png";
            }
        });
        if (location.hash.slice(1, location.hash.length) == "/home/roomStatus" || location.hash.slice(1, location.hash.length) == "/home/admin/roomStatus") {
            console.log("MINI");
            var body_class_name = $("index-body").attr("class");
            if (body_class_name == undefined || body_class_name.indexOf("mini-navbar") == -1) {
                $("#index-body").attr({ 'class': "mini-navbar body-small" });
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
                var body_class_name = $("#index-body").attr('class');
                if (body_class_name == undefined || body_class_name.indexOf("mini-navbar") == -1) {
                    $("#index-body").attr({ 'class': "mini-navbar body-small" });
                }
            }
            else if (location.hash.slice(1, location.hash.length) != "/home/roomStatus" || location.hash.slice(1, location.hash.length) != "/home/admin/roomStatus") {
                var body_class_name = $("#index-body").attr('class');
                if (body_class_name == undefined || body_class_name.indexOf("mini-navbar") == 0) {
                    console.log("YES");
                    $("#index-body").attr({ 'class': "body-small" });
                }
            }
        }
    };
    DashboardComponent.prototype.updateUser = function () {
        var _this = this;
        var usrFrmData = this.modalForm.value;
        this.dashboardService.UpdateUser(usrFrmData)
            .subscribe(function (data) {
            if (data != null && data['message']) {
                _this.message = data['message'];
            }
            else {
                _this.message = "";
                $("#modal-users").modal("hide");
                _this.ngOnInit();
            }
        }, function (error) {
            _this.message = error.error['message'];
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
                $("#modal-users").modal("hide");
                _this.sidebarHeaderComponent.ngOnInit();
            }
            else if (data['message']) {
                _this.message = data['message'];
            }
        }, function (error) {
            _this.message = error.error['message'];
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
            $("#user_photo_modal").attr({ 'src': reader.result });
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    DashboardComponent.prototype.changePassword = function () {
        var _this = this;
        this.dashboardService.ChangePassword(this.modalForm.value)
            .subscribe(function (data) {
            if (data['message'] != 'your password is successfully changed') {
                _this.message = data['message'];
            }
            else {
                _this.message = "";
                $("#modal-users2").modal("hide");
            }
        }, function (error) {
            _this.message = error.error['message'];
            _this.errorHandlerService.handleError(error);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-cmp',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], _share_sidebar_header_sidebar_header_component__WEBPACK_IMPORTED_MODULE_5__["SidebarHeaderComponent"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/dashboard/admin/users/users.component.ts");
/* harmony import */ var _admin_permission_permission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/permission/permission.component */ "./src/app/dashboard/admin/permission/permission.component.ts");
/* harmony import */ var _admin_group_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/group/group.component */ "./src/app/dashboard/admin/group/group.component.ts");
/* harmony import */ var _admin_member_member_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/member/member.component */ "./src/app/dashboard/admin/member/member.component.ts");
/* harmony import */ var _admin_room_room_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/room/room.component */ "./src/app/dashboard/admin/room/room.component.ts");
/* harmony import */ var _admin_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/roomAccess/room-access.component */ "./src/app/dashboard/admin/roomAccess/room-access.component.ts");
/* harmony import */ var _admin_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/auditTrail/audit-trail.component */ "./src/app/dashboard/admin/auditTrail/audit-trail.component.ts");
/* harmony import */ var _admin_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/roomStatus/room-status.component */ "./src/app/dashboard/admin/roomStatus/room-status.component.ts");
/* harmony import */ var _admin_appLogs_app_logs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/appLogs/app-logs.component */ "./src/app/dashboard/admin/appLogs/app-logs.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/dashboard/user/users/users.component.ts");
/* harmony import */ var _user_permission_permission_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/permission/permission.component */ "./src/app/dashboard/user/permission/permission.component.ts");
/* harmony import */ var _user_group_group_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/group/group.component */ "./src/app/dashboard/user/group/group.component.ts");
/* harmony import */ var _user_member_member_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/member/member.component */ "./src/app/dashboard/user/member/member.component.ts");
/* harmony import */ var _user_room_room_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/room/room.component */ "./src/app/dashboard/user/room/room.component.ts");
/* harmony import */ var _user_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/roomAccess/room-access.component */ "./src/app/dashboard/user/roomAccess/room-access.component.ts");
/* harmony import */ var _user_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/auditTrail/audit-trail.component */ "./src/app/dashboard/user/auditTrail/audit-trail.component.ts");
/* harmony import */ var _user_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/roomStatus/room-status.component */ "./src/app/dashboard/user/roomStatus/room-status.component.ts");
/* harmony import */ var _admin_devices_devices_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/devices/devices.component */ "./src/app/dashboard/admin/devices/devices.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var _share_sidebar_header_sidebar_header_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../share/sidebar-header/sidebar-header.module */ "./src/app/share/sidebar-header/sidebar-header.module.ts");
/* harmony import */ var _share_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../share/content-header/content-header.module */ "./src/app/share/content-header/content-header.module.ts");
/* harmony import */ var _share_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../share/navbar/navbar.module */ "./src/app/share/navbar/navbar.module.ts");
/* harmony import */ var _share_table_header_table_header_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../share/table-header/table-header.module */ "./src/app/share/table-header/table-header.module.ts");
/* harmony import */ var _share_footer_footer_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../share/footer/footer.module */ "./src/app/share/footer/footer.module.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _tokenRegistration_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../tokenRegistration.service */ "./src/app/tokenRegistration.service.ts");





 //importing the module
 //importing the module
 // <-- import the module




























var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _dashboard_routes__WEBPACK_IMPORTED_MODULE_27__["DashboardRoutingModule"],
                _share_sidebar_header_sidebar_header_module__WEBPACK_IMPORTED_MODULE_28__["SidebarHeaderModule"],
                _share_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_29__["ContentHeaderModule"],
                _share_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_30__["NavbarModule"],
                _share_table_header_table_header_module__WEBPACK_IMPORTED_MODULE_31__["TableHeaderModule"],
                _share_footer_footer_module__WEBPACK_IMPORTED_MODULE_32__["FooterModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_33__["SidebarModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipeModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _tokenRegistration_service__WEBPACK_IMPORTED_MODULE_34__["TokenRegistrationService"], multi: true },
            ],
            declarations: [
                _admin_users_users_component__WEBPACK_IMPORTED_MODULE_8__["AdminUsersComponent"],
                _admin_permission_permission_component__WEBPACK_IMPORTED_MODULE_9__["AdminPermissionComponent"],
                _admin_group_group_component__WEBPACK_IMPORTED_MODULE_10__["AdminGroupComponent"],
                _admin_member_member_component__WEBPACK_IMPORTED_MODULE_11__["AdminMemberComponent"],
                _admin_room_room_component__WEBPACK_IMPORTED_MODULE_12__["AdminRoomComponent"],
                _admin_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_13__["AdminRoomAccessComponent"],
                _admin_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_14__["AdminAuditTrailComponent"],
                _admin_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_15__["AdminRoomStatusComponent"],
                _admin_appLogs_app_logs_component__WEBPACK_IMPORTED_MODULE_16__["AdminAppLogsComponent"],
                _user_users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                _user_permission_permission_component__WEBPACK_IMPORTED_MODULE_18__["PermissionComponent"],
                _user_group_group_component__WEBPACK_IMPORTED_MODULE_19__["GroupComponent"],
                _user_member_member_component__WEBPACK_IMPORTED_MODULE_20__["MemberComponent"],
                _user_room_room_component__WEBPACK_IMPORTED_MODULE_21__["RoomComponent"],
                _user_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_22__["RoomAccessComponent"],
                _user_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_23__["AuditTrailComponent"],
                _user_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_24__["RoomStatusComponent"],
                _admin_devices_devices_component__WEBPACK_IMPORTED_MODULE_25__["DevicesComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.routes.ts ***!
  \***********************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/dashboard/admin/users/users.component.ts");
/* harmony import */ var _admin_permission_permission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/permission/permission.component */ "./src/app/dashboard/admin/permission/permission.component.ts");
/* harmony import */ var _admin_group_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/group/group.component */ "./src/app/dashboard/admin/group/group.component.ts");
/* harmony import */ var _admin_member_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/member/member.component */ "./src/app/dashboard/admin/member/member.component.ts");
/* harmony import */ var _admin_room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/room/room.component */ "./src/app/dashboard/admin/room/room.component.ts");
/* harmony import */ var _admin_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/roomAccess/room-access.component */ "./src/app/dashboard/admin/roomAccess/room-access.component.ts");
/* harmony import */ var _admin_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/auditTrail/audit-trail.component */ "./src/app/dashboard/admin/auditTrail/audit-trail.component.ts");
/* harmony import */ var _admin_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/roomStatus/room-status.component */ "./src/app/dashboard/admin/roomStatus/room-status.component.ts");
/* harmony import */ var _admin_appLogs_app_logs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/appLogs/app-logs.component */ "./src/app/dashboard/admin/appLogs/app-logs.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/dashboard/user/users/users.component.ts");
/* harmony import */ var _user_permission_permission_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/permission/permission.component */ "./src/app/dashboard/user/permission/permission.component.ts");
/* harmony import */ var _user_group_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/group/group.component */ "./src/app/dashboard/user/group/group.component.ts");
/* harmony import */ var _user_member_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/member/member.component */ "./src/app/dashboard/user/member/member.component.ts");
/* harmony import */ var _user_room_room_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/room/room.component */ "./src/app/dashboard/user/room/room.component.ts");
/* harmony import */ var _user_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/roomAccess/room-access.component */ "./src/app/dashboard/user/roomAccess/room-access.component.ts");
/* harmony import */ var _user_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/auditTrail/audit-trail.component */ "./src/app/dashboard/user/auditTrail/audit-trail.component.ts");
/* harmony import */ var _user_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/roomStatus/room-status.component */ "./src/app/dashboard/user/roomStatus/room-status.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_devices_devices_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/devices/devices.component */ "./src/app/dashboard/admin/devices/devices.component.ts");
/* harmony import */ var _route_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../route-guard */ "./src/app/route-guard.ts");
/* harmony import */ var _admin_users_users_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/users/users.service */ "./src/app/dashboard/admin/users/users.service.ts");
/* harmony import */ var _admin_permission_permission_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/permission/permission.service */ "./src/app/dashboard/admin/permission/permission.service.ts");
/* harmony import */ var _admin_group_group_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/group/group.service */ "./src/app/dashboard/admin/group/group.service.ts");
/* harmony import */ var _admin_member_member_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/member/member.service */ "./src/app/dashboard/admin/member/member.service.ts");
/* harmony import */ var _admin_room_room_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/room/room.service */ "./src/app/dashboard/admin/room/room.service.ts");
/* harmony import */ var _admin_roomAccess_room_access_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin/roomAccess/room-access.service */ "./src/app/dashboard/admin/roomAccess/room-access.service.ts");
/* harmony import */ var _admin_devices_devices_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin/devices/devices.service */ "./src/app/dashboard/admin/devices/devices.service.ts");
/* harmony import */ var _admin_roomStatus_room_status_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/roomStatus/room-status.service */ "./src/app/dashboard/admin/roomStatus/room-status.service.ts");
/* harmony import */ var _admin_auditTrail_audit_trail_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin/auditTrail/audit-trail.service */ "./src/app/dashboard/admin/auditTrail/audit-trail.service.ts");
/* harmony import */ var _admin_appLogs_app_logs_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/appLogs/app-logs.service */ "./src/app/dashboard/admin/appLogs/app-logs.service.ts");
/* harmony import */ var _user_users_users_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/users/users.service */ "./src/app/dashboard/user/users/users.service.ts");
/* harmony import */ var _user_permission_permission_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/permission/permission.service */ "./src/app/dashboard/user/permission/permission.service.ts");
/* harmony import */ var _user_group_group_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/group/group.service */ "./src/app/dashboard/user/group/group.service.ts");
/* harmony import */ var _user_member_member_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user/member/member.service */ "./src/app/dashboard/user/member/member.service.ts");
/* harmony import */ var _user_room_room_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user/room/room.service */ "./src/app/dashboard/user/room/room.service.ts");
/* harmony import */ var _user_roomAccess_room_access_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user/roomAccess/room-access.service */ "./src/app/dashboard/user/roomAccess/room-access.service.ts");
/* harmony import */ var _user_auditTrail_audit_trail_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/auditTrail/audit-trail.service */ "./src/app/dashboard/user/auditTrail/audit-trail.service.ts");
/* harmony import */ var _user_roomStatus_room_status_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/roomStatus/room-status.service */ "./src/app/dashboard/user/roomStatus/room-status.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! .././session.service */ "./src/app/session.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! .././error-handler.service */ "./src/app/error-handler.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _share_sidebar_header_sidebar_header_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../share/sidebar-header/sidebar-header.component */ "./src/app/share/sidebar-header/sidebar-header.component.ts");













































var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
        canActivate: [_route_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
        canActivateChild: [_route_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
        children: [
            {
                path: 'admin/users',
                component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_3__["AdminUsersComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-user',
                    class: 'nav-label',
                    title: 'Users',
                    status: '',
                    accessUrl: '/users'
                }
            },
            {
                path: 'admin/groups',
                component: _admin_group_group_component__WEBPACK_IMPORTED_MODULE_5__["AdminGroupComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-group',
                    class: 'nav-label',
                    title: 'Groups',
                    status: '',
                    accessUrl: '/groups'
                }
            },
            {
                path: 'admin/permissions',
                component: _admin_permission_permission_component__WEBPACK_IMPORTED_MODULE_4__["AdminPermissionComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-unlock-alt',
                    class: 'nav-label',
                    title: 'Permissions',
                    status: '',
                    accessUrl: '/permissions'
                }
            },
            {
                path: 'admin/rooms',
                component: _admin_room_room_component__WEBPACK_IMPORTED_MODULE_7__["AdminRoomComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-bank',
                    class: 'nav-label',
                    title: 'Rooms',
                    status: '',
                    accessUrl: '/rooms'
                }
            },
            {
                path: 'admin/roomStatus',
                component: _admin_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_10__["AdminRoomStatusComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-sliders',
                    class: 'nav-label',
                    title: 'Room Control',
                    status: '',
                    accessUrl: '/RoomStatus'
                }
            },
            {
                path: 'admin/auditTrials',
                component: _admin_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_9__["AdminAuditTrailComponent"],
                data: {
                    inMenu: true,
                    icon: 'fa fa-table',
                    class: 'nav-label',
                    title: 'Audit Trails',
                    status: '/auditTrail'
                }
            },
            {
                path: 'admin/groupMember/:id',
                component: _admin_member_member_component__WEBPACK_IMPORTED_MODULE_6__["AdminMemberComponent"],
                data: {
                    inMenu: false
                }
            },
            { path: 'admin/roomAccess/:id', component: _admin_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_8__["AdminRoomAccessComponent"] },
            {
                path: 'admin/devices',
                component: _admin_devices_devices_component__WEBPACK_IMPORTED_MODULE_21__["DevicesComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-th-list',
                    class: 'nav-label',
                    title: "Devices",
                    status: ''
                }
            },
            {
                path: 'admin/appLogs',
                component: _admin_appLogs_app_logs_component__WEBPACK_IMPORTED_MODULE_11__["AdminAppLogsComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-tasks',
                    class: 'nav-label',
                    title: 'App Logs',
                    status: ''
                }
            },
            {
                path: 'users',
                component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-user',
                    class: 'nav-label',
                    title: 'Users',
                    status: ''
                }
            },
            {
                path: 'groups',
                component: _user_group_group_component__WEBPACK_IMPORTED_MODULE_14__["GroupComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-group',
                    class: 'nav-label',
                    title: 'Groups',
                    status: ''
                }
            },
            {
                path: 'permissions',
                component: _user_permission_permission_component__WEBPACK_IMPORTED_MODULE_13__["PermissionComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-unlock-alt',
                    class: 'nav-label',
                    title: 'Permissions',
                    status: ''
                }
            },
            { path: 'groupMember/:id', component: _user_member_member_component__WEBPACK_IMPORTED_MODULE_15__["MemberComponent"] },
            {
                path: 'rooms',
                component: _user_room_room_component__WEBPACK_IMPORTED_MODULE_16__["RoomComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-bank',
                    class: 'nav-label',
                    title: 'Rooms',
                    status: ''
                }
            },
            { path: 'roomAccess/:id', component: _user_roomAccess_room_access_component__WEBPACK_IMPORTED_MODULE_17__["RoomAccessComponent"] },
            {
                path: 'roomStatus',
                component: _user_roomStatus_room_status_component__WEBPACK_IMPORTED_MODULE_19__["RoomStatusComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-sliders',
                    class: 'nav-label',
                    title: 'Room Status',
                    status: ''
                }
            },
            {
                path: 'auditTrials',
                component: _user_auditTrail_audit_trail_component__WEBPACK_IMPORTED_MODULE_18__["AuditTrailComponent"],
                data: {
                    inMenu: false,
                    icon: 'fa fa-table',
                    class: 'nav-label',
                    title: 'Audit Trails',
                    status: ''
                }
            }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [
                _route_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _admin_users_users_service__WEBPACK_IMPORTED_MODULE_23__["AdminUsersService"],
                _admin_permission_permission_service__WEBPACK_IMPORTED_MODULE_24__["AdminPermissionService"],
                _admin_group_group_service__WEBPACK_IMPORTED_MODULE_25__["AdminGroupService"],
                _admin_member_member_service__WEBPACK_IMPORTED_MODULE_26__["AdminMembersService"],
                _admin_room_room_service__WEBPACK_IMPORTED_MODULE_27__["AdminRoomService"],
                _admin_roomAccess_room_access_service__WEBPACK_IMPORTED_MODULE_28__["AdminRoomAccessService"],
                _admin_devices_devices_service__WEBPACK_IMPORTED_MODULE_29__["DevicesService"],
                _admin_roomStatus_room_status_service__WEBPACK_IMPORTED_MODULE_30__["AdminRoomStatusService"],
                _admin_auditTrail_audit_trail_service__WEBPACK_IMPORTED_MODULE_31__["AdminAuditTrailService"],
                _admin_appLogs_app_logs_service__WEBPACK_IMPORTED_MODULE_32__["AdminAppLogsService"],
                _user_users_users_service__WEBPACK_IMPORTED_MODULE_33__["UsersService"],
                _user_permission_permission_service__WEBPACK_IMPORTED_MODULE_34__["PermissionService"],
                _user_group_group_service__WEBPACK_IMPORTED_MODULE_35__["GroupService"],
                _user_member_member_service__WEBPACK_IMPORTED_MODULE_36__["MembersService"],
                _user_room_room_service__WEBPACK_IMPORTED_MODULE_37__["RoomService"],
                _user_roomAccess_room_access_service__WEBPACK_IMPORTED_MODULE_38__["RoomAccessService"],
                _user_auditTrail_audit_trail_service__WEBPACK_IMPORTED_MODULE_39__["AuditTrailService"],
                _user_roomStatus_room_status_service__WEBPACK_IMPORTED_MODULE_40__["RoomStatusService"],
                _session_service__WEBPACK_IMPORTED_MODULE_41__["SessionService"],
                _error_handler_service__WEBPACK_IMPORTED_MODULE_42__["ErrorHandlerService"],
                _dashboard_service__WEBPACK_IMPORTED_MODULE_43__["DashboardService"],
                _share_sidebar_header_sidebar_header_component__WEBPACK_IMPORTED_MODULE_44__["SidebarHeaderComponent"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../.././environments/environment */ "./src/environments/environment.ts");






var DashboardService = /** @class */ (function () {
    function DashboardService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user/auditTrail/audit-trail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal2\">\n    <div class=\"form-group2 col2-sm-12\">\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"input-group-btn\">\n               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row}}&emsp;</button>\n               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\" ><span class=\"caret\"></span></button>\n\t               <ul id=\"selectList\" class=\"dropdown-menu\">\n\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t               </ul>\n       \t\t</div>\n\t\t</div>\n\t\t<div class=\"col2-sm-6\">\n\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t</div>\n\t\t</div>\n    </div>                   \n</div>    \n\t<table class=\"table table-striped table-bordered table-hover \">\n\t<thead>\n\t\t<tr>\t\t\t\n\t\t\t<th style=\"width: 40px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('Fname',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\tFirst Name<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\n\t\t\t<th (click)=\"sort('username',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('cardID',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('permission',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\tPermission<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('room',5)\" class=\"{{class[1][5]}}\">\n\t\t\t\tRoom<span class=\"fa fa-sort{{class[0][5]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('timestamp',6)\" class=\"{{class[1][6]}}\">\n\t\t\t\tTimestamp<span class=\"fa fa-sort{{class[0][6]}} pull-right\"></span>\n\t\t\t</th>\n\t\t\t<th (click)=\"sort('action',7)\" class=\"{{class[1][7]}}\" style=\"width: 70px\">\n\t\t\t\taction<span class=\"fa fa-sort{{class[0][7]}} pull-right\"></span>\n\t\t\t</th>\t\t\t\t\t\t\t\t\t\t\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of auditTrail | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<td>{{data.id}}</td>\n\t\t\t<td>{{data.Fname}}</td>\n\t\t\t<td>{{data.username}}</td>\n\t\t\t<td>{{data.cardID}}</td>\n\t\t\t<td>{{data.permission}}</td>\n\t\t\t<td>{{data.room}}</td>\t\n\t\t\t<td>{{data.timestamp}}</td>\t\n\t\t\t<td>{{data.action}}</td>\t\t\t\t\t\t\t\t\n\t\t</tr>\n\t</tbody>\n</table>\n<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n<div class=\"pull-right\">\n\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div><br><br>\t\n <button type=\"submit\" class=\"btn btn-w-m btn-primary btn-sm\" (click) = \"refresh()\">Refresh</button>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user/auditTrail/audit-trail.component.ts ***!
  \********************************************************************/
/*! exports provided: AuditTrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function() { return AuditTrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audit_trail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audit-trail.service */ "./src/app/dashboard/user/auditTrail/audit-trail.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");




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
    AuditTrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'audit-trail-cmp',
            template: __webpack_require__(/*! ./audit-trail.component.html */ "./src/app/dashboard/user/auditTrail/audit-trail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_audit_trail_service__WEBPACK_IMPORTED_MODULE_2__["AuditTrailService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], AuditTrailComponent);
    return AuditTrailComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/auditTrail/audit-trail.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user/auditTrail/audit-trail.service.ts ***!
  \******************************************************************/
/*! exports provided: AuditTrailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTrailService", function() { return AuditTrailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var AuditTrailService = /** @class */ (function () {
    function AuditTrailService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    AuditTrailService.prototype.GetAuditTrails = function () {
        return this.http.get(this.baseUrl + "/auditTrail", {
            headers: this.Headers()
        });
    };
    AuditTrailService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    AuditTrailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuditTrailService);
    return AuditTrailService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/group/group.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/user/group/group.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let group of groups\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t    <div class=\"grow\">\n\t\t\t        <div class=\"contact-box\">                       \n\t\t\t            <div class=\"col-lg-4\">\n\t\t\t                <div class=\"text-center\">\n\t\t\t                    <img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{group.name[0]}}.png\">                          \n\t\t\t                    <div class=\"m-t-xs font-bold\">Room: {{group.id}}</div>\n\t\t\t                </div>\t\t\t             \n\t\t\t            </div>\n\t\t\t            <a (click)=showMember(group.id)>\n\t\t\t                <div class=\"col-sm-8\">                    \n\t\t\t                    <h3><strong>{{group.name}}</strong></h3>                    \n\t\t\t                    <strong>Description:</strong><br>\n                          <p>{{group.description}}</p>\n                          <strong>Permission:</strong><br>\n                          <p>{{group.permission_name}}</p>\n                          <strong>Number of members:</strong>&nbsp;{{group.members}}                                    \n\t\t\t                </div>\n\t\t\t                <div class=\"clearfix\"></div>\n\t\t\t            </a>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>    \n    </div>\n</div> -->\n\n<div class=\"form-horizontal2\">\n\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>                   \n\t</div>\n\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tMembers<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let group of groups | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\" (click)=showMember(group.id)>{{group.id}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.name}}</td>\n\t\t\t\t<td (click)=showMember(group.id)>{{group.description}}</td>\n\t\t\t\t<td class=\"text-center\" style=\"width: 90px\" (click)=GroupAccess(group.id)>{{group.members}}</td>\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n "

/***/ }),

/***/ "./src/app/dashboard/user/group/group.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/user/group/group.component.ts ***!
  \*********************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.service */ "./src/app/dashboard/user/group/group.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'group-cmp',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/dashboard/user/group/group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/group/group.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/user/group/group.service.ts ***!
  \*******************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var GroupService = /** @class */ (function () {
    function GroupService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    GroupService.prototype.getGroups = function () {
        return this.http.get(this.baseUrl + "/groups", {
            headers: this.Headers()
        });
    };
    GroupService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/member/member.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/user/member/member.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let member of groupMember | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p, id: 'first' };\">\t\t\t\t\n\t\t\t\t<td>{{member.id}}</td>\n\t\t\t\t<td>{{member.username}}</td>\n\t\t\t\t<td>{{member.Lname}}</td>\n\t\t\t\t<td>{{member.Fname}}</td>\n\t\t\t\t<td>{{member.cardID}}</td>\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\" id = \"first\"></pagination-controls>\n\t</div><br><br>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\t\n </form>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/member/member.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/user/member/member.component.ts ***!
  \***********************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.service */ "./src/app/dashboard/user/member/member.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'member-cmp',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/dashboard/user/member/member.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _member_service__WEBPACK_IMPORTED_MODULE_3__["MembersService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/member/member.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/user/member/member.service.ts ***!
  \*********************************************************/
/*! exports provided: MembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var MembersService = /** @class */ (function () {
    function MembersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    MembersService.prototype.getAllMem = function (id) {
        return this.http.get(this.baseUrl + "/groupMember/" + id, {
            headers: this.Headers()
        });
    };
    MembersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    MembersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MembersService);
    return MembersService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/user/permission/permission.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n\t<div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n               <button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\" >&emsp;{{row}}&emsp;</button>\n               <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n               <ul id=\"selectList\" class=\"dropdown-menu\">\n               \t   <li><a (click)=manageRow(10)>10</a></li>\n                   <li><a (click)=manageRow(50)>50</a></li>\n                   <li><a (click)=manageRow(100)>100</a></li>\n                   <li><a (click)=manageRow(200)>Show all</a></li>                 \n               </ul>\n           </div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>\n    <p>Showing 1 to {{row}} of {{totalUsr}}</p>\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let permission of permissions | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\">{{permission.id}}</td>\n\t\t\t\t<td>{{permission.name}}</td>\n\t\t\t\t<td>{{permission.description}}</td>\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\t\n </form>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/user/permission/permission.component.ts ***!
  \*******************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.service */ "./src/app/dashboard/user/permission/permission.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");




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
    PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'permission-cmp',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/dashboard/user/permission/permission.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/permission/permission.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/user/permission/permission.service.ts ***!
  \*****************************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var PermissionService = /** @class */ (function () {
    function PermissionService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    PermissionService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/permissions", {
            headers: this.Headers()
        });
    };
    PermissionService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    PermissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/room/room.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/user/room/room.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\n\t\t<div *ngFor = \"let room of rooms\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t    <div class=\"grow\">\n\t\t\t        <div class=\"contact-box\">                       \n\t\t\t            <div class=\"col-lg-4\">\n\t\t\t                <div class=\"text-center\">\n\t\t\t                    <img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.name[0]}}.png\">\n\t\t\t                    <div class=\"m-t-xs font-bold\">Room: {{room.id}}</div>\n\t\t\t                </div>\t\t\t               \n\t\t\t            </div>\n\t\t\t            <a (click)=GroupAccess(room.id)>\n\t\t\t                <div class=\"col-sm-8\">                    \n\t\t\t                    <h3><strong>{{room.name}}</strong></h3>                    \n\t\t\t                    <strong>Description</strong><br>\n\t\t\t                     <h5>{{room.description}}</h5><br>\n\t\t\t                    <strong>Number of groups:</strong>&nbsp;{{room.groups}}<br>\t\t\t                                    \n\t\t\t                </div>\n\t\t\t                <div class=\"clearfix\"></div>\n\t\t\t            </a>\n\t\t\t        </div>\n\t\t\t    </div>\n\t\t\t</div>\n\t\t</div>\n\n    </div>\n</div>            \n -->\n\n <div class=\"form-horizontal2\">\n\t\t\t\t\t<div class=\"form-group2 col2-sm-12\">\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t\t\t\t\t\t\t<ul id=\"selectList\" class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(10)>10</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(50)>50</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(100)>100</a></li>\n\t\t\t\t\t\t\t\t\t<li><a (click)=manageRow(200)>Show all</a></li>                 \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\"> \t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>                   \n\t\t\t\t</div>\t\t\t\t\n\t\t\t\t<table class=\"table table-striped table-bordered table-hover\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\t\t\t\t\n\t\t\t\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('name',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\t\t\t\tName<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\t\t\t\tDescription<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th (click)=\"sort('description',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\t\t\t\tGroups<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t\t\t\t</th>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let room of rooms | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t\t\t\t<td class=\"text-center\" style=\"padding: 7px 0\" (click)=GroupAccess(room.id)>{{room.id}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.name}}</td>\n\t\t\t\t\t\t\t<td (click)=GroupAccess(room.id)>{{room.description}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\" style=\"width: 80px\" (click)=GroupAccess(room.id)>{{room.groups}}</td>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t\t\t\t</div><br><br>\n \n\n"

/***/ }),

/***/ "./src/app/dashboard/user/room/room.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/user/room/room.component.ts ***!
  \*******************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room.service */ "./src/app/dashboard/user/room/room.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    RoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-cmp',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/dashboard/user/room/room.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/room/room.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/user/room/room.service.ts ***!
  \*****************************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var RoomService = /** @class */ (function () {
    function RoomService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    RoomService.prototype.getRooms = function () {
        return this.http.get(this.baseUrl + "/rooms", {
            headers: this.Headers()
        });
    };
    RoomService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user/roomAccess/room-access.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #input=\"ngForm\">\n \t<table class=\"table table-striped table-bordered table-hover\">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\n\t\t\t\t<th style=\"width: 40px\">ID</th>\n\t\t\t\t<th>Group Name</th>\n\t\t\t\t<th >Permission Name</th>\n\t\t\t\t<th style=\"width: 40px\">Users</th>\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let access of groupAccess\">\t\t\t\t\n\t\t\t\t<td>{{access.id}}</td>\n\t\t\t\t<td>{{access.groupName}}</td>\n\t\t\t\t<td>{{access.permissionName}}</td>\n\t\t\t\t<td align=\"center\">{{access.users}}</td>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<button type=\"button\" class=\"btn btn-back btn-sm\" (click) = \"back()\">Back</button>\t\n </form>\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user/roomAccess/room-access.component.ts ***!
  \********************************************************************/
/*! exports provided: RoomAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAccessComponent", function() { return RoomAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _room_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-access.service */ "./src/app/dashboard/user/roomAccess/room-access.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");





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
    RoomAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-access-cmp',
            template: __webpack_require__(/*! ./room-access.component.html */ "./src/app/dashboard/user/roomAccess/room-access.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_access_service__WEBPACK_IMPORTED_MODULE_3__["RoomAccessService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoomAccessComponent);
    return RoomAccessComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomAccess/room-access.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user/roomAccess/room-access.service.ts ***!
  \******************************************************************/
/*! exports provided: RoomAccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAccessService", function() { return RoomAccessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var RoomAccessService = /** @class */ (function () {
    function RoomAccessService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    RoomAccessService.prototype.getGroupAccess = function (id) {
        return this.http.get(this.baseUrl + "/groupAccess/" + id, {
            headers: this.Headers()
        });
    };
    RoomAccessService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomAccessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RoomAccessService);
    return RoomAccessService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user/roomStatus/room-status.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<ng-container *ngFor=\"let room of room_status  | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\n\t\t\t<div class=\"room-status col-lg-3\">\n\t\t\t\t<div class=\"grow\">\n          <div class=\"ibox-title\">             \n              <h5>ID-{{room.room_id}} - {{room.room_name}}</h5>\n          </div>\n\t\t\t\t\t<div class=\"contact-box\" style=\"height: 220px\">\n\t\t\t\t\t\t<!-- <div class=\"col-md-4\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\t\t                    \n\t\t\t\t\t\t\t\t<img alt=\"image\" class=\"img-circle m-t-xs img-responsive\" src=\"assets/img/letters/{{room.room_name[0]}}.png\">                          \n\t\t\t\t\t\t\t\t<div class=\"m-t-xs font-bold\">Room: {{room.room_id}}</div><br>\n\t\t\t\t\t\t\t\t<ng-container *ngIf = \"room.add_device\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-xs\" data-toggle=\"modal\" href=\"#modal-add-devies\" (click) = \"getRoomDevice(room.room_id)\">Add Device</button>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<div class=\"\">\t\t\t\t\t\t\t\t                  \t\t\t                 \n\t\t\t\t\t\t\t\t<strong>Devices:</strong><br><br>\n\t\t\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t\t\t<tbody class=\"room-status\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let device of room.devices\" >\n                      <ng-container *ngIf = \"device.remote_design != 'Temperature Slider'\">\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 40px; padding-right: 20px; padding-left: 5px\">                         \n  \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"switch\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch{{device.class_name}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'True' || device.device_status == 'true'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" checked (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngIf = \"device.device_status == 'False' || device.device_status == 'false'\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"onoffswitch-checkbox\" id=\"{{device.room_status_id}}\" (change)=\"valuechange($event)\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\t\t\t\t\t                                    \n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" for=\"{{device.room_status_id}}\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch{{device.class_name}}\"></span>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t\t\t\t</td>                        \n                      </ng-container>                     \n                      <ng-container *ngIf = \"device.remote_design == 'Temperature Slider'\">\n                        <td style=\"width: 150px ; padding-right: 5px; padding-left: 5px\">{{device.device_name}}</td>\n                        <td style=\"width: 1000px\"><input type=\"text\" id=\"{{device.room_status_id}}\"></td>\n                        <td style=\"width: 100px\"></td>                        \n                      </ng-container>                    \t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>                \t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>            \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</ng-container>\n\t</div>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>\n\n  <div class=\"footer fixed\">\n    <div class=\"pull-right\">\n      <div class=\"form-group form-horizontal\">\n        <label class=\"col-lg-2 control-label\">Search:</label>\n        <div class=\"col-lg-10\">\n          <input type=\"text\" class=\"form-control\" name=\"search\" [(ngModel)]=\"filter\" style=\"height: 30px\">\n        </div>\n      </div>   \n    </div>    \n  </div>"

/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/user/roomStatus/room-status.component.ts ***!
  \********************************************************************/
/*! exports provided: RoomStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomStatusComponent", function() { return RoomStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _room_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-status.service */ "./src/app/dashboard/user/roomStatus/room-status.service.ts");



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
    RoomStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'room-status-cmp',
            template: __webpack_require__(/*! ./room-status.component.html */ "./src/app/dashboard/user/roomStatus/room-status.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_room_status_service__WEBPACK_IMPORTED_MODULE_2__["RoomStatusService"]])
    ], RoomStatusComponent);
    return RoomStatusComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/roomStatus/room-status.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/user/roomStatus/room-status.service.ts ***!
  \******************************************************************/
/*! exports provided: RoomStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomStatusService", function() { return RoomStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var RoomStatusService = /** @class */ (function () {
    function RoomStatusService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    RoomStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RoomStatusService);
    return RoomStatusService;
}());



/***/ }),

/***/ "./src/app/dashboard/user/users/users.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/user/users/users.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col2-sm-10\"><div class=\"col-sm-6\"></div><p style=\"color: red\">{{message}}</p></div>\n<form #input=\"ngForm\">\n\n    <div class=\"form-horizontal2\">\n        <div class=\"form-group2 col2-sm-12\">\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"input-group-btn\">\n\t               \t<button tabindex=\"-1\" class=\"btn btn-white btn2-sm\" type=\"button\" (click)=\"selecTag()\">&emsp;{{row}}&emsp;</button>\n\t               \t<button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle btn2-sm\" type=\"button\" (click)=\"selecTag()\"><span class=\"caret\"></span></button>\n\t\t               <ul  id=\"selectList\" class=\"dropdown-menu\">\n\t\t               \t   <li><a (click)=manageRow(10)>10</a></li>\n\t\t                   <li><a (click)=manageRow(50)>50</a></li>\n\t\t                   <li><a (click)=manageRow(100)>100</a></li>\n\t\t                   <li><a (click)=manageRow(totalUsr)>Show all</a></li>                 \n\t\t               </ul>\n           \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col2-sm-6\">\n\t\t\t\t<div class=\"col2-sm-7\"></div>\n\t\t\t\t<div class=\"col2-sm-5\">\t\t\t\t\t\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control pull-right input-sm\" name=\"search\" [(ngModel)]=\"filter\">\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>                   \n    </div>    \n \t<table class=\"table table-striped table-bordered table-hover \">\n\t\t<thead>\n\t\t\t<tr>\t\t\t\t\t\t\n\t\t\t\t<th style=\"width: 50px\" (click)=\"sort('id',0)\" class=\"{{class[1][0]}}\">\n\t\t\t\t\tID<span class=\"fa fa-sort{{class[0][0]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\n\t\t\t\t<th (click)=\"sort('Username',1)\" class=\"{{class[1][1]}}\">\n\t\t\t\t\tUsername<span class=\"fa fa-sort{{class[0][1]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Lname',2)\" class=\"{{class[1][2]}}\">\n\t\t\t\t\tLastname<span class=\"fa fa-sort{{class[0][2]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('Fname',3)\" class=\"{{class[1][3]}}\">\n\t\t\t\t\tFirtname<span class=\"fa fa-sort{{class[0][3]}} pull-right\"></span>\n\t\t\t\t</th>\n\t\t\t\t<th (click)=\"sort('CardID',4)\" class=\"{{class[1][4]}}\">\n\t\t\t\t\tCardID<span class=\"fa fa-sort{{class[0][4]}} pull-right\"></span>\n\t\t\t\t</th>\t\t\t\t\t\t\t\t\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of users | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: row, currentPage: p };\">\t\t\t\t\n\t\t\t\t<td class=\"text-center\" style=\"padding: 6px 0\">{{user.id}}</td>\n\t\t\t\t<td>{{user.username}}</td>\n\t\t\t\t<td>{{user.Lname}}</td>\n\t\t\t\t<td>{{user.Fname}}</td>\n\t\t\t\t<td>{{user.cardID}}</td>\t\t\t\n        <td hidden=\"hidden\">                                                       \n          <button type=\"submit\" class=\"btn btn-danger btn-xs\">\n            <span class=\"glyphicon glyphicon-trash\"></span>\n          </button>\n        </td>\t\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\t<p>Showing 1 to {{row}} of {{totalUsr}}</p>\n\t<div class=\"pull-right\">\n\t\t<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\t</div><br><br>\n\n </form>\n\n\n"

/***/ }),

/***/ "./src/app/dashboard/user/users/users.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/user/users/users.component.ts ***!
  \*********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/dashboard/user/users/users.service.ts");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../error-handler.service */ "./src/app/error-handler.service.ts");




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
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users-cmp',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/dashboard/user/users/users.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/users/users.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/user/users/users.service.ts ***!
  \*******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






var UsersService = /** @class */ (function () {
    function UsersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    UsersService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/users", {
            headers: this.Headers()
        });
    };
    UsersService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            this.cookieService.deleteAll();
            this.router.navigate(['/login']);
        }
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/error-handler.service.ts":
/*!******************************************!*\
  !*** ./src/app/error-handler.service.ts ***!
  \******************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(route) {
        this.route = route;
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        console.error(error);
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
    ErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());



/***/ }),

/***/ "./src/app/route-guard.ts":
/*!********************************!*\
  !*** ./src/app/route-guard.ts ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService, router, cookieService, http) {
        this.loginService = loginService;
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if ('data' in route && route.data.accessUrl != undefined) {
            var redirUrl = state.url;
            var accessUrl = route.data.accessUrl;
            return this.checkLogin(accessUrl, redirUrl);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(true);
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (accessUrl, redirUrl) {
        if (this.cookieService.check("token")) {
            return this.loginService.hasUrlAccess(accessUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (response) {
                console.log('access to', accessUrl, ':', response);
                return response;
            }));
        }
        else {
            this.loginService.redirectUrl = redirUrl;
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(false);
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.component.html":
/*!********************************************************************!*\
  !*** ./src/app/share/content-header/content-header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\n\t<a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" (click)=\"manage_sidebar()\"><i class=\"fa fa-bars\"></i></a>\n</div>\n<ul class=\"nav navbar-top-links navbar-right\">\n    <li>\n        <span class=\"m-r-sm text-muted welcome-message\">Welcome to Nightowl Class Room Control.</span>\n    </li>\n    <li class=\"dropdown\">\n    <li>\n        <a (click) = \"Logout()\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n        \n    </li>\n    <li>\n        &emsp;&emsp;\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/share/content-header/content-header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/share/content-header/content-header.component.ts ***!
  \******************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-header.service */ "./src/app/share/content-header/content-header.service.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../session.service */ "./src/app/session.service.ts");





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
        $("#sidebar").toggleClass('active');
        $("#page-wrapper").toggleClass('nomenu');
    };
    ContentHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-header-cmp',
            template: __webpack_require__(/*! ./content-header.component.html */ "./src/app/share/content-header/content-header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _content_header_service__WEBPACK_IMPORTED_MODULE_3__["ContentHeaderService"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], ContentHeaderComponent);
    return ContentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/share/content-header/content-header.module.ts ***!
  \***************************************************************/
/*! exports provided: ContentHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderModule", function() { return ContentHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _content_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-header.service */ "./src/app/share/content-header/content-header.service.ts");
/* harmony import */ var _content_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-header.component */ "./src/app/share/content-header/content-header.component.ts");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../session.service */ "./src/app/session.service.ts");








var ContentHeaderModule = /** @class */ (function () {
    function ContentHeaderModule() {
    }
    ContentHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_content_header_component__WEBPACK_IMPORTED_MODULE_6__["ContentHeaderComponent"]],
            exports: [_content_header_component__WEBPACK_IMPORTED_MODULE_6__["ContentHeaderComponent"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _content_header_service__WEBPACK_IMPORTED_MODULE_5__["ContentHeaderService"], _session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]]
        })
    ], ContentHeaderModule);
    return ContentHeaderModule;
}());



/***/ }),

/***/ "./src/app/share/content-header/content-header.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/share/content-header/content-header.service.ts ***!
  \****************************************************************/
/*! exports provided: ContentHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderService", function() { return ContentHeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var ContentHeaderService = /** @class */ (function () {
    function ContentHeaderService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
    }
    ContentHeaderService.prototype.logout = function (data) {
        return this.http.post(this.baseUrl + "/logout", data, {
            headers: this.Headers()
        });
    };
    ContentHeaderService.prototype.Headers = function () {
        if (this.cookieService.get('token')) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    ContentHeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContentHeaderService);
    return ContentHeaderService;
}());



/***/ }),

/***/ "./src/app/share/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/share/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"footer\">   \n    <div>\n        <strong>Copyright</strong> Nightowl Company &copy; 2017-2018\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/share/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/share/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/share/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/share/footer/footer.module.ts":
/*!***********************************************!*\
  !*** ./src/app/share/footer/footer.module.ts ***!
  \***********************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "./src/app/share/footer/footer.component.ts");





var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/share/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-10\">\n        <h2>{{title}}</h2>\n        <ol class=\"breadcrumb\">\n            <li *ngFor=\"let data of breadcrumb\" >\n                <a (click) = \"navigate(data['path'])\" >{{data['name']}}</a>\n            </li>           \n        </ol>\n    </div>\n    <div class=\"col-lg-2\">\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/share/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/share/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.service */ "./src/app/share/navbar/navbar.service.ts");





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
                    this.navbarService.GetRoomDetail(url.slice(24, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'admin/rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetRoomDetail(url.slice(24, url.length))
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
                    this.navbarService.GetRoomDetail(url.slice(24, url.length))
                        .subscribe(function (data) {
                        _this.breadcrumb.push({ 'name': 'Rooms', 'path': 'admin/rooms' }, { 'name': data['data'].name, 'path': '' });
                        _this.title = data['data'].name;
                    }, function (error) {
                        _this.handleError(error);
                    });
                }
                else {
                    this.navbarService.GetRoomDetail(url.slice(18, url.length))
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
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/share/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavBarService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.module.ts":
/*!***********************************************!*\
  !*** ./src/app/share/navbar/navbar.module.ts ***!
  \***********************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "./src/app/share/navbar/navbar.component.ts");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.service */ "./src/app/share/navbar/navbar.service.ts");






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
            providers: [_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavBarService"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/share/navbar/navbar.service.ts":
/*!************************************************!*\
  !*** ./src/app/share/navbar/navbar.service.ts ***!
  \************************************************/
/*! exports provided: NavBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarService", function() { return NavBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var NavBarService = /** @class */ (function () {
    function NavBarService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.router.navigate(['/login']);
        }
    };
    NavBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavBarService);
    return NavBarService;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.component.html":
/*!********************************************************************!*\
  !*** ./src/app/share/sidebar-header/sidebar-header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-header\">\n    <div class=\"dropdown profile-element\"> \n        <span>\n            <img alt=\"image\" class=\"img-circle sidebar-header\" id=\"user_photo\" />\n        </span>\n        <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" (click)=\"selecTag()\">\n            <span class=\"clear\"> \n                <span class=\"block m-t-xs\">\n                    <strong id = \"user_name\" class=\"font-bold\"></strong>                   \n                </span> \n                <span class=\"text-muted text-xs block\">\n                  <span class=\"icon fa fa-cog\"></span><span class='text'>Profile</span><b class=\"caret\"></b>\n                </span> \n            </span> \n        </a>\n        <ul id=\"selectList-sd\" class=\"dropdown-menu animated fadeInRight m-t-xs\">\n            <li>\n                <a data-toggle=\"modal\" href=\"#modal-users\" (click)=\"selecTag()\">Edit Profile</a>\n            </li>\n            <li>\n                <a data-toggle=\"modal\" href=\"#modal-users2\" (click)=\"selecTag()\">Change Password</a>\n            </li>          \n        </ul>\n    </div>\n    <div class=\"logo-element\">\n    N.S.\n    </div>\n</li>\n"

/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/share/sidebar-header/sidebar-header.component.ts ***!
  \******************************************************************/
/*! exports provided: SidebarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHeaderComponent", function() { return SidebarHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sidebar_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-header.service */ "./src/app/share/sidebar-header/sidebar-header.service.ts");




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
    SidebarHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-header-cmp',
            template: __webpack_require__(/*! ./sidebar-header.component.html */ "./src/app/share/sidebar-header/sidebar-header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_header_service__WEBPACK_IMPORTED_MODULE_3__["SidebarHeadersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SidebarHeaderComponent);
    return SidebarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/share/sidebar-header/sidebar-header.module.ts ***!
  \***************************************************************/
/*! exports provided: SidebarHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHeaderModule", function() { return SidebarHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sidebar_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-header.component */ "./src/app/share/sidebar-header/sidebar-header.component.ts");
/* harmony import */ var _sidebar_header_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar-header.service */ "./src/app/share/sidebar-header/sidebar-header.service.ts");







var SidebarHeaderModule = /** @class */ (function () {
    function SidebarHeaderModule() {
    }
    SidebarHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            declarations: [_sidebar_header_component__WEBPACK_IMPORTED_MODULE_5__["SidebarHeaderComponent"]],
            exports: [_sidebar_header_component__WEBPACK_IMPORTED_MODULE_5__["SidebarHeaderComponent"]],
            providers: [_sidebar_header_service__WEBPACK_IMPORTED_MODULE_6__["SidebarHeadersService"]]
        })
    ], SidebarHeaderModule);
    return SidebarHeaderModule;
}());



/***/ }),

/***/ "./src/app/share/sidebar-header/sidebar-header.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/share/sidebar-header/sidebar-header.service.ts ***!
  \****************************************************************/
/*! exports provided: SidebarHeadersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHeadersService", function() { return SidebarHeadersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var SidebarHeadersService = /** @class */ (function () {
    function SidebarHeadersService(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend_uri;
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
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('x-access-token', this.cookieService.get('token'));
        }
        else {
            console.log("token is missing");
            this.cookieService.delete("token");
            this.cookieService.delete('username');
            this.cookieService.delete('userType');
            this.router.navigate(['/login']);
        }
    };
    SidebarHeadersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SidebarHeadersService);
    return SidebarHeadersService;
}());



/***/ }),

/***/ "./src/app/share/table-header/table-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/share/table-header/table-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ibox-title fullscreen\"> -->\n    <!-- <h5>Basic Data Tables example with responsive plugin</h5> -->\n    <!-- <div class=\"ibox-tools\"> -->\n       <!--  <a class=\"collapse-link\">\n            <i class=\"fa fa-chevron-up\"></i>\n        </a>\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            <i class=\"fa fa-wrench\"></i>\n        </a>\n        <ul class=\"dropdown-menu dropdown-user\">\n            <li><a href=\"#\">Config option 1</a>\n            </li>\n            <li><a href=\"#\">Config option 2</a>\n            </li>\n        </ul>\n        <a class=\"fullscreen-link\">\n            <i class=\"fa fa-expand\"></i>\n        </a>\n        <a class=\"close-link\">\n            <i class=\"fa fa-times\"></i>\n        </a> -->\n    <!-- </div> -->\n<!-- </div>  -->"

/***/ }),

/***/ "./src/app/share/table-header/table-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/share/table-header/table-header.component.ts ***!
  \**************************************************************/
/*! exports provided: TableHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderComponent", function() { return TableHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent() {
    }
    TableHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'table-header-cmp',
            template: __webpack_require__(/*! ./table-header.component.html */ "./src/app/share/table-header/table-header.component.html")
        })
    ], TableHeaderComponent);
    return TableHeaderComponent;
}());



/***/ }),

/***/ "./src/app/share/table-header/table-header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/share/table-header/table-header.module.ts ***!
  \***********************************************************/
/*! exports provided: TableHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderModule", function() { return TableHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-header.component */ "./src/app/share/table-header/table-header.component.ts");





var TableHeaderModule = /** @class */ (function () {
    function TableHeaderModule() {
    }
    TableHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_table_header_component__WEBPACK_IMPORTED_MODULE_4__["TableHeaderComponent"]],
            exports: [_table_header_component__WEBPACK_IMPORTED_MODULE_4__["TableHeaderComponent"]]
        })
    ], TableHeaderModule);
    return TableHeaderModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let menuItem of menuItems\" class=\"nav\">\n<li class=\"{{menuItem.status}}\" *ngIf = \"menuItem !== undefined\">\n\t<a \n    [routerLink]=\"['/home/'+menuItem.path]\"\n    [routerLinkActive]=\"menuItem.status\">\n\t\t<i class=\"{{menuItem.icon}}\"></i> \n\t\t<span class=\"nav-label\">{{menuItem.title}}</span>\n\t</a>\n</li>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");







var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(loginService, activeRoute, location, router, cookieService) {
        this.loginService = loginService;
        this.activeRoute = activeRoute;
        this.location = location;
        this.router = router;
        this.cookieService = cookieService;
        this.status = "active";
        this.navEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }));
    }
    SidebarComponent.prototype.addMenuItem = function (item, access) {
        if (access) {
            this.menuItems[item.order] = item;
        }
        else {
            console.warn("Access denied for", item);
        }
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = [];
        var i = 0;
        this.activeRoute.snapshot.routeConfig.children.forEach(function (route) {
            if ('data' in route && route.data.inMenu) {
                console.log("Checking access for", route);
                var access_check = void 0;
                var item = {
                    path: route.path,
                    order: i,
                    icon: route.data.icon,
                    title: route.data.title,
                    class: route.data.class,
                    status: '/home/' + route.path == _this.location.path() ? "active" : "",
                };
                if ('accessUrl' in route.data) {
                    _this.loginService.hasUrlAccess(route.data.accessUrl).subscribe(_this.addMenuItem.bind(_this, item));
                }
                else {
                    _this.addMenuItem(item, true);
                }
                i += 1;
            }
        });
        this.navEnd.subscribe(function (evt) {
            _this.menuItems.forEach(function (item) {
                item.status = '/home/' + item.path == _this.location.path() ? "active" : "";
            });
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");





var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map