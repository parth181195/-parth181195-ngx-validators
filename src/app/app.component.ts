import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CustomValidators} from '@parth181195/ngx-validators';
import {graterThen} from '../../projects/parth181195/ngx-validators/src/lib/validators/grater-then.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'validators';
  ctrl = new FormControl(8, [CustomValidators.lessThen(10)]);
  ctrl2 = new FormControl('2016-11-09T01:00:23Z', [CustomValidators.isEqualTo(this.ctrl)]);
}
