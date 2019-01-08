import { storiesOf } from '@storybook/angular';
//import { actions } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { AppComponent } from '../app/app.component';

const stories = storiesOf('App', module);

stories.addDecorator(withKnobs);

stories.add('default', () => ({
        component: AppComponent,
        props: {
            title: text('Title', 'ng-storybook')
        }
    }));