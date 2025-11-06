const mirrow =(req, res) => {
    const methods =[{
    method : 'POST',
    hasBody : true,
    purpose: "El metodo post se utiliza pra enviar una entidad a un recurso específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor."    
    }, {
        method: 'PUT',
        hasBody: true,
        purpouse: "El metodo pu reemplaza todas las representaciones actuales del recurso de destino con carga util de la peticion."
    }
    ,{
    method: 'PATCH',
    hasBody: true,
    purpose: "El metodo patch es utilizado para aplicar modificaciones parciales a un recurso",    
    },
    {
    method : 'HEAD',
    hasBody : false,
    purpose:"El metodo head pide una resouesta identica a la de una peticion de GET, pero sin el cuerpo de la resouesta"
    },
    {
    method : 'GET',
    hasBody: false,
    purpose: "El metodo GET solicita una representacion de un recurso especifico. Las peticiones que usan el metodo GET solo deben recuperar datos"    
    },
    {
    method : 'DELETE',
    hasBody: true,
    purpose: "El metodo elimina un recurso especifico"    
    }
    ];

    const requestMethod = methods.find(
    m => m.method === req.method) || {
    method : req.method,
    hasBody : false,
    purpose : "No tiene un body, no hay una respuesta, metodo no soportado"    
    };

    requestMethod.purpose += requestMethod.hasBody ? "Tiene cuerpo" : "No tiene cuerpo";
    if(requestMethod.hasBody){
        req.body;
        res.json({...req.body, ruta_consumida: req.route.path, ...requestMethod});
    }else{
       res.json({ruta_consumida: req.originalUrl, ...requestMethod})   
    }

}
module.exports = mirrow;