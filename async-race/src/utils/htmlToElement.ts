export default function (htmlString: string): ChildNode {
    const template: HTMLTemplateElement = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild as ChildNode;
}
