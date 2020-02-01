import React from "react"

const TitleDescription = ({ stage }) => {
  let titles;
  titles = { contact: 'Contato', proposal: 'Envio de Proposta', follow_up: 'Follow-up', closing: 'Fechamento', closed: "Ganho", lost: "Perdido" }
  return titles[stage];
}

export default React.memo(TitleDescription)