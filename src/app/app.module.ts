import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '@env/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { IndicatorsModule } from '@shared/indicators/indicators.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopusModule } from '@shared/popus/popus.module';
import { NotificationModule } from './services/notification/notification.module';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './modules/components/header/header.component'
import { MenuListComponent } from './modules/components/menu-list/menu-list.component'
import { FooterComponent } from '@modules/components/footer/footer.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { effects, reducers } from '@store/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InjectionSessionInterceptor } from '@core/interceptors/injection-session.interceptor';

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,

    IndicatorsModule,
    BrowserAnimationsModule,
    PopusModule,
    NotificationModule.forRoot(),

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,

    FlexLayoutModule,
    HttpClientModule,

    StoreDevTools,
    StoreModule.forRoot(reducers, {
      runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InjectionSessionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
