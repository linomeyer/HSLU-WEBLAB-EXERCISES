import {Injectable} from '@angular/core';
import {HousingLocationInfo} from "./housing-location";

@Injectable({
    providedIn: 'root',
})
export class Housing {
    url = 'http://localhost:3000/locations';
    housingLocationList: HousingLocationInfo[] = [];

    async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
        return await fetch(this.url).then((response) => response.json() ?? []);
    }

    async getHousingLocationById(id: number): Promise<HousingLocationInfo> {
        return await fetch(`${this.url}/${id}`)
            .then((response) => response.json())
            .then((json) => json[0] ?? {});
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(
            `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
        );
    }
}
