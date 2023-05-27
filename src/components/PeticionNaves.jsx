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
      <h1 > PETICIÓN DE NAVES ESPACIALES</h1><hr/>
      <th><tr><td><button className= "boton1" onClick={listadoNaves}>Ver Naves Espaciales</button></td> 
      <td><button className= "boton2" onClick={siguiente}>Siguiente</button></td>
      <td><button className= "boton3" onClick={atrás}>Atrás</button><br /></td>
      </tr>
      </th>
      <hr />
     
      {
        naves.map(({rocket_name: name,flickr_images: image})=> (
          <div className="contenedor">
          <h4>{name}</h4>
          <img src={image} alt="" />
          </div>
        )
        )
       
      }
</div>
  )
}

export default PeticionNaves