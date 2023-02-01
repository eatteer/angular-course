import { Component } from '@angular/core';
import { Property } from '../../interfaces/maps.interfaces';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styles: [
    `
      .small-map {
        height: 150px;
      }
    `,
  ],
})
export class PropertiesComponent {
  public properties: Property[] = [
    {
      name: 'Residential house, Canada',
      description: 'Beautiful property in Katana, Canada',
      coordinates: { lng: -75.92722289474008, lat: 45.280015511264466 },
    },
    {
      name: 'Beach house, Mexico',
      description: 'Beautiful beach house in Acapulco, Mexico',
      coordinates: { lng: -99.91287720907991, lat: 16.828940930185748 },
    },
    {
      name: 'Apartment, Argentina',
      description: 'Luxury apartment in the heart of Buenos Aires, Argentina',
      coordinates: { lng: -58.430166677283445, lat: -34.57150108832866 },
    },
    {
      name: 'Commercial premises, Spain',
      description:
        'Commercial space available in Madrid, Spain, near El Jardin Secreto',
      coordinates: { lng: -3.7112735618380177, lat: 40.42567285425766 },
    },
  ];
}
