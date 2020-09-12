import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { User } from 'src/assets/mock/admin-user/users.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-intervensi-aktiviti',
  templateUrl: './intervensi-aktiviti.component.html',
  styleUrls: ['./intervensi-aktiviti.component.css']
})
export class IntervensiAktivitiComponent implements OnInit {

   // Chart
 
  private chart1: any
 
  private chart3: any
  private chart5: any
  private chart6: any
  private dataChart: any[] = []
  private dataChart2: any[] = []
  private dataChart3: any[] = []

  // Datepicker
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
    private mockService: MocksService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private zone: NgZone
  ) {
    this.getData()
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })

    
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {

      if (this.chart1) {
        this.chart1.dispose()
      }

      
      if (this.chart3) {
        this.chart3.dispose()
      }
      if (this.chart5){
        this.chart5.dispose()
      }
      if (this.chart6){
        this.chart6.dispose()
      }
    })
  }

  getData() {
    this.mockService.getAll('admin-report/report-data-1.json').subscribe(
      (res) => {
        // Success
        this.dataChart = res
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.mockService.getAll('admin-report/report-data-2.json').subscribe(
          (res) => {
            // Success
            this.dataChart2 = res
          },
          () => {
            // Unsuccess
          },
          () => {
            // After
            this.mockService.getAll('admin-report/report-data-3.json').subscribe(
              (res) => {
                // Success
                this.dataChart3 = res
              },
              () => {
                // Unsuccess
              },
              () => {
                // After
                this.getCharts()
              }
            )
          }
        )
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
  
      this.getChart1()

      this.getChart3()
      this.getChart5()
      this.getChart6()
    })
  }


  getChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    let data = [];
    let open = 100;
    let close = 250;

    for (var i = 1; i < 120; i++) {
      open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
      close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
      data.push({ date: new Date(2018, 0, i), open: open, close: close });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = chart.colors.getIndex(6);
    series2.tensionX = 0.8;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart1 = chart
  }

 
  getChart3() {
    let chart = am4core.create("chartdiv3", am4charts.XYChart);

    // Add data
    chart.data = this.dataChart3

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart3 = chart

  }

  getChart5(){  

    let chart = am4core.create("pie", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Intervensi",
        value: 20
      },
      {
        item: "Pendaftaran",
        value: 30
      },
      {
        item: "Laporan",
        value: 5
      },
      {
        item: "Konsultasi",
        value: 70
      },
      
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
    
    this.chart5 =chart

  }

  getChart6(){
    let chart = am4core.create('tahunan', am4charts.XYChart)
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
            category: 'Jan',
            second: 40,
            
        },
        {
            category: 'Feb',
            second: 12,
          
        },
        {
            category: 'Mac',
            second: 84,
            
        },
        {
            category: 'April',

            second: 33,
            
        },
        {
          category: 'Jun',

          second: 40,
          
      },
      {
        category: 'Jun',

        second: 40,
        
    },
    {
      category: 'Jul',

      second: 40,
      
    },
    {
    category: 'Ogos',

    second: 40,   
    },
    {
      category: 'Sept',

      second: 50,
     },
     {
      category: 'Okt',

      second: 10, 
    },
    {
      category: 'Nov',

      second: 40,
      
    },
    {
      category: 'Dis',

      second: 20,  
     }
    ]

      createSeries('second', 'Bil. Program');
      
      
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
      text: "Are you sure to create this new user?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "A new user has been created!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }

}



