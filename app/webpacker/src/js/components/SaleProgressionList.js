import React from "react"

const SaleProgressionList = props => {
  
  const { progressions } = props;

  return (
    <ul className="width-100 margin-0 padding-0">
      {progressions.map((progression, index) => (
        <li key={index} className="flex space-between">
          <div>
            <span className="">{progression.stage}</span>
          </div>
          <div>
            <span className="">{progression.created_at}</span>
          </div>
        </li>
      ))}
    </ul>
  )

}

export default React.memo(SaleProgressionList)
