import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
        .offline {
            color: purple;
        }
    `]
})
export class ServerComponent {
    id = 10;
    status: string;

    constructor() {
        this.status = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getStatus() {
        return this.status;
    }

    getColor() {
        return this.status === 'Online' ? 'lightblue' : 'orange';
    }
}