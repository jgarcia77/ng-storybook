import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FullNameComponent } from '../../app/forms/full-name/full-name.component';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Forms/FullName', module);

stories.addDecorator(moduleMetadata({
    imports: [ReactiveFormsModule],
    declarations: []
}));

stories.add('default', () => ({
    component: FullNameComponent,
    props: {
        submit: action('submit')
    }
}));