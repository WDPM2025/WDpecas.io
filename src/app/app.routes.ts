import { Routes } from '@angular/router';

import {MainComponent} from './page/main/main.component'
import {AboutComponent} from './page/about/about.component'
import {SendEmailComponent} from './page/send-email/send-email.component'


export const routes: Routes = [
    {path:"", component:MainComponent,},
    {path:"main", component:MainComponent},
    {path:"about", component:AboutComponent},
    {path:"sendEmail", component:SendEmailComponent}
];
