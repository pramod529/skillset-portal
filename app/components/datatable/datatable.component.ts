import { Component } from '@angular/core';
import {Car} from '../../interfaces/car';
import {CarService} from '../../services/carservice';
import {SelectItem} from 'primeng/primeng';

class PrimeCar implements Car {
    constructor(public vin:any, public year:any, public brand:any, public color:any) {}
}

@Component({
    selector: 'p-datatable',
    templateUrl: '/components/datatable/datatable.component.html'
 })
export class DataTableComponent {

    displayDialog: boolean;

    car: Car = new PrimeCar('','','','');

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
       
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar('','','','');
        this.displayDialog = true;
    }

    save() {
        if(this.newCar)
            this.cars.push(this.car);
        else
            this.cars[this.findSelectedCarIndex()] = this.car;

        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        this.cars.splice(this.findSelectedCarIndex(), 1);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event:any) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        let car = new PrimeCar('','','','');
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}