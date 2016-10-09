import templateEngine from './../../libs/templateEngine'

export default class TodoList {

    constructor(opts) {
        this.el = opts.el;
        this.data = opts.data;

        this._template = document.querySelector(opts.tmpl).innerHTML;

        this.render();
        this._initEvents();
    }

    render() {
        this.el.innerHTML = templateEngine(this._template, this.data);
    }

    _initEvents() {
        this.el.addEventListener('click', this._onClick.bind(this));
    }

    addItem(item) {
        this.data.items.push(item);
        this.render();
    }

    removeItem(removedItem) {
        this.data.items = this.data.items.filter( (item, index) => {
            return index !== removedItem.index
        } );
        this.render();
    }

    _onClick(ev) {
        ev.preventDefault();

        switch (ev.target.dataset.action) {
            case 'remove':
                this._onRemoveClick(ev.target);
                break;

            case 'pick':
                this._onPick(ev.target);
                break
        }
    }

    _onRemoveClick(item) {
        let index = parseInt(item.parentNode.dataset.index, 10);

        this.trigger('remove', {
            index
        })
    }

    _onPick(item) {
        this.trigger('pick', {
            // text: item.
            // TODO
        })
    }

    trigger(name, data) {
        let wigdetEvent = new CustomEvent(name, {
            bubbles: true,
            detail: data
        });

        this.el.dispatchEvent(wigdetEvent);
    }

}