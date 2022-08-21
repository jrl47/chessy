export class View {
    view: HTMLElement;
    children: View[];

    constructor(elementType: string) {
        console.log(elementType);
        this.view = document.createElement(elementType);
        console.log(this.view);
        this.children = [];
    }

    addChild(childView) {
        if (childView instanceof View) {
            this.children.push(childView);
            this.view.appendChild(childView.view);
        }
        else { throw new Error('parameter type error in View.addChild method; parameter childView must be of type View'); }
    }

    addClass(className: string) {
        this.view.classList.add(className);
    }

    removeClass(className: string) {
        this.view.classList.remove(className);
    }
}