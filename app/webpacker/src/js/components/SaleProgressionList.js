import React from "react"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import StageDescription from "./StageDescription"
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');
dayjs.extend(relativeTime);

const SaleProgressionList = props => {
  
  const { progressions } = props;
  const color = { lost: 'text-failure', closed: 'text-success' }

  return (
    <ul className="width-100 margin-0 padding-0">
      {progressions.map((progression, index) => (
        <li key={index} className="flex space-between">
          <div className="text-left">
            <span className={`text-larger ${color[progression.stage]}`}><StageDescription stage={progression.stage} /></span><br/>
            <span className="opacity-6">{dayjs(progression.created_at).fromNow()}</span>
          </div>
          <div className="text-right margin-bottom-xl">
            <span>{dayjs(progression.created_at).format("DD/MM/YYYY")}</span><br/>
            <span>{dayjs(progression.created_at).format("HH:mm")}</span>
          </div>
        </li>
      ))}
    </ul>
  )

}

export default React.memo(SaleProgressionList)
