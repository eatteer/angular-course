import { Component } from '@angular/core';

@Component({
  selector: 'app-double',
  templateUrl: './double.component.html',
  styles: [],
})
export class DoubleComponent {
  suppliersData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendor B' },
    ],
  };

  productData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Cars',
        data: [200, 300, 400, 300, 100],
      },
    ],
  };
}
