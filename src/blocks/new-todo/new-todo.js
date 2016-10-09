import templateEngine from './../../libs/templateEngine'

export default class NewTodo {

    constructor(opts) {
        this.el = opts.el;

        this._template = document.querySelector(opts.tmpl).innerHTML;

        this.render();
        this._initEvents();
    }

    render() {
        this.el.innerHTML = templateEngine(this._template);
    }

    _initEvents() {
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(ev) {
        ev.preventDefault();

        this.trigger('add', {
            text: this.el.querySelector('input').value
        });

        ev.target.reset();
    }

    trigger(name, data) {
        let wigdetEvent = new CustomEvent(name, {
            bubbles: true,
            detail: data
        });

        this.el.dispatchEvent(wigdetEvent);
    }

}