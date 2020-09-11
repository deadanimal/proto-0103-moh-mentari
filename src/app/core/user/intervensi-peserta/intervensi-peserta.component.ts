import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-intervensi-peserta',
  templateUrl: './intervensi-peserta.component.html',
  styleUrls: ['./intervensi-peserta.component.css']
})

export class IntervensiPesertaComponent implements OnInit {
  
  private chart: any
  private chart1: any
  private chart2: any
  private clicked: any = true
  private clicked1: any = false

  bsDPConfig = { 
    isAnimated: true, 
    containerClass: 'theme-default'
  }

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  registerForm: FormGroup
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }


  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  ) { }
    
  ngOnInit() {
    // this.getCharts()
    this.getChart();
    this.getChart1();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
      }
    )
  }

  // getCharts() {
  //   this.zone.runOutsideAngular(() => {
  //     this.getChart()
  //     this.getChart1()
  //   })
  // }

  getChart()  {
    let chart = am4core.create('chartdivqweqwe', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

  let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.min = 0;

  function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = value
      series.dataFields.categoryX = 'category'
      series.name = name

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet())
      bullet.interactionsEnabled = false
      bullet.dy = 30;
      bullet.label.text = '{valueY}'
      bullet.label.fill = am4core.color('#ffffff')

      return series;
  }

    chart.data = [
        {
            category: 'Sokongan Pekerjaan',
            first: 60,
            second: 40,
            
        },
        {
            category: 'Social Enterprise',
            first: 24,
            second: 12,
          
        },
        {
            category: 'Kesihatan Mental Masyarakat',
            first: 120,
            second: 84,
            
        },
        {
            category: 'Day Care',
            first: 50,
            second: 33,
            
        },
        {
          category: 'Illness Management',
          first: 41,
          second: 40,
          
      }
    ]

      createSeries('first', 'Bil Peserta');
      createSeries('second', 'Bil Positif');
      
      function arrangeColumns() {
      
          let series = chart.series.getIndex(0);
      
          let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
          if (series.dataItems.length > 1) {
              let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
              let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
              let delta = ((x1 - x0) / chart.series.length) * w;
              if (am4core.isNumber(delta)) {
                  let middle = chart.series.length / 2;
      
                  let newIndex = 0;
                  chart.series.each(function(series) {
                      if (!series.isHidden && !series.isHiding) {
                          series.dummyData = newIndex;
                          newIndex++;
                      }
                      else {
                          series.dummyData = chart.series.indexOf(series);
                      }
                  })
                  let visibleCount = newIndex;
                  let newMiddle = visibleCount / 2;
      
                  chart.series.each(function(series) {
                      let trueIndex = chart.series.indexOf(series);
                      let newIndex = series.dummyData;
      
                      let dx = (newIndex - trueIndex + middle - newMiddle) * delta
      
                      series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                      series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                  })
              }
          }
      }
      

  
}

  getChart1() {
    let chart = am4core.create("chartdivqweqwe1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Day Care",
        value: 50
      },
      {
        item: "Illness Management",
        value: 41
      },
      {
        item: "Kesihatan Mental Masyarakat",
        value: 120
      },
      {
        item: "Social Enterprise",
        value: 24
      },
      { item: "Sokongan Pekerjaan",
        value: 60

      }
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 0; 
    chart.endAngle = 360;


    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = false;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    //chart.legend = new am4charts.Legend();
    this.chart1 = chart
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Anda ingin meneruskan?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Ya",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Tidak"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Berjaya",
      text: "Anda telah berjaya didaftarkan!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }

}

