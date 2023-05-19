// Ciclo de vida del SW

self.addEventListener("install", (event) => {
  //  Download assets
  //  make cache
  // self.skipWaiting();

  const instalacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("SW: Instalaciones Termiandas");
      resolve();
    }, 10000);
  });

  event.waitUnitl(instalacion);
});

// When sw made control app

self.addEventListener("activate", (event) => {
  // eliminate cache old
});

// FETCH :

self.addEventListener("fetch", (event) => {
  console.log(event.request.url);

  if (event.request.url.includes("https://reqres.in/")) {
    const resp = new Response(`{ ok: false, mensaje: 'kakaka'}`);
    event.responseWidth(resp);
  }
});
