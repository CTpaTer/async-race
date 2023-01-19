import './footer.css';
import { BaseComponent } from '../../utils/base-component';
import createNewElement from '../../utils/createNewElement';

export class Footer extends BaseComponent {
    footer: HTMLElement;
    constructor() {
        super('footer', ['footer']);

        this.footer = createNewElement('div', 'footer-container');
        this.footer.innerHTML = `
        <div>
        <a href="https://github.com/CTpaTer" class="nav-link">My GitHub</a>
        </div>
        <div>© 2023</div>
        <div>
            <a href="https://rs.school/js/">
                <img class="footer__svg" src="https://rs.school/images/rs_school_js.svg" alt="Rsschool" width="80" height="45">
            </a>
        </div>
        `;

        this.container.appendChild(this.footer);
    }
}
