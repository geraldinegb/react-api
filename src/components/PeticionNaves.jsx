import React from 'react'

const PeticionNaves = () => {
  
  const [naves, setNaves] = React.useState([])
  const [paginacion, setPaginacion] = React.useState(0)
  
  const listadoNaves = async(paginacion) => {
    const traer = await fetch (`https://api.spacexdata.com/v3/rockets?limit=2&offset=${paginacion}`)
    const respuesta = await traer.json()
  
      setNaves(respuesta)
      console.log(respuesta)   
  }

    const siguiente = () =>{
      setPaginacion(paginacion+2)
      listadoNaves(paginacion+2)
    }
    
    const atrás = () =>{
      setPaginacion(paginacion-2)
      listadoNaves(paginacion<=0?0: paginacion-2)
    }

  return (
    <div className="body">
      <h1 > PETICIÓN DE NAVES ESPACIALES</h1>
      <tr><td><button className= "boton1" onClick={listadoNaves}>Ver Naves Espaciales</button></td> 
      <td><button className= "boton2" onClick={siguiente}>Siguiente</button></td>
      <td><button className= "boton3" onClick={atrás}>Atrás</button><br /></td>
      </tr>
      
     
      {
        naves.map(({rocket_name: name,flickr_images: image, description: description})=> (
          <div className="contenedor">
          <h4>{name}</h4>
          <img src={image} alt="" />
          <h6>{description}</h6>
          </div>
        )
        )
       
      
      }
<h5 > Ing. Geraldine Granados</h5>
<h5 > Especialización en Desarrollo de Software</h5>
<h5 > 2023-1</h5>
</div>
  )
}

export default PeticionNaves