import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AuthenticationService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { SignUpComponent } from './sign-up/sign-up.component';
import { environment } from '../environments/environment';
import { AvatarModule } from 'ngx-avatar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ArticlesComponent } from './articles/articles.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';
//import { RightGridComponent } from './right-grid/right-grid.component';
//import { TabsModule} from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AvatarModule,
        TabsModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SignUpComponent,
        ArticlesComponent,
        NewStoryComponent,
        SelectedArticleComponent,
            ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [AppComponent]
})
export class AppModule { }
