import { storiesOf, moduleMetadata } from '@storybook/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AliasesComponent } from '../../app/forms/aliases/aliases.component';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

const stories = storiesOf('Forms/Aliases', module);

stories.addDecorator(moduleMetadata({
    imports: [ReactiveFormsModule],
    declarations: []
}));

stories.add('default', () => ({
    component: AliasesComponent,
    props: {
        aliases: new FormArray([]),
        aliasesChange: action('aliasesChange')
    }
}));