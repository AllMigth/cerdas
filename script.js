function calcularFechaParto() {
  const fechaCubricion = new Date(document.getElementById('fecha-cubricion').value);
  const diasGestacion = 114;
  const fechaParto = new Date(fechaCubricion.getTime() + diasGestacion * 24 * 60 * 60 * 1000);
  
  document.getElementById('resultado').innerText = 'La fecha de parto estimada es: ' + fechaParto.toLocaleDateString();
}