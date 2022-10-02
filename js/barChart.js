const labelsBar = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
  ];
  
  const dataBar = {
    labels: labelsBar,
    datasets: 
    [
      {
        label: 'Temperatura',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [22, 24, 27, 23, 20, 18],
      },
      {
        label: 'Umidade',
        backgroundColor: 'rgb(100, 0, 255)',
        borderColor: 'rgb(100, 0, 255)',
        data: [90, 89, 93, 87, 88, 82],
      }
    ]
  };
  
  const configBar = {
    type: 'bar',
    data: dataBar,
    options: {}
  };
  
  const barChart = new Chart(
    document.getElementById('barChart'),
    configBar
  );