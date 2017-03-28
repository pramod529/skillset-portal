import { Component } from '@angular/core';
import {CountryService} from '../../services/countryservice';
import {Message,SelectItem} from 'primeng/primeng';


@Component({
    selector: 'p-datatable',
    templateUrl: '/components/autocomplete/autocomplete.component.html'
    
})
export class AutoCompleteComponent {

    country: any;
    
    countries: any[];
	
	date3: Date;
	
	countris: SelectItem[];
	
	selectedContries: string[] = [];
        
    filteredCountriesSingle: any[];
    
    filteredCountriesMultiple: any[];

    constructor(private countryService: CountryService) {	}
    
    filterCountrySingle(event:any) {
        let query = event.query;        
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesSingle = this.filterCountry(query, countries);
        });
    }
    
    filterCountryMultiple(event:any) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }
    
    filterCountry(query:any, countries: any[]):any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        for(let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }
        
    	
	msgs: Message[];
    
    uploadedFiles: any[] = [];

    onUpload(event:any) {
        for(let file of event.files) {
		console.log(JSON.stringify(file));
            this.uploadedFiles.push(file);
        }
    
        this.msgs = []; 
		
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
	
	
	
	
}