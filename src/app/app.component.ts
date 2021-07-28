import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div class="btn-group btn-group-toggle">
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton> Left (pre-checked)
  </label>
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton> Middle
  </label>
  <label class="btn-primary" ngbButtonLabel>
    <input type="checkbox" ngbButton> Right
  </label>
</div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ngswa';
}
