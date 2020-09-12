import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pendaftaran-daftar',
  templateUrl: './pendaftaran-daftar.component.html',
  styleUrls: ['./pendaftaran-daftar.component.css']
})
export class PendaftaranDaftarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  confirmSwal(){
    swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Yes',
        cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
        if (result.value) {
            // Show confirmation
            swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-primary'
            });
        }
    })
  }
    viewData(patient){

      let modaltext = patient.name;
      let mmm = patient.age;

      swal.fire({
          title: modaltext,
          text: mmm,
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-danger',
          confirmButtonText: 'Delete',
          cancelButtonClass: 'btn btn-secondary'
      }).then((result) => {
          if (result.value) {
              // Show confirmation
              swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'btn btn-primary'
              });
          }
      })
  }

patients = [
  {
    mrn_number: '188554',
    name: 'Carroll Shervil',
    nric: '864714-00-6390',
    date_of_birth: '5/31/1973',
    age: '59',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '183616',
    name: 'Charlie Worsalls',
    nric: '122195-01-1726',
    date_of_birth: '8/14/1999',
    age: '46',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '962256',
    name: 'Aurore Parrington',
    nric: '692561-05-6140',
    date_of_birth: '5/24/1993',
    age: '44',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '400420',
    name: 'Wendall Sewart',
    nric: '516134-04-7477',
    date_of_birth: '8/20/1951',
    age: '31',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '941579',
    name: 'Cesar Bardnam',
    nric: '355822-05-0523',
    date_of_birth: '4/17/1987',
    age: '41',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '332653',
    name: 'Sada Pauleit',
    nric: '080732-01-9004',
    date_of_birth: '8/5/1954',
    age: '30',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '016017',
    name: 'Odella Helmke',
    nric: '679535-04-0550',
    date_of_birth: '9/9/1983',
    age: '95',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '020271',
    name: 'Riccardo Rudman',
    nric: '243330-09-4493',
    date_of_birth: '4/29/1955',
    age: '52',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '497379',
    name: 'Osbourn Pynn',
    nric: '874496-06-4879',
    date_of_birth: '8/23/1989',
    age: '14',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '771108',
    name: 'Carlin Aitken',
    nric: '896574-08-4274',
    date_of_birth: '10/16/1963',
    age: '89',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '438596',
    name: 'Oliver Collman',
    nric: '540042-05-4625',
    date_of_birth: '10/22/1956',
    age: '77',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '091109',
    name: 'Christabella Teasey',
    nric: '717644-09-7366',
    date_of_birth: '12/30/1992',
    age: '74',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '385990',
    name: 'Patricia Bodycomb',
    nric: '548469-01-0835',
    date_of_birth: '11/7/1958',
    age: '89',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '458708',
    name: 'Seymour Lindenbaum',
    nric: '399914-01-1181',
    date_of_birth: '9/16/1954',
    age: '55',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '209294',
    name: 'Odey Balogun',
    nric: '020907-01-3013',
    date_of_birth: '5/14/1984',
    age: '05',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '648368',
    name: 'Conn Juggings',
    nric: '577253-02-4431',
    date_of_birth: '10/15/1969',
    age: '88',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '842719',
    name: 'Case Dewfall',
    nric: '980877-01-0272',
    date_of_birth: '8/22/1967',
    age: '04',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '916313',
    name: 'Kamila Gorham',
    nric: '645556-02-5626',
    date_of_birth: '3/28/1957',
    age: '98',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '464656',
    name: 'Frayda Freestone',
    nric: '075690-08-1210',
    date_of_birth: '11/1/1959',
    age: '48',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '555131',
    name: 'Lindsay Cooch',
    nric: '875315-03-3694',
    date_of_birth: '9/29/1992',
    age: '24',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '623228',
    name: 'Henrie Siddell',
    nric: '687986-04-8189',
    date_of_birth: '3/16/1959',
    age: '31',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '241981',
    name: 'Thorn Raggatt',
    nric: '273731-03-3027',
    date_of_birth: '3/21/1966',
    age: '85',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '650069',
    name: 'Gawain Dittson',
    nric: '009528-06-0236',
    date_of_birth: '5/6/1973',
    age: '81',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '768321',
    name: 'Noah Blackhurst',
    nric: '793920-01-6730',
    date_of_birth: '1/11/1993',
    age: '99',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '210386',
    name: 'Kippar Feasley',
    nric: '050567-04-2966',
    date_of_birth: '4/9/1971',
    age: '28',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '080795',
    name: 'Mikey Kunath',
    nric: '092425-03-9182',
    date_of_birth: '11/18/1978',
    age: '92',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '065077',
    name: 'Corette Simner',
    nric: '909230-01-3604',
    date_of_birth: '8/18/1968',
    age: '60',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '608459',
    name: 'Gerianne Jon',
    nric: '847091-00-7583',
    date_of_birth: '9/2/1980',
    age: '36',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '421973',
    name: 'Haily Alenov',
    nric: '793777-00-9057',
    date_of_birth: '7/7/1960',
    age: '66',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '447007',
    name: 'Ralf Cowpertwait',
    nric: '710077-01-7972',
    date_of_birth: '9/30/1951',
    age: '66',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '995645',
    name: 'Star Orth',
    nric: '635783-06-9813',
    date_of_birth: '3/8/1950',
    age: '15',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '198747',
    name: 'Noreen Jaskowicz',
    nric: '142032-07-3527',
    date_of_birth: '5/19/1970',
    age: '04',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '731260',
    name: 'Cully Boyack',
    nric: '813983-00-1415',
    date_of_birth: '9/5/1991',
    age: '37',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '578034',
    name: 'Doralynne Reyes',
    nric: '962895-07-5998',
    date_of_birth: '8/17/1974',
    age: '13',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '351600',
    name: 'Tadd Dibbert',
    nric: '175611-09-4353',
    date_of_birth: '4/16/1990',
    age: '91',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '255257',
    name: 'Pietra McMillam',
    nric: '072452-01-5919',
    date_of_birth: '8/14/1972',
    age: '71',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '322189',
    name: 'Vanya Breslane',
    nric: '638013-04-0443',
    date_of_birth: '5/17/1995',
    age: '80',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '360517',
    name: 'Pepe Barbrook',
    nric: '610798-07-4168',
    date_of_birth: '6/28/1964',
    age: '69',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '896983',
    name: 'Lura Speirs',
    nric: '253801-01-2551',
    date_of_birth: '1/1/1963',
    age: '41',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '771695',
    name: 'Camellia Fiorentino',
    nric: '031875-01-0802',
    date_of_birth: '1/10/1981',
    age: '87',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '840527',
    name: 'Kial Crady',
    nric: '358864-01-3012',
    date_of_birth: '6/19/1985',
    age: '14',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '377330',
    name: 'Stan Reubens',
    nric: '359897-05-0215',
    date_of_birth: '10/16/1956',
    age: '84',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '214786',
    name: 'Vivyanne Swindells',
    nric: '906006-09-6480',
    date_of_birth: '7/1/1970',
    age: '03',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '758892',
    name: 'Archibold Rodda',
    nric: '758167-05-4780',
    date_of_birth: '1/4/1963',
    age: '73',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '570792',
    name: 'Blisse McIlwreath',
    nric: '292490-04-4650',
    date_of_birth: '12/23/1965',
    age: '68',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '416742',
    name: 'Adah Rogier',
    nric: '096884-01-2479',
    date_of_birth: '4/7/1994',
    age: '15',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '737949',
    name: 'Aurea Beumant',
    nric: '073477-03-8793',
    date_of_birth: '2/20/1971',
    age: '15',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '561161',
    name: 'Morgana Rudman',
    nric: '990732-06-3918',
    date_of_birth: '2/24/1997',
    age: '43',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '038868',
    name: 'Herrick Farnham',
    nric: '149798-04-5191',
    date_of_birth: '10/18/1999',
    age: '04',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '078636',
    name: 'Cull Briant',
    nric: '697896-01-2201',
    date_of_birth: '11/9/1956',
    age: '16',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '614634',
    name: 'Lisbeth Casone',
    nric: '694134-02-0201',
    date_of_birth: '4/20/1985',
    age: '42',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '604983',
    name: 'Olenka Izsak',
    nric: '528459-03-6232',
    date_of_birth: '5/8/1987',
    age: '29',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '824298',
    name: 'Sigismond Jenson',
    nric: '755323-00-9849',
    date_of_birth: '8/18/1992',
    age: '11',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '857865',
    name: 'Stevy Sandhill',
    nric: '336621-03-8614',
    date_of_birth: '9/7/1975',
    age: '00',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '647757',
    name: 'Lyndell Novacek',
    nric: '902742-07-6010',
    date_of_birth: '6/1/1958',
    age: '27',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '332762',
    name: 'Onida Annell',
    nric: '042756-09-1883',
    date_of_birth: '12/6/1951',
    age: '70',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '988389',
    name: 'Gerard Bentsen',
    nric: '042837-02-1833',
    date_of_birth: '9/19/1980',
    age: '75',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '900500',
    name: 'Chic Netting',
    nric: '607780-09-0475',
    date_of_birth: '6/14/1967',
    age: '29',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '045631',
    name: 'Edwin Rolfs',
    nric: '929056-09-7388',
    date_of_birth: '9/24/1951',
    age: '08',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '682026',
    name: 'Melesa Fairbrother',
    nric: '007754-05-7952',
    date_of_birth: '2/19/1971',
    age: '37',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '900582',
    name: 'Orin Baythrop',
    nric: '642522-04-5941',
    date_of_birth: '4/7/1969',
    age: '90',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '112109',
    name: 'Anneliese Minall',
    nric: '387212-00-7108',
    date_of_birth: '7/4/1959',
    age: '18',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '713702',
    name: 'Weber Meneely',
    nric: '982054-06-8252',
    date_of_birth: '1/8/1959',
    age: '20',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '586448',
    name: 'Barth Twelftree',
    nric: '142848-00-2870',
    date_of_birth: '10/12/1995',
    age: '13',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '661476',
    name: 'Laureen Varley',
    nric: '789290-05-3904',
    date_of_birth: '5/21/1980',
    age: '43',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '774990',
    name: 'Fergus Dabnot',
    nric: '098964-07-2528',
    date_of_birth: '7/16/1957',
    age: '35',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '690734',
    name: 'Chelsea L\'argent',
    nric: '496542-09-0580',
    date_of_birth: '8/1/1987',
    age: '91',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '882746',
    name: 'Sadye Elfe',
    nric: '691990-04-3376',
    date_of_birth: '4/3/1983',
    age: '61',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '597079',
    name: 'Renata Alejandro',
    nric: '123391-00-8168',
    date_of_birth: '4/20/1967',
    age: '85',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '296129',
    name: 'Blancha Wyer',
    nric: '849326-09-3541',
    date_of_birth: '9/2/1954',
    age: '07',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '638030',
    name: 'Ermentrude Ida',
    nric: '473677-04-0396',
    date_of_birth: '1/1/1988',
    age: '33',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '062437',
    name: 'Enrique Quantick',
    nric: '010603-02-7153',
    date_of_birth: '10/23/1973',
    age: '05',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '878691',
    name: 'Rickey Rollingson',
    nric: '903176-02-3012',
    date_of_birth: '7/10/1970',
    age: '39',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '549619',
    name: 'Micki Murfin',
    nric: '996527-03-4785',
    date_of_birth: '10/7/1991',
    age: '14',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '028650',
    name: 'Adi Pochin',
    nric: '649997-05-0444',
    date_of_birth: '12/4/1950',
    age: '50',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '025115',
    name: 'Oswell Crowdace',
    nric: '124547-08-2617',
    date_of_birth: '6/27/1977',
    age: '04',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '262975',
    name: 'Angelica Creavan',
    nric: '646337-07-7715',
    date_of_birth: '10/1/1960',
    age: '74',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '709421',
    name: 'Eachelle Lismore',
    nric: '708138-07-5956',
    date_of_birth: '10/3/1971',
    age: '75',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '296955',
    name: 'Lea Temple',
    nric: '386281-02-1815',
    date_of_birth: '8/10/1996',
    age: '52',
    gender: 'Female',
    status: 'VVIP'
  },
  {
    mrn_number: '824436',
    name: 'Dulcia Grafton',
    nric: '089753-09-2352',
    date_of_birth: '10/27/1999',
    age: '93',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '117130',
    name: 'Rabi Hinchshaw',
    nric: '938088-04-5870',
    date_of_birth: '9/12/1976',
    age: '67',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '367473',
    name: 'Rosalinde Deaconson',
    nric: '795272-01-8056',
    date_of_birth: '5/2/1985',
    age: '21',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '530800',
    name: 'Jacqui Hayford',
    nric: '294903-06-9810',
    date_of_birth: '12/15/1951',
    age: '64',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '441288',
    name: 'Karole Ragg',
    nric: '481951-02-9870',
    date_of_birth: '4/3/1966',
    age: '04',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '649588',
    name: 'Kennedy Tinkham',
    nric: '440001-09-4950',
    date_of_birth: '10/25/1956',
    age: '05',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '221892',
    name: 'Dede Breagan',
    nric: '568628-05-6670',
    date_of_birth: '7/12/1994',
    age: '65',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '771222',
    name: 'Hyacinth Loutheane',
    nric: '725387-05-7098',
    date_of_birth: '2/21/1971',
    age: '11',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '673011',
    name: 'Baron Littrell',
    nric: '893467-00-0872',
    date_of_birth: '6/1/1963',
    age: '00',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '746688',
    name: 'Orsa Salisbury',
    nric: '383639-08-5229',
    date_of_birth: '10/25/1959',
    age: '66',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '446166',
    name: 'Barny Aleevy',
    nric: '353948-01-3644',
    date_of_birth: '12/31/1983',
    age: '33',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '387730',
    name: 'Liv Dennerly',
    nric: '281691-05-0312',
    date_of_birth: '2/9/1960',
    age: '28',
    gender: 'Female',
    status: 'Normal'
  },
  {
    mrn_number: '625044',
    name: 'Manolo Strewther',
    nric: '308019-02-5098',
    date_of_birth: '7/11/1995',
    age: '01',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '935671',
    name: 'My Chatterton',
    nric: '836176-09-9588',
    date_of_birth: '11/9/1982',
    age: '42',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '362748',
    name: 'Lynn Galway',
    nric: '439733-01-7000',
    date_of_birth: '1/8/1964',
    age: '98',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '795786',
    name: 'Mikael Tremonte',
    nric: '144141-06-2627',
    date_of_birth: '8/7/1952',
    age: '57',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '430342',
    name: 'Ogdon Burde',
    nric: '850649-09-1727',
    date_of_birth: '8/5/1971',
    age: '03',
    gender: 'Male',
    status: 'Normal'
  },
  {
    mrn_number: '795774',
    name: 'Pearce Purvey',
    nric: '683150-08-8444',
    date_of_birth: '9/26/1956',
    age: '24',
    gender: 'Male',
    status: 'VIP'
  },
  {
    mrn_number: '512681',
    name: 'Dosi Rittmeier',
    nric: '061202-00-9569',
    date_of_birth: '2/27/1977',
    age: '37',
    gender: 'Female',
    status: 'VIP'
  },
  {
    mrn_number: '965860',
    name: 'Cesar Spillman',
    nric: '344156-01-1301',
    date_of_birth: '6/26/1993',
    age: '31',
    gender: 'Male',
    status: 'VVIP'
  },
  {
    mrn_number: '504980',
    name: 'Corinna Dodswell',
    nric: '768706-09-0556',
    date_of_birth: '7/31/1990',
    age: '45',
    gender: 'Female',
    status: 'Normal'
  }
]

}
