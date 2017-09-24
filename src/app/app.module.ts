import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { AppComponent }       from './app.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { HomeComponent }      from './page/home/home.component';
import { AboutComponent }     from './page/about/about.component';

@NgModule({
	declarations: [
		AppComponent,
		PortfolioComponent,
		HomeComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{path: '',          component: HomeComponent},
			{path: 'portfolio', component: PortfolioComponent},
			{path: 'about',     component: AboutComponent},
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
