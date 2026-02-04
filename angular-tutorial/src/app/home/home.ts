import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {HousingLocation} from "../housing-location/housing-location";
import {HousingLocationInfo} from "../housing-location";
import {Housing} from "../housing";

@Component({
    selector: 'app-home',
    imports: [
        HousingLocation
    ],
    template: `
        <section>
            <form>
                <input type="text" placeholder="Filter by city" #filter/>
                <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
            </form>
        </section>
        @for (housingLocation of filteredLocationInfoList; track $index) {
            <section class="results">
                <app-housing-location [housingLocation]="housingLocation" ]></app-housing-location>
            </section>
        }
    `,
    styles: ``,
})
export class Home {
    changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef)
    housingService: Housing = inject(Housing)

    housingLocationInfoList: HousingLocationInfo[] = []
    filteredLocationInfoList: HousingLocationInfo[] = []

    constructor() {
        this.housingService
            .getAllHousingLocations()
            .then(housingLocations => {
                this.housingLocationInfoList = housingLocations
                this.filteredLocationInfoList = housingLocations
                this.changeDetectorRef.markForCheck()
            })
        this.filteredLocationInfoList = this.housingLocationInfoList
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationInfoList = this.housingLocationInfoList;
            return;
        }
        this.filteredLocationInfoList = this.housingLocationInfoList.filter((housingLocation) =>
            housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
        );
    }
}
