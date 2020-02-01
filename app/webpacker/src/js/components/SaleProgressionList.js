import React from "react"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');
dayjs.extend(relativeTime);

const SaleProgressionList = props => {
  
  const { progressions } = props;

  return (
    <ul className="width-100 margin-0 padding-0">
      {progressions.map((progression, index) => (
        <li key={index} className="flex space-between margin-bottom-xl">
          <div className="text-left">
            <span className="text-larger">{progression.stage}</span><br/>
            <span className="opacity-6">{dayjs(progression.created_at).fromNow()}</span>
          </div>
          <div className="text-right">
            <span>{dayjs(progression.created_at).format("DD/MM/YYYY")}</span><br/>
            <span>{dayjs(progression.created_at).format("HH:mm")}</span>
          </div>
        </li>
      ))}
    </ul>
  )

}

export default React.memo(SaleProgressionList)
