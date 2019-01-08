import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../../app/forms/reactive-form/reactive-form.component';
import { text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Forms/Reactive', module);

stories.addDecorator(moduleMetadata({
    imports: [ReactiveFormsModule],
    declarations: []
}));

stories.add('default', () => ({
    component: ReactiveFormComponent
}));