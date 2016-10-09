/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _newTodo = __webpack_require__(2);

	var _newTodo2 = _interopRequireDefault(_newTodo);

	var _todoList = __webpack_require__(4);

	var _todoList2 = _interopRequireDefault(_todoList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todo = new _todoList2.default({
	    el: document.querySelector('.js-todo-list'),
	    tmpl: '#todo-list',
	    data: {
	        items: []
	    }
	});

	var newTodo = new _newTodo2.default({
	    el: document.querySelector('.js-new-todo'),
	    tmpl: '#new-todo'
	});

	newTodo.el.addEventListener('add', function (ev) {
	    todo.addItem(ev.detail);
	});

	todo.el.addEventListener('remove', function (ev) {
	    todo.removeItem(ev.detail);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateEngine = __webpack_require__(3);

	var _templateEngine2 = _interopRequireDefault(_templateEngine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NewTodo = function () {
	    function NewTodo(opts) {
	        _classCallCheck(this, NewTodo);

	        this.el = opts.el;

	        this._template = document.querySelector(opts.tmpl).innerHTML;

	        this.render();
	        this._initEvents();
	    }

	    _createClass(NewTodo, [{
	        key: 'render',
	        value: function render() {
	            this.el.innerHTML = (0, _templateEngine2.default)(this._template);
	        }
	    }, {
	        key: '_initEvents',
	        value: function _initEvents() {
	            this.el.addEventListener('submit', this._onSubmit.bind(this));
	        }
	    }, {
	        key: '_onSubmit',
	        value: function _onSubmit(ev) {
	            ev.preventDefault();

	            this.trigger('add', {
	                text: this.el.querySelector('input').value
	            });

	            ev.target.reset();
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(name, data) {
	            var wigdetEvent = new CustomEvent(name, {
	                bubbles: true,
	                detail: data
	            });

	            this.el.dispatchEvent(wigdetEvent);
	        }
	    }]);

	    return NewTodo;
	}();

	exports.default = NewTodo;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var templateEngine = function templateEngine(html, options) {
		var re = /<%([^%>]+)?%>/g,
		    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
		    code = 'var r=[];\n',
		    cursor = 0,
		    match;
		var add = function add(line, js) {
			js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' : code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
			return add;
		};
		while (match = re.exec(html)) {
			add(html.slice(cursor, match.index))(match[1], true);
			cursor = match.index + match[0].length;
		}
		add(html.substr(cursor, html.length - cursor));
		code += 'return r.join("");';
		return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
	};

	//export
	exports.default = templateEngine;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateEngine = __webpack_require__(3);

	var _templateEngine2 = _interopRequireDefault(_templateEngine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TodoList = function () {
	    function TodoList(opts) {
	        _classCallCheck(this, TodoList);

	        this.el = opts.el;
	        this.data = opts.data;

	        this._template = document.querySelector(opts.tmpl).innerHTML;

	        this.render();
	        this._initEvents();
	    }

	    _createClass(TodoList, [{
	        key: 'render',
	        value: function render() {
	            this.el.innerHTML = (0, _templateEngine2.default)(this._template, this.data);
	        }
	    }, {
	        key: '_initEvents',
	        value: function _initEvents() {
	            this.el.addEventListener('click', this._onClick.bind(this));
	        }
	    }, {
	        key: 'addItem',
	        value: function addItem(item) {
	            this.data.items.push(item);
	            this.render();
	        }
	    }, {
	        key: 'removeItem',
	        value: function removeItem(removedItem) {
	            this.data.items = this.data.items.filter(function (item, index) {
	                return index !== removedItem.index;
	            });
	            this.render();
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(ev) {
	            ev.preventDefault();

	            switch (ev.target.dataset.action) {
	                case 'remove':
	                    this._onRemoveClick(ev.target);
	                    break;

	                case 'pick':
	                    this._onPick(ev.target);
	                    break;
	            }
	        }
	    }, {
	        key: '_onRemoveClick',
	        value: function _onRemoveClick(item) {
	            var index = parseInt(item.parentNode.dataset.index, 10);

	            this.trigger('remove', {
	                index: index
	            });
	        }
	    }, {
	        key: '_onPick',
	        value: function _onPick(item) {
	            this.trigger('pick', {
	                // text: item.
	                // TODO
	            });
	        }
	    }, {
	        key: 'trigger',
	        value: function trigger(name, data) {
	            var wigdetEvent = new CustomEvent(name, {
	                bubbles: true,
	                detail: data
	            });

	            this.el.dispatchEvent(wigdetEvent);
	        }
	    }]);

	    return TodoList;
	}();

	exports.default = TodoList;

/***/ }
/******/ ]);