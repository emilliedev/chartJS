const labels = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

const data = {
  labels: labels,
  datasets: 
  [
    {
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [30, 29, 28, 25, 22, 23],
    },
    {
      label: 'Umidade',
      backgroundColor: 'rgb(100, 0, 255)',
      borderColor: 'rgb(100, 0, 255)',
      data: [80, 82, 80, 85, 80, 83],
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

const myChart = new Chart(
  document.getElementById('lineChart'),
  config
);