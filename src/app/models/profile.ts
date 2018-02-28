import { GeoCoords } from './geo-coords';

export class Profile {
    constructor(public firstName: string, public lastName: string, public email: string, public dob: string, public geoLoc: GeoCoords) {

    }
}
