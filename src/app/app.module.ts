import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
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
