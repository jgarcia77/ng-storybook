import { storiesOf } from '@storybook/angular';
//import { actions } from '@storybook/addon-actions';
import { AppComponent } from '../app/app.component';

storiesOf('App', module)
    .add('default', () => ({
        component: AppComponent,
        props: {}
    }));