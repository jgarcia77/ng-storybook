import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AliasesComponent } from '../../app/forms/aliases/aliases.component';
import { ReactiveFormComponent } from '../../app/forms/reactive-form/reactive-form.component';
import { text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const stories = storiesOf('Forms/Reactive', module);

stories.addDecorator(moduleMetadata({
    imports: [ReactiveFormsModule],
    declarations: [AliasesComponent]
}));

stories.add('default', () => ({
    component: ReactiveFormComponent,
    props: {
        submit: action('submit')
    }
}));