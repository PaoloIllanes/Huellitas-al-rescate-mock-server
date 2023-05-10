const express = require('express')
const app = express()
const port = 8000

app.get('/veterinarias/list', (req, res) => {
  console.log('Client request received /veterinarias/list');
  res.send(JSON.stringify([
    {
      "title": "Veterinaria 1",
      "logourl": "https://img.freepik.com/vector-premium/logotipo-tienda-mascotas-etiqueta-icono-tienda-clinica-veterinaria-hospital-refugio-diseno-cara-perro-gato_747203-1091.jpg?w=2000",
      "description": "Descricion de la veterinaria 1",
      "costo": "543",
      "rate":"4"
    },
    {
      "title": "Veterinaria 2",
      "logourl": "https://www.shutterstock.com/image-vector/pet-care-logo-medical-health-260nw-1780122644.jpg",
      "description": "Descricion de la veterinaria 2",
      "costo": "456",
      "rate":"5"

    },
    {
      "title": "Veterinaria 3",
      "logourl": "https://uploads.turbologo.com/uploads/design/preview_image/2055184/preview_image20201130-13185-1ez6sc.png",
      "description": "Descricion de la veterinaria 3",
      "costo": "Descricion de la veterinaria 3",
      "rate":"3"
    },
    {
      "title": "Veterinaria 4",
      "logourl": "https://www.shutterstock.com/image-vector/veterinary-logo-text-space-your-260nw-614350247.jpg",
      "description": "Descricion de la veterinaria 4",
      "costo": "234",
      "rate":"4"
    },
    {
      "title": "Veterinaria 5",
      "logourl": "https://c8.alamy.com/compes/2j0fd4g/vector-de-pajaro-gato-perro-y-mariposa-en-forma-de-corazon-rosa-sobre-fondo-blanco-icono-veterinario-con-mascota-cuidado-de-mascotas-banners-animal-2j0fd4g.jpg",
      "description": "Descricion de la veterinaria 5",
      "costo": "324",
      "rate":"2"
    }
  ]))
})

app.get('/petshop/list', (req, res) => {
  console.log('Client request received /petshop/list');
  res.send(JSON.stringify([
    {
      "title": "Petshop 1",
      "logourl": "https://img.freepik.com/vector-premium/logotipo-tienda-mascotas-etiqueta-icono-tienda-clinica-veterinaria-hospital-refugio-diseno-cara-perro-gato_747203-1091.jpg?w=2000",
      "description": "Descricion de la Petshop 1"
    },
    {
      "title": "Petshop 2",
      "logourl": "https://www.shutterstock.com/image-vector/pet-care-logo-medical-health-260nw-1780122644.jpg",
      "description": "Descricion de la Petshop 2"
    },
    {
      "title": "Petshop 3",
      "logourl": "https://uploads.turbologo.com/uploads/design/preview_image/2055184/preview_image20201130-13185-1ez6sc.png",
      "description": "Descricion de la Petshop 3"
    },
    {
      "title": "Petshop 4",
      "logourl": "https://www.shutterstock.com/image-vector/veterinary-logo-text-space-your-260nw-614350247.jpg",
      "description": "Descricion de la Petshop 4"
    },
    {
      "title": "Petshop 5",
      "logourl": "https://c8.alamy.com/compes/2j0fd4g/vector-de-pajaro-gato-perro-y-mariposa-en-forma-de-corazon-rosa-sobre-fondo-blanco-icono-veterinario-con-mascota-cuidado-de-mascotas-banners-animal-2j0fd4g.jpg",
      "description": "Descricion de la Petshop 5"
    }
  ]))
})


app.get('/hoteles/list', (req, res) => {
  console.log('Client request received /hoteles/list');
  res.send(JSON.stringify([
    {
      "id":"1",
      "nombre": "Hotel 1",
      "rating": "1",
      "logoUrl": "https://img.freepik.com/vector-premium/logotipo-tienda-mascotas-etiqueta-icono-tienda-clinica-veterinaria-hospital-refugio-diseno-cara-perro-gato_747203-1091.jpg?w=2000",
      "description": "Descricion de la Hotel 1"
    },
    {
       "id":"2",
      "nombre": "Hotel 2",
       "rating": "2",
      "logoUrl": "https://www.shutterstock.com/image-vector/pet-care-logo-medical-health-260nw-1780122644.jpg",
      "description": "Descricion de la Hotel 2"
    },
    {
       "id":"3",
      "nombre": "Hotel 3",
       "rating": "3.5",
      "logoUrl": "https://uploads.turbologo.com/uploads/design/preview_image/2055184/preview_image20201130-13185-1ez6sc.png",
      "description": "Descricion de la Hotel 3"
    },
    {
       "id":"4",
      "nombre": "Hotel 4",
       "rating": "5",
      "logoUrl": "https://www.shutterstock.com/image-vector/veterinary-logo-text-space-your-260nw-614350247.jpg",
      "description": "Descricion de la Hotel 4"
    },
    {
       "id":"5",
      "nombre": "Hotel 5",
       "rating": "4",
      "logoUrl": "https://c8.alamy.com/compes/2j0fd4g/vector-de-pajaro-gato-perro-y-mariposa-en-forma-de-corazon-rosa-sobre-fondo-blanco-icono-veterinario-con-mascota-cuidado-de-mascotas-banners-animal-2j0fd4g.jpg",
      "description": "Descricion de la Hotel 5"
    }
  ]))
})


app.listen(port,"192.168.0.100", () => {
  console.log(`Example app listening on port ${port}`)
})
