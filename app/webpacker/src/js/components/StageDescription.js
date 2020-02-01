import React from "react"

const StageDescription = ({ stage }) => {
  let stages;
  stages = { contact: 'Contato', proposal: 'Envio de Proposta', follow_up: 'Follow-up', closing: 'Fechamento', closed: "Ganho", lost: "Perdido" }
  return stages[stage];
}

export default React.memo(StageDescription)