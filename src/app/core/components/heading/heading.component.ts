import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type HeadingElementPattern = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  @Input()
  elementName: HeadingElementPattern | null = null;
}
