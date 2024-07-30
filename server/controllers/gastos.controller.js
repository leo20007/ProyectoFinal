const Gasto=require('../models/gastos');
const express=require('express');
const router=express.Router();
const gastosController={};
router.get('/',(req,res)=>{

 res.json({status:'API works'});
})
gastosController.getGastos= async(req, res)=>
{
  const gastos= await Gasto.find();
  res.json(gastos);
}

gastosController.createGastos = async (req, res) => {
  const { tipo, ruc, empresa, monto } = req.body;

  // Verificar si todos los campos necesarios están presentes y no son vacíos
  if (!tipo || !ruc || !empresa || !monto) {
    return res.status(400).json({ error: 'Datos incompletos. El gasto no puede ser creado.' });
  }

  // Verificar si el campo monto es un número válido
  if (typeof monto !== 'number' || isNaN(monto)) {
    return res.status(400).json({ error: 'El campo "monto" debe ser un número válido.' });
  }

  const gasto = new Gasto(req.body);
  console.log(gasto);

  try {
    await gasto.save();
    res.status(201).json({ status: 'Gasto guardado' });
  } catch (error) {
    res.status(500).json({ error: 'Ha ocurrido un error al guardar el gasto.' });
  }
};

   
   gastosController.getGasto=async(req,res)=>{
    console.log(req.params.id);
    const gasto= await Gasto.findById(req.params.id);
    if (gasto==null)
      return res.status(404).json('Gasto no encontrado');
    res.json(gasto);
   }
   gastosController.editGasto = async (req, res) => {
    const { id } = req.params;
    const gasto = {
      tipo: req.body.tipo,
      ruc: req.body.ruc,
      empresa: req.body.empresa,
      monto: req.body.monto
    };
  
    // Verificar si el gasto con el ID proporcionado existe
    const existingGasto = await Gasto.findById(id);
    if (!existingGasto) {
      return res.status(404).json('Gasto no encontrado');
    }
  
    // Verificar si se envían todos los datos necesarios para la actualización
    if (!gasto.tipo || !gasto.ruc || !gasto.empresa || !gasto.monto) {
      return res.status(400).json('Datos incompletos. No se puede realizar la actualización del gasto.');
    }
  
    try {
      await Gasto.findByIdAndUpdate(id, { $set: gasto }, { new: true });
      res.json('Gasto actualizado');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  

gastosController.deleteGasto=async(req,res)=>{
    await Gasto.findByIdAndRemove(req.params.id);
    res.json('status: Gasto borrado');
}
gastosController.getGastosByTipo = async (req, res) => {
  try {
    const tipo = req.params.tipo;
    const gastos = await Gasto.find({ tipo: tipo });
    if (gastos.length === 0) {
      return res.status(404).json('Tipo de gasto no encontrado');
    }
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports=gastosController;


