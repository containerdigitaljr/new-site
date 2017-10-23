import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule }  from '@angular/router';

import { AppComponent }       from './app.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { HomeComponent }      from './page/home/home.component';
import { AboutComponent }     from './page/about/about.component';
import { ContactComponent }   from './page/contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		PortfolioComponent,
		HomeComponent,
		AboutComponent,	
		ContactComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyA9-3yze5W86Rcs1rCCnXMbsnjg0pEIifQ'
		}),
		RouterModule.forRoot([
			{path: '',          component: HomeComponent},
			{path: 'contatos',  component: ContactComponent},
			{path: 'portfolio', component: PortfolioComponent},
			{path: 'sobre',     component: AboutComponent},
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
