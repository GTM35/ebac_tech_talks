document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  const dataDoEvento = new Date("Feb 12, 2024 12:00:00");
  const timeStampDoEvento = dataDoEvento.getTime();

  const contaAsHoras = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(
      (distanciaAteOEvento % diasEmMs) / horaEmMs
    );
    const minutosAteOEvento = Math.floor(
      (distanciaAteOEvento % horaEmMs) / minutosEmMs
    );

    const segundosAteOEvento = Math.floor(
      (distanciaAteOEvento % minutosEmMs) / 1000
    );

    document.getElementById(
      "count"
    ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
      clearInterval(contaAsHoras);
      document.getElementById("count").innerHTML = "Evento expirado";
    }
  }, 1000);
});
